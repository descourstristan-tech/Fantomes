import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fantômes — Débusque les abonnements qui te hantent",
  description:
    "Dépose ton relevé bancaire, on retrouve les abonnements que tu paies sans t'en servir. Audit complet à 19€.",
  openGraph: {
    title: "Fantômes — Débusque les abonnements qui te hantent",
    description:
      "Dépose ton relevé bancaire, on retrouve les abonnements que tu paies sans t'en servir.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-nuit text-white antialiased">{children}</body>
    </html>
  );
}
