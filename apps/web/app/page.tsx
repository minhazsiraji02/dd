import Link from "next/link";
import DashboardClient from "./dashboard-client";

export default function HomePage() {
  return (
    <main className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="ambient ambient-three" />
      <DashboardClient />
    </main>
  );
}
