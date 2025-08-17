import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEYMR® — Art Fréquentiel",
  description: "Œuvres, mobilier d'art et éditions limitées. Art & géométrie vibratoire.",
  icons: { icon: "/icons/icon-512.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
