-- Synthetic-only foundation seed. Never use real patient or clinical data here.
insert into events.outbox (
  aggregate_type,
  aggregate_id,
  event_type,
  payload
) values (
  'system',
  gen_random_uuid(),
  'foundation.synthetic_seeded',
  jsonb_build_object(
    'environment', 'synthetic',
    'purpose', 'phase-0-validation'
  )
);
