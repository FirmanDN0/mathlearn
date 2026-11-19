"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/materi", label: "Materi" },
  { href: "/latihan", label: "Latihan" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        backgroundColor: "var(--surface)",
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

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center"
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
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
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
              paddingBottom: "1rem",
            }}
          >
            <ul role="list" className="flex flex-col gap-1 pt-2">
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
                        display: "block",
                        fontSize: "1rem",
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? "var(--accent)" : "var(--text-primary)",
                        textDecoration: "none",
                        padding: "0.75rem 1rem",
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
          </div>
        )}
      </nav>
    </header>
  );
}
