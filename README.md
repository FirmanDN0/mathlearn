# MathLearn

Website pembelajaran matematika interaktif untuk siswa SMK Kelas XII.

## Deskripsi

MathLearn adalah website pendidikan matematika yang dirancang khusus untuk siswa Sekolah Menengah Kejuruan (SMK) Kelas XII. Website ini menjelaskan konsep matematika melalui penjelasan edukatif, formula yang diformat dengan benar, contoh soal yang dikerjakan, dan visualisasi interaktif.

**Dibuat oleh:** Firman Dwi Nugraha  
**Kelas:** XII SIJA 2  
**Tugas:** Pengganti Matematika (Kegiatan KPP)  
**Deadline:** 30 November 2026

## Materi yang Tersedia

1. **Statistika Regresi** - Memahami hubungan linear antara dua variabel dan prediksi nilai
2. **Transformasi Fungsi** - Translasi, refleksi, dan dilatasi grafik fungsi
3. **Kaidah Pencacahan & Peluang Kejadian Majemuk** - Permutasi, kombinasi, dan peluang

## Fitur

- Penjelasan materi lengkap dalam Bahasa Indonesia
- Formula matematika dengan notasi KaTeX
- Minimal 2 contoh soal dengan pembahasan detail per materi
- Grafik regresi linear interaktif dengan prediksi nilai
- Grafik transformasi fungsi interaktif dengan slider
- Kalkulator permutasi dan kombinasi
- Simulasi peluang (lempar koin / dadu)
- Kuis pilihan ganda dengan 15 soal dan penjelasan
- Desain responsif untuk desktop dan mobile

## Teknologi

- **Framework:** Next.js 16 (App Router)
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v4
- **Chart:** Recharts
- **Math:** KaTeX / react-katex
- **Icons:** Lucide React
- **Deploy:** Vercel

## Struktur Folder

```
mathlearn/
├── app/
│   ├── layout.tsx                    # Root layout (Navbar + Footer)
│   ├── page.tsx                      # Homepage
│   ├── materi/
│   │   ├── page.tsx                  # Daftar materi
│   │   ├── statistika-regresi/
│   │   │   └── page.tsx             # Materi Statistika Regresi
│   │   ├── transformasi-fungsi/
│   │   │   └── page.tsx             # Materi Transformasi Fungsi
│   │   └── kaidah-pencacahan-peluang/
│   │       └── page.tsx             # Materi Kaidah Pencacahan
│   └── latihan/
│       ├── page.tsx                  # Halaman latihan soal
│       └── QuizClient.tsx           # Komponen kuis interaktif
├── components/
│   ├── Navbar.tsx                    # Navigasi utama
│   ├── Footer.tsx                    # Footer
│   ├── EducationalComponents.tsx     # Komponen edukatif reusable
│   ├── RegresiChart.tsx             # Grafik regresi interaktif
│   ├── TransformasiChart.tsx        # Grafik transformasi interaktif
│   ├── PermutasiKombinasi.tsx       # Kalkulator P dan C
│   └── PeluangSimulator.tsx         # Simulasi peluang
├── data/
│   └── quizData.ts                  # Data soal kuis
├── DESIGN.md                         # Dokumentasi sistem desain
└── README.md                         # File ini
```

## Instalasi & Pengembangan Lokal

**Prasyarat:** Node.js 18+ dan npm 9+

```bash
# Clone atau masuk ke direktori proyek
cd mathlearn

# Install dependensi
npm install

# Jalankan server development
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build Produksi

```bash
# Build untuk produksi
npm run build

# Jalankan build produksi secara lokal
npm start
```

## Deployment ke Vercel

### Cara 1: Melalui Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy ke produksi
vercel --prod
```

### Cara 2: Melalui GitHub + Vercel Dashboard

1. Push kode ke repository GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik "New Project"
4. Import repository GitHub
5. Pastikan **Root Directory** diset ke `mathlearn`
6. Klik "Deploy"

### Cara 3: Drag & Drop Build

1. Jalankan `npm run build` di lokal
2. Upload folder `.next` ke Vercel Dashboard

**Catatan:** Tidak diperlukan environment variables. Website bersifat sepenuhnya statis.

## Halaman yang Tersedia

| Route | Deskripsi |
|-------|-----------|
| `/` | Halaman utama / beranda |
| `/materi` | Daftar semua materi |
| `/materi/statistika-regresi` | Materi Statistika Regresi |
| `/materi/transformasi-fungsi` | Materi Transformasi Fungsi |
| `/materi/kaidah-pencacahan-peluang` | Materi Kaidah Pencacahan & Peluang |
| `/latihan` | Latihan soal kuis interaktif |

## Lisensi

Dibuat untuk keperluan tugas sekolah. Hak cipta © 2026 Firman Dwi Nugraha.
