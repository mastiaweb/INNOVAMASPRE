import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

// Definición de tipos para los datos del ciclo
interface ScheduleDetail {
  shift: string;
  time: string;
}

interface CycleData {
  id: string;
  university: 'San Marcos' | 'Villarreal';
  title: string;
  description: string;
  methodology: string;
  startDate: string;
  endDate: string;
  modality: string;
  duration: string;
  schedules: ScheduleDetail[];
  image: string;
  tag?: string;
}

// Base de datos de ciclos completa
const cyclesData: CycleData[] = [
  // --- SAN MARCOS ---
  {
    id: 'sm-admision',
    university: 'San Marcos',
    title: 'Meta San Marcos',
    description: 'Ciclo dirigido a estudiantes con experiencia preuniversitaria que buscan reforzar los temas frecuentes del prospecto, con mayor énfasis en la práctica.',
    methodology: '70% PRÁCTICO + 30% TEORÍA',
    startDate: '2 de Diciembre de 2025',
    endDate: '15 de Marzo de 2026',
    modality: 'Presencial / Virtual',
    duration: '14 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 2:00 p.m.' },
      { shift: 'Tarde', time: '3:00 p.m. a 8:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'sm-repaso',
    university: 'San Marcos',
    title: 'Repaso San Marcos ABC-DE',
    description: 'Diseñado para alumnos que ya tienen base teórica y necesitan full práctica tipo examen de admisión (DECO). Resolvemos simulacros diarios.',
    methodology: '100% FULL PRÁCTICA Y RESOLUCIÓN',
    startDate: '5 de Enero de 2026',
    endDate: '15 de Marzo de 2026',
    modality: 'Presencial Tech / Virtual Prime',
    duration: '9 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 2:00 p.m.' },
      { shift: 'Tarde', time: '2:00 p.m. a 8:00 p.m.' },
      { shift: 'Noche', time: '6:00 p.m. a 10:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'sm-medicina',
    university: 'San Marcos',
    title: 'Repaso Medicina San Marcos',
    description: 'Alta exigencia para las carreras de Ciencias de la Salud. Enfoque riguroso en Biología, Química y Anatomía.',
    methodology: 'ESPECIALIZADO SALUD',
    startDate: '5 de Enero de 2026',
    endDate: '15 de Marzo de 2026',
    modality: 'Presencial',
    duration: '9 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 2:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'sm-verano',
    university: 'San Marcos',
    title: 'Verano Pre San Marcos',
    description: 'Para alumnos que inician su preparación o terminaron 5to de secundaria. Se cubren los temas fundamentales.',
    methodology: '50% TEORÍA + 50% PRÁCTICA',
    startDate: '5 de Enero de 2026',
    endDate: '7 de Marzo de 2026',
    modality: 'Virtual / Presencial',
    duration: '8 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'sm-intensivo',
    university: 'San Marcos',
    title: 'Intensivo Medicina',
    description: 'Ciclo rápido de incorporación para alumnos con base sólida.',
    methodology: 'FULL EXÁMENES',
    startDate: '12 de Enero de 2026',
    endDate: 'Marzo 2026',
    modality: 'Virtual',
    duration: '8 semanas',
    schedules: [
      { shift: 'Tarde', time: '4:00 p.m. a 8:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Incorporación'
  },

  // --- VILLARREAL ---
  {
    id: 'unfv-repaso',
    university: 'Villarreal',
    title: 'Repaso Villarreal',
    description: 'Repaso intensivo para el examen de la UNFV. Simulacros constantes y material especializado.',
    methodology: 'FULL PRÁCTICA',
    startDate: 'Enero 2026',
    endDate: 'Marzo 2026',
    modality: 'Virtual / Presencial',
    duration: '8 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 1:30 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'unfv-callao',
    university: 'Villarreal',
    title: 'Repaso Intensivo Callao',
    description: 'Preparación para la Universidad del Callao y Villarreal con temario compartido.',
    methodology: 'TEORÍA Y PRÁCTICA',
    startDate: 'Enero 2026',
    endDate: 'Marzo 2026',
    modality: 'Virtual',
    duration: '8 semanas',
    schedules: [
      { shift: 'Tarde', time: '3:00 p.m. a 8:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unfv-semianual',
    university: 'Villarreal',
    title: 'Semianual Villarreal',
    description: 'Inicia tu preparación para la Villarreal con paciencia y profundidad.',
    methodology: 'TEORÍA Y PRÁCTICA GRADUAL',
    startDate: '6 de Enero de 2026',
    endDate: 'Julio 2026',
    modality: 'Presencial',
    duration: '24 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1427504743055-e9ba63b72089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Incorporación'
  },
  {
    id: 'unfv-integral',
    university: 'Villarreal',
    title: 'Semianual Integral',
    description: 'Preparación base para cualquier universidad pública.',
    methodology: 'FUNDAMENTOS',
    startDate: 'Próximamente',
    endDate: 'Julio 2026',
    modality: 'Virtual',
    duration: '24 semanas',
    schedules: [
      { shift: 'Tarde', time: '3:00 p.m. a 7:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Próximamente'
  }
];

const Cycles: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCycleId, setSelectedCycleId] = useState<string | null>(null);

  useEffect(() => {
    const idParam = searchParams.get('id');
    if (idParam) {
      setSelectedCycleId(idParam);
    } else {
      setSelectedCycleId(null);
    }
  }, [searchParams]);

  const handleCycleClick = (id: string) => {
    setSearchParams({ id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSearchParams({});
  };

  const activeCycle = selectedCycleId ? cyclesData.find(c => c.id === selectedCycleId) : null;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Conditionally render header based on view, or keep generic */}
      <PageHeader 
        title={activeCycle ? activeCycle.title : "Nuestros Ciclos"} 
        subtitle={activeCycle ? activeCycle.university : "Elige tu Ciclo de preparación preuniversitaria."} 
      />

      <div className="container mx-auto px-4 py-10">
        
        {/* VIEW 1: DASHBOARD / MENU */}
        {!activeCycle && (
          <ScrollReveal direction="up">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* San Marcos Block */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition duration-300">
                      <div className="bg-brand-cyan px-6 py-5 flex justify-between items-center relative overflow-hidden">
                          <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black text-white font-display italic tracking-tight">San Marcos</h2>
                            <p className="text-white/80 text-sm font-medium mt-1">Ingenierías, Salud, Letras</p>
                          </div>
                          <ChevronRight className="text-white opacity-80" size={32} />
                          {/* Deco Circle */}
                          <div className="absolute -right-6 -bottom-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                      </div>
                      <div className="divide-y divide-gray-100">
                          {cyclesData.filter(c => c.university === 'San Marcos').map(cycle => (
                              <button 
                                  key={cycle.id}
                                  onClick={() => handleCycleClick(cycle.id)}
                                  className="w-full text-left px-6 py-5 hover:bg-slate-50 transition-all flex justify-between items-center group"
                              >
                                  <div className="flex flex-col pr-4">
                                      <span className="font-bold text-slate-700 text-lg group-hover:text-brand-cyan transition-colors">{cycle.title}</span>
                                      <span className="text-xs text-slate-400 font-medium mt-0.5 uppercase tracking-wide">{cycle.modality}</span>
                                  </div>
                                  {cycle.tag && (
                                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ml-2 shrink-0 shadow-sm
                                        ${cycle.tag === 'Nuevo' ? 'bg-black text-white' : 
                                          cycle.tag === 'Incorporación' ? 'bg-red-500 text-white' : 
                                          'bg-gray-200 text-slate-600'}
                                      `}>
                                          {cycle.tag}
                                      </span>
                                  )}
                              </button>
                          ))}
                      </div>
                  </div>

                  {/* Villarreal Block */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition duration-300">
                      <div className="bg-orange-500 px-6 py-5 flex justify-between items-center relative overflow-hidden">
                          <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-black text-white font-display italic tracking-tight">Villarreal</h2>
                            <p className="text-white/80 text-sm font-medium mt-1">Y otras universidades</p>
                          </div>
                          <ChevronRight className="text-white opacity-80" size={32} />
                          {/* Deco Circle */}
                          <div className="absolute -right-6 -bottom-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                      </div>
                      <div className="divide-y divide-gray-100">
                          {cyclesData.filter(c => c.university === 'Villarreal').map(cycle => (
                               <button 
                                  key={cycle.id}
                                  onClick={() => handleCycleClick(cycle.id)}
                                  className="w-full text-left px-6 py-5 hover:bg-slate-50 transition-all flex justify-between items-center group"
                              >
                                  <div className="flex flex-col pr-4">
                                      <span className="font-bold text-slate-700 text-lg group-hover:text-orange-500 transition-colors">{cycle.title}</span>
                                      <span className="text-xs text-slate-400 font-medium mt-0.5 uppercase tracking-wide">{cycle.modality}</span>
                                  </div>
                                  {cycle.tag && (
                                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ml-2 shrink-0 shadow-sm
                                        ${cycle.tag === 'Nuevo' ? 'bg-black text-white' : 
                                          cycle.tag === 'Incorporación' ? 'bg-red-500 text-white' : 
                                          'bg-gray-200 text-slate-600'}
                                      `}>
                                          {cycle.tag}
                                      </span>
                                  )}
                              </button>
                          ))}
                      </div>
                  </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* VIEW 2: DETAIL CONTENT */}
        {activeCycle && (
          <ScrollReveal direction="up" duration={500}>
               <div className="max-w-6xl mx-auto">
                 {/* Back Button */}
                 <button 
                    onClick={handleBack} 
                    className="mb-8 flex items-center text-slate-500 hover:text-brand-cyan font-bold transition-all hover:-translate-x-1"
                 >
                    <ChevronLeft size={20} className="mr-1" /> Volver a Ciclos
                 </button>

                 {/* Header Image Banner */}
                 <div className="relative w-full h-48 md:h-80 rounded-t-3xl overflow-hidden shadow-lg mb-0 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent z-10"></div>
                    <img src={activeCycle.image} alt={activeCycle.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
                      <div className={`text-xs font-black uppercase px-3 py-1 inline-block rounded mb-3 shadow text-white
                        ${activeCycle.university === 'San Marcos' ? 'bg-brand-cyan' : 'bg-orange-500'}
                      `}>
                         CICLO 2026
                      </div>
                      <h2 className="text-3xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-2 text-shadow-sm">
                        {activeCycle.title}
                      </h2>
                    </div>
                 </div>

                 {/* Main Body */}
                 <div className="bg-white rounded-b-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-0"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                      
                      {/* Left Info Column */}
                      <div className="w-full lg:w-3/5 space-y-8">
                         
                         {/* Description */}
                         <div>
                           <h3 className="text-xl font-bold text-slate-800 mb-2">Descripción</h3>
                           <p className="text-slate-600 text-lg leading-relaxed font-medium border-l-4 border-gray-200 pl-4">
                             {activeCycle.description}
                           </p>
                         </div>

                         {/* Methodology */}
                         <div className="bg-blue-50 border-l-4 border-brand-cyan p-6 rounded-r-xl">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Metodología</span>
                            <span className="text-xl md:text-2xl font-black text-brand-darkblue italic">{activeCycle.methodology}</span>
                         </div>

                         {/* Details Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                               <div className="w-10 text-brand-cyan mr-3"><Calendar size={24} /></div>
                               <div>
                                 <span className="block text-xs font-bold text-slate-400 uppercase">Inicio</span>
                                 <span className="font-bold text-slate-800 text-lg">{activeCycle.startDate}</span>
                               </div>
                            </div>
                            <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                               <div className="w-10 text-brand-magenta mr-3"><Calendar size={24} /></div>
                               <div>
                                 <span className="block text-xs font-bold text-slate-400 uppercase">Fin</span>
                                 <span className="font-bold text-slate-800 text-lg">{activeCycle.endDate}</span>
                               </div>
                            </div>
                            <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                               <div className="w-10 text-brand-cyan mr-3"><User size={24} /></div>
                               <div>
                                 <span className="block text-xs font-bold text-slate-400 uppercase">Modalidad</span>
                                 <span className="font-bold text-slate-800 text-lg">{activeCycle.modality}</span>
                               </div>
                            </div>
                            <div className="flex items-start bg-slate-50 p-4 rounded-xl">
                               <div className="w-10 text-brand-cyan mr-3"><Clock size={24} /></div>
                               <div>
                                 <span className="block text-xs font-bold text-slate-400 uppercase">Duración</span>
                                 <span className="font-bold text-slate-800 text-lg">{activeCycle.duration}</span>
                               </div>
                            </div>
                         </div>

                         {/* Schedules Box */}
                         <div className="pt-4">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                               <Clock className="text-brand-magenta" /> Horarios Disponibles
                            </h3>
                            <div className="space-y-3">
                               {activeCycle.schedules.map((sch, idx) => (
                                 <div key={idx} className="flex flex-col sm:flex-row sm:items-center bg-white p-4 rounded-xl border-2 border-slate-100 hover:border-brand-cyan/30 transition-colors shadow-sm">
                                    <div className="flex items-center gap-2 w-32 shrink-0">
                                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                       <span className="font-black text-brand-darkblue uppercase tracking-wide">{sch.shift}</span>
                                    </div>
                                    <span className="text-slate-600 font-medium ml-0 sm:ml-4">{sch.time}</span>
                                 </div>
                               ))}
                            </div>
                         </div>

                         {/* CTA Button */}
                         <div className="pt-8">
                           <Link 
                             to="/contacto" 
                             className="inline-flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-brand-magenta to-pink-600 text-white font-black uppercase text-lg px-12 py-5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                           >
                              Solicitar Matrícula <ArrowRight size={24} className="ml-2" />
                           </Link>
                         </div>

                      </div>

                      {/* Right Image/Student Column (Desktop Only) */}
                      <div className="hidden lg:flex w-2/5 items-center justify-center relative">
                          <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                            alt="Estudiante Innovamas"
                            className="w-full object-contain relative z-10 drop-shadow-2xl"
                            style={{ maxHeight: '600px' }}
                          />
                      </div>

                    </div>
                 </div>
               </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};

export default Cycles;