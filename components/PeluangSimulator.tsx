"use client";

import { useState } from "react";

type Mode = "koin" | "dadu";

interface SimState {
  results: (string | number)[];
  counts: Record<string, number>;
  lastResult: string | number | null;
}

const COIN_OUTCOMES = ["Angka (H)", "Gambar (T)"];
const DICE_OUTCOMES = [1, 2, 3, 4, 5, 6];

function initialState(mode: Mode): SimState {
  const counts: Record<string, number> = {};
  if (mode === "koin") {
    COIN_OUTCOMES.forEach((o) => (counts[o] = 0));
  } else {
    DICE_OUTCOMES.forEach((o) => (counts[String(o)] = 0));
  }
  return { results: [], counts, lastResult: null };
}

function throwOnce(mode: Mode): string | number {
  if (mode === "koin") {
    return COIN_OUTCOMES[Math.random() < 0.5 ? 0 : 1];
  } else {
    return Math.floor(Math.random() * 6) + 1;
  }
}

function throwN(mode: Mode, n: number): (string | number)[] {
  return Array.from({ length: n }, () => throwOnce(mode));
}

export default function PeluangSimulator() {
  const [mode, setMode] = useState<Mode>("koin");
  const [sim, setSim] = useState<SimState>(() => initialState("koin"));

  function switchMode(m: Mode) {
    setMode(m);
    setSim(initialState(m));
  }

  function doThrow(n: number) {
    const newThrows = throwN(mode, n);
    setSim((prev) => {
      const newCounts = { ...prev.counts };
      newThrows.forEach((r) => {
        const key = String(r);
        newCounts[key] = (newCounts[key] ?? 0) + 1;
      });
      return {
        results: [...prev.results, ...newThrows],
        counts: newCounts,
        lastResult: newThrows[newThrows.length - 1],
      };
    });
  }

  function doReset() {
    setSim(initialState(mode));
  }

  const total = sim.results.length;
  const outcomes = mode === "koin" ? COIN_OUTCOMES : DICE_OUTCOMES.map(String);
  const theoreticalP = mode === "koin" ? "1/2" : "1/6";
  const theoreticalDecimal = mode === "koin" ? 0.5 : 1 / 6;

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "var(--surface)",
      }}
      aria-label="Simulasi Peluang"
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "var(--accent-light)",
          borderBottom: "1px solid var(--border)",
          padding: "1rem 1.5rem",
        }}
      >
        <p style={{ fontWeight: 700, color: "var(--accent)", fontSize: "0.9375rem" }}>
          Simulasi Peluang
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
          Lempar koin atau dadu untuk membandingkan probabilitas empiris vs teoretis
        </p>
      </div>

      {/* Mode tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--bg)",
        }}
        role="tablist"
        aria-label="Pilih alat simulasi"
      >
        {(["koin", "dadu"] as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => switchMode(m)}
            style={{
              flex: 1,
              padding: "0.75rem 1rem",
              border: "none",
              borderBottom: mode === m ? "2px solid var(--accent)" : "2px solid transparent",
              backgroundColor: "transparent",
              color: mode === m ? "var(--accent)" : "var(--text-secondary)",
              fontWeight: mode === m ? 600 : 400,
              fontSize: "0.9375rem",
              cursor: "pointer",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            {m === "koin" ? "Lempar Koin" : "Lempar Dadu"}
          </button>
        ))}
      </div>

      <div style={{ padding: "1.5rem" }}>
        {/* Current result display */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "7rem",
              height: "7rem",
              borderRadius: "50%",
              backgroundColor: sim.lastResult !== null ? "var(--accent-light)" : "var(--bg)",
              border: `2px solid ${sim.lastResult !== null ? "var(--accent)" : "var(--border)"}`,
              fontSize: sim.lastResult !== null ? "2.5rem" : "1rem",
              fontWeight: 700,
              color: sim.lastResult !== null ? "var(--accent)" : "var(--text-muted)",
              transition: "all 0.15s ease",
            }}
            aria-live="polite"
            aria-label={sim.lastResult !== null ? `Hasil terakhir: ${sim.lastResult}` : "Belum ada hasil"}
          >
            {sim.lastResult !== null
              ? mode === "koin"
                ? String(sim.lastResult).startsWith("Angka")
                  ? "H"
                  : "T"
                : String(sim.lastResult)
              : "?"}
          </div>
          {sim.lastResult !== null && (
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              Hasil terakhir: <strong style={{ color: "var(--text-primary)" }}>{sim.lastResult}</strong>
            </p>
          )}
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <button
            onClick={() => doThrow(1)}
            style={{
              padding: "0.6rem 1.25rem",
              backgroundColor: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              cursor: "pointer",
            }}
          >
            Lempar 1x
          </button>
          <button
            onClick={() => doThrow(10)}
            style={{
              padding: "0.6rem 1.25rem",
              backgroundColor: "var(--accent)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              cursor: "pointer",
            }}
          >
            Lempar 10x
          </button>
          <button
            onClick={doReset}
            style={{
              padding: "0.6rem 1.25rem",
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.9375rem",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>

        {/* Empty state */}
        {total === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "1.5rem",
              color: "var(--text-muted)",
              fontSize: "0.9375rem",
            }}
          >
            Belum ada lemparan. Tekan tombol di atas untuk memulai simulasi.
          </div>
        )}

        {/* Frequency table */}
        {total > 0 && (
          <>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.625rem",
              }}
            >
              Tabel Frekuensi : Total lemparan: {total}
            </p>
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: "1.25rem",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--bg)" }}>
                    <th
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "left",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--text-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      Hasil
                    </th>
                    <th
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "right",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--text-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      Frekuensi
                    </th>
                    <th
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "right",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--text-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      P. Empiris
                    </th>
                    <th
                      style={{
                        padding: "0.625rem 1rem",
                        textAlign: "right",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--text-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      P. Teoretis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {outcomes.map((outcome, i) => {
                    const count = sim.counts[outcome] ?? 0;
                    const empirical = total > 0 ? count / total : 0;
                    const diff = Math.abs(empirical - theoreticalDecimal);
                    const isClose = diff < 0.05;
                    return (
                      <tr
                        key={outcome}
                        style={{
                          backgroundColor:
                            i % 2 === 0 ? "var(--surface)" : "var(--bg)",
                        }}
                      >
                        <td
                          style={{
                            padding: "0.5rem 1rem",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          {outcome}
                        </td>
                        <td
                          style={{
                            padding: "0.5rem 1rem",
                            textAlign: "right",
                            fontSize: "0.9375rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          {count}
                        </td>
                        <td
                          style={{
                            padding: "0.5rem 1rem",
                            textAlign: "right",
                            fontSize: "0.9375rem",
                            color: "var(--text-primary)",
                            fontFamily: "monospace",
                          }}
                        >
                          {empirical.toFixed(4)}
                        </td>
                        <td
                          style={{
                            padding: "0.5rem 1rem",
                            textAlign: "right",
                            fontSize: "0.9375rem",
                            fontFamily: "monospace",
                            color: isClose ? "var(--green)" : "var(--text-secondary)",
                            fontWeight: isClose ? 600 : 400,
                          }}
                        >
                          {theoreticalP} ≈ {theoreticalDecimal.toFixed(4)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Hukum bilangan besar note */}
            <div
              style={{
                backgroundColor: "var(--amber-light)",
                borderLeft: "3px solid var(--amber)",
                borderRadius: "0 6px 6px 0",
                padding: "0.875rem 1.25rem",
              }}
              role="note"
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--amber)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "0.25rem",
                }}
              >
                Hukum Bilangan Besar
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-primary)", lineHeight: 1.7 }}>
                Semakin banyak percobaan, probabilitas empiris mendekati probabilitas teoretis (
                {theoreticalP}). Coba lempar lebih banyak untuk melihat pola ini!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
