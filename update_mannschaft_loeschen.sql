-- Update: Mannschaft löschen (nur Admin)
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
select 'Update erfolgreich' as status;
