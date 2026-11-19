# MathLearn — Design System

## Design Read

> Reading this as: **interactive educational mathematics textbook** for Indonesian Grade 12 SMK students, with a **modern editorial studio** visual language, dial **ENERGY 2 / RHYTHM 2 / MOTION 1**.

---

## Visual Identity

**Product name:** MathLearn  
**Tagline:** Belajar Matematika, Lebih Mudah  
**Author:** Firman Dwi Nugraha, XII SIJA 2  
**Character:** Warm, rigorous, clear. Like a well-designed textbook: trustworthy but not stiff. Educational but not sterile.

---

## Liveliness Dials

| Dial   | Value | Rationale |
|--------|-------|-----------|
| ENERGY | 2     | Engaging but not distracting. Students need to focus on content. |
| RHYTHM | 2     | Mostly structured; subject pages vary with intro prose, formula blocks, examples, charts. |
| MOTION | 1     | Hover states + subtle accordion transitions only. Endless motion distracts reading. |

---

## Color System

**Reason for palette:** Warm neutrals ground the reading experience (avoid harsh white). Indigo accent is used sparingly at key interactions — it reads as academic without being cold. Amber provides semantic warmth for notes and callouts without clashing.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FAF9F6` | Warm off-white page background |
| `--surface` | `#FFFFFF` | Card and elevated surfaces |
| `--border` | `#E5E2DA` | Subtle separators |
| `--text-primary` | `#1A1917` | Main body text (near-black, warm) |
| `--text-secondary` | `#6B6760` | Captions, labels, secondary info |
| `--text-muted` | `#9E9A95` | Placeholder, disabled |
| `--accent` | `#4F46E5` | Indigo — primary CTA, active nav, formula accents |
| `--accent-light` | `#EEF2FF` | Accent background tint (formula blocks, definition boxes) |
| `--accent-hover` | `#4338CA` | Hover state for accent elements |
| `--amber` | `#D97706` | Important notes, callouts |
| `--amber-light` | `#FFFBEB` | Amber background tint |
| `--green` | `#059669` | Correct answers in quiz |
| `--red` | `#DC2626` | Wrong answers in quiz |
| `--chart-1` | `#4F46E5` | Primary data series |
| `--chart-2` | `#F59E0B` | Secondary data series |
| `--chart-3` | `#10B981` | Tertiary / regression line |

**Active palette count:** 2 core (warm neutral + indigo) + 1 accent (amber for notes). Passes R-29.

---

## Typography

**Reason:** Inter for body — widely legible, comfortable for long-form reading, proven in educational contexts. Not chosen as AI default but for its superior numerical glyph rendering which complements KaTeX math. Sized conservatively for extended reading comfort.

```
Font: Inter (Google Fonts)
Math: KaTeX (native)
```

### Type Scale

| Role | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| `page-title` | 2.25rem (36px) | 700 | 1.2 | H1 on subject pages |
| `section-heading` | 1.5rem (24px) | 600 | 1.3 | H2 |
| `sub-heading` | 1.125rem (18px) | 600 | 1.4 | H3 |
| `body` | 1rem (16px) | 400 | 1.75 | Reading text |
| `body-sm` | 0.875rem (14px) | 400 | 1.6 | Captions, labels |
| `code-inline` | 0.875rem (14px) | 500 | — | Variable names |
| `hero-title` | 3rem (48px) | 700 | 1.15 | Homepage H1 only |
| `nav` | 0.9375rem (15px) | 500 | — | Navigation links |

**Anti-slop note:** No uppercase wide-tracked labels. No monospace headings. No oversized decorative type.

---

## Spacing System

Reason: 4px base unit with Tailwind's default scale. Section separation uses larger tokens to create rhythm.

| Token | Value | Usage |
|-------|-------|-------|
| Micro | 4px | Icon gaps, tight labels |
| Small | 8–12px | Inline padding |
| Base | 16px | Default gap |
| Medium | 24–32px | Component padding |
| Section | 48–64px | Between major sections |
| Page | 80–96px | Top/bottom page padding |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 4px | Inline code, small badges |
| `md` | 8px | Cards, formula blocks |
| `lg` | 12px | Major containers |
| `button` | 6px | All buttons (not pill-shaped) |

**Anti-slop note:** No pill-shaped inputs or cards. Radius is consistent and purposeful.

---

## Component Decisions

### Navigation
- Horizontal top bar with logo wordmark (text-based, no generated icon)
- 3 links: Beranda, Materi, Latihan — all with real destinations
- Mobile: hamburger collapse to full-screen overlay with large tap targets
- Active state: indigo underline + weight bump (not just color change)

### Formula Blocks
- Indigo-tinted background (`--accent-light`)
- Left border: 3px solid `--accent`
- KaTeX rendered, horizontally scrollable on mobile
- Reason: visually separates mathematical notation from prose without excessive decoration

### Definition Blocks
- Amber-tinted background for important notes
- Clean border, subtle emphasis
- Reason: signals "this is a key concept" with semantic color, not decoration

### Worked Examples
- Numbered heading with counter
- Structured sections: Soal / Diketahui / Ditanya / Rumus / Langkah / Jawaban
- Step-by-step rendered clearly with KaTeX
- Reason: matches the textbook format students are familiar with

### Cards (Subject Overview)
- Used ONLY for subject cards on /materi — 3 subjects benefit from comparison layout
- Not pill-shaped, no excessive shadows
- Simple border + hover lift (subtle shadow on hover only)
- Reason: comparison of 3 items benefits from spatial grouping

### Interactive Charts
- Recharts library
- Clean grid lines, labeled axes
- Accent color for primary series, amber for secondary
- Responsive container wrapper

---

## Layout Structure

### Homepage
- Header (nav)
- Hero: asymmetric — large heading left, subject preview grid right
- Subjects: editorial layout, NOT identical card grid
- Features: 2-column text list, NOT icon card grid
- Footer: simple 2-column (info + nav), not 4-column template

### Subject Pages (/materi/*)
- 3-column on desktop: narrow left sidebar (subject nav) + wide center (content) + narrow right (table of contents)
- 1-column on mobile with sticky top nav for section jumping
- Reading width capped at ~72ch for optimal legibility

### Practice Page (/latihan)
- Full-width on mobile, centered content column on desktop
- Quiz cards with clear state management

---

## Identity Motif

A thin 3px indigo left-border on formula blocks, definition boxes, and worked examples creates a consistent visual signature throughout all content pages. This "editorial rule" motif:
- Visually connects all educational content types
- Uses accent color intentionally (at the content moment, not in decoration)
- Creates page-level rhythm without being decorative

---

## Anti-Slop Compliance Notes

- No blue-to-purple gradient used anywhere (R-01)
- No glassmorphism (R-10)
- No decorative emoji in UI text (R-04)
- No invented statistics or testimonials (R-17, R-18)
- All nav links have real destinations (R-24)
- Interactive elements all functional (R-26)
- Empty/loading/error states handled in quiz and charts (R-27)
- Identity motif makes the design feel product-specific (R-20)
- Dials declared and held: ENERGY 2 / RHYTHM 2 / MOTION 1

---

*DESIGN.md is the source of truth. Every visual decision in the codebase must trace back to a decision documented here.*
