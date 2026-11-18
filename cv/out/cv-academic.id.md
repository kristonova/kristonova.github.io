# Krisostomus Nova Rahmanto

**Data Scientist & Arsitek Data Enterprise**

Yogyakarta, Indonesia · vista.indonesia@gmail.com

[LinkedIn](https://www.linkedin.com/in/krisostomus-nova-rahmanto/) · [GitHub](https://github.com/kristonova) · [Google Scholar](https://scholar.google.com/citations?user=7rBNBX4AAAAJ&hl=en)

## Ringkasan Profil

Data scientist dan arsitek data enterprise dengan pengalaman lebih dari 8 tahun merancang sistem data berskala nasional untuk kementerian, lembaga, dan BUMN di Indonesia, sekaligus CEO dan co-founder Sadasa Academy (konsultasi dan pelatihan analitik data). Lulusan M.Sc. Data Science dari EURECOM, Prancis, dengan tesis dan magang mengenai dukungan High-Performance Computing (HPC) berbasis LLM. Telah menyusun arsitektur data TOGAF untuk Kementerian Kesehatan, Dewan Energi Nasional, dan Holding BUMN Farmasi (Bio Farma), serta melatih dan menguji kompetensi lebih dari 340 ASN, eksekutif, dan mahasiswa.

## Pendidikan

**M.Sc. Ilmu Komputer (Peminatan Data Science) — EURECOM** — Sep 2024 – Jul 2026
*Sophia Antipolis, Prancis*

- Lulus 29 Juli 2026.
- Tesis: “Development of a Large Language Model (LLM) Prototype for L1 High-Performance Computing (HPC) Support” (magang di EFISON Lisan Teknologi; pembimbing Prof. Simone Rossi dan Wilson Lisan; disidangkan 2 Juli 2026).
- Fokus kuliah: Big Data, Data Science, dan Analitik Data.
- Penerima Beasiswa LPDP (PK-237), Lembaga Pengelola Dana Pendidikan, Kementerian Keuangan RI.

**S.Kom. — Sarjana Ilmu Komputer (Cum Laude) — Universitas Gadjah Mada** — Sep 2013 – Des 2017
*Yogyakarta, Indonesia*

- IPK 3,87 / 4,00 (Cum Laude).
- Skripsi: “Data Preservation Process in Big Data Environment” (pembimbing: Dr. Mardhani Riasetiawan); dipublikasikan di IEEE ICST 2018.

## Pengalaman Riset

**Tesis M.Sc. — Prototipe LLM untuk Dukungan L1 High-Performance Computing (HPC) — EURECOM, with EFISON Lisan Teknologi** — Feb 2026 – Jul 2026
*Peneliti Utama*

- Meneliti apakah RAG khusus domain dapat memberi dukungan teknis L1 yang andal bagi fasilitas HPC nasional dengan satu GPU AMD kelas konsumen, memakai wiki ALELEON Supercomputer (411 dokumen) sebagai satu-satunya sumber pengetahuan.
- Membandingkan strategi retrieval dense, sparse, multi-vector, dan hibrida di Qdrant dengan 69 pertanyaan uji: retrieval hibrida memberi keseimbangan terbaik antara recall dan biaya indeksasi, sementara generasi LLM menyerap lebih dari 99% latensi end-to-end (sekitar 8,8 detik per jawaban), sehingga mempercepat retrieval tidak berdampak pada kecepatan sistem.
- Menguji beban layanan dengan permintaan bersamaan: throughput tertahan di sekitar 0,05 permintaan per detik dan latensi rata-rata naik dari 20,4 detik menjadi 230,6 detik pada 16 pengguna bersamaan; ini menunjukkan mesin inferensi satu GPU bersifat compute-bound.
- Merancang evaluasi akurasi empat tingkat (fakta langsung, multi-chunk, penalaran, anti-halusinasi) yang dinilai bersama pembimbing perusahaan: akurasi keseluruhan 81,8%, dengan akurasi penalaran 60% karena sebagian konten wiki sudah usang dan tidak konsisten.
- Laporan tesis “Development of a Large Language Model (LLM) Prototype for L1 High-Performance Computing (HPC) Support”, disidangkan pada 2 Juli 2026; pembimbing Prof. Simone Rossi dan Wilson Lisan.

**Semester Project M.Sc. — Kompresi KV Cache untuk Text-to-SQL dengan LLM — EURECOM, Data Science Department** — Sep 2025 – Feb 2026
*Peneliti Mahasiswa (tim dua orang)*

- Memigrasikan framework NL2SQL berkonteks panjang lc-nl2sql (“Is Long Context All You Need?”, VLDB 2025) dari Vertex AI/Gemini ke inferensi lokal model open-weight melalui antarmuka abstrak, agar KV cache model bisa diakses langsung.
- Mengintegrasikan NVIDIA kvpress untuk membandingkan kompresi FINCH (query-aware) dengan Expected Attention (query-agnostic) pada Qwen3-4B di klaster H100, mencakup 72 konfigurasi: 8 skenario ablasi kumulatif × 4 rasio kompresi ditambah baseline tanpa kompresi, pada 132 soal BIRD dev yang dikelompokkan berimbang menurut tingkat kesulitan.
- FINCH dengan rasio kompresi 0,6 mencapai execution accuracy 51,52%, di atas baseline tanpa kompresi (49,24%), sedangkan rasio 0,8 turun ke 43,94%; kompresi juga mencegah kegagalan out-of-memory pada tahap self-correction.
- Dibimbing oleh Prof. Paolo Papotti dan Giulio Corallo (PhD); dikerjakan bersama Tommaso La Malfa dan menghasilkan kode, laporan akhir, presentasi, serta demo.

**Skripsi — Preservasi Data pada Lingkungan Big Data — Universitas Gadjah Mada** — Feb 2017 – Nov 2017
*Peneliti Utama*

- Merumuskan kerangka kerja preservasi data berbasis standar ISO 14721:2012 (OAIS) untuk lingkungan big data dengan memetakan enam komponen standarnya ke dalam arsitektur terdistribusi.
- Mengonfigurasi dan menguji klaster komputasi terdistribusi Hadoop (9 node) serta mengintegrasikan mesin pencarian Apache Solr ke dalam Hadoop MapReduce.
- Dibimbing oleh Dr. Mardhani Riasetiawan; hasil riset dipublikasikan di konferensi internasional IEEE ICST 2018.

**Proyek Riset Cyber Banking Fraud — Computer System and Networking Research Laboratory, Universitas Gadjah Mada** — Feb 2016 – Okt 2016
*Asisten Peneliti*

- Mengusulkan pendekatan algoritma Self-Organizing Map (SOM) untuk mendeteksi indikasi penipuan (fraud) pada transaksi perbankan.
- Mengoordinasikan rapat mingguan tim peneliti dan menjadi penghubung anggota tim dengan ketua peneliti.
- Didanai oleh hibah Penelitian Unggulan Perguruan Tinggi (PUPT), Kementerian Riset, Teknologi, dan Pendidikan Tinggi RI.

## Publikasi Ilmiah

- Rahmanto, K. N., & Riasetiawan, M. (2018). “Data Preservation Process in Big Data Environment using Open Archival Information System.” Proceedings of the 4th International Conference on Science and Technology (ICST), IEEE, pp. 1–6. DOI: 10.1109/ICSTC.2018.8528669. <https://ieeexplore.ieee.org/document/8528669>
- Afifah, A., & Rahmanto, K. N. (2021). “Development of the Health Information Analytics Dashboard Using Big Data Analytics.” Proceedings of the 2nd International Scientific and National Member Meeting on Health Information Management (ISMoHIM) 2020. <https://publikasi.aptirmik.or.id/index.php/ismohim2020/article/view/109>

## Pengalaman Profesional

**EFISON Lisan Teknologi — HPC & AI Engineer (Magang M.Sc.)** — Feb 2026 – Jun 2026
*Semarang, Indonesia*

- Membangun prototipe chatbot RAG di Telegram untuk mengotomatiskan dukungan teknis L1 pengguna ALELEON Supercomputer. Chatbot ini hanya menjawab berdasarkan wiki resmi dan bisa membuat skrip job Slurm dari permintaan bahasa alami.
- Merancang arsitektur microservices (embedding bge-m3, pencarian hibrida Qdrant, reranking ColBERT, Qwen3.5-35B via vLLM di AMD ROCm) pada GPU ASUS AMD Radeon AI PRO R9700.
- Mencapai akurasi 81,8% pada 55 soal uji domain (93,3% dalam menolak pertanyaan di luar cakupan); dikerjakan sebagai tesis M.Sc. EURECOM di bawah bimbingan Prof. Simone Rossi dan Wilson Lisan.

**PT Sadasa Akademi Indonesia (Sadasa Academy) — Chief Executive Officer & Co-founder** — Feb 2019 – Saat ini
*Yogyakarta, Indonesia*

- Mendirikan dan memimpin perusahaan konsultasi serta pelatihan analitik data; memegang kendali atas arah strategis, keuangan, operasional, serta pengembangan produk dan layanan.
- Membangun empat lini layanan (pelatihan korporasi, video belajar mandiri, konsultasi data, dan penyaluran talenta digital) untuk kementerian, BUMN, serta perusahaan swasta.
- Menjadikan perusahaan sebagai mitra dan Tempat Uji Kompetensi (TUK) berlisensi BNSP untuk sertifikasi profesi data science tingkat nasional.

*Proyek & Klien Terpilih:*

- **Kementerian Keuangan RI — Direktorat Jenderal Perbendaharaan (DJPb) — Asesor Kompetensi BNSP** (Agu 2023 – Okt 2023)
  - Menguji kompetensi teknologi informasi 183 ASN di Direktorat Sistem Informasi dan Teknologi Perbendaharaan (SITP) sesuai standar SKKNI.
- **Universitas Gadjah Mada — Instruktur Transformasi Digital & Produktivitas** (Okt 2023)
  - Melatih tenaga kependidikan tentang penerapan Agile, pertimbangan penggunaan Scrum, dan pengelolaan kerja dengan ClickUp dalam program transformasi digital universitas (kerja sama Direktorat SDM dan Biro Transformasi Digital).
- **PT Adaro Indonesia — Lead Trainer — Data Science for Executives** (Sep 2023)
  - Memandu pelatihan data science bagi para manajer dan eksekutif di lokasi tambang Adaro (Tabalong, Kalimantan Selatan), yang ditutup dengan lokakarya pemetaan masalah bisnis ke solusi data science dan AI.
- **Lembaga Sertifikasi Profesi (LSP) Teknologi Digital — Asesor Kompetensi BNSP (Skema Associate Data Scientist)** (Mar 2023 – Apr 2023)
  - Menguji kompetensi sekitar 60 peserta dari berbagai perguruan tinggi di Makassar dalam program Digital Talent Scholarship (DTS) Kementerian Komunikasi dan Informatika.
- **PT Bio Farma (Persero) — Project Manager & Lead Data Architect** (Mar 2022 – Sep 2022)
  - Memimpin tim business architect dan data architect menyusun arsitektur data berbasis TOGAF untuk Holding BUMN Farmasi.
  - Mewawancarai 14 anak usaha holding di 9 rantai nilai bisnis untuk memetakan kebutuhan data, mulai dari jajaran Direksi hingga level BoD-2.
- **Perumda Air Minum Tirta Khatulistiwa (PDAM Pontianak) — Konsultan Penyusun IT Master Plan** (Apr 2022 – Agu 2022)
  - Menyusun rencana induk (IT Master Plan) divisi TI yang mencakup arsitektur bisnis, data, aplikasi, dan teknologi menggunakan kerangka TOGAF.
  - Merancang target arsitektur infrastruktur cloud bekerja sama dengan tim AWS.
- **Kementerian Kesehatan Republik Indonesia — Lead Data Architect** (Nov 2021 – Des 2021)
  - Merancang arsitektur data kementerian berbasis TOGAF, meliputi model data konseptual, model data logis, dan katalog data.
  - Dikerjakan bersama Digital Transformation Office (DTO) Kemenkes, UNDP, dan USAID; hasilnya masuk ke dalam Cetak Biru Strategi Transformasi Digital Kesehatan 2024.
  - <https://dto.kemkes.go.id/Digital-Transformation-Strategy-2024.pdf>
- **Dewan Energi Nasional Republik Indonesia (SINAR) — Data Modeller & Solution Architect** (Nov 2021 – Jul 2022)
  - Merancang model data energi nasional dan Entity Relationship Diagram (ERD) untuk platform SPEND (Sistem Pemantauan Energi Nasional dan Daerah).
  - Dikerjakan dalam konsorsium SINAR bersama USAID, Sekretariat Jenderal Dewan Energi Nasional, dan PT WeSolve Solusi Indonesia.
- **Badan Siber dan Sandi Negara (BSSN) — Project Manager** (Jul 2021 – Okt 2021)
  - Mengelola pengembangan aplikasi proteksi informasi sektor ekonomi digital berbasis standar ISO/IEC 27001.
  - Menyusun buku pedoman nasional “Panduan Penilaian Risiko Keamanan Informasi” bersama Direktorat Proteksi Ekonomi Digital BSSN dan ADITIF.
- **Dinas Komunikasi dan Informatika Provinsi DIY — Jogja Center — Project Manager & Data Scientist** (Jul 2021 – Des 2021)
  - Memimpin pengembangan sistem big data analytics dan Decision Support System (DSS) untuk program Jogja Smart Province menggunakan metodologi CRISP-DM.
  - <http://dss.jogjaprov.go.id/>
- **Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) — Instruktur Pelatihan Data** (Mar 2021 – Apr 2021)
  - Melatih 60 ASN di Deputi Bidang Klimatologi BMKG mengenai pengelolaan data, dasar-dasar big data, pemrograman R, dan visualisasi data Tableau.
- **RSUP Dr. Sardjito — Konsultan Tata Kelola Data** (Sep 2020 – Okt 2020)
  - Memfasilitasi Focus Group Discussion (FGD) tentang tata kelola data kesehatan bersama pemangku kebijakan, unit pemilik data, dan tim teknis rumah sakit.
  - Menyusun dan memaparkan kerangka pengelolaan data kesehatan hasil FGD di hadapan jajaran Direksi RSUP Dr. Sardjito.
- **Badan Siber dan Sandi Negara (BSSN) — Konsultan Enterprise Architecture** (Agu 2020 – Okt 2020)
  - Menyusun Data Enterprise Architecture BSSN berbasis kerangka TOGAF serta menginventarisasi seluruh basis datanya.
- **Komisi Pemberantasan Korupsi (KPK) — Data Analyst & Policy Liaison** (Jun 2020 – Des 2020)
  - Memberikan masukan teknis pemanfaatan NIK untuk memperbaiki ketepatan sasaran bantuan sosial dan subsidi di tiga provinsi.
  - Menjelaskan temuan analisis data kepada Gubernur dan Sekretaris Daerah, menjembatani tim teknis dengan para pengambil kebijakan.
- **Kementerian PPN / BAPPENAS — Instruktur Pelatihan Data** (Jul 2020 – Sep 2020)
  - Melatih 40 analis perencana lintas eselon di BAPPENAS mengenai pengelolaan data, dasar-dasar big data, R, visualisasi, machine learning, dan text mining.
  - <https://www.youtube.com/watch?v=WWqeIQz_Q7U>
- **Dinas Komunikasi dan Informatika Provinsi DIY — Data Scientist** (Mei 2020 – Des 2020)
  - Membangun dashboard eksekutif untuk memantau stimulus bansos COVID-19 di DIY, mencakup agregasi, standardisasi skema, pembersihan data, dan visualisasi dengan R dan Tableau.
  - <http://dss.jogjaprov.go.id/>
- **Dinas Komunikasi dan Informatika Provinsi DIY — Konsultan Data** (Mar 2020 – Mei 2020)
  - Merancang model dan alur integrasi data untuk peta sebaran publik COVID-19 Pemda DIY, sekaligus mengoordinasikan tim data scientist.
  - <http://corona.jogjaprov.go.id/peta>
- **Kementerian Desa, PDT, dan Transmigrasi (Pusdatin) — Konsultan Data** (Mei 2019 – Jun 2019)
  - Membangun dashboard Indeks Desa Membangun (IDM) serta menstandarkan model data berisi 400 variabel tekstual dan spasial.

## Pengalaman Mengajar

**Universitas Gadjah Mada — Faculty of Mathematics and Natural Sciences — Dosen Praktisi — Pemasaran dan Pelanggan Berbasis AI** — Agu 2026 – Jan 2027

- Mengajar mata kuliah MII263006 “Pemasaran dan Pelanggan Berbasis AI” pada Program Studi S1 Ilmu Komputer, semester gasal 2026/2027.
- Dosen koordinator: Prof. Dr. Azhari, M.T.

**Universitas Gadjah Mada — Faculty of Dentistry (FKG) — Dosen Praktisi — Kedokteran Gigi Digital dan Deteksi Otomatis** — Agu 2026 – Jan 2027

- Mengajar mata kuliah KGRG257202 “Kedokteran Gigi Digital dan Deteksi Otomatis” pada Program Studi Pendidikan Dokter Gigi Spesialis Radiologi Kedokteran Gigi, semester gasal 2026/2027.
- Dosen koordinator: drg. Isti Rahayu Suyani, M.Biotech, Sp.RadOM(K), Ph.D.

**Universitas Dian Nuswantoro, Semarang — Dosen Praktisi (Praktisi Mengajar) — Enterprise Architecture** — Feb 2024 – Jun 2024

- Mengajar mata kuliah Enterprise Architecture pada Program Studi S1 dalam program nasional Praktisi Mengajar (Kemendikbudristek), semester genap 2023/2024.
- Dosen koordinator: Erika Devi Udayanti.

**Universitas Bina Sarana Informatika — Dosen Praktisi (Praktisi Mengajar) — Algoritma Data Science** — Feb 2024 – Jun 2024

- Mengampu perkuliahan Algoritma Data Science pada Program Studi S1 dalam program nasional Praktisi Mengajar (Kemendikbudristek), semester genap 2023/2024.

**Universitas Dian Nuswantoro, Kediri — Dosen Praktisi (Praktisi Mengajar) — Enterprise Architecture** — Mei 2023 – Agu 2023

- Mengajar mata kuliah Enterprise Architecture selama satu semester penuh melalui program nasional Praktisi Mengajar (Kemendikbudristek).

**Universitas Pendidikan Ganesha, Bali — Dosen Praktisi (Praktisi Mengajar) — Data Science Fundamentals** — Okt 2022 – Nov 2022

- Mengajar materi dasar-dasar data science dalam program nasional Praktisi Mengajar (Kemendikbudristek).

**STMIK AKAKOM, Yogyakarta — Pengajar Workshop Big Data** — Mar 2019 – Mar 2020

- Mengajar lokakarya bagi 16 mahasiswa mengenai ekosistem Hadoop: instalasi klaster single-node dan terdistribusi, HDFS, MapReduce, dan YARN.
- Merancang kurikulum praktik, menyusun modul ajar, serta mengoordinasikan ujian dan penilaian.

**SMA Negeri 8 Yogyakarta — Pembina Tim Olimpiade Komputer** — Nov 2013 – Mar 2019

- Membina sekitar 15 siswa per semester untuk persiapan Olimpiade Sains Nasional (OSN) bidang Informatika: matematika diskret, pemrograman C++, serta desain dan analisis algoritma.
- Menyusun kurikulum pelatihan sesuai standar olimpiade serta mengoordinasikan ujian dan penilaian.

## Pembicara, Kuliah Umum & Seminar

- **Kuliah Tamu**, “NL2SQL and KV-Cache Compression — Research Trends in Computer Science and Electronics (Tren Penelitian Ilmu Komputer dan Elektronika),” *Bachelor of Computer Science, Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Nov 2026)
- **Seminar**, “Strategi Pemanfaatan AI untuk Peningkatan Kapasitas Usaha — UMKM Go Smart: Kenali Gizi, Optimalkan AI,” *Kantor Wilayah Direktorat Jenderal Perbendaharaan Provinsi DIY, Kementerian Keuangan RI — Treasury Learning Center Yogyakarta*. (Okt 2026)
- **Pembicara Tamu**, “Insight Session: Sustainable Life — Malam Kangen FMIPA UGM 2026, 71st Dies Natalis of the Faculty,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Sep 2026)
- **Rapat Koordinasi Kebijakan**, “Cetak Biru Strategi Transformasi Digital Sosial 2026–2029: Rekam Sosial Elektronik Terintegrasi Sepanjang Siklus Hidup Warga,” *Rapat Koordinasi Pengembangan Inovasi Digital dalam Mendukung Peningkatan Kualitas DTSEN, Kementerian Koordinator Bidang Pemberdayaan Masyarakat RI, Jakarta*. (Sep 2026)
- **Expert Talk**, “Sains Data dan Penerapannya di Dunia Penelitian dan Industri — expert talk and project feedback for Grade 10–11 data science projects,” *Praxis High School (Yayasan Pendidikan STEAM Yogyakarta), Sleman*. (Sep 2026)
- **Kuliah Umum**, “Alumni Sharing — Graduation of the Bachelor Programme, Period IV, Academic Year 2025/2026,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Agu 2026) <https://www.youtube.com/live/C0M5i3qEceo>
- **Lokakarya**, “Data Art Workshop 2026 — part of the Data Art Exhibition 2026,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada & Keluarga Alumni FMIPA UGM (KAMIPAGAMA)*. (Agu 2026)
- **Seminar**, “SINTESA — Seminar Nasional Inovasi Teknologi dan Sistem Informasi,” *Universitas Dian Nuswantoro, Kediri*. (Apr 2026)
- **Webinar**, “Implementing AI for Business Process — Bean to Brilliance programme for Kopi Kenangan,” *DDK Dharma Korporasi*. (Sep 2025)
- **Kuliah Tamu**, “Practitioner Lecture for Computer Science students,” *Faculty of Engineering and Information Technology, Universitas Jenderal Achmad Yani Yogyakarta*. (Jul 2024)
- **Kuliah Tamu**, “Data-related Project Management,” *Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada*. (Okt 2023)
- **Kuliah Umum**, “Market Basket Analysis,” *Department of Statistics, Faculty of Mathematics and Natural Sciences, Universitas Negeri Yogyakarta*. (Mei 2023)
- **Lokakarya**, “Strategi Akuisisi Data Geospasial Open Source,” *Badan Pengembangan Infrastruktur Wilayah, Kementerian PUPR*. (Des 2022)
- **Kuliah Umum**, “Mengenal Penerapan Data Arsitektur untuk Data Science pada Industri,” *Departemen Teknik Elektro dan Informatika, Sekolah Vokasi UGM*. (Sep 2022)
- **Webinar**, “Topic Modelling with Amazon SageMaker (moderator),” *AWS, Data Science Indonesia, Block71 Bandung*. (Nov 2021)
- **Webinar**, “Data Science Fundamentals,” *IndigoSpace Balikpapan*. (Okt 2021)
- **Webinar**, “CyberTalk Ilmu Data: dari Data, oleh Data, untuk Data,” *Pengelola Nama Domain Internet Indonesia (PANDI)*. (Agu 2021) <https://www.youtube.com/watch?v=BZihn2kB53I>
- **Webinar**, “Keahlian Analitika Data untuk Akuntan Profesional Masa Depan,” *Fakultas Ekonomika dan Bisnis, Universitas Gadjah Mada*. (Jun 2021) <https://www.youtube.com/watch?v=ZrqDgTcxnNQ>
- **Webinar**, “BANGKIT! Startup Kecerdasan Artifisial & Big Data untuk Industri Indonesia,” *Kementerian Perindustrian Republik Indonesia*. (Apr 2021) <https://www.youtube.com/watch?v=g-_FzGhDlPE>
- **Kuliah Umum**, “Smart Nation Session #3 — Big Data Case Study for Smart Province: Cleansing Data Bantuan Sosial di DIY,” *Laboratorium Sistem Komputer dan Jaringan, FMIPA UGM*. (Des 2020) <https://www.youtube.com/watch?v=dY53koYh10k>
- **Focus Group Discussion (FGD)**, “Tata Kelola Data Bantuan Sosial di DIY (moderator),” *Satu Data Indonesia, Kementerian PPN/BAPPENAS*. (Nov 2020)
- **Webinar**, “Becoming a Successful Young Entrepreneur: How to Build Networks and Optimise Business Strategies,” *Institut Pertanian Bogor*. (Agu 2020)
- **Kuliah Umum**, “Covid-19, Rantai Pasok Pangan, Big Data dan Digitalisasi Segala Hal,” *Sekolah Ilmu dan Teknologi Hayati, Institut Teknologi Bandung*. (Mei 2020) <https://www.youtube.com/watch?v=WgHjxx2ILvI>
- **Kuliah Umum**, “Big Data Analytics for Covid-19 Response,” *Universitas Katolik Soegijapranata, Semarang*. (Apr 2020) <https://www.youtube.com/watch?v=ZUgLk_3nvWU>
- **Lokakarya**, “Data Science for Rapid Problem Solving,” *Center for Population and Policy Studies UGM, PT Telkom Indonesia & Kemenpora*. (Des 2019)
- **Lokakarya**, “Big Data Analysis: Hoax Detection,” *Career Development Center FISIPOL, Universitas Gadjah Mada*. (Apr 2019)
- **Seminar**, “Data Driven Business by Using Data Science,” *Kementerian Koperasi dan UKM Republik Indonesia*. (Mar 2019)
- **Lokakarya**, “Social Network Analysis with R and Gephi,” *Center for Population and Policy Studies, Universitas Gadjah Mada*. (Des 2018)
- **Presentasi Makalah Ilmiah**, “Data Preservation Process in Big Data Environment using Open Archival Information System,” *4th International Conference on Science and Technology (ICST)*. (Agu 2018)

## Sertifikasi Profesi

- **Sertifikat Kompetensi Data Science — Big Data Scientist** — Badan Nasional Sertifikasi Profesi (BNSP), No. Reg. TIK.1565.05386 2021 (terbit Sep 2021, 3 thn, kedaluwarsa)
- **Sertifikat Kompetensi Data Science — Junior Data Scientist** — Badan Nasional Sertifikasi Profesi (BNSP), No. Reg. TIK.1565.04480 2021 (terbit Jul 2021, 3 thn, kedaluwarsa)
- **Sertifikat Kompetensi Asesor Tempat Kerja (Bidang TI)** — Badan Nasional Sertifikasi Profesi (BNSP), No. Reg. MET.000.005057 2019 (terbit Mar 2023, 3 thn, kedaluwarsa) *Mencakup asesmen kompetensi pemrograman, data science, dan big data; pertama terbit Okt 2019 dan diperpanjang pada 2023.*

## Organisasi & Pengabdian Masyarakat

**Keluarga Alumni Universitas Gadjah Mada (KAGAMA) — Pengurus Pusat Bidang 2 — Departemen Pusat Data** — Des 2024 – Des 2029
*Yogyakarta, Indonesia*

- Mengawal tata kelola dan integrasi data alumni UGM agar tetap akurat dan terpadu lintas fakultas serta pengurus daerah.
- Memimpin proyek pembangunan sistem basis data alumni terpusat dan terstandar untuk meningkatkan aksesibilitas, keamanan data, serta kolaborasi universitas dan alumni.

**Perhimpunan Pelajar Indonesia (PPI) Provence-Alpes-Côte d'Azur, France — Koordinator Pengembangan Komunitas** — Okt 2024 – Okt 2025
*Provence-Alpes-Côte d'Azur, Prancis*

- Mengoordinasikan kegiatan pengembangan komunitas mahasiswa Indonesia (PPI) di wilayah Provence-Alpes-Côte d'Azur, Prancis.

**Keluarga Alumni FMIPA Gadjah Mada (KAMIPAGAMA) — Anggota — Pengembangan Bisnis & Kemitraan** — Sep 2022 – Sep 2026
*Yogyakarta, Indonesia*

- Mendorong inisiatif pengembangan bisnis serta mempererat hubungan mahasiswa, alumni, dan fakultas.

**Asosiasi Digital Kreatif (ADITIF) — Hubungan Antarlembaga & Pemerintah** — Mei 2019 – Jun 2022
*Yogyakarta, Indonesia*

- Membangun dan menjaga hubungan dengan kementerian, BUMN, serta pemerintah daerah untuk mengadvokasi industri kreatif digital Indonesia.

## Keahlian

- **Pemrograman:** Python, R, C++, SQL
- **Machine Learning & AI:** scikit-learn, TensorFlow, spaCy, Large Language Models (LLM), Self-Organizing Maps
- **Big Data & HPC:** Hadoop (HDFS, MapReduce, YARN), Apache Spark, Apache Solr, High-Performance Computing (HPC)
- **Arsitektur Data & Enterprise:** TOGAF, Pemodelan data konseptual & logis, Desain entity-relationship, Katalogisasi data
- **Metodologi & Standar:** CRISP-DM, ISO/IEC 27001, ISO 14721 (OAIS), Asesmen kompetensi SKKNI, Agile, Scrum
- **Visualisasi & Cloud:** Tableau, CARTO, AWS
- **Lainnya:** Git, WordPress CMS, Bootstrap, ClickUp

## Kemampuan Bahasa

- **Bahasa Indonesia:** Penutur asli
- **Bahasa Inggris:** Kemampuan kerja profesional — IELTS Academic 6.5 — Listening 7.0 · Reading 7.5 · Writing 6.0 · Speaking 6.0
- **Bahasa Prancis:** B1 (CEFR) — TCF — compréhension orale 312 · maîtrise des structures de la langue 346 · compréhension écrite 369

## Penghargaan & Beasiswa

- **Beasiswa LPDP (PK-237)** — Lembaga Pengelola Dana Pendidikan, Kementerian Keuangan RI (2024–2026)
- **Sarjana Ilmu Komputer (Predikat Cum Laude)** — Universitas Gadjah Mada (2017)
- **Beasiswa Bidikmisi** — Kementerian Riset, Teknologi, dan Pendidikan Tinggi RI*. Beasiswa pendidikan penuh bagi mahasiswa berprestasi akademik dari keluarga prasejahtera.* (2013–2017)
