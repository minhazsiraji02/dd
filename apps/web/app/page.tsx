const foundationChecks = [
  "Greenfield monorepo",
  "Supabase boundary",
  "Transactional outbox",
  "Append-only audit",
  "Synthetic-only fixtures"
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">DOCTOR&apos;S DIARY · PHASE 0</div>
        <h1 id="page-title">Less screen.<br />More patient.</h1>
        <p className="lede">
          A clinical productivity, memory and healthcare operating platform built
          from a clean foundation.
        </p>

        <div className="status-card" role="status">
          <span className="status-dot" aria-hidden="true" />
          <div>
            <strong>Foundation build is healthy.</strong>
            <p>CI is green across lint, typecheck, tests and production build.</p>
          </div>
        </div>

        <div className="checks" aria-label="Foundation capabilities">
          {foundationChecks.map((check) => (
            <div className="check" key={check}>
              <span aria-hidden="true">✓</span>
              <span>{check}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <span>AI prepares. Doctor decides.</span>
        <span>Clinical authority remains with the clinician.</span>
      </footer>
    </main>
  );
}
