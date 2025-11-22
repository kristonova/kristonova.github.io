export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description?: string[];
  advisor?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets?: string[];
  link?: string;
}

export interface Publication {
  title: string;
  authors: string;
  conference: string;
  date: string;
  link?: string;
  doi?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
  regNo?: string;
  description: string;
}

export interface SpeakingEngagement {
  title: string;
  event: string;
  organizer: string;
  date: string;
  link?: string;
  type: 'Seminar' | 'Workshop' | 'Lecture' | 'Webinar' | 'FGD' | 'Presentation';
}

export interface CommunityService {
  organization: string;
  role?: string;
  period: string;
  description: string[];
}