import type { Metadata } from "next";
import Link from "next/link";
import RegresiChart from "@/components/RegresiChart";
import MobileLessonNav from "@/components/MobileLessonNav";
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
  title: "Statistika Regresi",
  description:
    "Materi pembelajaran Statistika Regresi Linear Sederhana untuk siswa SMK Kelas XII. Lengkap dengan rumus, contoh soal, dan grafik interaktif.",
};

const subjectsNav = [
  { href: "/materi/statistika-regresi", label: "01. Statistika Regresi", active: true },
  { href: "/materi/transformasi-fungsi", label: "02. Transformasi Fungsi", active: false },
  { href: "/materi/kaidah-pencacahan-peluang", label: "03. Kaidah Pencacahan & Peluang", active: false },
];

const tocItems = [
  { id: "pengertian", label: "Pengertian Statistika Regresi" },
  { id: "variabel", label: "Variabel Bebas dan Terikat" },
  { id: "diagram-pencar", label: "Diagram Pencar (Scatter Plot)" },
  { id: "persamaan", label: "Persamaan Regresi Linear" },
  { id: "rumus", label: "Rumus Koefisien a dan b" },
  { id: "interpretasi", label: "Interpretasi Gradien & Konstanta" },
  { id: "visualisasi", label: "Visualisasi & Prediksi Interaktif" },
  { id: "contoh-1", label: "Contoh Soal 1: Jam Belajar & Nilai" },
  { id: "contoh-2", label: "Contoh Soal 2: Modal Usaha & Omzet" },
  { id: "ringkasan", label: "Ringkasan Materi" },
];

export default function StatistikaRegresiPage() {
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
          Statistika Regresi
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
          <MobileLessonNav
            currentSubject="01. Statistika Regresi"
            subjects={subjectsNav}
            tocItems={tocItems}
          />
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
              Materi 01 : Kelas XII SMK
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
              Statistika Regresi Linear Sederhana
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Pelajari bagaimana menemukan pola matematis dari dua variabel data, menghitung garis lurus terbaik, dan menggunakan persamaan tersebut untuk memperkirakan nilai masa depan.
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
              <li>Membedakan variabel bebas (X) dan variabel terikat (Y).</li>
              <li>Membaca dan membuat diagram pencar (scatter plot).</li>
              <li>Menghitung konstanta a dan koefisien regresi b dengan metode kuadrat terkecil.</li>
              <li>Menyusun persamaan regresi linear sederhana Ŷ = a + bX.</li>
              <li>Menginterpretasi arti fisis dari gradien dan titik potong.</li>
              <li>Melakukan prediksi nilai variabel terikat berdasarkan nilai variabel bebas.</li>
            </ul>
          </div>

          {/* Section 1: Pengertian */}
          <SectionHeading id="pengertian">1. Pengertian Statistika Regresi</SectionHeading>
          <LessonProse>
            <p>
              Dalam kehidupan sehari-hari dan dunia industri kejuruan (SMK), kita sering menjumpai situasi di mana satu faktor mempengaruhi faktor lainnya. Contohnya, waktu pengelasan mempengaruhi kekuatan sambungan logam, durasi pemanasan mempengaruhi suhu mesin, atau lama waktu belajar siswa mempengaruhi nilai ujian yang diraih.
            </p>
            <DefinitionBlock term="Statistika Regresi">
              Statistika regresi adalah metode analisis statistika yang digunakan untuk mempelajari dan memodelkan bentuk hubungan sebab-akibat antara satu atau lebih variabel penjelas (independen) dengan variabel respon (dependen), serta membuat estimasi atau prediksi nilai di masa mendatang.
            </DefinitionBlock>
            <p>
              Regresi berbeda dengan korelasi. Korelasi hanya mengukur seberapa kuat hubungan timbal balik antara dua variabel (tanpa memandang mana sebab dan mana akibat). Sebaliknya, regresi menetapkan hubungan fungsional terarah: satu variabel berperan sebagai penentu, dan variabel lainnya sebagai yang dipengaruhi.
            </p>
          </LessonProse>

          {/* Section 2: Variabel Bebas dan Terikat */}
          <SectionHeading id="variabel">2. Variabel Bebas (X) dan Variabel Terikat (Y)</SectionHeading>
          <LessonProse>
            <p>
              Dalam analisis regresi linear sederhana, kita melibatkan tepat dua jenis variabel:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", margin: "1rem 0" }}>
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1rem 1.25rem",
                }}
              >
                <strong style={{ color: "var(--accent)" }}>Variabel Bebas / Independen (X)</strong>
                <p style={{ margin: "0.35rem 0 0", fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Variabel yang nilainya ditentukan terlebih dahulu atau berdiri bebas. Variabel ini berfungsi sebagai faktor pemicu, penyebab, atau penjelas. Pada sumbu koordinat kartesius, variabel bebas selalu diletakkan pada <strong>sumbu horizontal (sumbu X)</strong>.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1rem 1.25rem",
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>Variabel Terikat / Dependen (Y)</strong>
                <p style={{ margin: "0.35rem 0 0", fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Variabel yang nilainya dipengaruhi atau bergantung pada perubahan variabel bebas. Variabel ini merupakan hasil keluaran, respon, atau akibat. Pada grafik, variabel terikat selalu ditempatkan pada <strong>sumbu vertikal (sumbu Y)</strong>.
                </p>
              </div>
            </div>
            <NoteBlock>
              <strong>Tips Menentukan Variabel:</strong> Tanyakan: "Apakah X yang mempengaruhi Y, ataukah Y yang mempengaruhi X?" Misalnya, waktu belajar (X) mempengaruhi nilai ujian (Y). Tidak masuk akal menyatakan nilai ujian yang menyebabkan waktu belajar di masa lampau.
            </NoteBlock>
          </LessonProse>

          {/* Section 3: Diagram Pencar */}
          <SectionHeading id="diagram-pencar">3. Diagram Pencar (Scatter Plot)</SectionHeading>
          <LessonProse>
            <p>
              Sebelum menyusun persamaan matematika, langkah pertama yang wajib dilakukan oleh seorang praktisi data adalah memplot setiap pasangan titik pengamatan (x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ) ke dalam bidang koordinat. Diagram ini disebut <strong>diagram pencar (scatter plot)</strong>.
            </p>
            <p>
              Dari sebaran titik-titik tersebut, kita dapat mengidentifikasi kecenderungan arah hubungan:
            </p>
            <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", margin: "0.5rem 0" }}>
              <li><strong>Korelasi Positif:</strong> Titik-titik condong naik dari kiri bawah ke kanan atas. Artinya, semakin tinggi nilai X, semakin tinggi pula nilai Y.</li>
              <li><strong>Korelasi Negatif:</strong> Titik-titik condong turun dari kiri atas ke kanan bawah. Artinya, semakin tinggi nilai X, nilai Y justru cenderung berkurang.</li>
              <li><strong>Tidak Berkorelasi / Acak:</strong> Titik-titik menyebar merata tanpa arah yang jelas. Hubungan linear tidak dapat diterapkan.</li>
            </ul>
          </LessonProse>

          {/* Section 4: Persamaan Regresi */}
          <SectionHeading id="persamaan">4. Persamaan Regresi Linear Sederhana</SectionHeading>
          <LessonProse>
            <p>
              Jika pola titik pada diagram pencar membentuk garis lurus, kita membuat sebuah model garis lurus perkiraan terbaik (line of best fit). Persamaan garis ini dinyatakan dengan:
            </p>
            <FormulaBlock title="Model Regresi Linear Sederhana">
              <div style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                Ŷ = a + bX
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.75rem" }}>
                Keterangan masing-masing simbol:
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                  <li><strong>Ŷ (dibaca: Y-topi):</strong> Nilai dugaan atau perkiraan (prediksi) dari variabel terikat.</li>
                  <li><strong>X:</strong> Nilai observasi dari variabel bebas yang diketahui.</li>
                  <li><strong>a:</strong> Konstanta atau titik potong garis terhadap sumbu tegak (Y-intercept saat X = 0).</li>
                  <li><strong>b:</strong> Koefisien regresi atau gradien kemiringan garis (slope).</li>
                </ul>
              </div>
            </FormulaBlock>
          </LessonProse>

          {/* Section 5: Rumus Koefisien */}
          <SectionHeading id="rumus">5. Rumus Menghitung Koefisien a dan b</SectionHeading>
          <LessonProse>
            <p>
              Untuk memastikan garis lurus yang kita tarik adalah garis yang paling tepat dan meminimalkan kuadrat selisih antara nilai nyata dengan nilai taksiran, kita menggunakan <em>Metode Kuadrat Terkecil (Ordinary Least Squares)</em>.
            </p>
            <FormulaBlock title="Rumus Koefisien Regresi (Gradien b)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                b = [ n·Σ(XY) - (ΣX)·(ΣY) ] / [ n·Σ(X²) - (ΣX)² ]
              </div>
            </FormulaBlock>

            <FormulaBlock title="Rumus Konstanta (Titik Potong a)">
              <div style={{ fontSize: "1.25rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                a = [ ΣY - b·ΣX ] / n
              </div>
              <div style={{ fontSize: "0.875rem", textAlign: "center", marginTop: "0.25rem", color: "var(--text-secondary)" }}>
                atau ekuivalen dengan: <strong>a = Ȳ - b·X̄</strong> (di mana Ȳ adalah rata-rata Y dan X̄ adalah rata-rata X)
              </div>
            </FormulaBlock>

            <p style={{ marginTop: "1rem" }}>
              Keterangan simbol perhitungan:
            </p>
            <ul style={{ listStyle: "square", paddingLeft: "1.25rem", fontSize: "0.9375rem" }}>
              <li><strong>n:</strong> Jumlah pasangan data observasi.</li>
              <li><strong>ΣX:</strong> Jumlah seluruh nilai variabel bebas X.</li>
              <li><strong>ΣY:</strong> Jumlah seluruh nilai variabel terikat Y.</li>
              <li><strong>Σ(XY):</strong> Jumlah hasil kali setiap pasangan X dikalikan Y.</li>
              <li><strong>Σ(X²):</strong> Jumlah dari kuadrat setiap nilai X.</li>
              <li><strong>(ΣX)²:</strong> Kuadrat dari jumlah total nilai X. Perhatikan perbedaan penting antara Σ(X²) dan (ΣX)²!</li>
            </ul>
          </LessonProse>

          {/* Section 6: Interpretasi */}
          <SectionHeading id="interpretasi">6. Interpretasi Gradien (b) dan Konstanta (a)</SectionHeading>
          <LessonProse>
            <p>
              Menghitung nilai angka saja tidak cukup; sebagai siswa SMK yang siap terjun ke dunia kerja, Anda harus mampu membaca makna fisis dari angka tersebut:
            </p>
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                margin: "1rem 0",
              }}
            >
              <SubHeading>1. Interpretasi Koefisien Kemiringan (b)</SubHeading>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                Nilai <strong>b</strong> menunjukkan laju perubahan. Artinya: <em>"Setiap peningkatan variabel bebas X sebesar 1 satuan, maka nilai rata-rata variabel terikat Y diperkirakan akan mengalami kenaikan (jika b positif) atau penurunan (jika b negatif) sebesar b satuan."</em>
              </p>
              <SubHeading>2. Interpretasi Konstanta (a)</SubHeading>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                Nilai <strong>a</strong> merupakan nilai dasar Y ketika faktor X bernilai nol (X = 0). Dalam konteks terapan, nilai a ini sering kali mewakili nilai awal atau kondisi awal tanpa intervensi.
              </p>
            </div>
          </LessonProse>

          {/* Section 7: Visualisasi Interaktif */}
          <SectionHeading id="visualisasi">7. Visualisasi & Prediksi Interaktif</SectionHeading>
          <LessonProse>
            <p>
              Di bawah ini disajikan data riil jam belajar siswa (X) terhadap nilai ujian (Y). Komponen interaktif ini secara otomatis menghitung koefisien regresi menggunakan algoritma kuadrat terkecil, menggambar garis regresi, dan menghitung estimasi nilai Y untuk jam belajar yang Anda masukkan.
            </p>
          </LessonProse>

          {/* Render interactive chart component */}
          <div style={{ margin: "2rem 0" }}>
            <RegresiChart />
          </div>

          {/* Section 8: Contoh Soal 1 */}
          <SectionHeading id="contoh-1">8. Contoh Soal 1 (Lengkap dengan Langkah Kerja)</SectionHeading>
          <WorkedExample
            number={1}
            soal="Seorang guru SMK SIJA mencatat waktu belajar mandiri per hari (X, jam) dan hasil nilai ujian kompetensi kejuruan (Y) dari 7 siswa. Tentukan persamaan regresi linear sederhana dan perkirakan nilai ujian siswa yang belajar 5,5 jam sehari!"
            steps={[
              {
                label: "1. Identifikasi Variabel & Data Diketahui",
                content: (
                  <div>
                    <p>Variabel Bebas (X): Jam belajar per hari (jam)</p>
                    <p>Variabel Terikat (Y): Nilai ujian kejuruan</p>
                    <p>Banyak pasangan data (n) = 7 siswa</p>
                  </div>
                ),
              },
              {
                label: "2. Tabel Pembantu Perhitungan Statistik",
                content: (
                  <div style={{ overflowX: "auto", margin: "0.5rem 0" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "0.875rem",
                        textAlign: "center",
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)", borderBottom: "2px solid var(--border)" }}>
                          <th style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>Siswa</th>
                          <th style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>X (Jam)</th>
                          <th style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>Y (Nilai)</th>
                          <th style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>X·Y</th>
                          <th style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>X²</th>
                          <th style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>Y²</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>1</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>2</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>55</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>110</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>4</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>3025</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>2</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>3</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>60</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>180</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>9</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>3600</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>3</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>4</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>65</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>260</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>16</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>4225</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>4</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>5</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>72</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>360</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>25</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>5184</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>5</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>6</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>75</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>450</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>36</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>5625</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>6</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>7</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>82</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>574</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>49</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>6724</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>7</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>8</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>88</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>704</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>64</td>
                          <td style={{ padding: "0.4rem", border: "1px solid var(--border)" }}>7744</td>
                        </tr>
                        <tr style={{ fontWeight: 700, backgroundColor: "#f3f4f6" }}>
                          <td style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>Jumlah (Σ)</td>
                          <td style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>ΣX = 35</td>
                          <td style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>ΣY = 497</td>
                          <td style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>ΣXY = 2638</td>
                          <td style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>ΣX² = 203</td>
                          <td style={{ padding: "0.5rem", border: "1px solid var(--border)" }}>ΣY² = 36127</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ),
              },
              {
                label: "3. Perhitungan Gradien b",
                content: (
                  <div>
                    <p>Rumus: b = [ n·Σ(XY) - (ΣX)(ΣY) ] / [ n·Σ(X²) - (ΣX)² ]</p>
                    <p>Substitusi angka:</p>
                    <p>b = [ 7 · 2638 - (35) · (497) ] / [ 7 · 203 - (35)² ]</p>
                    <p>b = [ 18466 - 17395 ] / [ 1421 - 1225 ]</p>
                    <p>b = 1071 / 196 = <strong>5,4643 ≈ 5,46</strong></p>
                  </div>
                ),
              },
              {
                label: "4. Perhitungan Konstanta a",
                content: (
                  <div>
                    <p>Rumus: a = [ ΣY - b·ΣX ] / n</p>
                    <p>Substitusi angka:</p>
                    <p>a = [ 497 - (5,4643 · 35) ] / 7</p>
                    <p>a = [ 497 - 191,25 ] / 7</p>
                    <p>a = 305,75 / 7 = <strong>43,6786 ≈ 43,68</strong></p>
                  </div>
                ),
              },
              {
                label: "5. Pembentukan Persamaan & Perhitungan Prediksi",
                content: (
                  <div>
                    <p>Persamaan Regresi: <strong>Ŷ = 43,68 + 5,46X</strong></p>
                    <p>Untuk siswa yang belajar X = 5,5 jam:</p>
                    <p>Ŷ = 43,68 + 5,46(5,5)</p>
                    <p>Ŷ = 43,68 + 30,03 = <strong>73,71</strong></p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Persamaan Regresi: <strong>Ŷ = 43,68 + 5,46X</strong>
                <br />
                Perkiraan nilai siswa untuk X = 5,5 jam adalah <strong>73,71</strong>
              </div>
            }
            interpretasi="Konstanta a = 43,68 menunjukkan bahwa siswa yang sama sekali tidak belajar (0 jam) diperkirakan memiliki nilai dasar 43,68. Koefisien b = 5,46 mengartikan bahwa setiap penambahan 1 jam belajar per hari, nilai ujian siswa rata-rata meningkat sebesar 5,46 poin."
          />

          {/* Section 9: Contoh Soal 2 */}
          <SectionHeading id="contoh-2">9. Contoh Soal 2: Modal Usaha vs Omzet Bulanan</SectionHeading>
          <WorkedExample
            number={2}
            soal="Sebuah koperasi SMK mengamati data modal awal usaha produk kreatif (X, juta rupiah) dan omzet penjualan bulanan (Y, juta rupiah) pada 6 unit usaha siswa:"
            steps={[
              {
                label: "1. Data Pengamatan (n = 6)",
                content: (
                  <div>
                    <p>Data modal X = [5, 10, 15, 20, 25, 30] juta rupiah</p>
                    <p>Data omzet Y = [8, 14, 19, 26, 32, 37] juta rupiah</p>
                  </div>
                ),
              },
              {
                label: "2. Nilai Penjumlahan Komponen Statistik",
                content: (
                  <div>
                    <p>• ΣX = 5 + 10 + 15 + 20 + 25 + 30 = <strong>105</strong></p>
                    <p>• ΣY = 8 + 14 + 19 + 26 + 32 + 37 = <strong>136</strong></p>
                    <p>• Σ(XY) = (5×8) + (10×14) + (15×19) + (20×26) + (25×32) + (30×37) = 40 + 140 + 285 + 520 + 800 + 1110 = <strong>2895</strong></p>
                    <p>• Σ(X²) = 5² + 10² + 15² + 20² + 25² + 30² = 25 + 100 + 225 + 400 + 625 + 900 = <strong>2275</strong></p>
                    <p>• (ΣX)² = 105² = <strong>11025</strong></p>
                  </div>
                ),
              },
              {
                label: "3. Menghitung b dan a",
                content: (
                  <div>
                    <p>b = [ 6(2895) - (105)(136) ] / [ 6(2275) - 11025 ]</p>
                    <p>b = [ 17370 - 14280 ] / [ 13650 - 11025 ] = 3090 / 2625 = <strong>1,1771 ≈ 1,18</strong></p>
                    <p style={{ marginTop: "0.5rem" }}>
                      a = [ 136 - (1,1771 × 105) ] / 6 = [ 136 - 123,595 ] / 6 = 12,405 / 6 = <strong>2,0675 ≈ 2,07</strong>
                    </p>
                  </div>
                ),
              },
              {
                label: "4. Prediksi untuk Modal 40 Juta Rupiah",
                content: (
                  <div>
                    <p>Persamaan: Ŷ = 2,07 + 1,18X</p>
                    <p>Untuk X = 40:</p>
                    <p>Ŷ = 2,07 + 1,18(40) = 2,07 + 47,2 = <strong>49,27 juta rupiah</strong></p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Persamaan Regresi: <strong>Ŷ = 2,07 + 1,18X</strong>
                <br />
                Prediksi omzet bulanan dengan modal Rp 40.000.000 adalah <strong>Rp 49.270.000</strong>
              </div>
            }
            interpretasi="Setiap penambahan modal usaha sebesar Rp 1.000.000, omzet penjualan bulanan diproyeksikan bertambah rata-rata sebesar Rp 1.180.000. Konstanta Rp 2.070.000 mencerminkan omzet minimum tanpa tambahan modal belanja."
          />

          {/* Section 10: Ringkasan */}
          <SectionHeading id="ringkasan">10. Ringkasan & Intisari Materi</SectionHeading>
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
              <li>Regresi linear sederhana memodelkan hubungan fungsional antara satu variabel bebas (X) dan satu variabel terikat (Y).</li>
              <li>Bentuk umum persamaannya adalah <strong>Ŷ = a + bX</strong>.</li>
              <li>Koefisien kemiringan <strong>b</strong> diperoleh lewat rumus kuadrat terkecil: <code>b = [nΣXY - (ΣX)(ΣY)] / [nΣX² - (ΣX)²]</code>.</li>
              <li>Konstanta titik potong <strong>a</strong> diperoleh dari: <code>a = (ΣY - bΣX) / n</code>.</li>
              <li>Persamaan regresi hanya berlaku valid untuk rentang data yang setara (hindari ekstrapolasi yang terlampau jauh di luar jangkauan data sampel).</li>
            </ul>
          </div>

          {/* Bottom navigation */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mt-12 pt-6 border-t border-[var(--border)]">
            <Link
              href="/materi"
              className="flex items-center justify-center min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              ← Kembali ke Menu Materi
            </Link>
            <Link
              href="/materi/transformasi-fungsi"
              className="flex items-center justify-center min-h-[44px] bg-[var(--accent)] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-center"
            >
              Materi Berikutnya: Transformasi Fungsi →
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
