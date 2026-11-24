"use client";

import { useState, useMemo, useEffect } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Scatter,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Raw dataset: jam belajar (X) vs nilai ujian (Y)
const RAW_DATA = [
  { x: 2, y: 55 },
  { x: 3, y: 60 },
  { x: 4, y: 65 },
  { x: 5, y: 72 },
  { x: 6, y: 75 },
  { x: 7, y: 82 },
  { x: 8, y: 88 },
];

// Calculate regression coefficients from scratch
function calcRegression(data: { x: number; y: number }[]) {
  const n = data.length;
  const sumX = data.reduce((s, d) => s + d.x, 0);
  const sumY = data.reduce((s, d) => s + d.y, 0);
  const sumXY = data.reduce((s, d) => s + d.x * d.y, 0);
  const sumX2 = data.reduce((s, d) => s + d.x * d.x, 0);

  const b = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const a = (sumY - b * sumX) / n;

  return { a, b, n, sumX, sumY, sumXY, sumX2 };
}

// Generate regression line points from xMin to xMax
function regressionLine(a: number, b: number, xMin: number, xMax: number) {
  const points = [];
  for (let x = xMin; x <= xMax; x += 0.5) {
    points.push({ x: parseFloat(x.toFixed(1)), regrY: parseFloat((a + b * x).toFixed(4)) });
  }
  return points;
}

interface TooltipPayload {
  name: string;
  value: number;
  color: string;
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        padding: "0.5rem 0.75rem",
        fontSize: "0.8125rem",
        color: "var(--text-primary)",
      }}
    >
      {payload.map((p, i) => (
        <div key={i}>
          <span style={{ color: p.color }}>{p.name}: </span>
          <strong>{typeof p.value === "number" ? p.value.toFixed(2) : p.value}</strong>
        </div>
      ))}
    </div>
  );
}

export default function RegresiChart() {
  const [mounted, setMounted] = useState(false);
  const [inputX, setInputX] = useState<string>("5");

  useEffect(() => {
    setMounted(true);
  }, []);

  const { a, b } = useMemo(() => calcRegression(RAW_DATA), []);

  // Merge scatter data and regression line data for ComposedChart
  const lineData = useMemo(() => regressionLine(a, b, 1, 10), [a, b]);

  // Scatter data formatted for Recharts Scatter
  const scatterData = RAW_DATA.map((d) => ({ x: d.x, y: d.y }));

  // Prediction
  const xVal = parseFloat(inputX);
  const xValid = !isNaN(xVal) && xVal >= 1 && xVal <= 15;
  const predictedY = xValid ? a + b * xVal : null;

  if (!mounted) {
    return (
      <div
        className="h-64 sm:h-80 w-full"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          color: "var(--text-secondary)",
          fontSize: "0.875rem",
        }}
      >
        Memuat grafik regresi...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Chart */}
      <div className="h-64 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart margin={{ top: 10, right: 15, left: -10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 11]}
              tickCount={12}
              label={{
                value: "Jam Belajar (X)",
                position: "insideBottom",
                offset: -10,
                style: { fontSize: "0.75rem", fill: "var(--text-secondary)" },
              }}
              tick={{ fontSize: 11, fill: "var(--text-secondary)" }}
            />
            <YAxis
              dataKey="y"
              type="number"
              domain={[40, 100]}
              label={{
                value: "Nilai Ujian (Y)",
                angle: -90,
                position: "insideLeft",
                offset: 15,
                style: { fontSize: "0.75rem", fill: "var(--text-secondary)" },
              }}
              tick={{ fontSize: 11, fill: "var(--text-secondary)" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              wrapperStyle={{ fontSize: "0.8125rem", paddingBottom: "0.5rem" }}
            />

            {/* Regression line */}
            <Line
              data={lineData}
              dataKey="regrY"
              name="Garis Regresi"
              stroke="var(--accent)"
              strokeWidth={2}
              dot={false}
              legendType="line"
              type="linear"
            />

            {/* Scatter plot of actual data */}
            <Scatter
              data={scatterData}
              name="Data Siswa"
              fill="var(--chart-2, #22c55e)"
              r={5}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Equation display */}
      <div
        style={{
          backgroundColor: "var(--accent-light)",
          borderLeft: "3px solid var(--accent)",
          borderRadius: "0 6px 6px 0",
          padding: "0.75rem 1rem",
          fontSize: "0.9375rem",
          color: "var(--text-primary)",
          overflowX: "auto",
        }}
      >
        Persamaan regresi:{" "}
        <strong>
          Ŷ = {a.toFixed(2)} + {b.toFixed(4)}X
        </strong>
      </div>

      {/* Predictor input */}
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1rem 1.25rem",
          backgroundColor: "var(--surface)",
        }}
      >
        <label
          htmlFor="regresi-x-input"
          style={{
            display: "block",
            fontWeight: 600,
            fontSize: "0.875rem",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Prediksi Nilai Ujian
        </label>
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
              Jam belajar (X):
            </span>
            <input
              id="regresi-x-input"
              type="number"
              min={1}
              max={15}
              step={0.5}
              value={inputX}
              onChange={(e) => setInputX(e.target.value)}
              style={{
                width: "90px",
                height: "44px",
                padding: "0.375rem 0.5rem",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "1rem",
                color: "var(--text-primary)",
                backgroundColor: "var(--surface)",
                outline: "none",
              }}
              aria-describedby="regresi-prediction"
            />
          </div>
          <input
            type="range"
            min={1}
            max={15}
            step={0.5}
            value={xValid ? xVal : 5}
            onChange={(e) => setInputX(e.target.value)}
            style={{
              flex: 1,
              height: "44px",
              minWidth: "120px",
              accentColor: "var(--accent)",
              cursor: "pointer",
            }}
            aria-label="Geser untuk memilih jam belajar"
          />
        </div>

        {/* Prediction result */}
        <div
          id="regresi-prediction"
          style={{ marginTop: "0.75rem", fontSize: "0.9375rem" }}
          aria-live="polite"
        >
          {xValid && predictedY !== null ? (
            <span style={{ color: "var(--text-primary)" }}>
              Jika X ={" "}
              <strong>
                {xVal} jam
              </strong>
              , prediksi nilai ujian:{" "}
              <strong style={{ color: "var(--accent)", fontSize: "1.0625rem" }}>
                Ŷ = {predictedY.toFixed(2)}
              </strong>
            </span>
          ) : (
            <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
              Masukkan nilai X antara 1 dan 15.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
