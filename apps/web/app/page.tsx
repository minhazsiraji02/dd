export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">DOCTOR&apos;S DIARY · FOUNDATION</div>
        <h1 id="page-title">Less screen. More patient.</h1>
        <p className="lede">A clinical productivity, memory and healthcare operating platform.</p>
        <div className="status-card" role="status">
          <span className="status-dot" aria-hidden="true" />
          <div>
            <strong>Phase 0 foundation is alive.</strong>
            <p>Greenfield architecture is ready for the next qualified phase.</p>
          </div>
        </div>
      </section>
      <footer>AI prepares. Doctor decides.</footer>
    </main>
  );
}
