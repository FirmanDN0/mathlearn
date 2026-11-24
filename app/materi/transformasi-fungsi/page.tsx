import type { Metadata } from "next";
import Link from "next/link";
import TransformasiChart from "@/components/TransformasiChart";
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
  title: "Transformasi Fungsi",
  description:
    "Materi pembelajaran Transformasi Fungsi matematika untuk siswa SMK Kelas XII. Translasi, refleksi, dilatasi, dan visualisasi interaktif.",
};

const subjectsNav = [
  { href: "/materi/statistika-regresi", label: "01. Statistika Regresi", active: false },
  { href: "/materi/transformasi-fungsi", label: "02. Transformasi Fungsi", active: true },
  { href: "/materi/kaidah-pencacahan-peluang", label: "03. Kaidah Pencacahan & Peluang", active: false },
];

const tocItems = [
  { id: "pengertian", label: "Pengertian Transformasi Fungsi" },
  { id: "translasi-vertikal", label: "Translasi Vertikal: g(x) = f(x) + k" },
  { id: "translasi-horizontal", label: "Translasi Horizontal: g(x) = f(x - h)" },
  { id: "refleksi", label: "Refleksi Sumbu X dan Sumbu Y" },
  { id: "dilatasi-vertikal", label: "Dilatasi Vertikal: g(x) = a·f(x)" },
  { id: "dilatasi-horizontal", label: "Dilatasi Horizontal: g(x) = f(x/a)" },
  { id: "kombinasi", label: "Kombinasi Transformasi" },
  { id: "visualisasi", label: "Eksplorasi Grafik Interaktif" },
  { id: "contoh-1", label: "Contoh Soal 1: Pergeseran Parabola" },
  { id: "contoh-2", label: "Contoh Soal 2: Refleksi & Dilatasi Kuadrat" },
  { id: "ringkasan", label: "Tabel Rangkuman Transformasi" },
];

export default function TransformasiFungsiPage() {
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
          Transformasi Fungsi
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
            currentSubject="02. Transformasi Fungsi"
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
              Materi 02 : Kelas XII SMK
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
              Transformasi Fungsi
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Pelajari bagaimana persamaan aljabar mengontrol bentuk kurva grafik secara geometris melalui translasi (pergeseran), refleksi (pencerminan), dan dilatasi (perbesaran/pengecilan skala).
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
              <li>Memahami konsep pemetaan fungsi asal f(x) ke fungsi bayangan g(x).</li>
              <li>Menganalisis dampak translasi vertikal dan horizontal terhadap titik koordinat grafik.</li>
              <li>Menentukan formula fungsi hasil refleksi terhadap sumbu X dan sumbu Y.</li>
              <li>Menganalisis peregangan dan pemampatan kurva melalui dilatasi vertikal dan horizontal.</li>
              <li>Menyelesaikan persoalan kombinasi transformasi fungsi linear dan kuadrat.</li>
            </ul>
          </div>

          {/* Section 1: Pengertian */}
          <SectionHeading id="pengertian">1. Pengertian Transformasi Fungsi</SectionHeading>
          <LessonProse>
            <p>
              Dalam pemrograman grafika komputer, animasi web, maupun perancangan teknik di SMK, manipulasi bentuk objek dilakukan dengan menerapkan transformasi matematis pada fungsi dasarnya.
            </p>
            <DefinitionBlock term="Transformasi Fungsi">
              Transformasi fungsi adalah operasi matematis yang mengubah posisi, orientasi, atau ukuran grafik suatu fungsi awal f(x) tanpa mengubah sifat dasar relasinya, menghasilkan fungsi baru g(x).
            </DefinitionBlock>
            <p>
              Tiga jenis transformasi dasar yang dipelajari pada kurikulum matematika Kelas XII adalah:
            </p>
            <ol style={{ paddingLeft: "1.25rem", margin: "0.5rem 0", color: "var(--text-secondary)" }}>
              <li><strong>Translasi (Pergeseran):</strong> Memindahkan posisi setiap titik pada grafik ke arah horizontal atau vertikal sejauh jarak tertentu tanpa mengubah ukuran dan bentuk kurva.</li>
              <li><strong>Refleksi (Pencerminan):</strong> Membalik kurva terhadap sumbu koordinat (sumbu X atau sumbu Y) seperti bayangan cermin.</li>
              <li><strong>Dilatasi (Peregangan/Penyempitan Skala):</strong> Mengalikan koordinat dengan faktor skala sehingga kurva tampak lebih curam, lebih landai, lebih ramping, atau lebih melebar.</li>
            </ol>
          </LessonProse>

          {/* Section 2: Translasi Vertikal */}
          <SectionHeading id="translasi-vertikal">2. Translasi Vertikal: g(x) = f(x) + k</SectionHeading>
          <LessonProse>
            <p>
              Translasi vertikal terjadi ketika konstanta <em>k</em> ditambahkan secara langsung pada nilai keluaran fungsi <em>f(x)</em>:
            </p>
            <FormulaBlock title="Rumus Translasi Vertikal">
              <div style={{ fontSize: "1.375rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                g(x) = f(x) + k
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                Aturan pergeseran:
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                  <li>Jika <strong>k &gt; 0</strong>: Seluruh grafik bergeser ke <strong>ATAS</strong> sejauh k satuan. Titik (x, y) berpindah menjadi (x, y + k).</li>
                  <li>Jika <strong>k &lt; 0</strong>: Seluruh grafik bergeser ke <strong>BAWAH</strong> sejauh |k| satuan. Titik (x, y) berpindah menjadi (x, y - |k|).</li>
                </ul>
              </div>
            </FormulaBlock>
            <p>
              Contoh nyata: Jika f(x) = x², maka kurva g(x) = x² + 3 adalah parabola yang titik puncaknya naik dari (0, 0) ke (0, 3).
            </p>
          </LessonProse>

          {/* Section 3: Translasi Horizontal */}
          <SectionHeading id="translasi-horizontal">3. Translasi Horizontal: g(x) = f(x - h)</SectionHeading>
          <LessonProse>
            <p>
              Translasi horizontal terjadi ketika manipulasi konstanta diterapkan langsung di dalam argumen variabel bebas <em>x</em> sebelum dievaluasi oleh fungsi:
            </p>
            <FormulaBlock title="Rumus Translasi Horizontal">
              <div style={{ fontSize: "1.375rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                g(x) = f(x - h)
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                Aturan arah pergeseran:
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                  <li>Jika <strong>h &gt; 0</strong> (bentuk <em>f(x - h)</em>): Grafik bergeser ke <strong>KANAN</strong> sejauh h satuan. Titik (x, y) berpindah menjadi (x + h, y).</li>
                  <li>Jika <strong>h &lt; 0</strong> (bentuk <em>f(x + |h|)</em>): Grafik bergeser ke <strong>KIRI</strong> sejauh |h| satuan. Titik (x, y) berpindah menjadi (x - |h|, y).</li>
                </ul>
              </div>
            </FormulaBlock>
            <NoteBlock>
              <strong>Perhatian Khusus (Sering Keliru!):</strong> Arah translasi horizontal tampak <em>berlawanan tanda</em> secara intuitif:
              <br />
              • g(x) = (x - 4)² artinya bergeser ke <strong>KANAN</strong> sejauh 4 satuan (karena h = +4).
              <br />
              • g(x) = (x + 4)² artinya bergeser ke <strong>KIRI</strong> sejauh 4 satuan (karena h = -4).
              <br />
              Hal ini terjadi karena untuk mencapai nilai y yang sama, variabel x yang baru harus mengimbangi pergeseran tersebut agar isi dalam kurung bernilai sama seperti fungsi aslinya.
            </NoteBlock>
          </LessonProse>

          {/* Section 4: Refleksi */}
          <SectionHeading id="refleksi">4. Refleksi Terhadap Sumbu X dan Sumbu Y</SectionHeading>
          <LessonProse>
            <p>
              Refleksi adalah transformasi yang membalik posisi grafik terhadap garis acuan:
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
                <SubHeading>A. Refleksi Terhadap Sumbu X: g(x) = -f(x)</SubHeading>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Tanda negatif diletakkan di depan seluruh fungsi. Nilai absis (x) tetap sama, namun ordinat (y) berlawanan tanda:
                  <br />
                  <strong>(x, y) → (x, -y)</strong>
                  <br />
                  Grafik yang tadinya membuka ke atas akan terbalik membuka ke bawah.
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
                <SubHeading>B. Refleksi Terhadap Sumbu Y: g(x) = f(-x)</SubHeading>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                  Tanda negatif disubstitusikan langsung menggantikan variabel x. Nilai ordinat (y) tetap sama, sedangkan absis (x) berlawanan tanda:
                  <br />
                  <strong>(x, y) → (-x, y)</strong>
                  <br />
                  Grafik sebelah kanan berpindah ke sebelah kiri sumbu Y dan sebaliknya.
                </p>
              </div>
            </div>
          </LessonProse>

          {/* Section 5: Dilatasi Vertikal */}
          <SectionHeading id="dilatasi-vertikal">5. Dilatasi Vertikal: g(x) = a · f(x)</SectionHeading>
          <LessonProse>
            <p>
              Dilatasi vertikal mengubah skala grafik terhadap sumbu horizontal dengan faktor pengali <em>a ≠ 0</em>:
            </p>
            <FormulaBlock title="Rumus Dilatasi Vertikal">
              <div style={{ fontSize: "1.375rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                g(x) = a · f(x)
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                Pengaruh nilai |a| terhadap grafik:
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                  <li>Jika <strong>|a| &gt; 1</strong>: Grafik mengalami <strong>peregangan vertikal (vertically stretched)</strong> menjauhi sumbu X. Kurva tampak semakin curam atau tinggi.</li>
                  <li>Jika <strong>0 &lt; |a| &lt; 1</strong>: Grafik mengalami <strong>pemampatan vertikal (vertically compressed)</strong> mendekati sumbu X. Kurva tampak semakin mendatar atau rendah.</li>
                  <li>Jika <strong>a &lt; 0</strong>: Terjadi dilatasi sekaligus refleksi terhadap sumbu X.</li>
                </ul>
              </div>
            </FormulaBlock>
          </LessonProse>

          {/* Section 6: Dilatasi Horizontal */}
          <SectionHeading id="dilatasi-horizontal">6. Dilatasi Horizontal: g(x) = f(x / a)</SectionHeading>
          <LessonProse>
            <p>
              Dilatasi horizontal mengubah ukuran grafik secara mendatar terhadap sumbu Y:
            </p>
            <FormulaBlock title="Rumus Dilatasi Horizontal">
              <div style={{ fontSize: "1.375rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                g(x) = f(b · x) &nbsp;&nbsp;atau&nbsp;&nbsp; g(x) = f(x / a)
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                Ketika ditulis dalam bentuk g(x) = f(b·x):
                <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                  <li>Jika <strong>|b| &gt; 1</strong>: Grafik mengalami <strong>pemampatan horizontal</strong> (kurva menyempit ke arah sumbu Y dengan faktor 1/|b|).</li>
                  <li>Jika <strong>0 &lt; |b| &lt; 1</strong>: Grafik mengalami <strong>peregangan horizontal</strong> (kurva melebar menjauhi sumbu Y dengan faktor 1/|b|).</li>
                </ul>
              </div>
            </FormulaBlock>
          </LessonProse>

          {/* Section 7: Kombinasi Transformasi */}
          <SectionHeading id="kombinasi">7. Kombinasi Transformasi</SectionHeading>
          <LessonProse>
            <p>
              Dalam soal matematika ujian SMK, beberapa transformasi kerap diterapkan secara bertahap pada satu fungsi. Bentuk umum fungsi hasil kombinasi transformasi adalah:
            </p>
            <FormulaBlock title="Bentuk Umum Kombinasi Transformasi">
              <div style={{ fontSize: "1.375rem", fontWeight: 700, textAlign: "center", margin: "0.5rem 0" }}>
                g(x) = a · f(b(x - h)) + k
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                Urutan kerja evaluasi titik:
                <ol style={{ listStyle: "decimal", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                  <li>Pergeseran horizontal sejauh <strong>h</strong> satuan.</li>
                  <li>Refleksi / dilatasi horizontal dengan faktor <strong>b</strong>.</li>
                  <li>Refleksi / dilatasi vertikal dengan pengali <strong>a</strong>.</li>
                  <li>Pergeseran vertikal sejauh <strong>k</strong> satuan.</li>
                </ol>
              </div>
            </FormulaBlock>
          </LessonProse>

          {/* Section 8: Visualisasi Interaktif */}
          <SectionHeading id="visualisasi">8. Eksplorasi Grafik Transformasi Interaktif</SectionHeading>
          <LessonProse>
            <p>
              Uji pemahaman Anda secara langsung dengan memanipulasi slider dan saklar di bawah ini. Anda dapat memilih fungsi dasar (kuadrat x², linear x, atau nilai mutlak |x|), kemudian mengubah konstanta pergeseran vertikal k, pergeseran horizontal h, faktor dilatasi a, dan toggle refleksi.
            </p>
          </LessonProse>

          {/* Interactive Transformasi Chart */}
          <div style={{ margin: "2rem 0" }}>
            <TransformasiChart />
          </div>

          {/* Section 9: Contoh Soal 1 */}
          <SectionHeading id="contoh-1">9. Contoh Soal 1: Pergeseran Parabola</SectionHeading>
          <WorkedExample
            number={1}
            soal="Diketahui fungsi kuadrat f(x) = x². Tentukan persamaan dan sifat grafik fungsi g(x) jika grafik f(x) ditranslasikan 2 satuan ke kanan dan 3 satuan ke atas!"
            steps={[
              {
                label: "1. Identifikasi Jenis Transformasi",
                content: (
                  <div>
                    <p>Fungsi awal: f(x) = x²</p>
                    <p>Pergeseran horizontal: 2 satuan ke kanan → h = +2</p>
                    <p>Pergeseran vertikal: 3 satuan ke atas → k = +3</p>
                  </div>
                ),
              },
              {
                label: "2. Penerapan Translasi Horizontal",
                content: (
                  <div>
                    <p>Rumus translasi horizontal: f(x - h)</p>
                    <p>Substitusikan h = 2 ke dalam f(x):</p>
                    <p>f(x - 2) = <strong>(x - 2)²</strong></p>
                  </div>
                ),
              },
              {
                label: "3. Penerapan Translasi Vertikal",
                content: (
                  <div>
                    <p>Rumus gabungan: g(x) = f(x - h) + k</p>
                    <p>Substitusikan k = 3:</p>
                    <p>g(x) = <strong>(x - 2)² + 3</strong></p>
                    <p>Jika dijabarkan ke bentuk umum kuadrat:</p>
                    <p>g(x) = (x² - 4x + 4) + 3 = <strong>x² - 4x + 7</strong></p>
                  </div>
                ),
              },
              {
                label: "4. Uji Titik Puncak Koordinat",
                content: (
                  <div>
                    <p>Titik puncak asal f(x) = x² berada di koordinat (0, 0).</p>
                    <p>Setelah ditranslasikan ke kanan 2 satuan dan ke atas 3 satuan:</p>
                    <p>Titik puncak baru = (0 + 2, 0 + 3) = <strong>(2, 3)</strong>.</p>
                    <p>Uji pada rumus g(x): g(2) = (2 - 2)² + 3 = 0 + 3 = 3 (Terbukti tepat!)</p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Persamaan fungsi baru: <strong>g(x) = (x - 2)² + 3</strong> atau <strong>g(x) = x² - 4x + 7</strong>
              </div>
            }
            interpretasi="Grafik g(x) memiliki bentuk kelengkungan parabola yang sama persis dengan f(x) = x², namun seluruh kurvanya telah bergeser sehingga posisi titik puncaknya berpindah dari (0, 0) ke titik (2, 3)."
          />

          {/* Section 10: Contoh Soal 2 */}
          <SectionHeading id="contoh-2">10. Contoh Soal 2: Refleksi dan Dilatasi Bertahap</SectionHeading>
          <WorkedExample
            number={2}
            soal="Sebuah fungsi kuadrat f(x) = x² - 4 dicerminkan (direfleksikan) terhadap sumbu X, kemudian diperbesar secara vertikal dengan faktor skala a = 2. Tentukan persamaan fungsi hasil transformasi g(x) dan tentukan titik puncaknya!"
            steps={[
              {
                label: "1. Data Fungsi Awal",
                content: (
                  <div>
                    <p>f(x) = x² - 4</p>
                    <p>Titik puncak f(x): saat x = 0, y = 0² - 4 = -4 → Titik puncak (0, -4)</p>
                    <p>Titik potong sumbu X: x² - 4 = 0 → (x - 2)(x + 2) = 0 → x = 2 atau x = -2</p>
                  </div>
                ),
              },
              {
                label: "2. Langkah 1: Refleksi Terhadap Sumbu X",
                content: (
                  <div>
                    <p>Fungsi antara h(x) = -f(x)</p>
                    <p>h(x) = -(x² - 4)</p>
                    <p>h(x) = <strong>-x² + 4</strong></p>
                    <p>Dampak visual: Parabola terbalik membuka ke bawah, titik puncak berpindah ke (0, 4).</p>
                  </div>
                ),
              },
              {
                label: "3. Langkah 2: Dilatasi Vertikal dengan Faktor a = 2",
                content: (
                  <div>
                    <p>Fungsi akhir g(x) = a · h(x)</p>
                    <p>g(x) = 2 · (-x² + 4)</p>
                    <p>g(x) = <strong>-2x² + 8</strong></p>
                  </div>
                ),
              },
              {
                label: "4. Analisis Titik Puncak dan Titik Potong Baru",
                content: (
                  <div>
                    <p>Titik puncak g(x): saat x = 0 → g(0) = -2(0)² + 8 = <strong>8</strong> → Titik (0, 8)</p>
                    <p>Titik potong sumbu X baru: -2x² + 8 = 0 → -2(x² - 4) = 0 → x² = 4 → x = ±2.</p>
                    <p>Perhatikan bahwa titik potong sumbu X (akar fungsi) tetap sama di x = -2 dan x = 2, namun puncaknya teregang menjadi dua kali lebih tinggi.</p>
                  </div>
                ),
              },
            ]}
            jawaban={
              <div>
                Persamaan fungsi hasil transformasi: <strong>g(x) = -2x² + 8</strong>
                <br />
                Titik puncak kurva baru: <strong>(0, 8)</strong>
              </div>
            }
            interpretasi="Grafik g(x) merupakan parabola yang membuka ke bawah (akibat refleksi sumbu X) dan mengalami peregangan vertikal dua kali lipat, sehingga titik puncaknya yang semula di (0, -4) bertransformasi menjadi (0, 8)."
          />

          {/* Section 11: Ringkasan */}
          <SectionHeading id="ringkasan">11. Tabel Rangkuman Rumus Transformasi</SectionHeading>
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
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Jenis Transformasi</th>
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Rumus g(x)</th>
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Perubahan Titik (x, y)</th>
                  <th style={{ padding: "0.75rem", border: "1px solid var(--border)" }}>Efek Geometris</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Translasi Vertikal</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>f(x) + k</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>(x, y + k)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Naik jika k &gt; 0, turun jika k &lt; 0</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Translasi Horizontal</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>f(x - h)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>(x + h, y)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Kanan jika h &gt; 0, kiri jika h &lt; 0</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Refleksi Sumbu X</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>-f(x)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>(x, -y)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Kurva terbalik atas/bawah</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Refleksi Sumbu Y</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>f(-x)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>(-x, y)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Kurva terbalik kiri/kanan</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Dilatasi Vertikal</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>a · f(x)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>(x, a · y)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Regang jika |a| &gt; 1, mampat jika |a| &lt; 1</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)", fontWeight: 600 }}>Dilatasi Horizontal</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>f(b · x)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>(x / b, y)</td>
                  <td style={{ padding: "0.6rem", border: "1px solid var(--border)" }}>Mampat jika |b| &gt; 1, regang jika |b| &lt; 1</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom navigation */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mt-12 pt-6 border-t border-[var(--border)]">
            <Link
              href="/materi/statistika-regresi"
              className="flex items-center justify-center min-h-[44px] text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              ← Materi Sebelumnya: Statistika Regresi
            </Link>
            <Link
              href="/materi/kaidah-pencacahan-peluang"
              className="flex items-center justify-center min-h-[44px] bg-[var(--accent)] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-center"
            >
              Materi Berikutnya: Kaidah Pencacahan & Peluang →
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
