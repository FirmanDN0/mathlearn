export interface Question {
  id: number;
  subject: "regresi" | "transformasi" | "peluang";
  question: string;
  options: string[];
  answer: number; // 0-indexed
  explanation: string;
}

export const questions: Question[] = [
  // ── Statistika Regresi ──────────────────────────────────────────────────────
  {
    id: 1,
    subject: "regresi",
    question: "Persamaan regresi linear sederhana ditulis sebagai...",
    options: ["Ŷ = a + bX", "Y = aX + b²", "Y = Xa + b", "Ŷ = b + aX²"],
    answer: 0,
    explanation:
      "Persamaan regresi linear sederhana ditulis Ŷ = a + bX, di mana a adalah konstanta (intercept) dan b adalah koefisien regresi (slope/gradien).",
  },
  {
    id: 2,
    subject: "regresi",
    question:
      "Dari data: n = 5, ΣX = 15, ΣY = 25, ΣXY = 85, ΣX² = 55. Nilai b adalah...",
    options: ["0,5", "1", "1,5", "2"],
    answer: 1,
    explanation:
      "b = (nΣXY − ΣXΣY) / (nΣX² − (ΣX)²) = (5×85 − 15×25) / (5×55 − 15²) = (425 − 375) / (275 − 225) = 50 / 50 = 1.",
  },
  {
    id: 3,
    subject: "regresi",
    question:
      "Dari data soal sebelumnya (n = 5, ΣX = 15, ΣY = 25, b = 1), nilai a adalah...",
    options: ["1", "1,5", "2", "2,5"],
    answer: 2,
    explanation:
      "a = (ΣY − b·ΣX) / n = (25 − 1×15) / 5 = 10 / 5 = 2.",
  },
  {
    id: 4,
    subject: "regresi",
    question:
      "Jika persamaan regresi adalah Ŷ = 10 + 3X, prediksi nilai Y saat X = 5 adalah...",
    options: ["20", "25", "30", "35"],
    answer: 1,
    explanation:
      "Ŷ = 10 + 3X = 10 + 3(5) = 10 + 15 = 25.",
  },
  {
    id: 5,
    subject: "regresi",
    question: "Koefisien regresi b = 2,5 artinya...",
    options: [
      "Setiap kenaikan 1 satuan X, Y bertambah 2,5 satuan",
      "Nilai Y saat X = 0 adalah 2,5",
      "Nilai X saat Y = 0 adalah 2,5",
      "Korelasi antara X dan Y adalah 2,5",
    ],
    answer: 0,
    explanation:
      "Koefisien b (slope) menunjukkan perubahan Y untuk setiap kenaikan 1 satuan X. b = 2,5 berarti Y bertambah 2,5 untuk setiap kenaikan 1 satuan X.",
  },

  // ── Transformasi Fungsi ─────────────────────────────────────────────────────
  {
    id: 6,
    subject: "transformasi",
    question: "Fungsi g(x) = f(x) + 4 artinya grafik f(x) digeser...",
    options: [
      "4 satuan ke kanan",
      "4 satuan ke kiri",
      "4 satuan ke atas",
      "4 satuan ke bawah",
    ],
    answer: 2,
    explanation:
      "g(x) = f(x) + k adalah translasi vertikal. k = +4 berarti grafik bergeser 4 satuan ke ATAS.",
  },
  {
    id: 7,
    subject: "transformasi",
    question: "Jika f(x) = x², maka g(x) = f(x − 3) = ...",
    options: ["x² − 3", "x² + 3", "(x − 3)²", "(x + 3)²"],
    answer: 2,
    explanation:
      "g(x) = f(x − 3) = (x − 3)². Translasi horizontal dengan h = 3 menggeser grafik 3 satuan ke kanan.",
  },
  {
    id: 8,
    subject: "transformasi",
    question: "Refleksi fungsi f(x) terhadap sumbu X menghasilkan...",
    options: [
      "g(x) = f(−x)",
      "g(x) = −f(x)",
      "g(x) = f(x) − 1",
      "g(x) = 1/f(x)",
    ],
    answer: 1,
    explanation:
      "Refleksi terhadap sumbu X membalik tanda nilai Y, sehingga g(x) = −f(x).",
  },
  {
    id: 9,
    subject: "transformasi",
    question: "Jika f(x) = x² − 1, maka g(x) = 2f(x) = ...",
    options: ["2x² − 1", "2x² − 2", "x² − 2", "2x² + 1"],
    answer: 1,
    explanation:
      "g(x) = 2f(x) = 2(x² − 1) = 2x² − 2. Dilatasi vertikal dengan faktor 2 mengalikan seluruh nilai Y dengan 2.",
  },
  {
    id: 10,
    subject: "transformasi",
    question: "Fungsi g(x) = f(x + 2) merupakan translasi grafik f(x)...",
    options: [
      "2 satuan ke kanan",
      "2 satuan ke kiri",
      "2 satuan ke atas",
      "2 satuan ke bawah",
    ],
    answer: 1,
    explanation:
      "g(x) = f(x + 2) = f(x − (−2)), berarti h = −2, sehingga grafik bergeser 2 satuan ke KIRI. Jika nilai di dalam tanda kurung bertanda positif, grafik geser ke kiri.",
  },

  // ── Kaidah Pencacahan & Peluang ─────────────────────────────────────────────
  {
    id: 11,
    subject: "peluang",
    question:
      "Dari 52 kartu bridge, diambil 1 kartu secara acak. Peluang mendapat kartu As adalah...",
    options: ["1/52", "4/52 = 1/13", "13/52 = 1/4", "1/4"],
    answer: 1,
    explanation:
      "Ada 4 kartu As dalam 52 kartu. P(As) = 4/52 = 1/13.",
  },
  {
    id: 12,
    subject: "peluang",
    question:
      "Dari 7 siswa akan dipilih 2 orang sebagai perwakilan. Banyak cara pemilihan yang mungkin adalah...",
    options: ["14", "21", "42", "35"],
    answer: 1,
    explanation:
      "Urutan tidak diperhatikan → gunakan kombinasi: C(7,2) = 7! / (2! × 5!) = (7 × 6) / (2 × 1) = 21 cara.",
  },
  {
    id: 13,
    subject: "peluang",
    question: "Peluang komplemen dari kejadian A adalah...",
    options: ["P(A) + 1", "1 − P(A)", "P(A) × 2", "P(A) / P(S)"],
    answer: 1,
    explanation:
      "Peluang komplemen: P(Aᶜ) = 1 − P(A). Ini menyatakan peluang kejadian A tidak terjadi.",
  },
  {
    id: 14,
    subject: "peluang",
    question:
      "Dua dadu dilempar. Jika A = {dadu 1 muncul 3} dan B = {dadu 2 muncul 5}, dan kedua kejadian saling bebas, maka P(A ∩ B) = ...",
    options: ["1/6", "1/12", "1/36", "2/36"],
    answer: 2,
    explanation:
      "Karena kedua kejadian saling bebas: P(A ∩ B) = P(A) × P(B) = 1/6 × 1/6 = 1/36.",
  },
  {
    id: 15,
    subject: "peluang",
    question:
      "Dari angka 1–5 akan dibuat bilangan 2 digit tanpa pengulangan. Banyak bilangan yang dapat dibuat adalah...",
    options: ["10", "15", "20", "25"],
    answer: 2,
    explanation:
      "Urutan digit penting (12 ≠ 21) → gunakan permutasi: P(5,2) = 5! / (5−2)! = 5 × 4 = 20 bilangan.",
  },
];
