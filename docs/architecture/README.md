# Architecture

Doctor's Diary follows:

Experience → Application / Use-case → Domain → Infrastructure → Persistence / External Integrations

The platform begins as a modular monolith plus workers and event-driven integration. Domain packages are added incrementally with phase acceptance criteria.

See ADR-0001 for the Phase 0 foundation decision.
