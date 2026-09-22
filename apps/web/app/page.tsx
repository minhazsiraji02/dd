"use client";

import { useState } from "react";

const navItems = ["Dashboard", "Patients", "Appointments", "Prescriptions", "Reports"];
const stats = [
  { label: "Today’s patients", value: "24", note: "+4 from yesterday" },
  { label: "Waiting", value: "06", note: "Next: 10:30 AM" },
  { label: "Follow-ups", value: "09", note: "3 need review" },
  { label: "Prescriptions", value: "18", note: "2 drafts" }
];
const appointments = [
  { time: "10:30", period: "AM", patient: "Priya Sharma", type: "Follow-up", detail: "BP check & medication review", status: "Confirmed" },
  { time: "11:00", period: "AM", patient: "Arjun Mehta", type: "Consultation", detail: "New patient · General medicine", status: "Waiting" },
  { time: "11:30", period: "AM", patient: "Nadia Rahman", type: "Review", detail: "Lab result discussion", status: "Confirmed" }
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "brand brand-compact" : "brand"} aria-label="Doctor's Diary">
      <span className="brand-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <defs><linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7357ff" /><stop offset="0.52" stopColor="#2d5cff" /><stop offset="1" stopColor="#20d6d0" /></linearGradient></defs>
          <path d="M32 54S10 41.2 10 24.8C10 16.9 15.7 12 22.3 12c4.4 0 7.7 2.2 9.7 5.5C34 14.2 37.3 12 41.7 12 48.3 12 54 16.9 54 24.8 54 41.2 32 54 32 54Z" fill="url(#brandGradient)" />
          <path d="M32 21v18M23 30h18" stroke="white" strokeWidth="6" strokeLinecap="round" /><circle cx="47" cy="15" r="4" fill="white" />
        </svg>
      </span>
      {!compact && <span className="brand-copy"><strong>Doctor&apos;s Diary</strong><small>CARE. RECORD. CONNECT.</small></span>}
    </div>
  );
}

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [toast, setToast] = useState("");
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 2200); };

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="ambient ambient-three" />
      <header className="topbar glass">
        <BrandMark />
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item} className={activeNav === item ? "nav-item active" : "nav-item"} onClick={() => { setActiveNav(item); notify(item + " workspace selected"); }}>
              <span className="nav-glyph" aria-hidden="true">{item === "Dashboard" ? "⌘" : item === "Patients" ? "♙" : item === "Appointments" ? "◷" : item === "Prescriptions" ? "Rx" : "▥"}</span>{item}
            </button>
          ))}
        </nav>
        <div className="top-actions">
          <button className="icon-button" aria-label="Search" onClick={() => notify("Search is ready for the next build")}>⌕</button>
          <button className="icon-button notification" aria-label="Notifications" onClick={() => notify("You have 3 notifications")}>♧<b>3</b></button>
          <button className="avatar" aria-label="Profile" onClick={() => notify("Profile menu")}>MS</button>
        </div>
      </header>

      <section className="content">
        <div className="welcome-row">
          <div><span className="eyebrow">DOCTOR WORKSPACE · DEMO SHELL</span><h1>Good morning, <span>Doctor.</span></h1><p>Everything important for today, surfaced without the clutter.</p></div>
          <button className="primary-button" onClick={() => notify("New consultation started")}><span>＋</span> Start consultation</button>
        </div>

        <div className="stat-grid">
          {stats.map((stat, index) => <button className="stat-card glass interactive" key={stat.label} onClick={() => notify(stat.label)}><span className="stat-orb" aria-hidden="true">{["◉", "⌁", "♡", "Rx"][index]}</span><span className="stat-label">{stat.label}</span><strong>{stat.value}</strong><small>{stat.note}</small></button>)}
        </div>

        <div className="dashboard-grid">
          <section className="panel glass">
            <div className="panel-heading"><div><span className="section-kicker">TODAY</span><h2>Appointments</h2></div><button className="text-button" onClick={() => notify("Appointments workspace selected")}>View all →</button></div>
            <div className="appointment-list">
              {appointments.map((appointment) => <button className="appointment interactive" key={appointment.time + appointment.patient} onClick={() => notify(appointment.patient + " selected")}>
                <div className="appointment-time"><strong>{appointment.time}</strong><span>{appointment.period}</span></div>
                <div className="appointment-person"><div className="mini-avatar">{appointment.patient.split(" ").map((x) => x[0]).join("")}</div><div><strong>{appointment.patient}</strong><span>{appointment.type} · {appointment.detail}</span></div></div>
                <span className={appointment.status === "Waiting" ? "status waiting" : "status confirmed"}>{appointment.status}</span><span className="arrow">→</span>
              </button>)}
            </div>
          </section>

          <section className="panel glass focus-panel">
            <div className="panel-heading"><div><span className="section-kicker">QUICK ACTIONS</span><h2>Move faster</h2></div><span className="live-pill"><i /> Live</span></div>
            <button className="action-card primary-action interactive" onClick={() => notify("New prescription workspace opened")}><span className="action-icon">Rx</span><span><strong>New prescription</strong><small>Create and review a prescription</small></span><b>→</b></button>
            <button className="action-card interactive" onClick={() => notify("Patient search opened")}><span className="action-icon teal">⌕</span><span><strong>Find a patient</strong><small>Search your private patient repository</small></span><b>→</b></button>
            <button className="action-card interactive" onClick={() => notify("Result inbox opened")}><span className="action-icon blue">✓</span><span><strong>Review results</strong><small>3 investigations need attention</small></span><b>→</b></button>
          </section>
        </div>

        <section className="bottom-grid">
          <div className="insight glass"><div className="insight-glow" /><span className="section-kicker">CLINICAL MEMORY</span><h2>Brief me before the next patient.</h2><p>Context, recent changes and source-linked history — prepared for review, never silently applied.</p><button className="secondary-button" onClick={() => notify("Patient brief preview opened")}>Preview patient brief <span>→</span></button></div>
          <div className="trust glass"><BrandMark compact /><div><strong>AI prepares. Doctor decides.</strong><p>Clinical authority stays with the clinician.</p></div></div>
        </section>
      </section>

      <footer className="site-footer"><span>Doctor&apos;s Diary</span><span>Care. Record. Connect.</span><span>Secure foundation · Synthetic demo data</span></footer>
      {toast && <div className="toast glass" role="status"><span>✓</span>{toast}</div>}
    </main>
  );
}
