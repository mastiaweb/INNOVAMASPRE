import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone, MessageCircle, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { 
      name: 'CICLOS', 
      path: '/ciclos',
      dropdown: [
        { 
          name: 'San Marcos', 
          path: '/ciclos?u=unmsm',
          subItems: [
            { name: 'Ciclo Admisión 2026', path: '/ciclos?u=unmsm&id=sm-admision' },
            { name: 'Repaso San Marcos', path: '/ciclos?u=unmsm&id=sm-repaso' },
            { name: 'Verano Básico', path: '/ciclos?u=unmsm&id=sm-verano' },
            { name: 'Escolar', path: '/ciclos?u=unmsm&id=sm-escolar' }
          ]
        },
        { 
          name: 'Villarreal', 
          path: '/ciclos?u=unfv',
          subItems: [
             { name: 'Ciclo Admisión UNFV', path: '/ciclos?u=unfv&id=unfv-admision' },
             { name: 'Repaso Villarreal', path: '/ciclos?u=unfv&id=unfv-repaso' },
             { name: 'Verano Básico UNFV', path: '/ciclos?u=unfv&id=unfv-verano' },
             { name: 'Escolar UNFV', path: '/ciclos?u=unfv&id=unfv-escolar' }
          ]
        }
      ]
    },
    { name: 'SEDES', path: '/sedes' },
    { name: 'RECURSOS', path: '/recursos' },
    { name: 'NOSOTROS', path: '/nosotros' },
  ];

  const toggleMobileSubMenu = (name: string) => {
    if (mobileSubMenuOpen === name) {
      setMobileSubMenuOpen(null);
    } else {
      setMobileSubMenuOpen(name);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg bg-white font-sans">
      {/* Top Bar - Cyan Background */}
      <div className="bg-brand-cyan text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm md:text-base font-bold">
          <div className="flex space-x-4">
             <span className="hidden sm:inline">¡Tu ingreso es nuestro objetivo!</span>
             <a href="#" className="hover:text-brand-darkblue transition underline decoration-dotted">Intranet Alumnos</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
               <Phone size={16} /> <span>(01) 480 - 0048</span>
            </div>
            <a href="https://wa.me/51999888777" target="_blank" className="flex items-center gap-1 hover:text-brand-darkblue transition">
               <MessageCircle size={16} /> <span>WhatsApp</span>
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
               <GraduationCap size={36} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl md:text-4xl font-black text-brand-blue tracking-tighter italic">
                INNOVAMAS
              </span>
              <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-slate-400 uppercase">
                Academia
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.path} 
                  className={`flex items-center px-5 py-2 font-bold text-base uppercase tracking-wide transition-all duration-200 rounded-full hover:bg-slate-50 hover:text-brand-cyan ${
                    location.pathname === link.path ? 'text-brand-cyan bg-blue-50' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1 mt-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                </Link>

                {/* Level 1 Dropdown (e.g., San Marcos, Villarreal) */}
                {link.dropdown && (
                  <div className="absolute left-0 pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-visible py-2">
                      {link.dropdown.map((subLink) => (
                         <div key={subLink.name} className="relative group/submenu">
                           <Link
                             to={subLink.path}
                             className="flex items-center justify-between px-6 py-3 text-base font-bold text-slate-600 hover:text-brand-cyan hover:bg-blue-50 transition-colors"
                           >
                             {subLink.name}
                             {subLink.subItems && <ChevronRight size={16} />}
                           </Link>

                           {/* Level 2 Dropdown (e.g., Admision, Repaso) */}
                           {subLink.subItems && (
                             <div className="absolute left-full top-0 w-64 pl-2 opacity-0 translate-x-[-10px] pointer-events-none group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:pointer-events-auto transition-all duration-300 ease-out">
                                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                                  {subLink.subItems.map((deepLink) => (
                                    <Link
                                      key={deepLink.name}
                                      to={deepLink.path}
                                      className="block px-6 py-3 text-sm font-semibold text-slate-500 hover:text-brand-cyan hover:bg-blue-50 transition-colors"
                                    >
                                      {deepLink.name}
                                    </Link>
                                  ))}
                                </div>
                             </div>
                           )}
                         </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contacto" 
              className="bg-brand-magenta hover:bg-pink-600 text-white px-8 py-3 rounded-full text-base font-black uppercase tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Matrícula 2025
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
             <Link 
              to="/contacto" 
              className="bg-brand-magenta text-white px-4 py-2 rounded-full text-sm font-bold uppercase shadow-sm"
            >
              Matrícula
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-brand-darkblue hover:text-brand-cyan focus:outline-none bg-slate-100 p-2 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-down z-40 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex items-center justify-between">
                  <Link 
                    to={link.path} 
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className={`flex-grow font-bold text-xl p-4 rounded-lg ${
                      location.pathname === link.path ? 'bg-blue-50 text-brand-cyan' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>

                {/* Mobile Submenu Level 1 */}
                {link.dropdown && (
                  <div className="pl-4 space-y-1 mt-1 border-l-4 border-brand-cyan/20 ml-3">
                    {link.dropdown.map((subLink) => (
                      <div key={subLink.name}>
                         <div className="flex items-center justify-between pr-4">
                           <Link
                             to={subLink.path}
                             onClick={() => {
                               if(!subLink.subItems) setIsOpen(false);
                             }}
                             className="block p-3 text-base font-bold text-slate-700 hover:text-brand-cyan flex-grow"
                           >
                             {subLink.name}
                           </Link>
                           {subLink.subItems && (
                             <button onClick={() => toggleMobileSubMenu(subLink.name)} className="p-2 bg-slate-100 rounded-full">
                               <ChevronDown size={16} className={`transition-transform ${mobileSubMenuOpen === subLink.name ? 'rotate-180' : ''}`} />
                             </button>
                           )}
                         </div>

                         {/* Mobile Submenu Level 2 */}
                         {subLink.subItems && mobileSubMenuOpen === subLink.name && (
                           <div className="pl-4 pb-2 space-y-1 border-l-2 border-slate-200 ml-3">
                             {subLink.subItems.map((deepLink) => (
                               <Link
                                 key={deepLink.name}
                                 to={deepLink.path}
                                 onClick={() => setIsOpen(false)}
                                 className="block p-2 text-sm font-medium text-slate-500 hover:text-brand-magenta"
                               >
                                 {deepLink.name}
                               </Link>
                             ))}
                           </div>
                         )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="h-px bg-gray-100 my-2"></div>
            <a href="#" className="p-4 text-slate-500 font-medium text-base flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div> Intranet Alumnos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;