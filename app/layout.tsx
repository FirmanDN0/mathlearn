import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MathLearn | Belajar Matematika Kelas XII",
    template: "%s | MathLearn",
  },
  description:
    "Website pembelajaran matematika interaktif untuk siswa SMK Kelas XII. Materi Statistika Regresi, Transformasi Fungsi, dan Kaidah Pencacahan.",
  keywords: ["matematika", "SMK", "kelas XII", "statistika", "regresi", "transformasi fungsi", "peluang"],
  authors: [{ name: "Firman Dwi Nugraha" }],
  openGraph: {
    title: "MathLearn | Belajar Matematika Kelas XII",
    description:
      "Website pembelajaran matematika interaktif untuk siswa SMK Kelas XII.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
