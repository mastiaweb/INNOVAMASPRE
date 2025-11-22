import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // In the Aduni style, the header background is Cyan (#00adef).
  // The links are white.
  
  const navLinks = [
    { name: 'CICLOS', path: '/ciclos' },
    { name: 'RECURSOS', path: '/recursos' },
    { name: 'SEDES', path: '/sedes' },
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'CONTACTO', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-brand-cyan font-sans">
      {/* Top thin bar - integrated visually but conceptually separate */}
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-10 text-xs md:text-base font-bold text-white space-x-4 md:space-x-8 pt-2">
          <a href="#" className="hover:text-brand-darkblue transition">INTRANET</a>
          <a href="#" className="hover:text-brand-darkblue transition">REGLAMENTO</a>
          <a href="#" className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition hidden sm:inline-block text-xs md:text-sm">CONCURSOS</a>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span className="text-xl md:text-2xl font-display italic">480 - 0048</span>
          </div>
          <a href="#" className="hover:text-brand-darkblue"><MessageCircle size={20} /></a>
        </div>
      </div>

      <div className="container mx-auto px-0 md:px-4 relative">
        <div className="flex justify-between items-center h-20 md:h-28">
          
          {/* Logo Container - Slanted White Box */}
          <div className="absolute top-[-2.5rem] md:top-[-3.5rem] left-0 h-[7.5rem] md:h-[10.5rem] w-[240px] md:w-[360px] bg-white z-20 clip-trapezoid flex items-end pb-4 md:pb-8 pl-4 md:pl-8 shadow-sm">
             <Link to="/" className="flex flex-col leading-none group">
                <div className="flex items-center gap-2 text-brand-cyan mb-1">
                  <GraduationCap size={36} />
                  <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">Academia</span>
                </div>
                <span className="text-3xl md:text-5xl font-extrabold text-brand-cyan italic tracking-tighter group-hover:scale-105 transition-transform origin-left">
                  INNOVAMAS
                </span>
             </Link>
          </div>

          {/* Spacer for Logo to push menu right */}
          <div className="w-[220px] md:w-[340px] flex-shrink-0"></div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-white font-bold text-base lg:text-xl hover:text-brand-darkblue transition-colors duration-200 tracking-tight"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contacto" 
              className="bg-brand-darkblue hover:bg-brand-dark text-white px-6 py-3 rounded-md text-base font-bold uppercase tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Matrícula en línea
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 pr-4 md:hidden">
             <Link 
              to="/contacto" 
              className="bg-brand-darkblue text-white px-3 py-1.5 rounded text-xs font-bold uppercase shadow-sm"
            >
              Matrícula
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-brand-darkblue focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-darkblue text-white border-t border-blue-800 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="font-bold text-xl hover:text-brand-cyan"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-blue-800 pt-4 mt-2 text-sm text-blue-200 flex justify-between">
              <span>Intranet</span>
              <span>Reglamento</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;