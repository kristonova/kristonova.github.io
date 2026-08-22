# kristonova.github.io

Personal website and data-driven CV engine for **Krisostomus Nova Rahmanto** (Data Scientist & Enterprise Data Architect), published at [kristonova.github.io](https://kristonova.github.io/).

---

## 🎯 Architecture: Single Source of Truth

Traditional CV management often leads to fragmented records across multiple versions, out-of-sync statistics, and inconsistent translations. This repository solves that structurally: **[`cv/cv-data.yaml`](cv/cv-data.yaml) is the single source of truth for all career history, credentials, and web editorial content.**

All web pages and downloadable documents are compiled deterministically by [`cv/build.py`](cv/build.py). Nothing generated is edited by hand.

```
cv/cv-data.yaml (Master Record)
       │
       ├──► build.py (Compiler & Jinja2 Templates)
       │      │
       │      ├──► index.html              (Landing page at /)
       │      ├──► cv/index.html           (Web CV at /cv/)
       │      │
       │      ├──► cv/out/resume.*.docx    (2-page ATS-safe résumés in EN & ID)
       │      ├──► cv/out/resume.*.md      (Plain-text résumés in EN & ID)
       │      ├──► cv/out/cv-academic.*    (Full academic CVs in EN & ID)
       │
       └──► check_coverage.py              (Automated regression tests)
```

---

## 📄 Generated Outputs

| Output | Path | Description |
|---|---|---|
| **Landing Page** | [`index.html`](index.html) | High-level executive overview, practice areas, trust strip, evidence-dense portfolio, and contact section. |
| **Interactive Web CV** | [`cv/index.html`](cv/index.html) | Complete career history with instant EN/ID toggle, Résumé/Full CV view switcher, and print CSS. |
| **ATS Résumé (ID/EN)** | `cv/out/resume.*.docx` | 2-page single-column Word document formatted for ATS scanners. |
| **Plain Résumé (ID/EN)** | `cv/out/resume.*.md` | Plain Markdown representation of the 2-page résumé. |
| **Full Academic CV** | `cv/out/cv-academic.*` | Complete CV covering research, publications, teaching, talks, and community leadership. |

---

## ✨ Key Features & Engineering Highlights

- **Bilingual by Design**: Full English (`en`) and Indonesian (`id`) support across all outputs, using natural, executive-standard terminology.
- **Computed Statistics**: Metrics on the landing page (e.g., talks delivered, teaching appointments, client engagements) are calculated directly from data entries—preventing stale claims.
- **ATS-Optimized Formatting**: The DOCX generator enforces strict ATS safety constraints: single column, native Word headings, no tables, no text boxes, and clean typography.
- **Zero-Dependency Frontend**: Fast, lightweight vanilla HTML5 and CSS with shared design tokens ([`_tokens.css.j2`](cv/templates/_tokens.css.j2)), system typography fallback, accessible color contrast, and dark/light mode with `localStorage` persistence.
- **SEO & Structured Data**: Built-in Schema.org `Person` JSON-LD, OpenGraph tags, and semantic hierarchy on all HTML pages.
- **Regression Testing**: [`cv/check_coverage.py`](cv/check_coverage.py) verifies that all historical milestones and credentials across legacy source files survive consolidation.

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Python 3.10+
- Virtual environment with dependencies:

```bash
# Clone the repository
git clone https://github.com/kristonova/kristonova.github.io.git
cd kristonova.github.io

# Create and activate virtual environment
python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On Linux/macOS:
source .venv/bin/activate

# Install dependencies
pip install pyyaml jinja2 markupsafe python-docx
```

### 2. Building Outputs

Regenerate all 10 outputs after editing [`cv/cv-data.yaml`](cv/cv-data.yaml):

```bash
python cv/build.py
```

Selective builds are also supported:
```bash
# Build only the 2-page résumé in English as DOCX
python cv/build.py --profile resume --lang en --format docx

# Build only the web pages
python cv/build.py --format html
```

### 3. Running Regression Tests

Ensure no history or credentials were lost:

```bash
python cv/check_coverage.py
```

---

## 📂 Directory Structure

```
.
├── index.html                  # Root landing page (served at /)
├── foto-kristo-portrait.jpg    # Display portrait
├── .gitignore                  # Git ignore rules
├── README.md                   # Project documentation
├── cv/
│   ├── cv-data.yaml            # MASTER DATA: Single source of truth
│   ├── build.py                # Multi-format build script
│   ├── check_coverage.py       # Regression coverage suite
│   ├── index.html              # Generated web CV (served at /cv/)
│   ├── README.md               # Technical CV directory documentation
│   ├── templates/              # Jinja2 template files
│   │   ├── _tokens.css.j2      # Shared CSS design tokens
│   │   ├── index.html.j2       # Landing page template
│   │   └── cv.html.j2          # Web CV template
│   └── out/                    # Generated documents (DOCX & MD)
│       ├── resume.en.docx / .id.docx
│       ├── resume.en.md / .id.md
│       ├── cv-academic.en.docx / .id.docx
│       └── cv-academic.en.md / .id.md
└── source/                     # Legacy source archive (used by check_coverage.py)
```

---

## 📜 License

Content and personal data © [Krisostomus Nova Rahmanto](https://kristonova.github.io/).  
The build engine, templates, and script architecture are available under the [MIT License](LICENSE).
