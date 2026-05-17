import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyrus John S. Perez | Aspiring Full-Stack Developer",
  description:
    "A modern beginner-friendly developer portfolio for internships, freelance work, and junior developer applications.",
  keywords: [
    "Junior Developer",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Web Developer"
  ],
  authors: [{ name: "Cyrus John S. Perez" }],
  openGraph: {
    title: "Cyrus John S. Perez | Aspiring Full-Stack Developer",
    description:
      "A clean portfolio featuring skills, projects, learning journey, and contact details.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
