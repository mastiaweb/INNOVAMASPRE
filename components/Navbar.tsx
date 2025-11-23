import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // In the Aduni/Innovamas style:
  // Primary: Cyan/Blue
  // Text: White on bg, Dark on white
  
  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'CICLOS', path: '/ciclos' },
    { name: 'SEDES', path: '/sedes' },
    { name: 'RECURSOS', path: '/recursos' },
    { name: 'NOSOTROS', path: '/nosotros' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg bg-white font-sans">
      {/* Top Bar - Cyan Background */}
      <div className="bg-brand-cyan text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-xs md:text-sm font-bold">
          <div className="flex space-x-4">
             <span className="hidden sm:inline">¡Tu ingreso es nuestro objetivo!</span>
             <a href="#" className="hover:text-brand-darkblue transition underline decoration-dotted">Intranet Alumnos</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
               <Phone size={14} /> <span>(01) 480 - 0048</span>
            </div>
            <a href="https://wa.me/51999888777" target="_blank" className="flex items-center gap-1 hover:text-brand-darkblue transition">
               <MessageCircle size={14} /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-cyan text-white p-2 rounded-lg transform group-hover:rotate-6 transition duration-300">
               <GraduationCap size={32} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tighter italic">
                INNOVAMAS
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                Academia
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`px-4 py-2 font-bold text-sm uppercase tracking-wide transition-all duration-200 rounded-full hover:bg-slate-50 hover:text-brand-cyan ${
                  location.pathname === link.path ? 'text-brand-cyan bg-blue-50' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contacto" 
              className="bg-brand-magenta hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Matrícula 2025
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
             <Link 
              to="/contacto" 
              className="bg-brand-magenta text-white px-3 py-2 rounded-full text-xs font-bold uppercase shadow-sm"
            >
              Matrícula
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-darkblue hover:text-brand-cyan focus:outline-none bg-slate-100 p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg p-3 rounded-lg ${
                   location.pathname === link.path ? 'bg-blue-50 text-brand-cyan' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2"></div>
            <a href="#" className="p-3 text-slate-500 font-medium text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div> Intranet Alumnos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;