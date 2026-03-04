import "./globals.css";
import type { Metadata, Viewport } from "next";
import PwaRegister from "../components/PwaRegister";

export const metadata: Metadata = {
  title: "My Next PWA",
  description: "PWA Login → Home demo",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#0b0f19"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}