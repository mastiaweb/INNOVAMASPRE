import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, Award, Layers, Users } from 'lucide-react';
import CycleCard from '../components/CycleCard';
import { Cycle } from '../types';

const featuredCycles: Cycle[] = [
  {
    id: '1',
    title: 'ANUAL UNI 2025',
    university: 'UNI',
    description: 'Dominio total de ciencias y matemáticas. Exigencia desde el primer día.',
    startDate: '15 MARZO',
    schedule: '8AM - 2PM',
    image: 'https://picsum.photos/id/20/400/300',
    modality: 'Presencial'
  },
  {
    id: '2',
    title: 'REPASO SAN MARCOS',
    university: 'San Marcos',
    description: 'Estrategia DECO y full práctica. Asegura tu vacante en medicina o ingeniería.',
    startDate: '01 ABRIL',
    schedule: '8AM - 2PM',
    image: 'https://picsum.photos/id/24/400/300',
    modality: 'Híbrido'
  },
  {
    id: '3',
    title: 'INTENSIVO CALLAO',
    university: 'Callao',
    description: 'Las fijas para el examen UNAC. Preparación objetiva y directa.',
    startDate: '20 MAYO',
    schedule: '3PM - 8PM',
    image: 'https://picsum.photos/id/4/400/300',
    modality: 'Virtual'
  }
];

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section - Aduni Style */}
      <section className="relative min-h-[600px] md:h-[700px] bg-brand-cyan overflow-hidden flex items-center pt-12 md:pt-0">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        
        {/* Vertical Line Decoration */}
        <div className="hidden md:block absolute top-0 left-[20%] w-[1px] h-32 bg-white/50"></div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            
            {/* Left Content: Text */}
            <div className="w-full md:w-5/12 space-y-2 md:space-y-6 mt-8 md:mt-0 z-20">
              
              {/* Tagline Stack */}
              <div className="flex flex-col items-start transform -rotate-1">
                <div className="text-white font-display font-black italic text-3xl md:text-5xl leading-tight drop-shadow-md">
                  EXIGENCIA QUE
                </div>
                <div className="bg-brand-magenta text-white font-display font-black italic text-3xl md:text-5xl px-3 py-1 transform skew-x-[-10deg] shadow-lg">
                  <span className="transform skew-x-[10deg] inline-block">SÍ FUNCIONA</span>
                </div>
              </div>
              
              <p className="text-white text-lg font-medium max-w-md mt-4 drop-shadow-sm">
                La mejor preparación para UNI, San Marcos y Callao con el sistema más exigente del país.
              </p>

              {/* Dots Slider Control (Visual) */}
              <div className="flex flex-col gap-3 mt-8">
                <div className="w-3 h-3 bg-white rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white transition"></div>
                <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white transition"></div>
              </div>
            </div>

            {/* Center: Person Image */}
            <div className="w-full md:w-4/12 relative flex justify-center mt-8 md:mt-0">
               {/* A wrapper div to simulate the cutout person */}
               <div className="relative w-[280px] h-[380px] md:w-[400px] md:h-[500px]">
                 {/* Floating elements behind */}
                 <div className="absolute top-10 -right-10 w-24 h-24 bg-brand-yellow rounded-full opacity-80 animate-pulse"></div>
                 
                 <img 
                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                   alt="Estudiante Exitoso" 
                   className="w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-2 border-4 border-white"
                   style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                 />
                 
                 {/* Floating Badge: Inicio */}
                 <div className="absolute bottom-10 -right-5 animate-float">
                   <div className="relative">
                     <svg viewBox="0 0 100 100" className="w-32 h-32 fill-brand-magenta text-white drop-shadow-xl">
                       <path d="M50 0 L95 25 L80 75 L20 75 L5 25 Z" />
                     </svg>
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-white leading-none transform -rotate-6">
                       <span className="font-handwriting text-lg">Inicio</span>
                       <span className="font-bold text-3xl">02</span>
                       <span className="font-bold text-xl uppercase">Enero</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Cycle Title & CTA */}
            <div className="w-full md:w-3/12 flex flex-col items-end text-right mt-8 md:mt-0 pb-12 md:pb-0 z-20">
              <div className="text-white font-display font-black text-xl uppercase tracking-widest mb-2">
                Ciclo
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h2 className="text-5xl md:text-6xl font-black text-white italic leading-none tracking-tighter text-shadow-hard" style={{ textShadow: '4px 4px 0 #1d3a6c' }}>
                  REPASO
                </h2>
                <h2 className="text-3xl md:text-4xl font-black text-white italic leading-none tracking-tighter" style={{ textShadow: '3px 3px 0 #1d3a6c' }}>
                  MEDICINA
                </h2>
                <h2 className="text-4xl md:text-5xl font-black text-white italic leading-none tracking-tighter" style={{ textShadow: '3px 3px 0 #1d3a6c' }}>
                  SAN MARCOS
                </h2>
              </div>

              <div className="mt-6 bg-white text-brand-darkblue px-6 py-3 rounded-lg font-bold shadow-lg transform rotate-1 hover:scale-105 transition cursor-pointer">
                <span className="block text-xs uppercase tracking-wider">Disponible en</span>
                <div className="flex items-center gap-2 text-lg">
                  <span className="bg-brand-darkblue text-white p-0.5 rounded-sm"><Check size={14} /></span> Presencial
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <span className="bg-brand-cyan text-white p-0.5 rounded-sm"><Check size={14} /></span> Virtual
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-70 hidden md:block">
            <ChevronDown size={40} strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Featured Cycles Strip */}
      <section className="bg-brand-darkblue py-4 overflow-hidden">
         <div className="flex whitespace-nowrap animate-marquee space-x-12 text-white/90 font-bold uppercase tracking-widest text-sm">
            {[1,2,3,4,5].map(i => (
              <React.Fragment key={i}>
                <span>★ Nuevos Inicios 2025</span>
                <span>★ Vacantes Limitadas</span>
                <span>★ Examen de Becas: 10 Marzo</span>
              </React.Fragment>
            ))}
         </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-800 italic mb-2 uppercase">
              Nuestros Ciclos <span className="text-brand-cyan">Académicos</span>
            </h2>
            <div className="w-24 h-1 bg-brand-magenta mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCycles.map(cycle => (
              <CycleCard key={cycle.id} cycle={cycle} featured={cycle.university === 'UNI'} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/ciclos" className="inline-flex items-center bg-brand-cyan text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-brand-darkblue transition shadow-lg">
              Ver todos los ciclos <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: WHO ARE WE & PILLARS SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background faint pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Part 1: ¿QUIÉNES SOMOS? */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
             {/* Title Block - Slanted Blue */}
             <div className="w-full lg:w-1/3">
                <div className="bg-[#5b6bf1] text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                   <h2 className="text-5xl md:text-6xl font-black font-display italic leading-none uppercase">
                     ¿Quiénes<br/>Somos?
                   </h2>
                </div>
             </div>

             {/* Text Content */}
             <div className="w-full lg:w-2/3">
                <div className="border-l-4 border-brand-cyan pl-8 py-2">
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium text-justify">
                    Somos una academia preuniversitaria comprometida con el <span className="text-[#5b6bf1] font-bold">éxito académico</span> y el desarrollo integral de nuestros estudiantes. Nuestro enfoque es brindar una formación sólida y personalizada que los prepare para alcanzar sus metas en los exámenes de admisión y en su vida universitaria.
                  </p>
                </div>
             </div>
          </div>

          {/* Part 2: Banner NUESTROS PILARES */}
          <div className="mb-16">
             <div className="w-full bg-gradient-to-r from-[#5b6bf1] to-[#00adef] py-4 md:py-6 transform skew-x-[-2deg] shadow-lg rounded-lg flex justify-center items-center">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-display italic tracking-wider transform skew-x-[2deg]">
                   Nuestros Pilares
                </h2>
             </div>
          </div>

          {/* Part 3: Cards Grid with Diamond Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
             
             {/* Pillar 1: Excelencia Académica */}
             <div className="group bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                {/* Diamond Icon */}
                <div className="mb-8 relative">
                   <div className="w-24 h-24 border-[3px] border-brand-cyan rounded-2xl transform rotate-45 flex items-center justify-center shadow-md group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-500">
                      <div className="transform -rotate-45 text-brand-cyan group-hover:text-white transition-colors duration-500">
                         <Award size={40} strokeWidth={1.5} />
                      </div>
                   </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#5b6bf1] mb-4 leading-tight">
                   Excelencia<br/>Académica
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   Formación de alto nivel para alcanzar tus metas universitarias con rigurosidad y disciplina.
                </p>
             </div>

             {/* Pillar 2: Preparación Integral */}
             <div className="group bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                {/* Diamond Icon */}
                <div className="mb-8 relative">
                   <div className="w-24 h-24 border-[3px] border-brand-cyan rounded-2xl transform rotate-45 flex items-center justify-center shadow-md group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-500">
                      <div className="transform -rotate-45 text-brand-cyan group-hover:text-white transition-colors duration-500">
                         <Layers size={40} strokeWidth={1.5} />
                      </div>
                   </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#5b6bf1] mb-4 leading-tight">
                   Preparación<br/>Integral
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   Habilidades y conocimientos clave para una transición universitaria exitosa y duradera.
                </p>
             </div>

             {/* Pillar 3: Educación en Equipo */}
             <div className="group bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                {/* Diamond Icon */}
                <div className="mb-8 relative">
                   <div className="w-24 h-24 border-[3px] border-brand-cyan rounded-2xl transform rotate-45 flex items-center justify-center shadow-md group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-500">
                      <div className="transform -rotate-45 text-brand-cyan group-hover:text-white transition-colors duration-500">
                         <Users size={40} strokeWidth={1.5} />
                      </div>
                   </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#5b6bf1] mb-4 leading-tight">
                   Educación<br/>en Equipo
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   Trabajamos junto a los padres para apoyar el crecimiento académico y personal de cada estudiante.
                </p>
             </div>

          </div>

        </div>
      </section>

      {/* NEW: Offers Section (What do we offer?) */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-300 overflow-hidden">
         {/* Background Patterns */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            
            {/* Title Pill */}
            <div className="flex justify-center mb-16">
               <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-10 py-4 shadow-xl transform hover:scale-105 transition duration-300">
                  <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm text-center">
                     ¿QUÉ TE OFRECEMOS?
                  </h2>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0 pb-16">
               {/* Left Column */}
               <div className="space-y-16 text-center lg:text-right order-2 lg:order-1">
                  {/* Item 01 */}
                  <div className="flex flex-col items-center lg:items-end group cursor-default">
                     <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                     <div className="text-white">
                        <h3 className="font-black text-4xl mb-1 leading-none">01.</h3>
                        <h4 className="font-bold text-2xl leading-tight">DOCENTES<br/>CALIFICADOS</h4>
                     </div>
                  </div>
                  {/* Item 02 */}
                  <div className="flex flex-col items-center lg:items-end group cursor-default">
                     <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                     <div className="text-white">
                        <h3 className="font-black text-4xl mb-1 leading-none">02.</h3>
                        <h4 className="font-bold text-2xl leading-tight">ASESORÍA<br/>PSICO<br/>PEDAGÓGICA</h4>
                     </div>
                  </div>
               </div>

               {/* Center Image */}
               <div className="relative h-[400px] md:h-[550px] flex items-end justify-center order-1 lg:order-2 -mt-10 md:mt-0">
                  {/* Glow behind */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white opacity-20 blur-[100px] rounded-full z-0"></div>
                  
                  <img 
                     src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Estudiantes Innovamas" 
                     className="h-full object-cover relative z-10 drop-shadow-2xl mask-image-gradient transform hover:scale-105 transition duration-700"
                     style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                  />
               </div>

               {/* Right Column */}
               <div className="space-y-16 text-center lg:text-left order-3">
                  {/* Item 03 */}
                  <div className="flex flex-col items-center lg:items-start group cursor-default">
                     <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                     <div className="text-white">
                        <h3 className="font-black text-4xl mb-1 leading-none">03.</h3>
                        <h4 className="font-bold text-2xl leading-tight">MATERIAL<br/>DIDÁCTICO</h4>
                     </div>
                  </div>
                  {/* Item 04 */}
                  <div className="flex flex-col items-center lg:items-start group cursor-default">
                     <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                     <div className="text-white">
                        <h3 className="font-black text-4xl mb-1 leading-none">04.</h3>
                        <h4 className="font-bold text-2xl leading-tight">DOCENTES<br/>CALIFICADOS</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-slate-50 pb-20">
         <div className="container mx-auto px-4 relative -mt-24 z-20">
            <div className="bg-brand-darkblue rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-white gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-800/50 border border-blue-800">
               {/* Stat 1 */}
               <div className="flex-1 flex flex-col items-center text-center px-4 w-full">
                  <div className="text-stroke-white text-6xl md:text-7xl font-black mb-2 tracking-tighter">+300</div>
                  <p className="font-medium text-blue-200 uppercase tracking-wide text-sm md:text-base">Alumnos Activos</p>
               </div>
               {/* Stat 2 */}
               <div className="flex-1 flex flex-col items-center text-center px-4 pt-8 md:pt-0 w-full">
                  <div className="text-stroke-white text-6xl md:text-7xl font-black mb-2 tracking-tighter">+10</div>
                  <p className="font-medium text-blue-200 uppercase tracking-wide text-sm md:text-base">Años preparando futuros cachimbos</p>
               </div>
               {/* Stat 3 */}
               <div className="flex-1 flex flex-col items-center text-center px-4 pt-8 md:pt-0 w-full">
                  <div className="text-stroke-white text-6xl md:text-7xl font-black mb-2 tracking-tighter">20</div>
                  <p className="font-medium text-blue-200 uppercase tracking-wide text-sm md:text-base">Docentes altamente capacitados</p>
               </div>
               {/* Stat 4 */}
               <div className="flex-1 flex flex-col items-center text-center px-4 pt-8 md:pt-0 w-full">
                  <div className="text-stroke-white text-6xl md:text-7xl font-black mb-2 tracking-tighter">90%</div>
                  <p className="font-medium text-blue-200 uppercase tracking-wide text-sm md:text-base">De nuestros estudiantes logran el ingreso</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Home;