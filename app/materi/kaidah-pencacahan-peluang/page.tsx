import type { Metadata } from "next";
import Link from "next/link";
import PermutasiKombinasi from "@/components/PermutasiKombinasi";
import PeluangSimulator from "@/components/PeluangSimulator";
import {
  DefinitionBlock,
  FormulaBlock,
  NoteBlock,
  WorkedExample,
  SectionHeading,
  SubHeading,
  LessonProse,
  TableOfContents,
  SubjectSidebar,
} from "@/components/EducationalComponents";

export const metadata: Metadata = {
  title: "Kaidah Pencacahan & Peluang Kejadian Majemuk",
  description:
    "Materi pembelajaran Kaidah Pencacahan, Permutasi, Kombinasi, dan Peluang Kejadian Majemuk untuk siswa SMK Kelas XII.",
};

const subjectsNav = [
  { href: "/materi/statistika-regresi", label: "01. Statistika Regresi", active: false },
  { href: "/materi/transformasi-fungsi", label: "02. Transformasi Fungsi", active: false },
  { href: "/materi/kaidah-pencacahan-peluang", label: "03. Kaidah Pencacahan & Peluang", active: true },
];

const tocItems = [
  { id: "bagian-a", label: "BAGIAN A: KAIDAH PENCACAHAN" },
  { id: "pengertian-pencacahan", label: "1. Pengertian Kaidah Pencacahan", level: 2 },
  { id: "aturan-dasar", label: "2. Aturan Penjumlahan & Perkalian", level: 2 },
  { id: "faktorial", label: "3. Notasi Faktorial", level: 2 },
  { id: "permutasi", label: "4. Permutasi (Urutan Penting)", level: 2 },
  { id: "kombinasi", label: "5. Kombinasi (Urutan Bebas)", level: 2 },
  { id: "perbedaan-pvc", label: "6. Perbedaan Permutasi vs Kombinasi", level: 2 },
  { id: "kalkulator-interaktif", label: "7. Kalkulator Permutasi & Kombinasi", level: 2 },
  { id: "contoh-pencacahan", label: "8. Contoh Soal Kaidah Pencacahan", level: 2 },
  { id: "bagian-b", label: "BAGIAN B: PELUANG KEJADIAN MAJEMUK" },
  { id: "pengertian-peluang", label: "9. Pengertian Peluang & Ruang Sampel", level: 2 },
  { id: "peluang-majemuk", label: "10. Rumus Peluang Majemuk Lengkap", level: 2 },
  { id: "kejadian-khusus", label: "11. Kejadian Saling Lepas & Saling Bebas", level: 2 },
  { id: "simulasi-interaktif", label: "12. Simulasi Peluang Koin & Dadu", level: 2 },
  { id: "contoh-peluang", label: "13. Contoh Soal Peluang Majemuk", level: 2 },
  { id: "ringkasan", label: "14. Rangkuman Formula Inti" },
];

export default function KaidahPencacahanPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem 5rem" }}>
      {/* Breadcrumb */}
      <nav
        style={{
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          marginBottom: "1.5rem",
        }}
        aria-label="Breadcrumb"
      >
        <Link href="/" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
          Beranda
        </Link>
        {" / "}
        <Link href="/materi" style={{ color: "var(--text-secondary)", textDecoration: "none" }}>
          Materi
        </Link>
        {" / "}
        <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
          Kaidah Pencacahan & Peluang
        </span>
      </nav>

      {/* Main 3-column container */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left column: Subject navigation */}
        <aside
          className="hidden lg:block"
          style={{ width: "220px", flexShrink: 0 }}
        >
          <SubjectSidebar subjects={subjectsNav} />
        </aside>

        {/* Center column: Main lesson content */}
        <article className="flex-1 min-w-0 prose-content">
          <header style={{ marginBottom: "2rem" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Materi 03 : Kelas XII SMK
            </span>
            <h1
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              Kaidah Pencacahan & Peluang Kejadian Majemuk
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Kuasai teknik menghitung banyaknya kemungkinan susunan objek dengan aturan perkalian, permutasi, dan kombinasi, serta tentukan kepastian probabilitas pada kejadian majemuk.
            </p>
          </header>

          {/* Tujuan Pembelajaran */}
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Tujuan Pembelajaran
            </p>
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.25rem",
                margin: 0,
                color: "var(--text-secondary)",
                fontSize: "0.9375rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <li>Menerapkan aturan penjumlahan dan aturan perkalian dalam situasi nyata.</li>
              <li>Menghitung nilai faktorial dan menyederhanakan pecahan faktorial.</li>
              <li>Membedakan penggunaan permutasi dan kombinasi berdasarkan kriteria urutan.</li>
              <li>Menghitung peluang gabungan dua kejadian: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).</li>
              <li>Membedakan kejadian saling lepas dengan kejadian saling bebas.</li>
              <li>Menghitung peluang komplemen dan peluang bersyarat secara tepat.</li>
            </ul>
          </div>

          {/* ========================================================= */}
          {/* BAGIAN A: KAIDAH PENCACAHAN */}
          {/* ========================================================= */}
          <div
            id="bagian-a"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              padding: "0.75rem 1.25rem",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "1.125rem",
              marginTop: "2.5rem",
              marginBottom: "1.5rem",
              letterSpacing: "0.03em",
            }}
          >
            BAGIAN A: KAIDAH PENCACAHAN
          </div>

          {/* Section 1: Pengertian Kaidah Pencacahan */}
          <SectionHeading id="pengertian-pencacahan">1. Pengertian Kaidah Pencacahan</SectionHeading>
          <LessonProse>
            <p>
              Dalam bidang teknologi informasi (seperti pembuatan password, permutasi alamat jaringan, atau kombinasi enkripsi kode), kita sering harus mengetahui berapa total kemungkinan konfigurasi yang dapat terbentuk.
            </p>
            <DefinitionBlock term="Kaidah Pencacahan (Counting Rules)">
              Kaidah pencacahan adalah cabang matematika kombinatorika yang menyediakan metode terstruktur untuk menentukan banyaknya kemungkinan susunan, pilihan, atau hasil dari suatu eksperimen tanpa perlu mendaftarkan setiap anggota kemungkinannya satu per satu.
            </DefinitionBlock>
          </LessonProse>

          {/* Section 2: Aturan Penjumlahan & Perkalian */}
          <SectionHeading id="aturan-dasar">2. Aturan Penjumlahan dan Aturan Perkalian</SectionHeading>
          <LessonProse>
            <p>
              Dua prinsip dasar utama dalam pencacahan adalah:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", margin: "1rem 0" }}>
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <SubHeading>A. Aturan Penjumlahan (Kata Kunci: "ATAU")</SubHeading>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Jika suatu peristiwa dapat terjadi melalui cara A sebanyak <strong>m</strong> kemungkinan ATAU melalui cara B sebanyak <strong>n</strong> kemungkinan, dan kedua cara tersebut <em>saling meniadakan (tidak bisa terjadi sekaligus bersamaan)</em>, maka total pilihan yang tersedia adalah:
                </p>
                <div style={{ fontWeight: 700, color: "var(--accent)", fontSize: "1.125rem", margin: "0.5rem 0" }}>
                  Total Cara = m + n
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  <em>Contoh:</em> Seorang siswa ingin pergi ke sekolah. Tersedia 3 jalur bus dan 2 jalur kereta api. Karena ia hanya bisa menaiki salah satu transportasi, total pilihannya = 3 + 2 = <strong>5 pilihan jalur</strong>.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <SubHeading>B. Aturan Perkalian / Pengisian Tempat (Kata Kunci: "DAN")</SubHeading>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Jika suatu rangkaian kegiatan terdiri dari beberapa tahapan berurutan, di mana tahap pertama memiliki <strong>k₁</strong> cara, tahap kedua memiliki <strong>k₂</strong> cara, hingga tahap ke-n memiliki <strong>kₙ</strong> cara, maka total kombinasi berurutan adalah hasil kalinya:
                </p>
                <div style={{ fontWeight: 700, color: "var(--accent)", fontSize: "1.125rem", margin: "0.5rem 0" }}>
                  Total Cara = k₁ × k₂ × k₃ × ... × kₙ
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  <em>Contoh:</em> Siswa SMK memiliki 3 kemeja seragam dan 2 celana kerja. Banyak pasangan seragam lengkap yang dapat dipakai = 3 × 2 = <strong>6 pasang pakaian</strong>.
                </p>
              </div>
            </div>
          </LessonProse>

          {/* Section 3: Faktorial */}
          <SectionHeading id="faktorial">3. Notasi Faktorial</SectionHeading>
          <LessonProse>
            <p>
              Notasi faktorial dilambangkan dengan tanda seru (!) dan menyatakan perkalian berurutan mundur dari bilangan asli n ke bawah hingga 1.
            </p>
            <FormulaBlock title="Definisi Notasi Faktorial">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1
              </div>
              <div style={{ textAlign: "center", fontSize: "0.9375rem", color: "var(--accent)", fontWeight: 600 }}>
                Kesepakatan Khusus: 0! = 1 dan 1! = 1
              </div>
            </FormulaBlock>
            <p>Contoh perhitungan faktorial:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", fontSize: "0.9375rem" }}>
              <li>3! = 3 × 2 × 1 = 6</li>
              <li>4! = 4 × 3 × 2 × 1 = 24</li>
              <li>5! = 5 × 4 × 3 × 2 × 1 = 120</li>
              <li>6! = 6 × 5! = 6 × 120 = 720</li>
            </ul>
            <NoteBlock>
              <strong>Teknik Penyederhanaan Pecahan Faktorial:</strong> Jangan mengalikan angka besar terlebih dahulu! Uraikan faktorial yang lebih besar hingga bertemu faktorial pembagi:
              <br />
              8! / 5! = (8 × 7 × 6 × 5!) / 5! = 8 × 7 × 6 = <strong>336</strong>.
            </NoteBlock>
          </LessonProse>

          {/* Section 4: Permutasi */}
          <SectionHeading id="permutasi">4. Permutasi (Urutan Sangat Diperhitungkan)</SectionHeading>
          <LessonProse>
            <p>
              Permutasi digunakan ketika kita memilih sejumlah objek dan <strong>posisi, jabatan, atau urutan penempatan objek tersebut berpengaruh</strong>.
            </p>
            <DefinitionBlock term="Permutasi n Objek Diambil r Objek">
              Permutasi r unsur dari n unsur yang tersedia (dengan r ≤ n) adalah banyaknya susunan yang berbeda dari r unsur tersebut dengan memperhatikan urutan penempatannya.
            </DefinitionBlock>
            <FormulaBlock title="Rumus Permutasi">
              <div style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(n, r) = n! / (n - r)!
              </div>
            </FormulaBlock>
            <p>
              Contoh situasi permutasi: Pemilihan juara 1, 2, 3 dalam lomba kejuruan; penentuan nomor antrean; susunan posisi duduk sejajar; pembuatan kode PIN rahasia. Pada semua kasus ini, susunan (A, B) berbeda maknanya dengan susunan (B, A).
            </p>
          </LessonProse>

          {/* Section 5: Kombinasi */}
          <SectionHeading id="kombinasi">5. Kombinasi (Urutan Tidak Diperhitungkan)</SectionHeading>
          <LessonProse>
            <p>
              Kombinasi digunakan ketika kita memilih sejumlah objek tanpa memedulikan susunan atau giliran urutannya. Kelompok yang berisi anggota yang sama dianggap sebagai satu kejadian yang identik.
            </p>
            <DefinitionBlock term="Kombinasi n Objek Diambil r Objek">
              Kombinasi r unsur dari n unsur yang tersedia (dengan r ≤ n) adalah banyaknya cara pengelompokan r unsur tersebut tanpa memperhatikan urutannya.
            </DefinitionBlock>
            <FormulaBlock title="Rumus Kombinasi">
              <div style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                C(n, r) = n! / [ r! · (n - r)! ]
              </div>
            </FormulaBlock>
            <p>
              Contoh situasi kombinasi: Membentuk regu piket 3 orang dari 10 siswa; mengambil 2 kelereng sekaligus dari kantong; memilih 4 menu makanan dari daftar menu. Memilih siswa (Ali, Budi) sama saja dengan memilih (Budi, Ali).
            </p>
          </LessonProse>

          {/* Section 6: Perbedaan P vs C */}
          <SectionHeading id="perbedaan-pvc">6. Tabel Komparasi: Permutasi vs Kombinasi</SectionHeading>
          <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)", borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Kriteria Perbandingan</th>
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Permutasi (P(n, r))</th>
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Kombinasi (C(n, r))</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Pengaruh Urutan</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", color: "var(--accent)", fontWeight: 600 }}>MEMPERHATIKAN urutan (AB ≠ BA)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>TIDAK memperhatikan urutan (AB = BA)</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Rumus Matematis</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>n! / (n - r)!</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>n! / [ r! · (n - r)! ]</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Besar Nilai Hasil</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Selalu lebih besar atau sama (karena ada permutasi posisi)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Lebih kecil (dibagi lagi dengan r! faktor posisi)</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Contoh Nyata SMK</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Pemilihan Ketua, Sekretaris, Bendahara OSIS</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Pemilihan 3 delegasi siswa untuk lomba IT</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 7: Kalkulator Interaktif */}
          <SectionHeading id="kalkulator-interaktif">7. Kalkulator Interaktif Permutasi & Kombinasi</SectionHeading>
          <LessonProse>
            <p>
              Masukkan nilai total objek <em>n</em> dan banyak objek yang dipilih <em>r</em>. Kalkulator di bawah ini akan menghitung nilai permutasi dan kombinasi secara serentak serta menampilkan langkah perkalian faktorialnya.
            </p>
          </LessonProse>

          {/* Interactive Calculator Component */}
          <div style={{ margin: "2rem 0" }}>
            <PermutasiKombinasi />
          </div>

          {/* Section 8: Contoh Soal Pencacahan */}
          <SectionHeading id="contoh-pencacahan">8. Contoh Soal Kaidah Pencacahan</SectionHeading>
          <WorkedExample
            number={1}
            soal="Dalam pemilihan pengurus organisasi bengkel SMK, terdapat 8 calon anggota. Akan dipilih 3 orang untuk menduduki jabatan Ketua, Sekretaris, dan Bendahara. Berapa banyak susunan pengurus yang dapat dibentuk?"
            steps={[
              {
                label: "1. Analisis Persoalan",
                content: (
                  <div>
                    <p>Total calon yang tersedia: n = 8 orang</p>
                    <p>Posisi jabatan yang diisi: r = 3 jabatan (Ketua, Sekretaris, Bendahara)</p>
                    <p>Karena jabatan berbeda tingkatan dan tugas, maka susunan (Ali=Ketua, Budi=Sekretaris) berbeda dengan (Budi=Ketua, Ali=Sekretaris). <strong>Urutan berpengaruh → Gunakan Permutasi P(8, 3).</strong></p>
                  </div>
                ),
              },
              {
                label: "2. Penerapan Rumus Permutasi",
                content: (
                  <div>
                    <p>P(n, r) = n! / (n - r)!</p>
                    <p>P(8, 3) = 8! / (8 - 3)! = 8! / 5!</p>
                  </div>
                ),
              },
              {
                label: "3. Perhitungan Nilai",
                content: (
                  <div>
                    <p>P(8, 3) = (8 × 7 × 6 × 5!) / 5!</p>
                    <p>P(8, 3) = 8 × 7 × 6 = <strong>336 cara</strong></p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Terdapat <strong>336 cara</strong> susunan pengurus yang berbeda.
              </div>
            }
            interpretasi="Karena setiap calon memiliki peluang menduduki jabatan struktural yang spesifik, terdapat 336 variasi pasangan kepengurusan yang sah."
          />

          <WorkedExample
            number={2}
            soal="Dari 10 siswa jurusan SIJA yang berprestasi, akan dipilih 4 orang untuk membentuk satu tim delegasi lomba jaringan komputer. Berapa banyak cara pemilihan tim tersebut?"
            steps={[
              {
                label: "1. Analisis Persoalan",
                content: (
                  <div>
                    <p>Total kandidat siswa: n = 10 orang</p>
                    <p>Jumlah anggota tim yang dibutuhkan: r = 4 orang</p>
                    <p>Semua anggota tim berkedudukan setara sebagai delegasi lomba (tidak ada ketua atau wakil). <strong>Urutan tidak berpengaruh → Gunakan Kombinasi C(10, 4).</strong></p>
                  </div>
                ),
              },
              {
                label: "2. Penerapan Rumus Kombinasi",
                content: (
                  <div>
                    <p>C(n, r) = n! / [ r! · (n - r)! ]</p>
                    <p>C(10, 4) = 10! / [ 4! · (10 - 4)! ] = 10! / (4! · 6!)</p>
                  </div>
                ),
              },
              {
                label: "3. Perhitungan Sederhana",
                content: (
                  <div>
                    <p>C(10, 4) = (10 × 9 × 8 × 7 × 6!) / [ (4 × 3 × 2 × 1) · 6! ]</p>
                    <p>C(10, 4) = (10 × 9 × 8 × 7) / (24)</p>
                    <p>C(10, 4) = 5040 / 24 = <strong>210 cara</strong></p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Terdapat <strong>210 kemungkinan cara</strong> membentuk tim delegasi lomba.
              </div>
            }
            interpretasi="Karena setiap susunan anggota tim tidak membedakan urutan panggilan, variasi pemilihan tim adalah 210 kombinasi unik."
          />

          {/* ========================================================= */}
          {/* BAGIAN B: PELUANG KEJADIAN MAJEMUK */}
          {/* ========================================================= */}
          <div
            id="bagian-b"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              padding: "0.75rem 1.25rem",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "1.125rem",
              marginTop: "3rem",
              marginBottom: "1.5rem",
              letterSpacing: "0.03em",
            }}
          >
            BAGIAN B: PELUANG KEJADIAN MAJEMUK
          </div>

          {/* Section 9: Pengertian Peluang */}
          <SectionHeading id="pengertian-peluang">9. Pengertian Peluang dan Ruang Sampel</SectionHeading>
          <LessonProse>
            <p>
              Peluang (probabilitas) adalah ukuran kuantitatif dari kemungkinan terjadinya suatu peristiwa acak. Nilai peluang selalu berada dalam rentang:
            </p>
            <div style={{ textAlign: "center", fontSize: "1.125rem", fontWeight: 700, margin: "0.75rem 0", color: "var(--accent)" }}>
              0 ≤ P(A) ≤ 1
            </div>
            <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", fontSize: "0.9375rem" }}>
              <li><strong>P(A) = 0:</strong> Kejadian mustahil (contoh: muncul mata dadu 7 pada dadu standar bersisi 6).</li>
              <li><strong>P(A) = 1:</strong> Kejadian pasti (contoh: manusia bernapas membutuhkan oksigen).</li>
            </ul>
            <FormulaBlock title="Rumus Peluang Teoretis Kejadian Tunggal">
              <div style={{ fontSize: "1.375rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(A) = n(A) / n(S)
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                • <strong>n(A):</strong> Banyaknya anggota titik sampel yang memenuhi kriteria kejadian A.
                <br />
                • <strong>n(S):</strong> Banyaknya seluruh anggota titik sampel dalam ruang sampel S.
              </div>
            </FormulaBlock>
          </LessonProse>

          {/* Section 10: Peluang Majemuk */}
          <SectionHeading id="peluang-majemuk">10. Rumus Peluang Kejadian Majemuk Lengkap</SectionHeading>
          <LessonProse>
            <p>
              Kejadian majemuk terjadi ketika dua atau lebih kejadian sederhana dikombinasikan menggunakan operasi himpunan (gabungan, irisan, komplemen):
            </p>

            <FormulaBlock title="1. Peluang Gabungan Dua Kejadian (A atau B)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                P(A ∩ B) dikurangkan agar elemen irisan yang sama tidak terhitung dua kali lipat.
              </div>
            </FormulaBlock>

            <FormulaBlock title="2. Peluang Kejadian Saling Lepas (Tidak Ada Irisan)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(A ∪ B) = P(A) + P(B)&nbsp;&nbsp;&nbsp;&nbsp;[karena P(A ∩ B) = 0]
              </div>
            </FormulaBlock>

            <FormulaBlock title="3. Peluang Kejadian Saling Bebas (Independen)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(A ∩ B) = P(A) × P(B)
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Kejadian A dan B saling bebas jika kepastian atau terjadinya A sama sekali tidak mempengaruhi peluang terjadinya B.
              </div>
            </FormulaBlock>

            <FormulaBlock title="4. Peluang Komplemen Suatu Kejadian (Bukan A)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(Aᶜ) = 1 - P(A)
              </div>
            </FormulaBlock>

            <FormulaBlock title="5. Peluang Bersyarat (A dengan Syarat B Telah Terjadi)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                P(A | B) = P(A ∩ B) / P(B),&nbsp;&nbsp;dengan P(B) &gt; 0
              </div>
            </FormulaBlock>
          </LessonProse>

          {/* Section 11: Kejadian Khusus */}
          <SectionHeading id="kejadian-khusus">11. Membedakan Kejadian Saling Lepas vs Saling Bebas</SectionHeading>
          <LessonProse>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", margin: "1rem 0" }}>
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <SubHeading>Kejadian Saling Lepas (Mutually Exclusive)</SubHeading>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Dua kejadian dikatakan saling lepas jika kedua kejadian tersebut <strong>mustahil terjadi secara bersamaan</strong> dalam satu kali percobaan. Irisannya adalah himpunan kosong: A ∩ B = ∅.
                  <br />
                  <em>Contoh:</em> Dalam satu lemparan dadu, muncul mata dadu bernilai genap {'{2, 4, 6}'} dan muncul mata dadu ganjil {'{1, 3, 5}'}. Dadu tidak mungkin sekaligus bernilai genap dan ganjil dalam satu lemparan.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                }}
              >
                <SubHeading>Kejadian Saling Bebas (Independent Events)</SubHeading>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Dua kejadian dikatakan saling bebas jika muncul atau tidak munculnya kejadian pertama <strong>tidak merubah peluang munculnya kejadian kedua</strong>.
                  <br />
                  <em>Contoh:</em> Melempar sebuah koin dan sebuah dadu secara bersamaan. Hasil lemparan sisi koin (Angka atau Gambar) sama sekali tidak merubah peluang munculnya angka pada dadu.
                </p>
              </div>
            </div>
          </LessonProse>

          {/* Section 12: Simulasi Peluang Interaktif */}
          <SectionHeading id="simulasi-interaktif">12. Simulasi Peluang Koin & Dadu Interaktif</SectionHeading>
          <LessonProse>
            <p>
              Probabilitas teoretis memprediksi peluang ideal (misal: peluang koin adalah 0,50 atau 50%). Dalam dunia nyata, kita mengamati probabilitas empiris (frekuensi relatif hasil eksperimen). Dengan melakukan banyak percobaan, Anda dapat membuktikan <em>Hukum Bilangan Besar (Law of Large Numbers)</em> di mana frekuensi empiris akan berkonvergensi mendekati peluang teoretis.
            </p>
          </LessonProse>

          {/* Interactive Probability Simulator */}
          <div style={{ margin: "2rem 0" }}>
            <PeluangSimulator />
          </div>

          {/* Section 13: Contoh Soal Peluang */}
          <SectionHeading id="contoh-peluang">13. Contoh Soal Peluang Kejadian Majemuk</SectionHeading>
          <WorkedExample
            number={3}
            soal="Sebuah dadu bersisi 6 dilempar satu kali. Tentukan peluang munculnya mata dadu bilangan prima ATAU mata dadu bilangan genap!"
            steps={[
              {
                label: "1. Menentukan Ruang Sampel S",
                content: (
                  <div>
                    <p>Ruang sampel lemparan dadu: S = {`{1, 2, 3, 4, 5, 6}`}</p>
                    <p>Total titik sampel: n(S) = 6</p>
                  </div>
                ),
              },
              {
                label: "2. Menentukan Kejadian A dan B",
                content: (
                  <div>
                    <p>Kejadian A (bilangan prima): A = {`{2, 3, 5}`} → n(A) = 3 → P(A) = 3/6</p>
                    <p>Kejadian B (bilangan genap): B = {`{2, 4, 6}`} → n(B) = 3 → P(B) = 3/6</p>
                  </div>
                ),
              },
              {
                label: "3. Memeriksa Irisan Kejadian (A ∩ B)",
                content: (
                  <div>
                    <p>Irisan A ∩ B (bilangan yang sekaligus prima DAN genap): A ∩ B = {`{2}`}</p>
                    <p>Banyak anggota irisan: n(A ∩ B) = 1 → P(A ∩ B) = 1/6</p>
                    <p>Karena P(A ∩ B) ≠ 0, maka A dan B <strong>TIDAK saling lepas</strong>.</p>
                  </div>
                ),
              },
              {
                label: "4. Perhitungan Peluang Gabungan",
                content: (
                  <div>
                    <p>P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</p>
                    <p>P(A ∪ B) = 3/6 + 3/6 - 1/6</p>
                    <p>P(A ∪ B) = 5/6</p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Peluang muncul bilangan prima atau genap adalah <strong>5/6</strong> (atau sekitar 83,33%).
              </div>
            }
            interpretasi="Angka yang memenuhi adalah 2, 3, 4, 5, 6 (5 kemungkinan dari 6 mata dadu). Hanya angka 1 yang tidak memenuhi kriteria."
          />

          <WorkedExample
            number={4}
            soal="Sebuah kotak suku cadang berisi 5 konektor RJ-45 warna biru dan 3 konektor warna abu-abu. Jika seorang teknisi jaringan mengambil 2 konektor sekaligus secara acak, berapakah peluang terambil kedua konektor berwarna biru?"
            steps={[
              {
                label: "1. Menghitung Ruang Sampel Pengambilan n(S)",
                content: (
                  <div>
                    <p>Total konektor: 5 + 3 = 8 buah</p>
                    <p>Diambil 2 buah sekaligus (urutan pengambilan tidak dipentingkan) → Gunakan Kombinasi C(8, 2):</p>
                    <p>n(S) = C(8, 2) = 8! / (2! · 6!) = (8 × 7) / 2 = <strong>28 cara</strong></p>
                  </div>
                ),
              },
              {
                label: "2. Menghitung Titik Sampel Kejadian 2 Biru n(A)",
                content: (
                  <div>
                    <p>Tersedia 5 konektor biru, dan harus terpilih 2 biru:</p>
                    <p>n(A) = C(5, 2) = 5! / (2! · 3!) = (5 × 4) / 2 = <strong>10 cara</strong></p>
                  </div>
                ),
              },
              {
                label: "3. Menghitung Nilai Peluang",
                content: (
                  <div>
                    <p>P(A) = n(A) / n(S)</p>
                    <p>P(2 Biru) = 10 / 28 = <strong>5 / 14</strong> ≈ 0,357 (35,71%)</p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Peluang terambil kedua konektor berwarna biru adalah <strong>5/14</strong> (sekitar 35,71%).
              </div>
            }
            interpretasi="Dari 28 kemungkinan pasangan konektor yang bisa terambil, ada 10 kombinasi di mana kedua konektor tersebut sama-sama berwarna biru."
          />

          {/* Section 14: Ringkasan */}
          <SectionHeading id="ringkasan">14. Rangkuman Formula Inti</SectionHeading>
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.25rem 1.5rem",
              marginTop: "1rem",
            }}
          >
            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.25rem",
                margin: 0,
                color: "var(--text-secondary)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.9375rem",
              }}
            >
              <li><strong>Permutasi P(n, r) = n! / (n - r)!</strong>: Digunakan saat urutan susunan memiliki makna khusus.</li>
              <li><strong>Kombinasi C(n, r) = n! / [r!(n - r)!]</strong>: Digunakan saat pemilihan anggota tidak membedakan urutan.</li>
              <li><strong>Peluang teoretis P(A) = n(A) / n(S)</strong>: Rasio kejadian terhadap ruang sampel semesta.</li>
              <li><strong>Peluang gabungan</strong>: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Jika saling lepas, P(A ∩ B) = 0.</li>
              <li><strong>Peluang irisan kejadian bebas</strong>: P(A ∩ B) = P(A) × P(B).</li>
              <li><strong>Peluang komplemen</strong>: P(Aᶜ) = 1 - P(A).</li>
            </ul>
          </div>

          {/* Bottom navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <Link
              href="/materi/transformasi-fungsi"
              style={{
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              ← Materi Sebelumnya: Transformasi Fungsi
            </Link>
            <Link
              href="/latihan"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "0.6rem 1.25rem",
                borderRadius: "6px",
              }}
            >
              Uji Pemahaman: Latihan Soal Kuis →
            </Link>
          </div>
        </article>

        {/* Right column: Table of contents */}
        <aside
          className="hidden xl:block"
          style={{ width: "220px", flexShrink: 0 }}
        >
          <TableOfContents items={tocItems} />
        </aside>
      </div>
    </div>
  );
}
