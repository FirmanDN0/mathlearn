"use client";

import { useState, useCallback } from "react";
import { questions, type Question } from "@/data/quizData";

// ── Types ────────────────────────────────────────────────────────────────────

type Phase = "category" | "quiz" | "results";
type Category = "semua" | "regresi" | "transformasi" | "peluang";

interface CategoryOption {
  id: Category;
  label: string;
  count: number;
  description: string;
}

// ── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES: CategoryOption[] = [
  {
    id: "semua",
    label: "Semua Materi",
    count: 15,
    description: "Semua topik dalam satu sesi",
  },
  {
    id: "regresi",
    label: "Statistika Regresi",
    count: 5,
    description: "Persamaan dan koefisien regresi",
  },
  {
    id: "transformasi",
    label: "Transformasi Fungsi",
    count: 5,
    description: "Translasi, refleksi, dan dilatasi",
  },
  {
    id: "peluang",
    label: "Kaidah Pencacahan & Peluang",
    count: 5,
    description: "Kombinasi, permutasi, dan peluang",
  },
];

function getScoreMessage(pct: number): { label: string; color: string } {
  if (pct === 100) return { label: "Sempurna", color: "#16a34a" };
  if (pct >= 80) return { label: "Sangat Baik", color: "#2563eb" };
  if (pct >= 60) return { label: "Cukup Baik", color: "#d97706" };
  return { label: "Perlu Latihan Lebih", color: "#dc2626" };
}

// ── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <div style={{ marginBottom: 8 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 4,
          fontSize: 14,
          color: "#6b7280",
        }}
      >
        <span>
          Soal {current} dari {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Progres kuis: soal ${current} dari ${total}`}
        style={{
          height: 8,
          borderRadius: 4,
          background: "#e5e7eb",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "#4f46e5",
            borderRadius: 4,
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

function OptionButton({
  text,
  index,
  selected,
  submitted,
  isCorrect,
  onSelect,
}: {
  text: string;
  index: number;
  selected: boolean;
  submitted: boolean;
  isCorrect: boolean;
  onSelect: (i: number) => void;
}) {
  const labels = ["A", "B", "C", "D"];

  let bg = "#ffffff";
  let border = "2px solid #e5e7eb";
  let color = "#111827";
  let badgeColor = "#e5e7eb";
  let badgeText = "#6b7280";

  if (submitted) {
    if (isCorrect) {
      bg = "#f0fdf4";
      border = "2px solid #16a34a";
      color = "#15803d";
      badgeColor = "#16a34a";
      badgeText = "#ffffff";
    } else if (selected && !isCorrect) {
      bg = "#fef2f2";
      border = "2px solid #dc2626";
      color = "#b91c1c";
      badgeColor = "#dc2626";
      badgeText = "#ffffff";
    }
  } else if (selected) {
    bg = "#4f46e5";
    border = "2px solid #4f46e5";
    color = "#ffffff";
    badgeColor = "rgba(255,255,255,0.3)";
    badgeText = "#ffffff";
  }

  return (
    <button
      onClick={() => !submitted && onSelect(index)}
      disabled={submitted}
      aria-pressed={selected}
      aria-label={`Opsi ${labels[index]}: ${text}${submitted && isCorrect ? " (jawaban benar)" : ""}${submitted && selected && !isCorrect ? " (jawaban salah)" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "12px 16px",
        background: bg,
        border,
        borderRadius: 10,
        color,
        fontSize: 15,
        textAlign: "left",
        cursor: submitted ? "default" : "pointer",
        transition: "all 0.15s ease",
        marginBottom: 8,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: badgeColor,
          color: badgeText,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 13,
        }}
      >
        {labels[index]}
      </span>
      <span style={{ flex: 1 }}>{text}</span>
      {submitted && isCorrect && (
        <span aria-hidden="true" style={{ flexShrink: 0, fontWeight: 700, color: "#16a34a" }}>
          ✓ Benar
        </span>
      )}
      {submitted && selected && !isCorrect && (
        <span aria-hidden="true" style={{ flexShrink: 0, fontWeight: 700, color: "#dc2626" }}>
          ✗ Salah
        </span>
      )}
    </button>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function QuizClient() {
  const [phase, setPhase] = useState<Phase>("category");
  const [selectedCategory, setSelectedCategory] = useState<Category>("semua");
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const startQuiz = useCallback((category: Category) => {
    const filtered =
      category === "semua"
        ? questions
        : questions.filter((q) => q.subject === category);
    setSelectedCategory(category);
    setFilteredQuestions(filtered);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setAnswers(new Array(filtered.length).fill(null));
    setScore(0);
    setPhase("quiz");
  }, []);

  const handleSelectAnswer = useCallback((index: number) => {
    setSelectedAnswer(index);
  }, []);

  const handleSubmit = useCallback(() => {
    if (selectedAnswer === null) return;
    const q = filteredQuestions[currentIndex];
    const isCorrect = selectedAnswer === q.answer;

    setSubmitted(true);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = selectedAnswer;
      return next;
    });
    if (isCorrect) {
      setScore((s) => s + 1);
    }
  }, [selectedAnswer, filteredQuestions, currentIndex]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= filteredQuestions.length) {
      setPhase("results");
    } else {
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      setSubmitted(false);
    }
  }, [currentIndex, filteredQuestions.length]);

  const handleRetry = useCallback(() => {
    startQuiz(selectedCategory);
  }, [startQuiz, selectedCategory]);

  const handleChangeCategory = useCallback(() => {
    setPhase("category");
  }, []);

  // ── Render: Category Selection ─────────────────────────────────────────────

  if (phase === "category") {
    return (
      <main
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "40px 16px",
          fontFamily: "inherit",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#111827",
              margin: 0,
              marginBottom: 8,
            }}
          >
            Latihan Soal
          </h1>
          <p style={{ color: "#6b7280", fontSize: 16, margin: 0 }}>
            Pilih kategori materi untuk memulai kuis
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => startQuiz(cat.id)}
              aria-label={`Mulai kuis ${cat.label}, ${cat.count} soal`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 8,
                padding: "20px 18px",
                minHeight: 52,
                background: "#ffffff",
                border: "2px solid #e5e7eb",
                borderRadius: 14,
                cursor: "pointer",
                textAlign: "left",
                transition: "border-color 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#4f46e5";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 12px rgba(79,70,229,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#111827",
                    marginBottom: 4,
                  }}
                >
                  {cat.label}
                </div>
                <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>
                  {cat.description}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#eef2ff",
                    color: "#4f46e5",
                    fontWeight: 600,
                    fontSize: 12,
                    padding: "2px 10px",
                    borderRadius: 20,
                  }}
                >
                  {cat.count} soal
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>
    );
  }

  // ── Render: Quiz ───────────────────────────────────────────────────────────

  if (phase === "quiz") {
    const q = filteredQuestions[currentIndex];
    const isLast = currentIndex === filteredQuestions.length - 1;

    return (
      <main
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "40px 16px",
          fontFamily: "inherit",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <button
            onClick={handleChangeCategory}
            aria-label="Kembali ke pilihan kategori"
            style={{
              background: "none",
              border: "none",
              color: "#6b7280",
              cursor: "pointer",
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: 0,
            }}
          >
            ← Kategori
          </button>
          <span
            style={{
              fontSize: 13,
              color: "#6b7280",
              background: "#f3f4f6",
              padding: "4px 12px",
              borderRadius: 20,
            }}
          >
            {CATEGORIES.find((c) => c.id === selectedCategory)?.label}
          </span>
        </div>

        <ProgressBar
          current={currentIndex + 1}
          total={filteredQuestions.length}
        />

        {/* Question Card */}
        <section
          aria-label={`Soal ${currentIndex + 1}`}
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: 16,
            padding: "28px 24px",
            marginTop: 20,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: "#111827",
              margin: 0,
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            {q.question}
          </p>

          <div role="group" aria-label="Pilihan jawaban">
            {q.options.map((opt, i) => (
              <OptionButton
                key={i}
                text={opt}
                index={i}
                selected={selectedAnswer === i}
                submitted={submitted}
                isCorrect={i === q.answer}
                onSelect={handleSelectAnswer}
              />
            ))}
          </div>

          {/* Explanation */}
          {submitted && (
            <div
              role="status"
              aria-live="polite"
              style={{
                marginTop: 16,
                padding: "14px 16px",
                background:
                  selectedAnswer === q.answer ? "#f0fdf4" : "#fef2f2",
                border: `1px solid ${selectedAnswer === q.answer ? "#bbf7d0" : "#fecaca"}`,
                borderRadius: 10,
                fontSize: 14,
                color: "#374151",
                lineHeight: 1.6,
              }}
            >
              <strong
                style={{
                  color:
                    selectedAnswer === q.answer ? "#15803d" : "#b91c1c",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                {selectedAnswer === q.answer ? "✓ Jawaban Benar!" : "✗ Jawaban Salah"}
              </strong>
              {q.explanation}
            </div>
          )}

          {/* Action buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 20,
              justifyContent: "flex-end",
            }}
          >
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                aria-disabled={selectedAnswer === null}
                style={{
                  padding: "10px 28px",
                  background:
                    selectedAnswer === null ? "#e5e7eb" : "#4f46e5",
                  color: selectedAnswer === null ? "#9ca3af" : "#ffffff",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor:
                    selectedAnswer === null ? "not-allowed" : "pointer",
                  transition: "background 0.15s ease",
                }}
              >
                Jawab
              </button>
            ) : (
              <button
                onClick={handleNext}
                autoFocus
                style={{
                  padding: "10px 28px",
                  background: "#4f46e5",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                {isLast ? "Lihat Hasil" : "Soal Berikutnya →"}
              </button>
            )}
          </div>
        </section>
      </main>
    );
  }

  // ── Render: Results ────────────────────────────────────────────────────────

  const pct = filteredQuestions.length === 0 ? 0 : Math.round((score / filteredQuestions.length) * 100);
  const { label: scoreLabel, color: scoreColor } = getScoreMessage(pct);

  return (
    <main
      style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: "40px 16px",
        fontFamily: "inherit",
      }}
    >
      {/* Score Summary */}
      <section
        aria-label="Hasil kuis"
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: "36px 24px",
          textAlign: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: scoreColor,
            lineHeight: 1,
            marginBottom: 8,
          }}
          aria-label={`Skor: ${score} dari ${filteredQuestions.length}`}
        >
          {score}/{filteredQuestions.length}
        </div>
        <div style={{ fontSize: 18, color: "#6b7280", marginBottom: 12 }}>
          {pct}% jawaban benar
        </div>
        <div
          style={{
            display: "inline-block",
            fontSize: 20,
            fontWeight: 700,
            color: scoreColor,
            background: `${scoreColor}18`,
            padding: "8px 24px",
            borderRadius: 24,
            marginBottom: 24,
          }}
        >
          {scoreLabel}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <button
            onClick={handleRetry}
            style={{
              padding: "12px 24px",
              minHeight: 44,
              background: "#4f46e5",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Ulangi Kuis
          </button>
          <button
            onClick={handleChangeCategory}
            style={{
              padding: "12px 24px",
              minHeight: 44,
              background: "#ffffff",
              color: "#4f46e5",
              border: "2px solid #4f46e5",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Pilih Kategori Lain
          </button>
        </div>
      </section>

      {/* Review */}
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 16,
        }}
      >
        Pembahasan Soal
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {filteredQuestions.map((q, qi) => {
          const userAnswer = answers[qi];
          const correct = userAnswer === q.answer;
          return (
            <article
              key={q.id}
              aria-label={`Soal ${qi + 1}: ${correct ? "benar" : "salah"}`}
              style={{
                background: "#ffffff",
                border: `1px solid ${correct ? "#bbf7d0" : "#fecaca"}`,
                borderRadius: 12,
                padding: "20px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              {/* Status badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: correct ? "#16a34a" : "#dc2626",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  {correct ? "✓" : "✗"}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#111827",
                    lineHeight: 1.5,
                  }}
                >
                  {qi + 1}. {q.question}
                </p>
              </div>

              {/* Answers */}
              <div
                style={{
                  paddingLeft: 34,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  marginBottom: 10,
                }}
              >
                {userAnswer !== null && userAnswer !== q.answer && (
                  <div style={{ fontSize: 13, color: "#b91c1c" }}>
                    <strong>Jawaban kamu:</strong> {q.options[userAnswer]}
                  </div>
                )}
                <div style={{ fontSize: 13, color: "#15803d" }}>
                  <strong>Jawaban benar:</strong> {q.options[q.answer]}
                </div>
              </div>

              {/* Explanation */}
              <div
                style={{
                  paddingLeft: 34,
                  fontSize: 13,
                  color: "#4b5563",
                  lineHeight: 1.6,
                  borderTop: "1px solid #f3f4f6",
                  paddingTop: 10,
                  marginTop: 6,
                }}
              >
                <strong>Pembahasan: </strong>
                {q.explanation}
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom action */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mt-8">
        <button
          onClick={handleRetry}
          style={{
            padding: "12px 24px",
            minHeight: 44,
            background: "#4f46e5",
            color: "#ffffff",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Ulangi Kuis
        </button>
        <button
          onClick={handleChangeCategory}
          style={{
            padding: "12px 24px",
            minHeight: 44,
            background: "#ffffff",
            color: "#4f46e5",
            border: "2px solid #4f46e5",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Pilih Kategori Lain
        </button>
      </div>
    </main>
  );
}
