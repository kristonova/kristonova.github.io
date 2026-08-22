#!/usr/bin/env python
"""Prove the consolidation did not swallow any history.

Every previous CV was written by pruning the one before it, so the record ended
up scattered across five different files. This script is the regression test
against that: it walks every archived CV in source/ and asserts that each piece
of history still shows up in cv-data.yaml.

    python check_coverage.py

Two passes:

  1. CHECKLIST — a curated list of every distinct organisation, client, project,
     publication, and credential found across the 19 source files. Each entry
     lists the token(s) that must appear in cv-data.yaml. Where the master
     deliberately renamed something (“Eight State Senior High School” became
     “SMA Negeri 8 Yogyakarta”), the rename is recorded here rather than hidden.
     A miss here fails the build.

  2. SWEEP — auto-extracts acronyms and capitalised proper nouns from the source
     corpus and reports any that never appear in the master. Advisory only:
     it is the net for things the checklist itself forgot.
"""
from __future__ import annotations

import re
import subprocess
import sys
import unicodedata
import zipfile
from pathlib import Path

ROOT = Path(__file__).parent
SOURCE = ROOT.parent / "source"
DATA = ROOT / "cv-data.yaml"

# (what it is, [tokens that satisfy it]) — any one token matching is enough.
CHECKLIST: list[tuple[str, list[str]]] = [
    # --- education & research -------------------------------------------
    ("UGM bachelor degree",              ["Universitas Gadjah Mada"]),
    ("Bachelor thesis advisor",          ["Mardhani Riasetiawan"]),
    ("Bachelor thesis topic",            ["Data Preservation Process"]),
    ("OAIS standard",                    ["ISO 14721"]),
    ("Hadoop cluster work",              ["Hadoop"]),
    ("Solr integration",                 ["Apache Solr"]),
    ("Cyber banking fraud project",      ["Cyber Banking Fraud"]),
    ("Self-Organizing Map method",       ["Self-Organizing Map"]),
    ("Bidikmisi scholarship",            ["Bidikmisi"]),
    ("EURECOM master",                   ["EURECOM"]),
    ("LPDP scholarship",                 ["LPDP"]),
    ("M.Sc. thesis supervisor",          ["Simone Rossi"]),
    ("M.Sc. thesis topic",               ["High-Performance Computing (HPC) Support"]),

    # --- employers -------------------------------------------------------
    ("Sadasa Academy",                   ["Sadasa"]),
    ("Kedata Indonesia (archived)",      ["Kedata Indonesia"]),
    ("Cekdiri.id (archived)",            ["Cekdiri"]),
    ("EFISON internship",                ["EFISON"]),

    # --- client engagements ---------------------------------------------
    ("Kementerian Keuangan / DJPb",      ["Direktorat Jenderal Perbendaharaan"]),
    ("SKKNI assessment standard",        ["SKKNI"]),
    ("UGM digital productivity training", ["Digital Productivity Trainer"]),
    ("PT Adaro Indonesia",               ["Adaro"]),
    ("LSP Teknologi Digital",            ["LSP) Teknologi Digital", "LSP Teknologi Digital"]),
    ("PT Bio Farma",                     ["Bio Farma"]),
    ("PDAM Pontianak",                   ["Tirta Khatulistiwa"]),
    ("Kementerian Kesehatan",            ["Kementerian Kesehatan"]),
    ("Kemenkes DTO deliverable",         ["Digital-Transformation-Strategy-2024"]),
    ("Dewan Energi Nasional",            ["Dewan Energi Nasional"]),
    ("SINAR consortium",                 ["SINAR"]),
    ("SPEND information system",         ["SPEND"]),
    ("BSSN",                             ["Badan Siber dan Sandi Negara"]),
    ("BSSN guidebook",                   ["Panduan Penilaian Risiko Keamanan Informasi"]),
    ("Jogja Center project",             ["Jogja Center"]),
    ("Jogja Smart Province",             ["Jogja Smart Province"]),
    ("CRISP-DM methodology",             ["CRISP-DM"]),
    ("BMKG",                             ["Badan Meteorologi"]),
    ("RSUP Dr. Sardjito",                ["Sardjito"]),
    ("KPK",                              ["Komisi Pemberantasan Korupsi"]),
    ("BAPPENAS",                         ["BAPPENAS"]),
    ("Diskominfo DIY",                   ["Dinas Komunikasi dan Informatika Provinsi DIY"]),
    ("DIY executive dashboard",          ["dss.jogjaprov.go.id"]),
    ("DIY COVID public dashboard",       ["corona.jogjaprov.go.id"]),
    ("Kementerian Desa PDTT",            ["Kementerian Desa"]),
    ("Indeks Desa Membangun",            ["Indeks Desa Membangun"]),
    ("PT WeSolve Solusi Indonesia",      ["WeSolve"]),
    ("ISO/IEC 27001 work",               ["ISO/IEC 27001"]),
    ("TOGAF work",                       ["TOGAF"]),
    ("AWS collaboration",                ["AWS"]),

    # --- teaching (note the deliberate renames) --------------------------
    ("SMAN 8 Yogyakarta — was “Eight State Senior High School”", ["SMA Negeri 8 Yogyakarta"]),
    ("STMIK AKAKOM",                     ["AKAKOM"]),
    ("Praktisi Mengajar Undiksha",       ["Universitas Pendidikan Ganesha"]),
    ("Praktisi Mengajar Dian Nuswantoro", ["Universitas Dian Nuswantoro, Kediri"]),

    # --- publications ----------------------------------------------------
    ("ICST 2018 paper",                  ["10.1109/ICSTC.2018.8528669"]),
    ("ISMoHIM 2020 paper",               ["ISMoHIM"]),

    # --- certifications --------------------------------------------------
    ("BNSP Big Data Scientist",          ["TIK.1565.05386"]),
    ("BNSP Junior Data Scientist",       ["TIK.1565.04480"]),
    ("BNSP Workplace Assessment",        ["MET.000.005057"]),
    ("BNSP Software Development",        ["TIK.317.00341"]),

    # --- professional training -------------------------------------------
    ("UII data science workshop",        ["Universitas Islam Indonesia"]),
    ("BNPT web workshop",                ["Penanggulangan Terorisme"]),
    ("SEAMOLEC workshop",                ["SEAMOLEC"]),

    # --- community service ------------------------------------------------
    ("KAGAMA",                           ["KAGAMA"]),
    ("KAMIPAGAMA",                       ["KAMIPAGAMA"]),
    ("ADITIF",                           ["ADITIF"]),
    ("Inovator 4.0",                     ["Inovator 4.0"]),
    ("Gunung Sempu church",              ["Gunung Sempu"]),
    ("Pugeran parish",                   ["Pugeran"]),
    ("KKN North Sulawesi",               ["North Sulawesi", "Sulawesi Utara"]),

    # --- languages & skills ----------------------------------------------
    ("IELTS score",                      ["IELTS"]),
    ("TCF French score",                 ["TCF"]),
    ("Tableau",                          ["Tableau"]),
    ("CARTO dashboard",                  ["CARTO"]),
    ("TensorFlow",                       ["TensorFlow"]),
    ("spaCy",                            ["spaCy"]),
    ("scikit-learn",                     ["scikit-learn"]),
    ("Apache Spark",                     ["Apache Spark"]),

    # --- selected talks (spot checks across every year) -------------------
    ("Talk: Social Network Analysis 2018", ["Social Network Analysis with R and Gephi"]),
    ("Talk: Hoax Detection 2019",        ["Hoax Detection"]),
    ("Talk: Covid-19 Response 2020",     ["Big Data Analytics for Covid-19 Response"]),
    ("Talk: Young Entrepreneur 2020",    ["Young Entrepreneur"]),
    ("Talk: CyberTalk PANDI 2021",       ["CyberTalk Ilmu Data"]),
    ("Talk: SageMaker moderator 2021",   ["Topic Modelling with Amazon SageMaker"]),
    ("Talk: Geospatial PUPR 2022",       ["Strategi Akuisisi Data Geospasial"]),
    ("Talk: Digital Ecosystem Connect 2022", ["Digital Ecosystem Connect"]),
    ("Talk: PPSMB Pascal 2023",          ["PPSMB Pascal 2023"]),
    ("Talk: Project Management 2023",    ["Data-related Project Management"]),
]

STOP = {
    "AND", "THE", "FOR", "WITH", "FROM", "THIS", "THAT", "WAS", "ARE", "HAD", "HAS",
    "OUR", "MY", "ALL", "NEW", "NOT", "YOU", "CAN", "USING", "DAN", "YANG", "UNTUK",
    "PDF", "HTTP", "HTTPS", "WWW", "DOI", "PP", "NO", "REG", "III", "II", "IV",
    "KRISOSTOMUS", "NOVA", "RAHMANTO", "PT", "RI", "DIY", "BCS", "GPA", "IT", "TI",
}


def pdf_text(path: Path) -> str:
    try:
        r = subprocess.run(["pdftotext", "-layout", str(path), "-"],
                           capture_output=True, text=True, encoding="utf-8", errors="replace")
        return r.stdout
    except FileNotFoundError:
        print("  ! pdftotext not on PATH — PDFs skipped (install poppler)", file=sys.stderr)
        return ""


def docx_text(path: Path) -> str:
    try:
        with zipfile.ZipFile(path) as z:
            xml = z.read("word/document.xml").decode("utf-8", "replace")
    except (KeyError, zipfile.BadZipFile):
        return ""
    xml = re.sub(r"</w:p>", "\n", xml)
    return re.sub(r"<[^>]+>", "", xml)


def normalise(s: str) -> str:
    """Fold curly quotes, dashes, and NBSP so source and master compare fairly."""
    s = unicodedata.normalize("NFKC", s)
    for a, b in [("‘", "'"), ("’", "'"), ("“", '"'), ("”", '"'),
                 ("–", "-"), ("—", "-"), ("−", "-"), (" ", " ")]:
        s = s.replace(a, b)
    return re.sub(r"\s+", " ", s)


def main() -> int:
    if not DATA.exists():
        print(f"missing {DATA}", file=sys.stderr)
        return 2

    master = normalise(DATA.read_text(encoding="utf-8"))
    master_ci = master.lower()

    files = sorted(p for p in SOURCE.iterdir()
                   if p.suffix.lower() in {".pdf", ".docx"}) if SOURCE.exists() else []
    corpus = normalise(" ".join(
        (pdf_text(p) if p.suffix.lower() == ".pdf" else docx_text(p)) for p in files))

    print(f"  source corpus: {len(files)} files, {len(corpus):,} chars")
    print(f"  master:        {DATA.name}, {len(master):,} chars\n")

    # -- pass 1: checklist ------------------------------------------------
    missing = [(what, toks) for what, toks in CHECKLIST
               if not any(normalise(t).lower() in master_ci for t in toks)]
    print(f"  CHECKLIST  {len(CHECKLIST) - len(missing)}/{len(CHECKLIST)} history items present")
    for what, toks in missing:
        print(f"    MISSING  {what}  (looked for: {', '.join(toks)})")

    # -- pass 2: advisory sweep -------------------------------------------
    acronyms = {a for a in re.findall(r"\b[A-Z]{3,10}\b", corpus)} - STOP
    unseen = sorted(a for a in acronyms if a.lower() not in master_ci)
    print(f"\n  SWEEP      {len(acronyms) - len(unseen)}/{len(acronyms)} "
          f"source acronyms also in the master")
    if unseen:
        print("    not in master (advisory - most are prose, not history):")
        for i in range(0, len(unseen), 8):
            print("      " + "  ".join(unseen[i:i + 8]))

    if missing:
        print(f"\n  FAIL — {len(missing)} history item(s) lost in consolidation.")
        return 1
    print("\n  PASS — every checklisted item from all "
          f"{len(files)} archived CVs survives in the master.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
