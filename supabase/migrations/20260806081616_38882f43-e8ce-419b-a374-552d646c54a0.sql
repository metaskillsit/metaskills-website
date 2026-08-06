-- roles infrastructure
create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create policy "Users can view their own roles"
on public.user_roles for select to authenticated
using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

-- enquiries
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  role text,
  team_size text,
  audience text,
  format text,
  timeframe text,
  message text,
  consent boolean not null default false
);

grant insert on public.enquiries to anon, authenticated;
grant select on public.enquiries to authenticated;
grant all on public.enquiries to service_role;

alter table public.enquiries enable row level security;

create policy "Anyone can submit an enquiry"
on public.enquiries for insert to anon, authenticated
with check (consent = true);

create policy "Admins can view enquiries"
on public.enquiries for select to authenticated
using (public.has_role(auth.uid(), 'admin'));