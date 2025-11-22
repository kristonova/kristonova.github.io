import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Section } from './components/Section';
import { 
  PERSONAL_INFO, 
  EDUCATION, 
  EXPERIENCE, 
  CERTIFICATES, 
  PUBLICATIONS, 
  COMMUNITY_SERVICE, 
  TALKS 
} from './constants';
import { ExternalLink, Menu, Download, Calendar, MapPin, Youtube } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className="lg:hidden bg-slate-900 text-white p-4 sticky top-0 z-30 flex justify-between items-center shadow-md">
        <span className="font-bold truncate mr-4">{PERSONAL_INFO.name}</span>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-800 rounded-md">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 bg-white min-h-screen shadow-xl lg:my-8 lg:rounded-xl lg:overflow-hidden lg:mr-8">
        
        {/* Hero Section */}
        <section id="about" className="py-16 border-b border-slate-200">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{PERSONAL_INFO.name}</h1>
          <p className="text-xl text-slate-600 mb-6 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-8">
            {PERSONAL_INFO.emails.map(email => (
              <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors bg-slate-100 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {email}
              </a>
            ))}
          </div>
        </section>

        <Section id="experience" title="Experience">
          <div className="space-y-12">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{job.period}</span>
                </div>
                <div className="text-blue-700 font-medium mb-3">{job.company}</div>
                <p className="text-slate-700 mb-3 leading-relaxed text-sm md:text-base">{job.description}</p>
                {job.bullets && (
                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 text-sm">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {job.link && (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline mt-2">
                    <ExternalLink className="w-3 h-3" />
                    View Project/Reference
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{edu.degree}</h3>
                    <div className="text-blue-700">{edu.institution}</div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">{edu.period}</span>
                </div>
                {edu.gpa && <div className="text-sm font-semibold text-slate-700 mb-2">GPA: {edu.gpa}</div>}
                {edu.description && (
                  <div className="text-sm text-slate-600 space-y-1">
                    {edu.description.map((d, i) => <div key={i}>{d}</div>)}
                  </div>
                )}
                {edu.advisor && <div className="text-sm text-slate-500 mt-2 italic">Advisor: {edu.advisor}</div>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="certificates" title="Certificates">
          <div className="grid sm:grid-cols-2 gap-4">
            {CERTIFICATES.map((cert, idx) => (
              <div key={idx} className="border border-slate-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-800 mb-1 leading-snug">{cert.name}</h3>
                <div className="text-sm text-blue-600 mb-2">{cert.issuer}</div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
                <p className="text-sm text-slate-600">{cert.description}</p>
                {cert.regNo && <div className="text-xs text-slate-400 mt-2 font-mono">{cert.regNo}</div>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="publications" title="Publications">
          <div className="space-y-6">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="group">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2">
                    {pub.title}
                    {pub.link && <ExternalLink className="w-4 h-4 shrink-0 mt-1 opacity-50 group-hover:opacity-100" />}
                  </a>
                </h3>
                <div className="text-sm text-slate-600 mt-1">{pub.authors}</div>
                <div className="text-sm text-slate-500 italic mt-1">{pub.conference} &middot; {pub.date}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="speaking" title="Selected Talks">
          <p className="text-slate-600 mb-6 text-sm">
            A selection of seminars, workshops, and lectures delivered between 2018-2022.
          </p>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Event / Title</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Organizer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TALKS.map((talk, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-slate-900">{talk.date}</td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-800 block sm:hidden mb-1">{talk.organizer}</div>
                      <div className="font-medium">{talk.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5 inline-flex items-center gap-1">
                         {talk.event}
                         {talk.link && (
                           <a href={talk.link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 ml-2">
                             <Youtube className="w-3 h-3" />
                           </a>
                         )}
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">{talk.organizer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="community" title="Community Service">
          <div className="space-y-8">
            {COMMUNITY_SERVICE.map((service, idx) => (
              <div key={idx}>
                 <h3 className="font-bold text-slate-900">{service.organization}</h3>
                 <div className="text-sm text-blue-600 mb-2">{service.period}</div>
                 <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                   {service.description.map((desc, i) => (
                     <li key={i}>{desc}</li>
                   ))}
                 </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 mt-12 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Krisostomus Nova Rahmanto.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;