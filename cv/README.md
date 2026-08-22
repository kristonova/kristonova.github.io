# CV — one master, many outputs

Every CV before this one was made by pruning the previous one, so the record
ended up scattered: EURECOM existed only in the Dec-2024 file, the 2023 projects
only in the Jan-2024 file, and the skills/IELTS/research sections only in files
from 2018–2021. No single file was complete.

This directory fixes that structurally. **`cv-data.yaml` is the only place
history lives.** Everything in `out/` is generated and must never be hand-edited.

```
cv-data.yaml         the master record — edit this
build.py             renders every output
check_coverage.py    regression test: proves nothing was lost
templates/           the web templates + shared design tokens
out/                 generated documents — do not edit
index.html           generated — the web CV, served at /cv/
../index.html        generated — the landing page, served at /
```

Both HTML pages are as generated as anything in `out/`. Editing either by hand
loses the change on the next build; edit `cv-data.yaml` and rebuild.

## Editing

```bash
.venv/Scripts/python cv/build.py          # regenerate all 9 outputs
.venv/Scripts/python cv/check_coverage.py # verify no history was dropped
```

`build.py` also reports any `TODO(user)` markers still sitting in the master.

Selective builds:

```bash
python cv/build.py --profile resume --lang en --format docx
```

## Outputs

| File | What it is |
|---|---|
| `out/resume.en.docx` / `.id.docx` | 2-page ATS résumé — upload this to job portals |
| `out/resume.en.md` / `.id.md` | same content, plain text |
| `out/cv-academic.en.docx` / `.id.docx` | full CV — PhD applications, grants, speaking bios |
| `out/cv-academic.en.md` / `.id.md` | same content, plain text |
| `index.html` | web CV at `/cv/` — toggles EN/ID and Résumé/Full, prints cleanly |
| `../index.html` | landing page at `/` — Indonesian first, evidence-dense |

## The website

Two pages, one design system, both generated from this file.

`/` is the front door. It answers "what can this person do for me" in about
ninety seconds for a non-technical Indonesian client: plain-language
positioning, the institutions that engaged him, four practice areas, six
tier-1 engagements, then research and speaking. `/cv/` is the full record for
recruiters and academics.

Everything editorial on the landing page — positioning, practice areas, UI
labels — lives in the `site:` block at the bottom of `cv-data.yaml`, so there
is still exactly one source file.

**Every figure on the landing page is counted from the record**, never typed.
The hand-written page this replaced claimed "5+ Seminar Nasional" against 41
recorded talks, and "20+ Proyek Strategis" while showing six. A statistic you
type is a statistic that goes stale; `landing_stats()` cannot.

The trust strip is generated the same way, from `engagements` at tier 1 then
tier 2, newest first within each. Where a formal client name is too long to
scan, an optional `short:` key supplies the display name — `PT Bio Farma`
rather than `PT Bio Farma (Persero)`. Employers are excluded: an internship is
not a client.

## How filtering works

Each entry carries a `tier` and `tags`:

- `tier: 1` → 2-page résumé **and** full CV
- `tier: 2` → full CV only
- `tier: 3` → master only, never rendered
- `archived: true` → kept for the record, never rendered anywhere
  (currently Kedata Indonesia and Cekdiri.id)

`tags` (`eu-industry`, `id-industry`, `academic`, `exec`) are there for the day
you want to tailor to a specific application: filter on a tag instead of
rewriting the CV — which is what created the mess in the first place.

## Format choices, and why

**Reverse-chronological, rendered ATS-safe.** ATS-friendly is not an alternative
to chronological — chronological is the *content structure*, ATS-safe is the
*rendering constraint*. Both apply at once.

A functional (skills-grouped, undated) CV would be wrong here: it is what people
use to hide gaps, ATS parsers cannot map skills back to dates, and this profile's
value is precisely *where* the work happened — Kemenkes, KPK, BAPPENAS, BSSN,
Kemenkeu. That disappears under a functional layout.

The ~20 short consulting engagements are nested under Sadasa Academy as
`engagements:` rather than listed as 20 separate jobs. Twenty 2-month entries
read as job-hopping; one continuous role with a client list reads as consulting.

The DOCX renderer holds to: single column, built-in Word heading styles, no
tables, no text boxes, no header/footer content, `Mon YYYY – Mon YYYY` dates.
Verify with:

```bash
python -c "import docx; d=docx.Document('cv/out/resume.en.docx'); print(len(d.tables))"  # 0
```

## Certificates

All four BNSP certificates run 3 years and have now lapsed. They are rendered
with the issue date and an explicit *expired* marker rather than dropped or
shown as current — a lapsed credential presented as active is a real risk in a
background check. Renew them and remove `expired: true`.

## Source archive

`../source/` holds the 19 original files. They are kept as-is and are what
`check_coverage.py` reads. Nothing there needs editing again.

## The photo

`foto-kristo-portrait.jpg` (400×500, 33 KB) is a head-and-shoulders crop of
`foto-kristo.jpeg`, produced once with Pillow and committed — `build.py` does
not depend on an image library. The original is kept as the source; recrop from
it if the framing needs to change.

The original is a full-body shot in front of the EURECOM building. At the 200px
display slot the face came out roughly 15px tall, so the crop was necessary to
make it read as a portrait at all. It is still a casual photo — a proper
headshot is the single highest-leverage upgrade to the landing page, and the
only asset on it that does not match the corporate register the rest of the
design holds to. Replace the file, keep the 4:5 ratio, rebuild.
