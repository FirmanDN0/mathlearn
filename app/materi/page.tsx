import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materi Pembelajaran",
  description: "Tiga materi matematika lengkap untuk siswa SMK Kelas XII: Statistika Regresi, Transformasi Fungsi, dan Kaidah Pencacahan.",
};

const subjects = [
  {
    href: "/materi/statistika-regresi",
    number: "01",
    title: "Statistika Regresi",
    description:
      "Statistika regresi mempelajari hubungan matematis antara dua variabel kuantitatif. Dengan persamaan regresi linear, kita dapat memprediksi nilai variabel terikat (Y) berdasarkan variabel bebas (X).",
    topics: [
      "Pengertian regresi linear",
      "Variabel bebas dan terikat",
      "Diagram pencar (scatter plot)",
      "Persamaan Ŷ = a + bX",
      "Koefisien gradien dan konstanta",
      "Prediksi menggunakan persamaan regresi",
    ],
    examples: 2,
    interactive: "Grafik regresi interaktif dengan prediksi nilai",
  },
  {
    href: "/materi/transformasi-fungsi",
    number: "02",
    title: "Transformasi Fungsi",
    description:
      "Transformasi fungsi membahas cara mengubah posisi dan bentuk grafik suatu fungsi menggunakan operasi matematis: translasi (pergeseran), refleksi (pencerminan), dan dilatasi (perubahan skala).",
    topics: [
      "Translasi vertikal: g(x) = f(x) + k",
      "Translasi horizontal: g(x) = f(x - h)",
      "Refleksi sumbu X: g(x) = -f(x)",
      "Refleksi sumbu Y: g(x) = f(-x)",
      "Dilatasi vertikal: g(x) = af(x)",
      "Dilatasi horizontal: g(x) = f(x/a)",
      "Kombinasi transformasi",
    ],
    examples: 2,
    interactive: "Grafik transformasi fungsi dengan slider interaktif",
  },
  {
    href: "/materi/kaidah-pencacahan-peluang",
    number: "03",
    title: "Kaidah Pencacahan & Peluang Kejadian Majemuk",
    description:
      "Materi ini terbagi dua: Kaidah Pencacahan membahas cara menghitung kemungkinan susunan atau pemilihan objek dengan permutasi dan kombinasi. Peluang Kejadian Majemuk membahas perhitungan peluang beberapa kejadian sekaligus.",
    topics: [
      "Aturan penjumlahan dan perkalian",
      "Faktorial, permutasi, kombinasi",
      "Perbedaan permutasi vs kombinasi",
      "Ruang sampel dan kejadian",
      "Peluang gabungan P(A ∪ B)",
      "Peluang irisan P(A ∩ B)",
      "Kejadian saling lepas dan saling bebas",
      "Peluang komplemen dan bersyarat",
    ],
    examples: 4,
    interactive: "Kalkulator permutasi & kombinasi + simulasi peluang",
  },
];

export default function MateriPage() {
  return (
    <div style={{ padding: "3rem 1rem 5rem" }}>
      <div className="max-w-5xl mx-auto">
        {/* Page heading */}
        <div style={{ marginBottom: "3rem" }}>
          <nav style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Beranda</Link>
            {" / "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Materi</span>
          </nav>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Materi Pembelajaran
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "560px" }}>
            Tiga materi matematika untuk siswa SMK Kelas XII, dilengkapi penjelasan, rumus, contoh soal, dan visualisasi interaktif.
          </p>
        </div>

        {/* Subject cards */}
        <div className="flex flex-col gap-6">
          {subjects.map((s) => (
            <article
              key={s.href}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Number column */}
                <div
                  style={{
                    backgroundColor: "var(--accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem 2.5rem",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      opacity: 0.5,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {s.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem", flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {s.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Topics */}
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                        Topik
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        {s.topics.map((t) => (
                          <li key={t} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                            <span style={{ color: "var(--accent)", flexShrink: 0 }}>•</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta + CTA */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: "200px" }}>
                      <div>
                        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                          Contoh Soal
                        </p>
                        <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          {s.examples}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
                          Interaktif
                        </p>
                        <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                          {s.interactive}
                        </p>
                      </div>
                      <Link
                        href={s.href}
                        style={{
                          display: "inline-block",
                          backgroundColor: "var(--accent)",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          padding: "0.6rem 1.25rem",
                          borderRadius: "6px",
                          textDecoration: "none",
                          marginTop: "auto",
                          alignSelf: "flex-start",
                        }}
                      >
                        Pelajari Materi
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Practice CTA */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.75rem",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1rem", marginBottom: "0.25rem" }}>
              Sudah belajar? Uji pemahamanmu!
            </p>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              15 soal pilihan ganda dari ketiga materi di atas.
            </p>
          </div>
          <Link
            href="/latihan"
            style={{
              display: "inline-block",
              backgroundColor: "var(--text-primary)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "6px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Latihan Soal
          </Link>
        </div>
      </div>
    </div>
  );
}
