"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, BookOpen, ListTree } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  level?: number;
}

interface SubjectItem {
  href: string;
  label: string;
  active?: boolean;
}

interface MobileLessonNavProps {
  currentSubject: string;
  subjects: SubjectItem[];
  tocItems: TocItem[];
}

export default function MobileLessonNav({
  currentSubject,
  subjects,
  tocItems,
}: MobileLessonNavProps) {
  const [tocOpen, setTocOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  return (
    <div
      className="lg:hidden mb-6"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Action buttons row */}
      <div
        style={{
          display: "flex",
          borderBottom: tocOpen || subjectsOpen ? "1px solid var(--border)" : "none",
        }}
      >
        {/* Toggle TOC */}
        <button
          type="button"
          onClick={() => {
            setTocOpen((o) => !o);
            if (subjectsOpen) setSubjectsOpen(false);
          }}
          aria-expanded={tocOpen}
          aria-label="Buka navigasi daftar isi halaman"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            minHeight: "44px",
            background: tocOpen ? "var(--accent-light)" : "transparent",
            color: tocOpen ? "var(--accent)" : "var(--text-primary)",
            fontWeight: 600,
            fontSize: "0.875rem",
            border: "none",
            borderRight: "1px solid var(--border)",
            cursor: "pointer",
            transition: "background-color 0.15s ease",
          }}
        >
          <ListTree size={16} />
          <span>Daftar Isi Bab</span>
          <ChevronDown
            size={16}
            style={{
              transform: tocOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </button>

        {/* Toggle Subject Switcher */}
        <button
          type="button"
          onClick={() => {
            setSubjectsOpen((o) => !o);
            if (tocOpen) setTocOpen(false);
          }}
          aria-expanded={subjectsOpen}
          aria-label="Pilih materi lain"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            minHeight: "44px",
            background: subjectsOpen ? "var(--accent-light)" : "transparent",
            color: subjectsOpen ? "var(--accent)" : "var(--text-primary)",
            fontWeight: 600,
            fontSize: "0.875rem",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.15s ease",
          }}
        >
          <BookOpen size={16} />
          <span>Ganti Materi</span>
          <ChevronDown
            size={16}
            style={{
              transform: subjectsOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </button>
      </div>

      {/* Expandable Table of Contents list */}
      {tocOpen && (
        <div
          style={{
            maxHeight: "320px",
            overflowY: "auto",
            padding: "0.75rem 1rem",
            backgroundColor: "var(--bg)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            Lompat ke Sub-bab:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setTocOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    paddingLeft: item.level === 2 ? "1.25rem" : "0.75rem",
                    borderLeft: item.level === 2 ? "2px solid var(--border)" : "none",
                    minHeight: "40px",
                  }}
                  className="hover:bg-indigo-50 hover:text-indigo-600 active:bg-indigo-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Expandable Subject Switcher */}
      {subjectsOpen && (
        <div
          style={{
            padding: "0.75rem 1rem",
            backgroundColor: "var(--bg)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
            }}
          >
            Pilih Materi:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            {subjects.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setSubjectsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.625rem 0.875rem",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    fontWeight: s.active ? 600 : 400,
                    backgroundColor: s.active ? "var(--accent-light)" : "var(--surface)",
                    color: s.active ? "var(--accent)" : "var(--text-primary)",
                    border: `1px solid ${s.active ? "var(--accent)" : "var(--border)"}`,
                    textDecoration: "none",
                    minHeight: "44px",
                  }}
                >
                  <span>{s.label}</span>
                  {s.active && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        backgroundColor: "var(--accent)",
                        color: "#fff",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "4px",
                      }}
                    >
                      Aktif
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
