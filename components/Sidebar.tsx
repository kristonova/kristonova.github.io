import React from 'react';
import { MENU_ITEMS, PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-full bg-slate-900 text-white z-50 w-72 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0 overflow-y-auto
      `}>
        <div className="p-8 flex flex-col h-full">
          {/* Header/Avatar area could go here */}
          <div className="mb-8">
            <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold mb-4 border-4 border-slate-700 shadow-lg">
              KR
            </div>
            <h1 className="text-xl font-bold leading-tight">{PERSONAL_INFO.name}</h1>
            <p className="text-slate-400 text-sm mt-2">Data Science & Architecture</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors text-left"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Footer Contact in Sidebar */}
          <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-slate-400 space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{PERSONAL_INFO.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              <span>{PERSONAL_INFO.phones[0]}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              <a href={`mailto:${PERSONAL_INFO.emails[0]}`} className="hover:text-white transition-colors">Email Me</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};