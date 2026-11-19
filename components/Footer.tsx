import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--border)",
        marginTop: "auto",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              Math<span style={{ color: "var(--accent)" }}>Learn</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", maxWidth: "280px", lineHeight: 1.6 }}>
              Website pembelajaran matematika interaktif untuk siswa SMK Kelas XII.
            </p>
          </div>

          {/* Info */}
          <div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Dibuat oleh:</strong><br />
              Firman Dwi Nugraha<br />
              Kelas XII SIJA 2<br />
              Tugas Pengganti Matematika<br />
              Batas: 30 November 2026
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
              Navigasi
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/", label: "Beranda" },
                { href: "/materi", label: "Materi" },
                { href: "/materi/statistika-regresi", label: "Statistika Regresi" },
                { href: "/materi/transformasi-fungsi", label: "Transformasi Fungsi" },
                { href: "/materi/kaidah-pencacahan-peluang", label: "Kaidah Pencacahan" },
                { href: "/latihan", label: "Latihan Soal" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          © 2026 MathLearn. Dibuat untuk keperluan tugas sekolah.
        </div>
      </div>
    </footer>
  );
}
