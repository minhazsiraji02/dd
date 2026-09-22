import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doctor's Diary",
  description: "Clinical productivity, memory and healthcare operating platform"
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
