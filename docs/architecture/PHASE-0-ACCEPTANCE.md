# Phase 0 — Acceptance

## Required gates

- [x] Greenfield monorepo foundation
- [x] Next.js application shell
- [x] Environment boundary
- [x] Supabase migration/configuration baseline
- [x] Transactional outbox foundation
- [x] Append-oriented audit foundation
- [x] Structured logging smoke test
- [x] Base responsive design system
- [x] CI
- [x] Architecture ADR
- [x] Threat-model skeleton
- [x] Synthetic-only fixture
- [x] Vercel deployment configuration

## Automated quality gates

CI must pass:

1. pnpm install --no-frozen-lockfile
2. pnpm lint
3. pnpm typecheck
4. pnpm test
5. pnpm build

## Safety boundary

Phase 0 contains no production patient data and no clinical decision authority. Supabase credentials remain environment variables; service-role credentials must never be exposed to the browser.
