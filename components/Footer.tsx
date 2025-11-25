import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white py-20 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Branding - Added lg:pl-16 to shift content right */}
        <div className="w-full lg:w-5/12 space-y-8 text-center lg:text-left lg:pl-16">
          <div className="inline-block bg-white/20 p-8 rounded-[2rem] backdrop-blur-md shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
             <GraduationCap size={80} className="text-white drop-shadow-md" />
          </div>
          
          <div>
            <h2 className="text-5xl font-black font-display tracking-tight mb-2 leading-tight">
              Academia <br/>
              preuniversitaria
            </h2>
            <div className="h-2 w-24 bg-brand-yellow rounded-full mb-6 mx-auto lg:mx-0"></div>
          </div>

          <p className="text-blue-50 text-lg leading-relaxed font-medium">
            Academia preuniversitaria con años de experiencia en preparar a estudiantes y asegurar una vacante en el examen de admisión. Déjanos tus datos para poder comunicarnos contigo.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-5/12">
           <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2 text-blue-100">Nombres</label>
                <input 
                  type="text" 
                  placeholder="Nombres" 
                  className="w-full px-6 py-4 rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition shadow-lg font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2 text-blue-100">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-6 py-4 rounded-full bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition shadow-lg font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-2 text-blue-100">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿Qué información necesitas?" 
                  className="w-full px-6 py-4 rounded-[2rem] bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition resize-none shadow-lg font-medium"
                ></textarea>
              </div>
              <button className="w-full bg-[#bef264] hover:bg-[#a3e635] text-brand-darkblue font-black text-xl py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider">
                Enviar
              </button>
           </form>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/20 text-center text-sm font-semibold text-blue-100 relative z-10">
        <p>© {new Date().getFullYear()} Academia Innovamas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;