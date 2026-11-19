import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Latihan Soal",
  description: "Kuis matematika interaktif untuk siswa SMK Kelas XII.",
};

export default function LatihanPage() {
  return <QuizClient />;
}
