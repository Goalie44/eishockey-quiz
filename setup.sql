-- (enthält auch das Update „Kapitel freischalten“)
-- =====================================================================
-- Eishockey-Quiz · Datenbank-Setup für Supabase
-- In Supabase: SQL Editor → New query → alles einfügen → "Run"
-- Am Ende wird dein Trainer-Code angezeigt. Den brauchst du für den
-- ersten Login (Name: Sebastian, Passwort legst du dann selbst fest).
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------- Tabellen ----------
create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  display_name text not null,
  role text not null default 'player' check (role in ('player','trainer','admin')),
  user_id uuid unique references auth.users(id) on delete set null,
  login_email text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.progress (
  member_id uuid not null references public.members(id) on delete cascade,
  chapter text not null,
  question_id text not null,
  ok boolean not null,
  choice int,
  answered_at timestamptz not null default now(),
  primary key (member_id, chapter, question_id)
);

create table if not exists public.attempts (
  id bigint generated always as identity primary key,
  member_id uuid not null references public.members(id) on delete cascade,
  chapter text not null,
  score int not null,
  total int not null,
  finished_at timestamptz not null default now()
);

-- ---------- Hilfsfunktionen ----------
create or replace function public.my_member_id() returns uuid
language sql stable security definer set search_path = public as $$
  select id from members where user_id = auth.uid() and active
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select role = 'admin' from members where user_id = auth.uid() and active), false)
$$;

create or replace function public.is_trainer_of(t uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from members
                 where user_id = auth.uid() and active
                   and (role = 'admin' or (role = 'trainer' and team_id = t)))
$$;

create or replace function public.team_of(m uuid) returns uuid
language sql stable security definer set search_path = public as $$
  select team_id from members where id = m
$$;

-- Namensliste zu einem Mannschaftscode (für die Login-Seite)
create or replace function public.team_roster(p_code text)
returns table (id uuid, display_name text, claimed boolean, team_name text)
language sql stable security definer set search_path = public as $$
  select m.id, m.display_name, m.user_id is not null, t.name
  from members m join teams t on t.id = m.team_id
  where upper(t.code) = upper(trim(p_code)) and m.active
  order by m.display_name
$$;

-- interne Login-Adresse eines bereits angemeldeten Mitglieds
create or replace function public.login_email(p_code text, p_member uuid) returns text
language sql stable security definer set search_path = public as $$
  select m.login_email from members m join teams t on t.id = m.team_id
  where m.id = p_member and upper(t.code) = upper(trim(p_code)) and m.active
$$;

-- erstes Anmelden: Konto mit Mitglied verknüpfen
create or replace function public.claim_member(p_code text, p_member uuid, p_email text) returns boolean
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if auth.uid() is null then return false; end if;
  if p_email is distinct from (select email from auth.users where id = auth.uid()) then return false; end if;
  update members m set user_id = auth.uid(), login_email = p_email
    from teams t
   where t.id = m.team_id and m.id = p_member and m.active and m.user_id is null
     and upper(t.code) = upper(trim(p_code));
  get diagnostics n = row_count;
  return n = 1;
end $$;

-- Wer bin ich?
create or replace function public.me()
returns table (id uuid, display_name text, role text, team_id uuid, team_name text)
language sql stable security definer set search_path = public as $$
  select m.id, m.display_name, m.role, m.team_id, t.name
  from members m join teams t on t.id = m.team_id
  where m.user_id = auth.uid() and m.active
$$;

-- Passwort zurücksetzen (Trainer/Admin): Spieler legt beim nächsten Login ein neues fest
create or replace function public.reset_login(p_member uuid) returns boolean
language plpgsql security definer set search_path = public as $$
declare r text; t uuid; n int;
begin
  select role, team_id into r, t from members where id = p_member;
  if r is null then return false; end if;
  if not (is_admin() or (is_trainer_of(t) and r = 'player')) then return false; end if;
  update members set user_id = null, login_email = null where id = p_member;
  get diagnostics n = row_count;
  return n = 1;
end $$;

grant execute on function public.team_roster(text) to anon, authenticated;
grant execute on function public.login_email(text, uuid) to anon, authenticated;
grant execute on function public.claim_member(text, uuid, text) to authenticated;
grant execute on function public.me() to authenticated;
grant execute on function public.reset_login(uuid) to authenticated;

-- ---------- Grundrechte (falls Supabase Tabellen nicht automatisch freigibt) ----------
grant usage on schema public to anon, authenticated;
grant select, delete on public.teams, public.members, public.progress, public.attempts to authenticated;
grant insert, update on public.teams, public.progress to authenticated;
grant insert on public.attempts to authenticated;
grant usage, select on all sequences in schema public to authenticated;

-- ---------- Zugriffsregeln (Row Level Security) ----------
alter table public.teams    enable row level security;
alter table public.members  enable row level security;
alter table public.progress enable row level security;
alter table public.attempts enable row level security;

drop policy if exists teams_read  on public.teams;
drop policy if exists teams_admin on public.teams;
create policy teams_read  on public.teams for select to authenticated using (is_admin() or is_trainer_of(id));
create policy teams_admin on public.teams for all    to authenticated using (is_admin()) with check (is_admin());

drop policy if exists members_read   on public.members;
drop policy if exists members_insert on public.members;
drop policy if exists members_update on public.members;
drop policy if exists members_delete on public.members;
create policy members_read   on public.members for select to authenticated
  using (user_id = auth.uid() or is_trainer_of(team_id));
create policy members_insert on public.members for insert to authenticated
  with check (is_admin() or (is_trainer_of(team_id) and role = 'player'));
create policy members_update on public.members for update to authenticated
  using (is_admin() or (is_trainer_of(team_id) and role = 'player'))
  with check (is_admin() or (is_trainer_of(team_id) and role = 'player'));
create policy members_delete on public.members for delete to authenticated
  using (is_admin() or (is_trainer_of(team_id) and role = 'player'));

revoke insert, update on public.members from authenticated;
grant insert (team_id, display_name, role) on public.members to authenticated;
grant update (display_name, active) on public.members to authenticated;

drop policy if exists progress_read  on public.progress;
drop policy if exists progress_write on public.progress;
drop policy if exists progress_upd   on public.progress;
drop policy if exists progress_del   on public.progress;
create policy progress_read  on public.progress for select to authenticated
  using (member_id = my_member_id() or is_trainer_of(team_of(member_id)));
create policy progress_write on public.progress for insert to authenticated with check (member_id = my_member_id());
create policy progress_upd   on public.progress for update to authenticated using (member_id = my_member_id()) with check (member_id = my_member_id());
create policy progress_del   on public.progress for delete to authenticated using (member_id = my_member_id());

drop policy if exists attempts_read  on public.attempts;
drop policy if exists attempts_write on public.attempts;
create policy attempts_read  on public.attempts for select to authenticated
  using (member_id = my_member_id() or is_trainer_of(team_of(member_id)));
create policy attempts_write on public.attempts for insert to authenticated with check (member_id = my_member_id());

-- ---------- Start: Trainer-Mannschaft mit dir als Admin ----------
do $$
declare tid uuid;
begin
  if not exists (select 1 from members where role = 'admin') then
    insert into teams (name, code)
      values ('Trainer', 'TRAINER-' || upper(substr(md5(random()::text), 1, 4)))
      returning id into tid;
    insert into members (team_id, display_name, role) values (tid, 'Sebastian', 'admin');
  end if;
end $$;




-- Mannschaft: welche Kapitel sind frei (leer/NULL = alle, auch künftige)
alter table public.teams add column if not exists chapters text[];

-- Spieler: Ausnahmen von der Mannschafts-Einstellung
alter table public.members add column if not exists chapters_on  text[] not null default '{}';
alter table public.members add column if not exists chapters_off text[] not null default '{}';

grant update (display_name, active, chapters_on, chapters_off) on public.members to authenticated;

-- "Wer bin ich?" liefert jetzt auch die freigeschalteten Kapitel
drop function if exists public.me();
create function public.me()
returns table (id uuid, display_name text, role text, team_id uuid, team_name text,
               team_chapters text[], chapters_on text[], chapters_off text[])
language sql stable security definer set search_path = public as $$
  select m.id, m.display_name, m.role, m.team_id, t.name, t.chapters, m.chapters_on, m.chapters_off
  from members m join teams t on t.id = m.team_id
  where m.user_id = auth.uid() and m.active
$$;
grant execute on function public.me() to authenticated;

-- Kapitel einer Mannschaft festlegen (Admin oder Trainer dieser Mannschaft)
create or replace function public.set_team_chapters(p_team uuid, p_chapters text[]) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not is_trainer_of(p_team) then return false; end if;
  update teams set chapters = p_chapters where id = p_team;
  return found;
end $$;
grant execute on function public.set_team_chapters(uuid, text[]) to authenticated;


-- Mannschaft löschen (nur Admin)
create or replace function public.delete_team(p_team uuid) returns boolean
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not is_admin() then return false; end if;
  -- eigene Mannschaft, „Trainer“ und Mannschaften mit Admins sind geschützt
  if exists (select 1 from teams where id = p_team and lower(trim(name)) = 'trainer') then return false; end if;
  if exists (select 1 from members where team_id = p_team and (role = 'admin' or user_id = auth.uid())) then return false; end if;
  -- Logins der Spieler entfernen, danach Mannschaft (Spieler + Fortschritt laufen per cascade mit)
  delete from auth.users where id in (select user_id from members where team_id = p_team and user_id is not null);
  delete from teams where id = p_team;
  get diagnostics n = row_count;
  return n = 1;
end $$;
revoke all on function public.delete_team(uuid) from public, anon;
grant execute on function public.delete_team(uuid) to authenticated;

notify pgrst, 'reload schema';

select name as mannschaft, code as dein_trainer_code from public.teams where name = 'Trainer';
