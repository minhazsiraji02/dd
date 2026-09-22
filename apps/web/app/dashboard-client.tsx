"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = ["Dashboard", "Patients", "Appointments", "Prescriptions", "Reports"];
const stats = [
  { label: "Today’s patients", value: "24", note: "+4 from yesterday", icon: "◉" },
  { label: "Waiting", value: "06", note: "Next: 10:30 AM", icon: "⌁" },
  { label: "Follow-ups", value: "09", note: "3 need review", icon: "♡" },
  { label: "Prescriptions", value: "18", note: "2 drafts", icon: "Rx" }
];
const appointments = [
  { time: "10:30", period: "AM", patient: "Priya Sharma", type: "Follow-up", detail: "BP check & medication review", status: "Confirmed" },
  { time: "11:00", period: "AM", patient: "Arjun Mehta", type: "Consultation", detail: "New patient · General medicine", status: "Waiting" },
  { time: "11:30", period: "AM", patient: "Nadia Rahman", type: "Review", detail: "Lab result discussion", status: "Confirmed" }
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "logo-wrap compact" : "logo-wrap"} aria-label="Doctor's Diary">
      <span className="logo-icon">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="logoBg" x1="10" y1="5" x2="90" y2="95">
              <stop stopColor="#7652ff"/><stop offset=".52" stopColor="#3d55ee"/><stop offset="1" stopColor="#18d5d0"/>
            </linearGradient>
            <linearGradient id="logoShine" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="white" stopOpacity=".70"/><stop offset=".5" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="92" height="92" rx="28" fill="url(#logoBg)"/>
          <rect x="7" y="7" width="86" height="86" rx="25" fill="none" stroke="white" strokeOpacity=".45" strokeWidth="2"/>
          <path d="M50 79S22 62 22 41.5C22 31 29.5 24 39 24c6.3 0 10.7 3.1 14 8.2C56.3 27.1 60.7 24 67 24c9.5 0 17 7 17 17.5C84 62 56 79 50 79Z" fill="white"/>
          <path d="M50 37v27M36.5 50.5h27" stroke="#6a52ef" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="76" cy="23" r="6" fill="white"/>
          <path d="M13 22c20-18 53-20 73-8" fill="none" stroke="url(#logoShine)" strokeWidth="7" strokeLinecap="round"/>
        </svg>
      </span>
      {!compact && <span className="logo-wordmark"><strong>Doctor’s Diary</strong><small>CARE. RECORD. CONNECT.</small></span>}
    </span>
  );
}

export default function DashboardClient() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [toast, setToast] = useState("");
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 2200); };

  return <>
    <header className="topbar glass-3d">
      <Link href="/" className="home-brand" aria-label="Doctor's Diary home"><Logo /></Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button key={item} className={activeNav === item ? "nav-item active" : "nav-item"} onClick={() => { setActiveNav(item); notify(item + " workspace selected"); }}>
            <span className="nav-glyph">{item === "Dashboard" ? "⌘" : item === "Patients" ? "♙" : item === "Appointments" ? "◷" : item === "Prescriptions" ? "Rx" : "▥"}</span>{item}
          </button>
        ))}
      </nav>
      <div className="top-actions">
        <button className="icon-button glass-control" aria-label="Search" onClick={() => notify("Search is ready for the next build")}>⌕</button>
        <button className="icon-button glass-control notification" aria-label="Notifications" onClick={() => notify("You have 3 notifications")}>♧<b>3</b></button>
        <button className="avatar" aria-label="Profile" onClick={() => notify("Profile menu")}>MS</button>
      </div>
    </header>

    <section className="content">
      <div className="welcome-row">
        <div><span className="eyebrow">DOCTOR WORKSPACE · LIVE PREVIEW</span><h1>Good morning, <span>Doctor.</span></h1><p>Everything important for today, surfaced without the clutter.</p></div>
        <button className="primary-button" onClick={() => notify("New consultation started")}><span>＋</span> Start consultation</button>
      </div>

      <div className="stat-grid">
        {stats.map((stat) => <button className="stat-card glass-3d interactive" key={stat.label} onClick={() => notify(stat.label)}><span className="stat-orb">{stat.icon}</span><span className="stat-label">{stat.label}</span><strong>{stat.value}</strong><small>{stat.note}</small></button>)}
      </div>

      <div className="dashboard-grid">
        <section className="panel glass-3d">
          <div className="panel-heading"><div><span className="section-kicker">TODAY</span><h2>Appointments</h2></div><button className="text-button" onClick={() => notify("Appointments workspace selected")}>View all →</button></div>
          <div className="appointment-list">
            {appointments.map((appointment) => <button className="appointment interactive" key={appointment.time + appointment.patient} onClick={() => notify(appointment.patient + " selected")}>
              <div className="appointment-time"><strong>{appointment.time}</strong><span>{appointment.period}</span></div>
              <div className="appointment-person"><div className="mini-avatar">{appointment.patient.split(" ").map((x) => x[0]).join("")}</div><div><strong>{appointment.patient}</strong><span>{appointment.type} · {appointment.detail}</span></div></div>
              <span className={appointment.status === "Waiting" ? "status waiting" : "status confirmed"}>{appointment.status}</span><span className="arrow">→</span>
            </button>)}
          </div>
        </section>

        <section className="panel glass-3d focus-panel">
          <div className="panel-heading"><div><span className="section-kicker">QUICK ACTIONS</span><h2>Move faster</h2></div><span className="live-pill"><i /> Live</span></div>
          <button className="action-card primary-action interactive" onClick={() => notify("New prescription workspace opened")}><span className="action-icon">Rx</span><span><strong>New prescription</strong><small>Create and review a prescription</small></span><b>→</b></button>
          <button className="action-card interactive" onClick={() => notify("Patient search opened")}><span className="action-icon teal">⌕</span><span><strong>Find a patient</strong><small>Search your private patient repository</small></span><b>→</b></button>
          <button className="action-card interactive" onClick={() => notify("Result inbox opened")}><span className="action-icon blue">✓</span><span><strong>Review results</strong><small>3 investigations need attention</small></span><b>→</b></button>
        </section>
      </div>

      <section className="bottom-grid">
        <div className="insight glass-3d"><div className="insight-glow" /><span className="section-kicker">CLINICAL MEMORY</span><h2>Brief me before the next patient.</h2><p>Context, recent changes and source-linked history — prepared for review, never silently applied.</p><button className="secondary-button" onClick={() => notify("Patient brief preview opened")}>Preview patient brief <span>→</span></button></div>
        <div className="trust glass-3d"><Logo compact /><div><strong>AI prepares. Doctor decides.</strong><p>Clinical authority stays with the clinician.</p></div></div>
      </section>
    </section>

    <footer className="site-footer"><span>Doctor’s Diary</span><span>Care. Record. Connect.</span><span>Secure foundation · Synthetic demo data</span></footer>
    {toast && <div className="toast glass-3d" role="status"><span>✓</span>{toast}</div>}
  </>;
}
