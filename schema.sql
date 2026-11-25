-- ESQUEMA INICIAL SUPABASE
-- Execute no SQL Editor do seu projeto Supabase.
-- Ajuste as permissões conforme os usuários e o modelo de hospedagem.
create table if not exists public.site_settings (
  id bigint primary key generated always as identity,
  site_key text not null unique,
  payload jsonb not null default '{}'::jsonb,
  published boolean not null default false,
  updated_at timestamptz not null default now()
);
alter table public.site_settings enable row level security;

-- Visitantes podem ler apenas a configuração publicada.
create policy "Public can read published site settings"
on public.site_settings for select
using (published = true);

-- Usuários autenticados podem alterar registros.
-- Para produção, restrinja esta política a uma tabela de perfis/roles de administradores.
create policy "Authenticated users can insert settings"
on public.site_settings for insert to authenticated
with check (true);

create policy "Authenticated users can update settings"
on public.site_settings for update to authenticated
using (true) with check (true);

-- IMPORTANTE: as políticas acima são um ponto de partida, não uma configuração
-- final de autorização por clínica. Antes de produção, crie roles/admins e
-- políticas por site_key/tenant. Não habilite escrita pública anônima.
