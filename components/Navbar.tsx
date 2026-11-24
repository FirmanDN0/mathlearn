"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/materi", label: "Materi" },
  { href: "/latihan", label: "Latihan" },
];

const subjectShortcuts = [
  { href: "/materi/statistika-regresi", label: "01. Statistika Regresi" },
  { href: "/materi/transformasi-fungsi", label: "02. Transformasi Fungsi" },
  { href: "/materi/kaidah-pencacahan-peluang", label: "03. Kaidah Pencacahan & Peluang" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile nav on escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Close mobile nav when pathname changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo wordmark */}
          <Link
            href="/"
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
              textDecoration: "none",
            }}
            aria-label="MathLearn - Halaman Utama"
          >
            Math<span style={{ color: "var(--accent)" }}>Learn</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      textDecoration: "none",
                      padding: "0.5rem 0.875rem",
                      borderRadius: "6px",
                      display: "block",
                      transition: "color 0.15s ease, background-color 0.15s ease",
                      borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle button (min 44x44px touch target) */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center tap-target"
            style={{
              width: 44,
              height: 44,
              borderRadius: "6px",
              border: "1px solid var(--border)",
              background: "transparent",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            style={{
              borderTop: "1px solid var(--border)",
              paddingBottom: "1.25rem",
              paddingTop: "0.5rem",
            }}
          >
            <ul role="list" className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.9375rem",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "var(--accent)" : "var(--text-primary)",
                        textDecoration: "none",
                        padding: "0.625rem 0.875rem",
                        borderRadius: "6px",
                        backgroundColor: isActive ? "var(--accent-light)" : "transparent",
                        minHeight: 44,
                      }}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Quick access to individual subject lessons on mobile */}
            <div
              style={{
                marginTop: "0.75rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "0 0.875rem",
                  marginBottom: "0.375rem",
                }}
              >
                Materi Pelajaran:
              </p>
              <ul role="list" className="flex flex-col gap-1">
                {subjectShortcuts.map((s) => {
                  const isActive = pathname === s.href;
                  return (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "var(--accent)" : "var(--text-secondary)",
                          textDecoration: "none",
                          padding: "0.5rem 0.875rem",
                          borderRadius: "6px",
                          backgroundColor: isActive ? "var(--accent-light)" : "transparent",
                          minHeight: 44,
                        }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
