// Educational component types and reusable UI blocks

import React from "react";

// ---- FormulaBlock ----
// Renders a styled container for math formulas (KaTeX content goes inside)
export function FormulaBlock({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="scroll-touch"
      style={{
        backgroundColor: "var(--accent-light)",
        borderLeft: "3px solid var(--accent)",
        borderRadius: "0 8px 8px 0",
        padding: "1rem 1.25rem",
        margin: "1.25rem 0",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}
      role="region"
      aria-label={title ?? "Formula matematika"}
    >
      {title && (
        <p
          style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--accent)",
            marginBottom: "0.5rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </p>
      )}
      <div style={{ color: "var(--text-primary)" }}>{children}</div>
    </div>
  );
}

// ---- DefinitionBlock ----
export function DefinitionBlock({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--accent-light)",
        borderLeft: "3px solid var(--accent)",
        borderRadius: "0 8px 8px 0",
        padding: "1rem 1.25rem",
        margin: "1.25rem 0",
      }}
    >
      <p
        style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "var(--accent)",
          marginBottom: "0.375rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Definisi
      </p>
      <p
        style={{
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
          fontSize: "1rem",
        }}
      >
        {term}
      </p>
      <div style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

// ---- NoteBlock ----
export function NoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "var(--amber-light)",
        borderLeft: "3px solid var(--amber)",
        borderRadius: "0 8px 8px 0",
        padding: "1rem 1.25rem",
        margin: "1.25rem 0",
      }}
      role="note"
    >
      <p
        style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "var(--amber)",
          marginBottom: "0.375rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Catatan Penting
      </p>
      <div style={{ color: "var(--text-primary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

// ---- WorkedExample ----
interface Step {
  label: string;
  content: React.ReactNode;
}

export function WorkedExample({
  number,
  soal,
  steps,
  jawaban,
  interpretasi,
}: {
  number: number;
  soal: string;
  steps: Step[];
  jawaban: React.ReactNode;
  interpretasi?: string;
}) {
  return (
    <section
      style={{
        border: "1px solid var(--border)",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "1.75rem 0",
      }}
      aria-label={`Contoh soal ${number}`}
    >
      {/* Header */}
      <div
        className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
        style={{
          backgroundColor: "var(--text-primary)",
          padding: "0.875rem 1.25rem",
        }}
      >
        <span
          style={{
            backgroundColor: "var(--accent)",
            color: "#fff",
            fontSize: "0.8125rem",
            fontWeight: 700,
            padding: "0.25rem 0.6rem",
            borderRadius: "4px",
            alignSelf: "flex-start",
            flexShrink: 0,
          }}
        >
          Contoh {number}
        </span>
        <span style={{ color: "#fff", fontSize: "0.9375rem", flex: 1, lineHeight: 1.5 }}>
          {soal}
        </span>
      </div>

      {/* Steps */}
      <div style={{ padding: "1.25rem" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ marginBottom: "1.25rem" }}>
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.375rem",
              }}
            >
              {step.label}
            </p>
            <div style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.75 }}>
              {step.content}
            </div>
          </div>
        ))}

        {/* Final answer */}
        <div
          style={{
            backgroundColor: "var(--accent-light)",
            borderLeft: "3px solid var(--accent)",
            borderRadius: "0 6px 6px 0",
            padding: "0.875rem 1rem",
            marginTop: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.375rem",
            }}
          >
            Jawaban Akhir
          </p>
          <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>
            {jawaban}
          </div>
        </div>

        {interpretasi && (
          <div
            style={{
              backgroundColor: "var(--amber-light)",
              borderLeft: "3px solid var(--amber)",
              borderRadius: "0 6px 6px 0",
              padding: "0.875rem 1rem",
              marginTop: "0.75rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--amber)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.375rem",
              }}
            >
              Interpretasi
            </p>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>
              {interpretasi}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// ---- SectionHeading ----
export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      style={{
        fontSize: "clamp(1.2rem, 3vw, 1.45rem)",
        fontWeight: 700,
        color: "var(--text-primary)",
        marginTop: "2.5rem",
        marginBottom: "0.75rem",
        paddingTop: "0.5rem",
        borderBottom: "2px solid var(--border)",
        paddingBottom: "0.5rem",
        scrollMarginTop: "5.5rem",
      }}
    >
      {children}
    </h2>
  );
}

// ---- SubHeading ----
export function SubHeading({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      id={id}
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
        fontWeight: 600,
        color: "var(--text-primary)",
        marginTop: "1.75rem",
        marginBottom: "0.5rem",
        scrollMarginTop: "5.5rem",
      }}
    >
      {children}
    </h3>
  );
}

// ---- LessonProse ----
export function LessonProse({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.9375rem",
        lineHeight: 1.8,
        color: "var(--text-secondary)",
      }}
    >
      {children}
    </div>
  );
}

// ---- TableOfContents ----
export function TableOfContents({
  items,
}: {
  items: { id: string; label: string; level?: number }[];
}) {
  return (
    <nav aria-label="Daftar isi" style={{ position: "sticky", top: "5rem" }}>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "0.75rem",
        }}
      >
        Daftar Isi
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="toc-link"
              style={{
                display: "block",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "0.3rem 0",
                paddingLeft: item.level === 2 ? "0.75rem" : "0",
                borderLeft: "2px solid transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ---- SubjectSidebar ----
export function SubjectSidebar({
  subjects,
}: {
  subjects: { href: string; label: string; active?: boolean }[];
}) {
  return (
    <nav aria-label="Navigasi materi" style={{ position: "sticky", top: "5rem" }}>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "0.75rem",
        }}
      >
        Materi
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {subjects.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: s.active ? 600 : 400,
                color: s.active ? "var(--accent)" : "var(--text-secondary)",
                backgroundColor: s.active ? "var(--accent-light)" : "transparent",
                textDecoration: "none",
                padding: "0.5rem 0.75rem",
                borderRadius: "6px",
                borderLeft: s.active ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "all 0.15s ease",
              }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
