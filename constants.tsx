import { Education, Experience, Publication, Certificate, SpeakingEngagement, CommunityService } from './types';
import { Mail, MapPin, Phone, Linkedin, GraduationCap, Briefcase, Award, Mic, Users, BookOpen } from 'lucide-react';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Krisostomus Nova Rahmanto",
  phones: ["+62 856 4387 7967"],
  emails: ["vista.indonesia@gmail.com", "kristonova@sadasa.id", "rahmanto@eurecom.fr"],
  address: "Karangjati RT 04, Dk Jetis, Tamantirto, Kasihan, Bantul, DIY, Indonesia 55183",
  about: "Chief Executive Officer & Co-founder at PT Sadasa Akademi Indonesia with extensive experience in Data Architecture, Enterprise Architecture, and Data Science consulting for government and private sectors. Currently pursuing an M.Sc. in Data Science at EURECOM, France."
};

export const EDUCATION: Education[] = [
  {
    degree: "Master of Computer Science (Data Science)",
    institution: "EURECOM Graduate School, France",
    period: "Sep 2024 - Jun 2026",
    description: ["LPDP Scholarship Awardee (PK-237)"]
  },
  {
    degree: "Bachelor of Computer Science with Honours (S.Kom.)",
    institution: "Universitas Gadjah Mada, Yogyakarta",
    period: "Sep 2013 - Dec 2017",
    gpa: "3.87/4.0",
    description: [
      "Thesis: “Data Preservation Process in Big Data Environment”",
    ],
    advisor: "Dr. Mardhani Riasetiawan"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "PT Sadasa Akademi Indonesia",
    role: "Chief Executive Officer & Co-founder",
    period: "Feb 2019 - Present",
    description: "Leading a renowned company specializing in data analytics training and consulting. Responsible for executive, financial, and operational management.",
    bullets: [
      "Mission: Bridging the gap for digital talent and providing valuable data solutions.",
      "Products: Training, Video Learning, Consulting, and Digital Talent Bridge.",
      "Trusted provider for diverse sectors including government organizations and companies in Indonesia."
    ]
  },
  {
    company: "PT Bio Farma (Persero)",
    role: "Data Architect Project Manager",
    period: "Mar 2022 - Sep 2022",
    description: "Oversaw the orchestration of Business and Data Architect Teams to achieve the Data Architecture for the State-Owned Enterprise Pharmaceutical Holding.",
    bullets: [
      "Designed and executed frameworks using TOGAF methodology.",
      "Conducted interviews with 14 member holding companies across 9 value chains.",
      "Strategic coordination for comprehensive data architecture solutions."
    ]
  },
  {
    company: "Perumda Tirta Khatulistiwa (PDAM) Pontianak",
    role: "Advisor for IT Master Plan",
    period: "Apr 2022 - Aug 2022",
    description: "Created a comprehensive framework for the IT Masterplan using TOGAF.",
    bullets: [
      "Developed strategies for Business, Data, Application, and Technology Architecture.",
      "Collaborated with AWS to implement cloud modules and optimize infrastructure.",
      "Strategic planning and stakeholder collaboration."
    ]
  },
  {
    company: "Ministry of Health (Republic of Indonesia)",
    role: "Data Architect",
    period: "Nov 2021 - Dec 2021",
    description: "Developed robust Data Architecture using the TOGAF Framework.",
    bullets: [
      "Created cohesive data ecosystem: logical model, conceptual model, and data catalog.",
      "Collaborated with DTO Ministry of Health, UNDP, and USAID.",
      "Architected scalable and secure data infrastructure."
    ],
    link: "https://dto.kemkes.go.id/Digital-Transformation-Strategy-2024.pdf"
  },
  {
    company: "Dewan Energi Nasional (Republic of Indonesia)",
    role: "Data Modeler (SINAR Project)",
    period: "Nov 2021 - Jul 2022",
    description: "Designed an elaborate Indonesian energy data model for the SPEND information system.",
    bullets: [
      "Consortium project involving USAID, Dewan Energi Nasional, and PT WeSolve.",
      "Crafted ERD for national and regional energy monitoring.",
      "Collaborated with stakeholders in the sustainable energy sector."
    ]
  },
  {
    company: "BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)",
    role: "Trainer for ASN",
    period: "Mar 2021 - Apr 2021",
    description: "Mentored 60 trainees at Deputi Bidang Klimatologi.",
    bullets: [
      "Topics: Data management, Big Data fundamentals, R programming, Tableau."
    ]
  },
  {
    company: "Rumah Sakit Umum Pusat Dr. Sardjito",
    role: "Data Management Consultant",
    period: "Sep 2020 - Oct 2020",
    description: "Provided consulting services centered around health data management.",
    bullets: [
      "Facilitated Focus Group Discussions (FGD) with policy makers and technical teams.",
      "Developed a framework to address data management challenges."
    ]
  },
  {
    company: "BSSN (Badan Siber Sandi Negara)",
    role: "Enterprise Architecture Consultant",
    period: "Aug 2020 - Oct 2020",
    description: "Developed Data Enterprise Architecture using TOGAF Framework for the National Cyber Security Bureau."
  },
  {
    company: "Komisi Pemberantasan Korupsi (KPK)",
    role: "Data Analyst Consultant",
    period: "Jun 2020 - Dec 2020",
    description: "Consulted on using ID numbers to improve social assistance subsidies in three major provinces.",
    bullets: [
      "Translated technical jargon for policy makers (Governors, Secretaries).",
      "Facilitated informed decision-making through data insights."
    ]
  },
  {
    company: "BAPPENAS",
    role: "Trainer (Data Analytics Team)",
    period: "Jul 2020 - Sep 2020",
    description: "Mentored 40 individuals on data management, R programming, and machine learning.",
    link: "https://www.youtube.com/watch?v=WWqeIQz_Q7U"
  },
  {
    company: "Dinas Komunikasi dan Informatika Provinsi DIY",
    role: "Executive Dashboard Developer",
    period: "May 2020 - Dec 2020",
    description: "Developed an executive dashboard for COVID-19 stimulus packages.",
    bullets: [
      "Used R and Tableau for data aggregation, cleansing, and visualization.",
      "Provided insights into economic impact."
    ],
    link: "http://dss.jogjaprov.go.id/"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Certificate of Competence in Data Science (Big Data Scientist)",
    issuer: "BNSP Indonesia",
    date: "Sep 6, 2021",
    regNo: "TIK.1565.05386 2021",
    description: "Qualification as a Big Data Scientist."
  },
  {
    name: "Certificate of Competence in Data Science (Junior Data Scientist)",
    issuer: "BNSP Indonesia",
    date: "Jul 20, 2021",
    regNo: "TIK.1565.04480 2021",
    description: "Qualification as a Junior Data Scientist."
  },
  {
    name: "Certificate of Competence in Workplace Assessment",
    issuer: "BNSP Indonesia",
    date: "Mar 30, 2023",
    regNo: "MET. 000.005057 2019",
    description: "Assessing IT skills (programming, data science, big data)."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Data Preservation Process in Big Data Environment using Open Archival Information System",
    authors: "Rahmanto, K.N. and Riasetiawan, M.",
    conference: "2018 4th International Conference on Science and Technology (ICST)",
    date: "Aug 2018",
    link: "https://ieeexplore.ieee.org/document/8528669"
  },
  {
    title: "Development of the Health Information Analytics Dashboard Using Big Data Analytics",
    authors: "Afifah, A., & Rahmanto, K. N.",
    conference: "The 2nd International Scientific and National Member Meeting on Health Information Management (ISMoHIM) 2020",
    date: "Dec 2021",
    link: "https://publikasi.aptirmik.or.id/index.php/ismohim2020/article/view/109"
  }
];

export const COMMUNITY_SERVICE: CommunityService[] = [
  {
    organization: "Keluarga Alumni Universitas Gadjah Mada (KAGAMA)",
    period: "Dec 2024 - Dec 2029",
    description: [
      "Member of Bidang 2 Pengurus Pusat KAGAMA (Data Dept).",
      "Overseeing data management initiatives for alumni records.",
      "Spearheaded project for centralized alumni data management system."
    ]
  },
  {
    organization: "Keluarga Alumni FMIPA Gadjah Mada (KAMIPAGAMA)",
    period: "Sep 2022 - Sep 2026",
    description: [
      "Focused on driving business development initiatives.",
      "Fostering strong relationships between students, alumni, and the university."
    ]
  },
  {
    organization: "Asosiasi Digital Kreatif (ADITIF)",
    period: "May 2019 - Jun 2022",
    description: [
      "Established relationships with governmental entities and state-owned companies.",
      "Advocated for interests of the digital creative industry."
    ]
  }
];

export const TALKS: SpeakingEngagement[] = [
  {
    title: "Praktisi Mengajar: Data Science Fundamentals",
    event: "Academic Lecture",
    organizer: "Universitas Pendidikan Ganesha Bali",
    date: "Oct-Nov 2022",
    type: "Lecture"
  },
  {
    title: "Mengenal penerapan data arsitektur untuk data science",
    event: "General Lecture",
    organizer: "Sekolah Vokasi UGM",
    date: "Sep 7, 2022",
    type: "Lecture"
  },
  {
    title: "Topic Modelling with Amazon SageMaker",
    event: "Webinar (Moderator)",
    organizer: "AWS, Data Science Indonesia",
    date: "Nov 13, 2021",
    type: "Webinar"
  },
  {
    title: "Data Science Fundamentals",
    event: "Webinar",
    organizer: "IndigoSpace Balikpapan",
    date: "Oct 14, 2021",
    type: "Webinar"
  },
  {
    title: "CyberTalk Ilmu Data: dari Data, oleh Data, untuk Data",
    event: "Webinar",
    organizer: "PANDI",
    date: "Aug 14, 2021",
    type: "Webinar",
    link: "https://www.youtube.com/watch?v=BZihn2kB53I"
  },
  {
    title: "BANGKIT! Startup Kecerdasan Artifisial & Big Data",
    event: "Webinar",
    organizer: "Ministry of Industry RI",
    date: "Apr 9, 2021",
    type: "Webinar",
    link: "https://www.youtube.com/watch?v=g-_FzGhDlPE"
  },
  {
    title: "Smart Nation Online Session #3: Big Data Case Study",
    event: "General Lecture",
    organizer: "FMIPA UGM",
    date: "Dec 1, 2020",
    type: "Lecture",
    link: "https://www.youtube.com/watch?v=dY53koYh10k"
  },
  {
    title: "Covid-19, rantai pasok pangan, Big Data",
    event: "General Lecture",
    organizer: "ITB",
    date: "May 5, 2020",
    type: "Lecture",
    link: "https://www.youtube.com/watch?v=WgHjxx2ILvI"
  },
  {
    title: "Big Data Analytics for Covid-19 Response",
    event: "General Lecture",
    organizer: "Unika Soegijapranata",
    date: "Apr 30, 2020",
    type: "Lecture",
    link: "https://www.youtube.com/watch?v=ZUgLk_3nvWU"
  }
];

export const MENU_ITEMS = [
  { id: 'about', label: 'About', icon: <Users className="w-4 h-4" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'certificates', label: 'Certificates', icon: <Award className="w-4 h-4" /> },
  { id: 'publications', label: 'Publications', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'speaking', label: 'Speaking', icon: <Mic className="w-4 h-4" /> },
  { id: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
];
