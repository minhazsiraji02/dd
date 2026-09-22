create extension if not exists pgcrypto;

create schema if not exists audit;
create schema if not exists events;

create table if not exists events.outbox (
  id uuid primary key default gen_random_uuid(),
  aggregate_type text not null,
  aggregate_id uuid,
  event_type text not null,
  payload jsonb not null,
  occurred_at timestamptz not null default now(),
  published_at timestamptz,
  attempt_count integer not null default 0,
  last_error text,
  created_at timestamptz not null default now()
);

create index if not exists outbox_unpublished_idx on events.outbox (created_at)
where published_at is null;

create table if not exists audit.event (
  id uuid primary key default gen_random_uuid(),
  actor_account_id uuid,
  action text not null,
  resource_type text not null,
  resource_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

create index if not exists audit_event_resource_idx on audit.event (resource_type, resource_id);

comment on table events.outbox is 'Transactional outbox foundation.';
comment on table audit.event is 'Append-oriented audit foundation; avoid unnecessary raw clinical content.';
