-- =====================================================================
-- Eishockey-Quiz · Update: Kapitel pro Mannschaft und pro Spieler freischalten
-- In Supabase: SQL Editor → New query → alles einfügen → "Run"
-- Kann gefahrlos mehrfach ausgeführt werden.
-- =====================================================================

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

select 'Update erfolgreich' as status;
