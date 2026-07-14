import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CourierPro - Trusted Courier Services Trinidad & Tobago",
  description: "International and domestic courier services. Air freight, ocean freight, skybox, and local delivery across Trinidad & Tobago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
