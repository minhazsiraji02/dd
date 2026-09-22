import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doctor's Diary — Care. Record. Connect.",
  description: "A modern clinical productivity, memory and healthcare operating platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
