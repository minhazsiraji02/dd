# ADR-0001: Greenfield foundation

## Status
Accepted for Phase 0.

## Decision
Doctor's Diary starts as a TypeScript monorepo using Next.js App Router, pnpm and Turborepo, with PostgreSQL/Supabase as the persistence foundation.

The initial backend shape is a modular monolith plus workers and event-driven integration points. Domain packages are introduced incrementally.

## Non-negotiables
- Clinical rules remain server-side and outside React presentation code.
- Authorization is server-authoritative.
- AI output is proposal/draft until clinician review.
- Finalized clinical records are not silently mutated.
- Patient clinical data is private by default.
- Production real-data use requires an explicit safety/privacy/security gate.

## Phase 0 scope
Establish a buildable application shell, repository conventions, environment boundaries, structured logging, database migration foundation, CI, and architecture documentation without creating unused domain packages.
