"use client";

import { useState, useMemo, useEffect } from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

type BaseFunc = "x2" | "x" | "absx";

function evalBase(fn: BaseFunc, x: number): number {
  switch (fn) {
    case "x2":
      return x * x;
    case "x":
      return x;
    case "absx":
      return Math.abs(x);
  }
}

function baseFuncLabel(fn: BaseFunc): string {
  switch (fn) {
    case "x2":
      return "x²";
    case "x":
      return "x";
    case "absx":
      return "|x|";
  }
}

function buildFormulaString(
  fn: BaseFunc,
  a: number,
  h: number,
  k: number,
  reflectX: boolean,
  reflectY: boolean
): string {
  const sign = reflectX ? "-" : "";
  const aStr = a === 1 ? "" : a % 1 === 0 ? `${a}` : `${a}`;
  const fnName = baseFuncLabel(fn);

  // Build the inner argument
  let innerArg: string;
  if (reflectY && h !== 0) {
    innerArg = h > 0 ? `-(x - ${h})` : `-(x + ${Math.abs(h)})`;
  } else if (reflectY) {
    innerArg = "-x";
  } else if (h > 0) {
    innerArg = `x - ${h}`;
  } else if (h < 0) {
    innerArg = `x + ${Math.abs(h)}`;
  } else {
    innerArg = "x";
  }

  // Build f(inner)
  let fStr: string;
  if (fn === "x2") {
    fStr = `(${innerArg})²`;
  } else if (fn === "absx") {
    fStr = `|${innerArg}|`;
  } else {
    // linear: f(x) = x, so f(innerArg) = innerArg
    fStr = innerArg;
  }

  // Build a * f(...)
  let afStr: string;
  if (aStr === "" && sign === "") {
    afStr = fStr;
  } else if (aStr === "") {
    afStr = `-${fStr}`;
  } else {
    afStr = `${sign}${aStr}·${fStr}`;
  }

  // Add k
  let full: string;
  if (k === 0) {
    full = afStr;
  } else if (k > 0) {
    full = `${afStr} + ${k}`;
  } else {
    full = `${afStr} - ${Math.abs(k)}`;
  }

  return `g(x) = ${full}`;
}

const sliderStyle: React.CSSProperties = {
  width: "100%",
  accentColor: "var(--accent)",
  cursor: "pointer",
};

const controlRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  marginBottom: "0.875rem",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--text-primary)",
  minWidth: "120px",
  flexShrink: 0,
};

const valueStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  fontWeight: 700,
  color: "var(--accent)",
  minWidth: "36px",
  textAlign: "right" as const,
};

const toggleBtnStyle = (active: boolean): React.CSSProperties => ({
  minHeight: "44px",
  minWidth: "44px",
  padding: "0.4rem 1rem",
  borderRadius: "6px",
  border: `1.5px solid ${active ? "var(--accent)" : "var(--border)"}`,
  backgroundColor: active ? "var(--accent)" : "transparent",
  color: active ? "#fff" : "var(--text-secondary)",
  fontWeight: 600,
  fontSize: "0.875rem",
  cursor: "pointer",
  transition: "all 0.15s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function TransformasiChart() {
  const [mounted, setMounted] = useState(false);
  const [baseFunc, setBaseFunc] = useState<BaseFunc>("x2");

  useEffect(() => {
    setMounted(true);
  }, []);
  const [k, setK] = useState(0);
  const [h, setH] = useState(0);
  const [a, setA] = useState(1);
  const [reflectX, setReflectX] = useState(false);
  const [reflectY, setReflectY] = useState(false);

  const data = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 60; i++) {
      const x = -6 + i * (12 / 60);
      const xRounded = Math.round(x * 100) / 100;

      // Original f(x)
      const fy = evalBase(baseFunc, xRounded);

      // Transformed g(x):
      // 1. Apply horizontal reflection to x
      const xReflected = reflectY ? -xRounded : xRounded;
      // 2. Apply horizontal shift
      const xArg = xReflected - h;
      // 3. Evaluate f(x_arg)
      const fVal = evalBase(baseFunc, xArg);
      // 4. Vertical scale
      const scaled = a * fVal;
      // 5. Vertical reflection
      const sign = reflectX ? -1 : 1;
      // 6. Vertical shift
      const gy = sign * scaled + k;

      // Clamp to visible range to avoid chart distortion
      const clamp = (v: number) =>
        Math.abs(v) > 20 ? (v > 0 ? 20 : -20) : v;

      points.push({
        x: xRounded,
        fx: clamp(fy),
        gx: clamp(gy),
      });
    }
    return points;
  }, [baseFunc, k, h, a, reflectX, reflectY]);

  const formula = buildFormulaString(baseFunc, a, h, k, reflectX, reflectY);

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
          borderRadius: "10px",
          color: "var(--text-secondary)",
          fontSize: "0.875rem",
        }}
      >
        Memuat grafik transformasi fungsi...
      </div>
    );
  }

  function handleReset() {
    setBaseFunc("x2");
    setK(0);
    setH(0);
    setA(1);
    setReflectX(false);
    setReflectY(false);
  }

  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        padding: "1rem 1.25rem",
        margin: "1.25rem 0",
      }}
    >
      {/* Chart */}
      <div className="h-64 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 15, bottom: 20, left: -10 }}
          >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--border)"
            opacity={0.6}
          />
          <XAxis
            dataKey="x"
            type="number"
            domain={[-6, 6]}
            ticks={[-6, -4, -2, 0, 2, 4, 6]}
            tickFormatter={(v: number) => v.toString()}
            label={{
              value: "x",
              position: "insideBottomRight",
              offset: -5,
              fontSize: 13,
            }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            domain={[-15, 20]}
            ticks={[-15, -10, -5, 0, 5, 10, 15, 20]}
            tickFormatter={(v: number) => v.toString()}
            label={{
              value: "y",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              fontSize: 13,
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value: any, name: any) => [
              typeof value === "number" ? value.toFixed(2) : String(value ?? ""),
              String(name ?? ""),
            ]}
            labelFormatter={(label: any) => `x = ${label}`}
            contentStyle={{
              fontSize: "0.8125rem",
              borderRadius: "6px",
              border: "1px solid var(--border)",
            }}
          />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value: string) =>
              value === "fx"
                ? "f(x) : Asli"
                : "g(x) : Transformasi"
            }
          />
          <ReferenceLine x={0} stroke="var(--text-muted)" strokeWidth={1.5} />
          <ReferenceLine y={0} stroke="var(--text-muted)" strokeWidth={1.5} />
          <Line
            type="monotone"
            dataKey="fx"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={false}
            name="fx"
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="gx"
            stroke="#F59E0B"
            strokeWidth={2.5}
            dot={false}
            name="gx"
            strokeDasharray="5 3"
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>

      {/* Formula display */}
      <div
        style={{
          backgroundColor: "var(--accent-light)",
          borderLeft: "3px solid var(--accent)",
          borderRadius: "0 6px 6px 0",
          padding: "0.625rem 1rem",
          marginBottom: "1.25rem",
          fontFamily: "monospace",
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--accent)",
        }}
      >
        {formula}
      </div>

      {/* Controls */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "1rem 1.5rem",
        }}
      >
        {/* Base function */}
        <div style={controlRowStyle}>
          <span style={labelStyle}>Fungsi Asal f(x)</span>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {(["x2", "x", "absx"] as BaseFunc[]).map((fn) => (
              <button
                key={fn}
                style={toggleBtnStyle(baseFunc === fn)}
                onClick={() => setBaseFunc(fn)}
                aria-pressed={baseFunc === fn}
              >
                {fn === "x2" ? "x²" : fn === "x" ? "x" : "|x|"}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical shift k */}
        <div style={{ marginBottom: "0.875rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
            <span style={labelStyle}>Translasi Vertikal (k)</span>
            <span style={valueStyle}>{k >= 0 ? `+${k}` : k}</span>
          </div>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={k}
            onChange={(e) => setK(parseFloat(e.target.value))}
            style={sliderStyle}
            aria-label="Nilai k translasi vertikal"
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            <span>-5</span><span>g(x) = f(x) + k</span><span>+5</span>
          </div>
        </div>

        {/* Horizontal shift h */}
        <div style={{ marginBottom: "0.875rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
            <span style={labelStyle}>Translasi Horizontal (h)</span>
            <span style={valueStyle}>{h >= 0 ? `+${h}` : h}</span>
          </div>
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={h}
            onChange={(e) => setH(parseFloat(e.target.value))}
            style={sliderStyle}
            aria-label="Nilai h translasi horizontal"
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            <span>-5</span><span>g(x) = f(x − h)</span><span>+5</span>
          </div>
        </div>

        {/* Vertical scale a */}
        <div style={{ marginBottom: "0.875rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
            <span style={labelStyle}>Dilatasi Vertikal (a)</span>
            <span style={valueStyle}>{a}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={3}
            step={0.25}
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            style={sliderStyle}
            aria-label="Nilai a dilatasi vertikal"
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            <span>0.5</span><span>g(x) = a·f(x)</span><span>3</span>
          </div>
        </div>

        {/* Reflections */}
        <div style={controlRowStyle}>
          <span style={labelStyle}>Refleksi Sumbu X</span>
          <button
            style={toggleBtnStyle(reflectX)}
            onClick={() => setReflectX((v) => !v)}
            aria-pressed={reflectX}
          >
            {reflectX ? "Aktif" : "Nonaktif"}
          </button>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            g(x) = −f(x)
          </span>
        </div>

        <div style={controlRowStyle}>
          <span style={labelStyle}>Refleksi Sumbu Y</span>
          <button
            style={toggleBtnStyle(reflectY)}
            onClick={() => setReflectY((v) => !v)}
            aria-pressed={reflectY}
          >
            {reflectY ? "Aktif" : "Nonaktif"}
          </button>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            g(x) = f(−x)
          </span>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          setK(0);
          setH(0);
          setA(1);
          setReflectX(false);
          setReflectY(false);
          setBaseFunc("x2");
        }}
        style={{
          marginTop: "0.75rem",
          padding: "0.4rem 1rem",
          borderRadius: "6px",
          border: "1px solid var(--border)",
          backgroundColor: "transparent",
          color: "var(--text-secondary)",
          fontSize: "0.8125rem",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}
