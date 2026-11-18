# Krisostomus Nova Rahmanto

**Data Scientist & Enterprise Data Architect**

Yogyakarta, Indonesia · vista.indonesia@gmail.com

[LinkedIn](https://www.linkedin.com/in/krisostomus-nova-rahmanto/) · [GitHub](https://github.com/kristonova) · [Google Scholar](https://scholar.google.com/citations?user=7rBNBX4AAAAJ&hl=en)

## Profile

Data scientist and enterprise data architect with 8+ years designing national-scale data systems for Indonesian ministries and state-owned enterprises, and CEO and co-founder of Sadasa Academy, a data analytics training and consulting firm. M.Sc. in Data Science from EURECOM, France, with thesis and internship work on LLM-based support for high-performance computing. Delivered TOGAF data architectures for the Ministry of Health, the National Energy Council, and the state pharmaceutical holding; trained and assessed 340+ civil servants, executives, and students.

## Education

**M.Sc. in Computer Science, major in Data Science — EURECOM** — Sep 2024 – Jul 2026
*Sophia Antipolis, France*

- Graduated 29 July 2026.
- Thesis: “Development of a Large Language Model (LLM) Prototype for L1 High-Performance Computing (HPC) Support” — internship at EFISON Lisan Teknologi, supervised by Prof. Simone Rossi and Wilson Lisan; defended 2 July 2026.
- Coursework focus: big data, data science, and data analytics.
- Funded by the LPDP Scholarship (PK-237), Indonesia Endowment Fund for Education.

**S.Kom. — Bachelor of Computer Science, with Honours — Universitas Gadjah Mada** — Sep 2013 – Dec 2017
*Yogyakarta, Indonesia*

- GPA 3.87 / 4.00.
- Thesis: “Data Preservation Process in Big Data Environment” — advised by Dr. Mardhani Riasetiawan; published at IEEE ICST 2018.

## Research Experience

**M.Sc. Thesis — LLM Prototype for L1 High-Performance Computing (HPC) Support — EURECOM, with EFISON Lisan Teknologi** — Feb 2026 – Jul 2026
*Principal Investigator*

- Studied whether domain-specific RAG can deliver reliable L1 support for a national HPC facility on a single consumer-grade AMD GPU, using the ALELEON Supercomputer wiki (411 documents) as the only knowledge source.
- Benchmarked dense, sparse, multi-vector, and hybrid retrieval in Qdrant over 69 queries: hybrid retrieval gave the best balance of recall and indexing cost, while LLM generation accounted for over 99% of end-to-end latency (about 8.8 s per answer), so faster retrieval could not speed up the system.
- Load-tested the service under concurrent users: throughput stayed at about 0.05 requests per second and average latency rose from 20.4 s to 230.6 s at 16 concurrent users, showing the single-GPU inference engine is compute-bound.
- Designed a four-level accuracy evaluation (direct facts, multi-chunk, reasoning, anti-hallucination) graded with the company supervisor: 81.8% overall, with reasoning at 60% limited mainly by outdated and inconsistent wiki content.
- Thesis report “Development of a Large Language Model (LLM) Prototype for L1 High-Performance Computing (HPC) Support”, defended on 2 July 2026; supervised by Prof. Simone Rossi and Wilson Lisan.

**M.Sc. Semester Project — KV Cache Compression for Text-to-SQL with LLMs — EURECOM, Data Science Department** — Sep 2025 – Feb 2026
*Student Researcher (team of two)*

- Migrated the long-context NL2SQL framework lc-nl2sql (“Is Long Context All You Need?”, VLDB 2025) from Vertex AI/Gemini to local open-weight inference through an abstract model interface, giving direct access to the model's KV cache.
- Integrated NVIDIA kvpress to compare query-aware FINCH against query-agnostic Expected Attention compression, running Qwen3-4B on an H100 cluster across 72 configurations: 8 cumulative ablation scenarios × 4 compression ratios plus an uncompressed baseline, on a difficulty-stratified 132-question BIRD dev subset.
- FINCH at a 0.6 compression ratio reached 51.52% execution accuracy, above the uncompressed baseline (49.24%), while a 0.8 ratio fell to 43.94%; compression also prevented out-of-memory failures in the self-correction stage.
- Supervised by Prof. Paolo Papotti and Giulio Corallo (PhD); delivered with Tommaso La Malfa as code, final report, and presentation with demo.

**Bachelor Thesis — Data Preservation in Big Data Environments — Universitas Gadjah Mada** — Feb 2017 – Nov 2017
*Principal Investigator*

- Proposed an ISO 14721:2012 (OAIS) data preservation framework for big data environments, mapping the standard's six components onto a distributed stack.
- Deployed a fully distributed nine-node Hadoop cluster and integrated Apache Solr search into Hadoop MapReduce.
- Advised by Dr. Mardhani Riasetiawan; published at IEEE ICST 2018.

**Cyber Banking Fraud Research Project — Computer System and Networking Research Laboratory, Universitas Gadjah Mada** — Feb 2016 – Oct 2016
*Research Assistant*

- Proposed a Self-Organizing Map approach to banking fraud detection.
- Coordinated weekly team meetings and represented the project members to the principal investigator.
- Funded by the national flagship higher-education research grant (Penelitian Unggulan Perguruan Tinggi), Ministry of Research, Technology and Higher Education.

## Publications

- Rahmanto, K. N., & Riasetiawan, M. (2018). “Data Preservation Process in Big Data Environment using Open Archival Information System.” Proceedings of the 4th International Conference on Science and Technology (ICST), IEEE, pp. 1–6. DOI: 10.1109/ICSTC.2018.8528669. <https://ieeexplore.ieee.org/document/8528669>
- Afifah, A., & Rahmanto, K. N. (2021). “Development of the Health Information Analytics Dashboard Using Big Data Analytics.” Proceedings of the 2nd International Scientific and National Member Meeting on Health Information Management (ISMoHIM) 2020. <https://publikasi.aptirmik.or.id/index.php/ismohim2020/article/view/109>

## Professional Experience

**EFISON Lisan Teknologi — HPC & AI Engineer (M.Sc. Internship)** — Feb 2026 – Jun 2026
*Semarang, Indonesia*

- Built a proof-of-concept RAG chatbot on Telegram that automates level-1 user support for the ALELEON Supercomputer, answering only from its official wiki and generating Slurm job scripts from natural-language requests.
- Designed the microservices stack (bge-m3 embeddings, Qdrant hybrid search, ColBERT reranking, Qwen3.5-35B served by vLLM on AMD ROCm) on an ASUS AMD Radeon AI PRO R9700 GPU.
- Reached 81.8% accuracy on a 55-question domain test set (93.3% on refusing out-of-scope questions); delivered as the EURECOM M.Sc. thesis under Prof. Simone Rossi and Wilson Lisan.

**PT Sadasa Akademi Indonesia (Sadasa Academy) — Chief Executive Officer & Co-founder** — Feb 2019 – Present
*Yogyakarta, Indonesia*

- Co-founded and lead a data analytics training and consulting firm; accountable for executive, financial, and operational management and for the full product development lifecycle.
- Built four service lines — corporate training, video learning, consulting, and a digital talent bridge — serving Indonesian ministries, state-owned enterprises, and private companies.
- Established the firm as a BNSP-licensed partner for national data science competency assessment.

*Selected client engagements:*

- **Kementerian Keuangan RI — Direktorat Jenderal Perbendaharaan (DJPb) — BNSP Competency Assessor** (Aug 2023 – Oct 2023)
  - Assessed the IT competency of 183 civil servants at the Directorate of Treasury Information Systems and Technology (SITP) against SKKNI national competency standards.
- **Universitas Gadjah Mada — Digital Productivity Trainer** (Oct 2023)
  - Trained educational staff in agile methods, Scrum trade-offs, and ClickUp under the university's digital transformation programme, run jointly by the HR Directorate and the Digital Transformation Bureau.
- **PT Adaro Indonesia — Lead Trainer — Data Science for Executives** (Sep 2023)
  - Led an executive data science programme at the Adaro mining site in Tabalong, South Kalimantan, closing with a workshop in which managers mapped business problems to data science and AI solutions.
- **Lembaga Sertifikasi Profesi (LSP) Teknologi Digital — BNSP Assessor — Associate Data Scientist scheme** (Mar 2023 – Apr 2023)
  - Assessed ~60 candidates from universities across Makassar under the Digital Talent Scholarship programme of the Ministry of Communication and Information Technology.
- **PT Bio Farma (Persero) — Data Architect Project Manager** (Mar 2022 – Sep 2022)
  - Led the business architect and data architect teams delivering the TOGAF data architecture for Indonesia's state-owned pharmaceutical holding.
  - Ran requirements interviews with 14 member companies across 9 value chains, from the Board of Directors down to BoD-2.
- **Perumda Air Minum Tirta Khatulistiwa (PDAM Pontianak) — IT Master Plan Advisor** (Apr 2022 – Aug 2022)
  - Authored the IT division master plan across business, data, application, and technology architecture using TOGAF.
  - Specified the target cloud infrastructure architecture in collaboration with AWS.
- **Kementerian Kesehatan Republik Indonesia — Data Architect** (Nov 2021 – Dec 2021)
  - Designed the ministry's TOGAF data architecture — conceptual and logical data models plus the data catalogue.
  - Delivered with the Digital Transformation Office, UNDP, and USAID; incorporated into the national Digital Transformation Strategy 2024.
  - <https://dto.kemkes.go.id/Digital-Transformation-Strategy-2024.pdf>
- **Dewan Energi Nasional Republik Indonesia (SINAR) — Data Modeller** (Nov 2021 – Jul 2022)
  - Designed Indonesia's national energy data model and entity-relationship diagram for SPEND (Sistem Pemantauan Energi Nasional dan Daerah).
  - Delivered within the SINAR consortium of USAID, the National Energy Council, and PT WeSolve Solusi Indonesia.
- **Badan Siber dan Sandi Negara (BSSN) — Project Manager** (Jul 2021 – Oct 2021)
  - Managed the development of an information-protection application for the digital economy sector against the ISO/IEC 27001 framework.
  - Produced the national guidebook “Panduan Penilaian Risiko Keamanan Informasi”, delivered with BSSN's Digital Economy Protection Directorate and ADITIF.
- **Dinas Komunikasi dan Informatika Provinsi DIY — Jogja Center — Project Manager & Data Scientist** (Jul 2021 – Dec 2021)
  - Led the development of a big data analytics and decision-support system for the Jogja Smart Province programme, executed with the CRISP-DM framework.
  - <http://dss.jogjaprov.go.id/>
- **Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) — Trainer** (Mar 2021 – Apr 2021)
  - Trained 60 civil servants at the Office of the Deputy for Climatology in data management, big data fundamentals, R, and Tableau.
- **RSUP Dr. Sardjito — Data Management Consultant** (Sep 2020 – Oct 2020)
  - Facilitated focus group discussions on health data management with policymakers, data owners, and technical teams.
  - Presented the resulting data management framework to the hospital's board of directors.
- **Badan Siber dan Sandi Negara (BSSN) — Enterprise Architecture Consultant** (Aug 2020 – Oct 2020)
  - Developed the agency's data enterprise architecture using TOGAF and catalogued its database estate.
- **Komisi Pemberantasan Korupsi (KPK) — Data Analyst** (Jun 2020 – Dec 2020)
  - Advised on using national ID numbers to improve social assistance and subsidy targeting across three provinces.
  - Translated technical findings for governors and provincial secretaries, bridging the engineering team and policymakers.
- **Kementerian PPN / BAPPENAS — Trainer** (Jul 2020 – Sep 2020)
  - Trained 40 analysts across ministry divisions and seniority levels in data management, big data fundamentals, R, visualisation, machine learning, and text mining.
  - <https://www.youtube.com/watch?v=WWqeIQz_Q7U>
- **Dinas Komunikasi dan Informatika Provinsi DIY — Data Scientist** (May 2020 – Dec 2020)
  - Built the executive dashboard for COVID-19 social assistance stimulus, covering aggregation, standardisation, cleansing, and visualisation in R and Tableau.
  - <http://dss.jogjaprov.go.id/>
- **Dinas Komunikasi dan Informatika Provinsi DIY — Data Consultant** (Mar 2020 – May 2020)
  - Defined the data model and data flow for the province's public COVID-19 dashboard and coordinated the data science team.
  - <http://corona.jogjaprov.go.id/peta>
- **Kementerian Desa, PDT, dan Transmigrasi (Pusdatin) — Data Consultant** (May 2019 – Jun 2019)
  - Built a dashboard for the Indeks Desa Membangun and standardised a 400-variable data model spanning textual and spatial data.

## Teaching Experience

**Universitas Gadjah Mada — Faculty of Mathematics and Natural Sciences — Practitioner Lecturer (Dosen Praktisi) — AI-Based Marketing and Customer Management** — Aug 2026 – Jan 2027

- Teach MII263006 “Pemasaran dan Pelanggan Berbasis AI” (AI-Based Marketing and Customer Management) in the Bachelor of Computer Science programme, odd semester 2026/2027.
- Course coordinator: Prof. Dr. Azhari, M.T.

**Universitas Gadjah Mada — Faculty of Dentistry (FKG) — Practitioner Lecturer (Dosen Praktisi) — Digital Dentistry and Automated Detection** — Aug 2026 – Jan 2027

- Teach KGRG257202 “Kedokteran Gigi Digital dan Deteksi Otomatis” (Digital Dentistry and Automated Detection) in the dentomaxillofacial radiology specialist programme, odd semester 2026/2027.
- Course coordinator: drg. Isti Rahayu Suyani, M.Biotech, Sp.RadOM(K), Ph.D.

**Universitas Dian Nuswantoro, Semarang — Practitioner Lecturer (Praktisi Mengajar) — Enterprise Architecture** — Feb 2024 – Jun 2024

- Taught enterprise architecture in the Bachelor programme under the national Praktisi Mengajar programme, even semester 2023/2024.
- Course coordinator: Erika Devi Udayanti.

**Universitas Bina Sarana Informatika — Practitioner Lecturer (Praktisi Mengajar) — Data Science Algorithms** — Feb 2024 – Jun 2024

- Taught the Data Science Algorithms course under the national Praktisi Mengajar programme, even semester 2023/2024.

**Universitas Dian Nuswantoro, Kediri — Practitioner Lecturer (Praktisi Mengajar) — Enterprise Architecture** — May 2023 – Aug 2023

- Taught enterprise architecture over a full semester under the national Praktisi Mengajar programme.

**Universitas Pendidikan Ganesha, Bali — Practitioner Lecturer (Praktisi Mengajar) — Data Science Fundamentals** — Oct 2022 – Nov 2022

- Taught data science fundamentals under the national Praktisi Mengajar programme.

**STMIK AKAKOM, Yogyakarta — Big Data Workshop Lecturer** — Mar 2019 – Mar 2020

- Taught a 16-student workshop on the Hadoop ecosystem — single-node and fully distributed cluster installation, HDFS, MapReduce, and YARN.
- Designed the curriculum and coordinated exams and grading.

**SMA Negeri 8 Yogyakarta — Informatics Olympiad Teacher** — Nov 2013 – Mar 2019

- Prepared ~15 students per semester for the Indonesian Informatics Olympiad in discrete mathematics, C++ programming, and algorithm design and analysis.
- Built the curriculum to Olympiad standards and coordinated exams and grading.

## Invited Talks, Lectures & Seminars

- **Guest Lecture**, “NL2SQL and KV-Cache Compression — Research Trends in Computer Science and Electronics (Tren Penelitian Ilmu Komputer dan Elektronika),” *Bachelor of Computer Science, Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Nov 2026)
- **Seminar**, “Strategi Pemanfaatan AI untuk Peningkatan Kapasitas Usaha — UMKM Go Smart: Kenali Gizi, Optimalkan AI,” *Kantor Wilayah Direktorat Jenderal Perbendaharaan Provinsi DIY, Kementerian Keuangan RI — Treasury Learning Center Yogyakarta*. (Oct 2026)
- **Invited Talk**, “Insight Session: Sustainable Life — Malam Kangen FMIPA UGM 2026, 71st Dies Natalis of the Faculty,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Sep 2026)
- **Policy Coordination Meeting**, “Cetak Biru Strategi Transformasi Digital Sosial 2026–2029: Rekam Sosial Elektronik Terintegrasi Sepanjang Siklus Hidup Warga,” *Rapat Koordinasi Pengembangan Inovasi Digital dalam Mendukung Peningkatan Kualitas DTSEN, Kementerian Koordinator Bidang Pemberdayaan Masyarakat RI, Jakarta*. (Sep 2026)
- **Expert Talk**, “Sains Data dan Penerapannya di Dunia Penelitian dan Industri — expert talk and project feedback for Grade 10–11 data science projects,” *Praxis High School (Yayasan Pendidikan STEAM Yogyakarta), Sleman*. (Sep 2026)
- **General Lecture**, “Alumni Sharing — Graduation of the Bachelor Programme, Period IV, Academic Year 2025/2026,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Aug 2026) <https://www.youtube.com/live/C0M5i3qEceo>
- **Workshop**, “Data Art Workshop 2026 — part of the Data Art Exhibition 2026,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada & Keluarga Alumni FMIPA UGM (KAMIPAGAMA)*. (Aug 2026)
- **Seminar**, “SINTESA — Seminar Nasional Inovasi Teknologi dan Sistem Informasi,” *Universitas Dian Nuswantoro, Kediri*. (Apr 2026)
- **Webinar**, “Implementing AI for Business Process — Bean to Brilliance programme for Kopi Kenangan,” *DDK Dharma Korporasi*. (Sep 2025)
- **Guest Lecture**, “Practitioner Lecture for Computer Science students,” *Faculty of Engineering and Information Technology, Universitas Jenderal Achmad Yani Yogyakarta*. (Jul 2024)
- **Guest Lecture**, “Data-related Project Management,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Oct 2023)
- **General Lecture**, “Market Basket Analysis,” *Department of Statistics, Faculty of Mathematics and Natural Sciences, Universitas Negeri Yogyakarta*. (May 2023)
- **Workshop**, “Strategi Akuisisi Data Geospasial Open Source,” *Badan Pengembangan Infrastruktur Wilayah, Kementerian PUPR*. (Dec 2022)
- **General Lecture**, “Mengenal Penerapan Data Arsitektur untuk Data Science pada Industri,” *Departemen Teknik Elektro dan Informatika, Sekolah Vokasi UGM*. (Sep 2022)
- **Webinar**, “Topic Modelling with Amazon SageMaker (moderator),” *AWS, Data Science Indonesia, Block71 Bandung*. (Nov 2021)
- **Webinar**, “Data Science Fundamentals,” *IndigoSpace Balikpapan*. (Oct 2021)
- **Webinar**, “CyberTalk Ilmu Data: dari Data, oleh Data, untuk Data,” *Pengelola Nama Domain Internet Indonesia (PANDI)*. (Aug 2021) <https://www.youtube.com/watch?v=BZihn2kB53I>
- **Webinar**, “Keahlian Analitika Data untuk Akuntan Profesional Masa Depan,” *Fakultas Ekonomika dan Bisnis, Universitas Gadjah Mada*. (Jun 2021) <https://www.youtube.com/watch?v=ZrqDgTcxnNQ>
- **Webinar**, “BANGKIT! Startup Kecerdasan Artifisial & Big Data untuk Industri Indonesia,” *Kementerian Perindustrian Republik Indonesia*. (Apr 2021) <https://www.youtube.com/watch?v=g-_FzGhDlPE>
- **General Lecture**, “Smart Nation Session #3 — Big Data Case Study for Smart Province: Cleansing Data Bantuan Sosial di DIY,” *Laboratorium Sistem Komputer dan Jaringan, FMIPA UGM*. (Dec 2020) <https://www.youtube.com/watch?v=dY53koYh10k>
- **Focus Group Discussion**, “Tata Kelola Data Bantuan Sosial di DIY (moderator),” *Satu Data Indonesia, Kementerian PPN/BAPPENAS*. (Nov 2020)
- **Webinar**, “Becoming a Successful Young Entrepreneur: How to Build Networks and Optimise Business Strategies,” *Institut Pertanian Bogor*. (Aug 2020)
- **General Lecture**, “Covid-19, Rantai Pasok Pangan, Big Data dan Digitalisasi Segala Hal,” *Sekolah Ilmu dan Teknologi Hayati, Institut Teknologi Bandung*. (May 2020) <https://www.youtube.com/watch?v=WgHjxx2ILvI>
- **General Lecture**, “Big Data Analytics for Covid-19 Response,” *Universitas Katolik Soegijapranata, Semarang*. (Apr 2020) <https://www.youtube.com/watch?v=ZUgLk_3nvWU>
- **Workshop**, “Data Science for Rapid Problem Solving,” *Center for Population and Policy Studies UGM, PT Telkom Indonesia & Kemenpora*. (Dec 2019)
- **Workshop**, “Big Data Analysis: Hoax Detection,” *Career Development Center FISIPOL, Universitas Gadjah Mada*. (Apr 2019)
- **Seminar**, “Data Driven Business by Using Data Science,” *Kementerian Koperasi dan UKM Republik Indonesia*. (Mar 2019)
- **Workshop**, “Social Network Analysis with R and Gephi,” *Center for Population and Policy Studies, Universitas Gadjah Mada*. (Dec 2018)
- **Paper Presentation**, “Data Preservation Process in Big Data Environment using Open Archival Information System,” *4th International Conference on Science and Technology (ICST)*. (Aug 2018)

## Professional Certifications

- **Certificate of Competence in Data Science — Big Data Scientist** — Badan Nasional Sertifikasi Profesi (BNSP), Reg. TIK.1565.05386 2021 (issued Sep 2021, 3y, expired)
- **Certificate of Competence in Data Science — Junior Data Scientist** — Badan Nasional Sertifikasi Profesi (BNSP), Reg. TIK.1565.04480 2021 (issued Jul 2021, 3y, expired)
- **Certificate of Competence in Workplace Assessment (IT skills)** — Badan Nasional Sertifikasi Profesi (BNSP), Reg. MET.000.005057 2019 (issued Mar 2023, 3y, expired) *Covers assessment of programming, data science, and big data competencies; first issued Oct 2019 and renewed in 2023.*

## Community Service & Leadership

**Keluarga Alumni Universitas Gadjah Mada (KAGAMA) — Central Board, Division 2 — Data Centre Department** — Dec 2024 – Dec 2029
*Yogyakarta, Indonesia*

- Oversee alumni data management, keeping records accurate and integrated across faculties and regions.
- Lead a flagship project to build a standardised, centralised alumni data system improving accessibility, data security, and university–alumni collaboration.

**Perhimpunan Pelajar Indonesia (PPI) Provence-Alpes-Côte d'Azur, France — Community Development Coordinator** — Oct 2024 – Oct 2025
*Provence-Alpes-Côte d'Azur, France*

- Coordinated community development for the Indonesian Students Association (PPI) in the Provence-Alpes-Côte d'Azur region of France.

**Keluarga Alumni FMIPA Gadjah Mada (KAMIPAGAMA) — Member — Business Development** — Sep 2022 – Sep 2026
*Yogyakarta, Indonesia*

- Drove business development initiatives and strengthened ties between students, alumni, and the faculty.

**Asosiasi Digital Kreatif (ADITIF) — Government Relations** — May 2019 – Jun 2022
*Yogyakarta, Indonesia*

- Built and maintained relationships with ministries, state-owned companies, and provincial and local governments to advocate for Indonesia's digital creative industry.

## Skills

- **Programming:** Python, R, C++, SQL
- **Machine Learning & AI:** scikit-learn, TensorFlow, spaCy, Large Language Models (LLM), Self-Organizing Maps
- **Big Data & HPC:** Hadoop (HDFS, MapReduce, YARN), Apache Spark, Apache Solr, High-Performance Computing (HPC)
- **Data & Enterprise Architecture:** TOGAF, Conceptual & logical data modelling, Entity-relationship design, Data cataloguing
- **Methods & Standards:** CRISP-DM, ISO/IEC 27001, ISO 14721 (OAIS), SKKNI competency assessment, Agile, Scrum
- **Visualisation & Cloud:** Tableau, CARTO, AWS
- **Other:** Git, WordPress CMS, Bootstrap, ClickUp

## Languages

- **Indonesian:** Native
- **English:** Professional working proficiency — IELTS Academic 6.5 — Listening 7.0 · Reading 7.5 · Writing 6.0 · Speaking 6.0
- **French:** B1 (CEFR) — TCF — compréhension orale 312 · maîtrise des structures de la langue 346 · compréhension écrite 369

## Honours & Awards

- **LPDP Scholarship (PK-237)** — Indonesia Endowment Fund for Education, Ministry of Finance (2024–2026)
- **Bachelor of Computer Science with Honours** — Universitas Gadjah Mada (2017)
- **Bidikmisi Scholarship** — Ministry of Research, Technology and Higher Education*. Full tuition scholarship for academically strong students from low-income families.* (2013–2017)
