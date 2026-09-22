# Doctor's Diary threat model — Phase 0 skeleton

## Assets
- Account and identity data
- Professional credentials and verification data
- Patient clinical data
- Prescriptions and finalized clinical records
- Documents and uploaded reports
- Audit/provenance data
- Secrets and provider credentials

## Trust boundaries
1. Browser ↔ application server
2. Application server ↔ PostgreSQL/Supabase
3. Application server ↔ external providers
4. Background workers ↔ queues/events/providers
5. Public surfaces ↔ private clinical surfaces

## Initial threats
- Broken object-level authorization / cross-patient access
- Cross-doctor clinical repository leakage
- Staff privilege escalation
- Platform-operator overreach
- Client-controlled workspace/capability claims
- Sensitive data in logs
- Public/SEO leakage of private clinical information
- AI-generated clinical content being treated as final truth
- Replay/duplicate processing of domain events

Detailed threat modeling is required before real patient data is enabled.
