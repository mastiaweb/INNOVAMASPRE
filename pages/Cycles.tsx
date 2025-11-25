import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, User, CheckCircle, ChevronRight, Menu, ArrowRight } from 'lucide-react';
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
    title: 'Ciclo Admisión 2026',
    description: 'Ciclo dirigido a estudiantes con experiencia preuniversitaria que buscan reforzar los temas frecuentes del prospecto, con mayor énfasis en la práctica, para postular al examen de admisión.',
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
    tag: 'Recomendado'
  },
  {
    id: 'sm-repaso',
    university: 'San Marcos',
    title: 'Repaso San Marcos',
    description: 'Diseñado para alumnos que ya tienen base teórica y necesitan full práctica tipo examen de admisión (DECO). Resolvemos simulacros diarios y preguntas tipo.',
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
    id: 'sm-verano',
    university: 'San Marcos',
    title: 'Verano Básico',
    description: 'Para alumnos que inician su preparación o terminaron 5to de secundaria. Se cubren los temas fundamentales para construir una base sólida.',
    methodology: '50% TEORÍA + 50% PRÁCTICA',
    startDate: '5 de Enero de 2026',
    endDate: '7 de Marzo de 2026',
    modality: 'Virtual / Presencial',
    duration: '8 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sm-escolar',
    university: 'San Marcos',
    title: 'Escolar',
    description: 'Adelanta tu preparación mientras estás en el colegio. Reforzamiento de cursos clave para asegurar un alto rendimiento escolar y preuniversitario.',
    methodology: 'NIVELACIÓN Y AVANCE',
    startDate: '5 de Enero de 2026',
    endDate: '7 de Marzo de 2026',
    modality: 'Virtual',
    duration: '8 semanas',
    schedules: [
      { shift: 'Mañana', time: '9:00 a.m. a 1:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },

  // --- VILLARREAL ---
  {
    id: 'unfv-admision',
    university: 'Villarreal',
    title: 'Ciclo Admisión UNFV',
    description: 'Preparación exclusiva con el temario de la Universidad Federico Villarreal. Enfoque directo a las preguntas clásicas y nuevos formatos.',
    methodology: 'TEORÍA RESUMIDA + PRÁCTICA OBJETIVA',
    startDate: '2 de Diciembre de 2025',
    endDate: 'Examen de Admisión',
    modality: 'Presencial',
    duration: 'Hasta el examen',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 2:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Destacado'
  },
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
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unfv-verano',
    university: 'Villarreal',
    title: 'Verano Básico UNFV',
    description: 'Inicia tu preparación para la Villarreal desde cero. Ideal para alumnos que salen de colegio.',
    methodology: 'TEORÍA Y PRÁCTICA GRADUAL',
    startDate: '6 de Enero de 2026',
    endDate: '28 de Febrero de 2026',
    modality: 'Virtual',
    duration: '8 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1427504743055-e9ba63b72089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'unfv-escolar',
    university: 'Villarreal',
    title: 'Escolar UNFV',
    description: 'Refuerzo escolar con visión universitaria para alumnos de 3ro, 4to y 5to de secundaria.',
    methodology: 'APOYO ESCOLAR + PREUNIVERSITARIO',
    startDate: '12 de Enero de 2026',
    endDate: '28 de Febrero de 2026',
    modality: 'Virtual',
    duration: '7 semanas',
    schedules: [
      { shift: 'Tarde', time: '3:00 p.m. a 7:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Cycles: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedUniversity, setSelectedUniversity] = useState<'San Marcos' | 'Villarreal'>('San Marcos');
  const [selectedCycleId, setSelectedCycleId] = useState<string>('sm-admision');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Detectar universidad
    const uParam = searchParams.get('u');
    if (uParam === 'unfv') setSelectedUniversity('Villarreal');
    else if (uParam === 'unmsm') setSelectedUniversity('San Marcos');

    // 2. Detectar ID específico del ciclo
    const idParam = searchParams.get('id');
    if (idParam) {
      // Validar si el ID existe en nuestra data
      const exists = cyclesData.find(c => c.id === idParam);
      if (exists) {
        setSelectedCycleId(idParam);
        setSelectedUniversity(exists.university);
      }
    } else {
      // Si solo cambiamos de universidad pero no hay ID, seleccionar el primero de esa u
      if (uParam === 'unfv' && selectedUniversity !== 'Villarreal') {
         setSelectedCycleId('unfv-admision');
      } else if (uParam === 'unmsm' && selectedUniversity !== 'San Marcos') {
         setSelectedCycleId('sm-admision');
      }
    }
  }, [searchParams, selectedUniversity]);

  // Filtrar ciclos para el menú lateral
  const smCycles = cyclesData.filter(c => c.university === 'San Marcos');
  const unfvCycles = cyclesData.filter(c => c.university === 'Villarreal');

  // Obtener datos del ciclo seleccionado actualmente
  const activeCycle = cyclesData.find(c => c.id === selectedCycleId) || cyclesData[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Nuestros Ciclos" 
        subtitle="Elige tu ciclo de preparación preuniversitaria." 
      />

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* SIDEBAR MENU */}
          <div className="w-full lg:w-1/4">
             <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
                {/* Mobile Toggle for Menu (Only visible on small screens) */}
                <div className="lg:hidden p-4 bg-brand-cyan text-white font-bold flex justify-between items-center cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <span>Menú de Ciclos</span>
                  <Menu size={20} />
                </div>

                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                  
                  {/* San Marcos Group */}
                  <div className="border-b border-gray-100">
                    <div 
                      className={`p-4 font-black uppercase tracking-wide cursor-pointer flex justify-between items-center transition-colors ${selectedUniversity === 'San Marcos' ? 'bg-brand-cyan text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                      onClick={() => {
                        setSelectedUniversity('San Marcos');
                        setSelectedCycleId(smCycles[0].id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <span>San Marcos</span>
                      {selectedUniversity === 'San Marcos' && <ChevronRight size={18} />}
                    </div>
                    
                    {selectedUniversity === 'San Marcos' && (
                      <div className="bg-slate-50 animate-fade-in">
                        {smCycles.map(cycle => (
                          <button
                            key={cycle.id}
                            onClick={() => {
                              setSelectedCycleId(cycle.id);
                              setMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm font-bold border-l-4 transition-all ${
                              selectedCycleId === cycle.id 
                                ? 'border-brand-magenta text-brand-magenta bg-white shadow-sm' 
                                : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              {cycle.title}
                              {cycle.tag && (
                                <span className="text-[10px] bg-brand-darkblue text-white px-1.5 py-0.5 rounded uppercase">
                                  {cycle.tag}
                                </span>
                              )}
                            </div>
                            {cycle.title.includes('Repaso') && <span className="text-[10px] text-red-400 italic font-normal block mt-0.5">Incorporación</span>}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Villarreal Group */}
                  <div>
                    <div 
                      className={`p-4 font-black uppercase tracking-wide cursor-pointer flex justify-between items-center transition-colors ${selectedUniversity === 'Villarreal' ? 'bg-orange-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                      onClick={() => {
                        setSelectedUniversity('Villarreal');
                        setSelectedCycleId(unfvCycles[0].id);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <span>Villarreal</span>
                      {selectedUniversity === 'Villarreal' && <ChevronRight size={18} />}
                    </div>

                    {selectedUniversity === 'Villarreal' && (
                      <div className="bg-slate-50 animate-fade-in">
                        {unfvCycles.map(cycle => (
                          <button
                            key={cycle.id}
                            onClick={() => {
                              setSelectedCycleId(cycle.id);
                              setMobileMenuOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm font-bold border-l-4 transition-all ${
                              selectedCycleId === cycle.id 
                                ? 'border-brand-magenta text-brand-magenta bg-white shadow-sm' 
                                : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-gray-100'
                            }`}
                          >
                            {cycle.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
             </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="w-full lg:w-3/4">
             <ScrollReveal key={activeCycle.id} direction="up" duration={500}>
               
               {/* Header Image Banner */}
               <div className="relative w-full h-48 md:h-64 rounded-t-3xl overflow-hidden shadow-lg mb-0 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-transparent z-10"></div>
                  <img src={activeCycle.image} alt={activeCycle.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                  
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <div className="bg-brand-yellow text-brand-darkblue text-xs font-black uppercase px-3 py-1 inline-block rounded mb-2 shadow">
                       CICLO 2026
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-2 text-shadow-sm">
                      {activeCycle.title}
                    </h2>
                    {activeCycle.title.includes('ABC') && (
                      <span className="bg-white text-brand-blue text-sm font-bold px-2 py-0.5 rounded">
                        ABC - DE
                      </span>
                    )}
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
                         <p className="text-slate-600 text-lg leading-relaxed font-medium">
                           {activeCycle.description}
                         </p>
                       </div>

                       {/* Methodology */}
                       <div className="bg-blue-50 border-l-4 border-brand-cyan p-4 rounded-r-lg">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Metodología</span>
                          <span className="text-xl font-black text-brand-darkblue italic">{activeCycle.methodology}</span>
                       </div>

                       {/* Details Grid */}
                       <div className="grid grid-cols-1 gap-4 pt-4">
                          <div className="flex items-center">
                             <div className="w-10 flex justify-center text-brand-cyan"><Calendar size={22} /></div>
                             <div>
                               <span className="block text-xs font-bold text-slate-400 uppercase">Inicio:</span>
                               <span className="font-bold text-slate-700">{activeCycle.startDate}</span>
                             </div>
                          </div>
                          <div className="flex items-center">
                             <div className="w-10 flex justify-center text-brand-magenta"><Calendar size={22} /></div>
                             <div>
                               <span className="block text-xs font-bold text-slate-400 uppercase">Fin:</span>
                               <span className="font-bold text-slate-700">{activeCycle.endDate}</span>
                             </div>
                          </div>
                          <div className="flex items-center">
                             <div className="w-10 flex justify-center text-brand-cyan"><User size={22} /></div>
                             <div>
                               <span className="block text-xs font-bold text-slate-400 uppercase">Modalidad:</span>
                               <span className="font-bold text-slate-700">{activeCycle.modality}</span>
                             </div>
                          </div>
                          <div className="flex items-center">
                             <div className="w-10 flex justify-center text-brand-cyan"><Clock size={22} /></div>
                             <div>
                               <span className="block text-xs font-bold text-slate-400 uppercase">Duración:</span>
                               <span className="font-bold text-slate-700">{activeCycle.duration}</span>
                             </div>
                          </div>
                       </div>

                       {/* Schedules Box */}
                       <div className="pt-4">
                          <div className="flex items-center mb-3">
                             <div className="w-10 flex justify-center text-slate-400"><Clock size={22} /></div>
                             <span className="font-bold text-slate-800 text-lg">Horarios Disponibles:</span>
                          </div>
                          <div className="pl-10 space-y-2">
                             {activeCycle.schedules.map((sch, idx) => (
                               <div key={idx} className="flex flex-col sm:flex-row sm:items-center bg-slate-50 p-3 rounded-lg border border-gray-100 hover:border-brand-cyan/30 transition-colors">
                                  <span className="font-black text-brand-darkblue w-24 flex items-center gap-1">
                                    {sch.shift} <ArrowRight size={14} className="text-brand-magenta" />
                                  </span>
                                  <span className="text-slate-600 font-medium">{sch.time}</span>
                               </div>
                             ))}
                          </div>
                       </div>

                       {/* CTA Button */}
                       <div className="pt-8">
                         <Link 
                           to="/contacto" 
                           className="inline-block bg-gradient-to-r from-brand-magenta to-pink-600 text-white font-black uppercase text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform skew-x-[-10deg]"
                         >
                            <span className="block transform skew-x-[10deg]">Solicitar Horario de Clase</span>
                         </Link>
                       </div>

                    </div>

                    {/* Right Image/Student Column (Desktop Only) */}
                    <div className="hidden lg:flex w-2/5 items-end justify-center relative">
                        <div className="absolute top-10 right-0 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl"></div>
                        <img 
                          src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                          alt="Estudiante Innovamas"
                          className="w-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition duration-500"
                          style={{ maxHeight: '500px' }}
                        />
                    </div>

                  </div>
               </div>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cycles;