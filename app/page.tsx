import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MathLearn | Belajar Matematika Kelas XII",
  description:
    "Pelajari Statistika Regresi, Transformasi Fungsi, dan Kaidah Pencacahan secara interaktif. Dibuat untuk siswa SMK Kelas XII.",
};

const subjects = [
  {
    href: "/materi/statistika-regresi",
    number: "01",
    title: "Statistika Regresi",
    description:
      "Memahami hubungan antara dua variabel dan cara memprediksi nilai berdasarkan persamaan regresi linear.",
    topics: ["Variabel bebas & terikat", "Diagram pencar", "Persamaan regresi Ŷ = a + bX", "Koefisien regresi", "Prediksi nilai"],
    examples: 2,
  },
  {
    href: "/materi/transformasi-fungsi",
    number: "02",
    title: "Transformasi Fungsi",
    description:
      "Mempelajari bagaimana sebuah fungsi berubah bentuk grafiknya ketika diterapkan translasi, refleksi, dan dilatasi.",
    topics: ["Translasi vertikal & horizontal", "Refleksi sumbu X & Y", "Dilatasi vertikal & horizontal", "Kombinasi transformasi"],
    examples: 2,
  },
  {
    href: "/materi/kaidah-pencacahan-peluang",
    number: "03",
    title: "Kaidah Pencacahan & Peluang",
    description:
      "Menghitung cara penyusunan dan pemilihan objek dengan permutasi dan kombinasi, serta menghitung peluang kejadian majemuk.",
    topics: ["Aturan penjumlahan & perkalian", "Faktorial, permutasi, kombinasi", "Peluang gabungan & irisan", "Kejadian saling lepas & bebas"],
    examples: 4,
  },
];

const features = [
  {
    label: "Penjelasan Materi",
    desc: "Konsep matematika dijelaskan dalam bahasa Indonesia yang jelas dan mudah dipahami siswa SMK.",
  },
  {
    label: "Rumus Matematika",
    desc: "Setiap formula ditampilkan dengan notasi matematika yang tepat disertai penjelasan setiap variabel.",
  },
  {
    label: "Contoh & Pembahasan",
    desc: "Minimal dua contoh soal lengkap dengan langkah penyelesaian detail untuk setiap materi.",
  },
  {
    label: "Visualisasi Interaktif",
    desc: "Grafik dan kalkulator interaktif untuk memvisualisasikan konsep matematika secara langsung.",
  },
  {
    label: "Latihan Soal",
    desc: "Kuis pilihan ganda dengan penjelasan jawaban untuk menguji pemahaman materi.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          padding: "5rem 1rem 4rem",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: heading */}
            <div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                Matematika Kelas XII SMK
              </p>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                Belajar Matematika{" "}
                <span style={{ color: "var(--accent)" }}>Lebih Mudah</span>{" "}
                dengan Penjelasan Interaktif
              </h1>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "480px",
                }}
              >
                Website pembelajaran matematika untuk siswa SMK Kelas XII. Pelajari tiga materi utama dengan penjelasan lengkap, rumus, contoh soal, dan visualisasi interaktif.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link
                  href="/materi"
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--accent)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  Mulai Belajar
                </Link>
                <Link
                  href="/latihan"
                  style={{
                    display: "inline-block",
                    backgroundColor: "transparent",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    border: "1px solid var(--border)",
                  }}
                >
                  Latihan Soal
                </Link>
              </div>
            </div>

            {/* Right: subject preview */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {subjects.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "block",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "1rem 1.25rem",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        backgroundColor: "var(--accent-light)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "4px",
                        flexShrink: 0,
                        marginTop: "0.125rem",
                      }}
                    >
                      {s.number}
                    </span>
                    <div>
                      <p style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                        {s.title}
                      </p>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {s.description.substring(0, 90)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 1rem" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                Fitur Pembelajaran
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Setiap materi dirancang agar mudah dipahami, dengan struktur yang jelas dari definisi hingga latihan soal.
              </p>
              <Link
                href="/materi"
                style={{
                  color: "var(--accent)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--accent)",
                  paddingBottom: "1px",
                }}
              >
                Lihat semua materi
              </Link>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {features.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      borderRadius: "4px",
                      backgroundColor: "var(--accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem", fontSize: "0.9375rem" }}>
                      {f.label}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ backgroundColor: "var(--text-primary)", padding: "3rem 1rem" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
            Siap untuk berlatih?
          </h2>
          <p style={{ color: "#9E9A95", marginBottom: "1.5rem" }}>
            Uji pemahamanmu dengan 15 soal pilihan ganda dari tiga materi.
          </p>
          <Link
            href="/latihan"
            style={{
              display: "inline-block",
              backgroundColor: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9375rem",
              padding: "0.75rem 1.75rem",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Kerjakan Latihan Soal
          </Link>
        </div>
      </section>
    </>
  );
}
