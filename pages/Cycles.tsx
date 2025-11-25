import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, ArrowRight, ChevronRight, ChevronLeft,
  BookOpen, FileEdit, CheckCircle, ClipboardCheck, Award, Brain, 
  Languages, FileText, Users, Video, GraduationCap, ArrowLeft, Star, Zap, Sparkles
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

// Types
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

// Data
const cyclesData: CycleData[] = [
  // --- SAN MARCOS ---
  {
    id: 'sm-admision',
    university: 'San Marcos',
    title: 'Meta San Marcos (Admisión)',
    description: 'Ciclo dirigido a estudiantes con experiencia preuniversitaria que buscan reforzar los temas frecuentes del prospecto.',
    methodology: '70% PRÁCTICA + 30% TEORÍA',
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
    description: 'Diseñado para alumnos que ya tienen base teórica y necesitan full práctica tipo examen de admisión (DECO).',
    methodology: '100% FULL PRÁCTICA',
    startDate: '5 de Enero de 2026',
    endDate: '15 de Marzo de 2026',
    modality: 'Híbrido',
    duration: '9 semanas',
    schedules: [
      { shift: 'Mañana', time: '8:00 a.m. a 2:00 p.m.' }
    ],
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'sm-medicina',
    university: 'San Marcos',
    title: 'Repaso Medicina',
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
    methodology: 'NIVELACIÓN Y BASE',
    startDate: '5 de Enero de 2026',
    endDate: '7 de Marzo de 2026',
    modality: 'Virtual / Presencial',
    duration: '8 semanas',
    schedules: [{ shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }],
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'sm-escolar',
    university: 'San Marcos',
    title: 'Ciclo Escolar San Marcos',
    description: 'Adelanta tu preparación desde el colegio. Dirigido a alumnos de 3ro, 4to y 5to de secundaria.',
    methodology: 'BASE ESCOLAR',
    startDate: '10 de Enero de 2026',
    endDate: '28 de Febrero de 2026',
    modality: 'Virtual',
    duration: '7 semanas',
    schedules: [{ shift: 'Mañana', time: '9:00 a.m. a 1:00 p.m.' }],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  // --- VILLARREAL ---
  {
    id: 'unfv-admision',
    university: 'Villarreal',
    title: 'Repaso Villarreal',
    description: 'Ciclo intensivo enfocado en el temario específico de la UNFV. Rapidez y precisión.',
    methodology: 'FULL RESOLUCIÓN',
    startDate: '10 de Enero de 2026',
    endDate: 'Examen de Admisión',
    modality: 'Presencial',
    duration: '8 semanas',
    schedules: [{ shift: 'Tarde', time: '3:00 p.m. a 8:00 p.m.' }],
    image: 'https://images.unsplash.com/photo-1590402494587-44b71d87e5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
   {
    id: 'unfv-repaso',
    university: 'Villarreal',
    title: 'Repaso Intensivo Callao/UNFV',
    description: 'Asegura tu ingreso con un repaso violento de los temas más frecuentes.',
    methodology: 'EXÁMENES PASADOS',
    startDate: '15 de Enero de 2026',
    endDate: 'Examen de Admisión',
    modality: 'Presencial',
    duration: '6 semanas',
    schedules: [{ shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Nuevo'
  },
  {
    id: 'unfv-verano',
    university: 'Villarreal',
    title: 'Semianual Villarreal',
    description: 'Preparación integral desde cero para dominar el prospecto UNFV.',
    methodology: 'TEORÍA Y PRÁCTICA',
    startDate: '20 de Enero de 2026',
    endDate: 'Junio 2026',
    modality: 'Presencial',
    duration: '5 meses',
    schedules: [{ shift: 'Mañana', time: '8:00 a.m. a 1:00 p.m.' }],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Incorporación'
  },
  {
    id: 'unfv-escolar',
    university: 'Villarreal',
    title: 'Semianual Integral',
    description: 'Para estudiantes que buscan una base sólida apta para cualquier universidad.',
    methodology: 'INTEGRAL',
    startDate: 'Próximamente',
    endDate: 'Junio 2026',
    modality: 'Híbrido',
    duration: '5 meses',
    schedules: [{ shift: 'Tarde', time: '4:00 p.m. a 8:00 p.m.' }],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Próximamente'
  }
];

const Cycles: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [view, setView] = useState<'dashboard' | 'detail'>('dashboard');

  useEffect(() => {
    // Scroll to top whenever the search parameters change (entering a cycle or going back)
    window.scrollTo(0, 0);
    
    const id = searchParams.get('id');
    if (id) {
      setActiveCycleId(id);
      setView('detail');
    } else {
      setActiveCycleId(null);
      setView('dashboard');
    }
  }, [searchParams]);

  const activeCycle = cyclesData.find(c => c.id === activeCycleId);

  const handleBack = () => {
    setSearchParams({}); // Clear params to go back to dashboard
  };

  // Dynamic Benefits based on University
  const getBenefits = (university: string) => {
    const isSM = university === 'San Marcos';
    const univName = isSM ? 'UNMSM' : 'UNFV';
    
    return [
      {
        icon: <BookOpen className="text-white" size={32} />,
        title: "Clases teórico prácticas",
        desc: `Con énfasis en la resolución de problemas tipo examen de admisión de los temas clave del prospecto de admisión de la ${univName}.`,
      },
      {
        icon: <FileEdit className="text-white" size={32} />,
        title: "Prácticas dirigidas",
        desc: "Evaluamos tu comprensión diaria con preguntas tipo admisión cuidadosamente seleccionadas en cada clase.",
      },
      {
        icon: <CheckCircle className="text-white" size={32} />,
        title: "Evaluación de Salida",
        desc: "Monitoreo constante con evaluaciones al terminar la sesión de clase en los cursos principales.",
      },
      {
        icon: <ClipboardCheck className="text-white" size={32} />,
        title: "Evaluaciones Semanales",
        desc: `Duración de 2 horas. Simulamos la estructura del examen de admisión con temas vistos en la semana.`,
        tag: "NUEVO"
      },
      {
        icon: <Award className="text-white" size={32} />,
        title: `Simulacros Mensuales`,
        desc: `Duración de 3 horas. Estructura oficial ${univName} (habilidades + conocimientos) para medir tu nivel real.`,
        tag: "NUEVO"
      },
      {
        icon: <Brain className="text-white" size={32} />,
        title: "Seminarios Actitudinales",
        desc: "Sesiones enfocadas en desarrollar habilidades blandas y control emocional para el examen.",
        tag: "NUEVO"
      },
    ];
  };

  if (view === 'dashboard' || !activeCycle) {
    const smCycles = cyclesData.filter(c => c.university === 'San Marcos');
    const fvCycles = cyclesData.filter(c => c.university === 'Villarreal');

    return (
      <div className="bg-slate-50 min-h-screen pb-20">
        <PageHeader 
          title="Nuestros Ciclos" 
          subtitle="Elige tu camino hacia la universidad. Preparación exclusiva y especializada." 
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* San Marcos Block */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
               <div className="bg-brand-cyan text-white p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                 <div className="flex items-center justify-between relative z-10">
                   <h2 className="text-3xl font-black font-display italic tracking-tighter">SAN MARCOS</h2>
                   <ArrowRight className="opacity-80" />
                 </div>
               </div>
               <div className="p-8 flex-grow space-y-4">
                 {smCycles.map(cycle => (
                   <Link 
                     key={cycle.id}
                     to={`/ciclos?id=${cycle.id}`}
                     className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-brand-cyan/20 transition-all duration-300 group"
                   >
                     <div>
                       <h3 className="font-bold text-slate-700 group-hover:text-brand-cyan text-lg leading-tight mb-1">{cycle.title}</h3>
                       <p className="text-xs text-slate-400 font-medium uppercase">{cycle.modality}</p>
                     </div>
                     <div className="flex items-center gap-3">
                        {cycle.tag && <span className="bg-brand-darkblue text-white text-[10px] font-black px-2 py-1 rounded uppercase">{cycle.tag}</span>}
                        <ChevronRight className="text-slate-300 group-hover:text-brand-cyan" size={20} />
                     </div>
                   </Link>
                 ))}
               </div>
            </div>

            {/* Villarreal Block */}
             <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
               <div className="bg-orange-500 text-white p-8 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                 <div className="flex items-center justify-between relative z-10">
                   <h2 className="text-3xl font-black font-display italic tracking-tighter">VILLARREAL</h2>
                   <ArrowRight className="opacity-80" />
                 </div>
               </div>
               <div className="p-8 flex-grow space-y-4">
                 {fvCycles.map(cycle => (
                   <Link 
                     key={cycle.id}
                     to={`/ciclos?id=${cycle.id}`}
                     className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all duration-300 group"
                   >
                     <div>
                       <h3 className="font-bold text-slate-700 group-hover:text-orange-500 text-lg leading-tight mb-1">{cycle.title}</h3>
                       <p className="text-xs text-slate-400 font-medium uppercase">{cycle.modality}</p>
                     </div>
                     <div className="flex items-center gap-3">
                        {cycle.tag && <span className="bg-slate-800 text-white text-[10px] font-black px-2 py-1 rounded uppercase">{cycle.tag}</span>}
                        <ChevronRight className="text-slate-300 group-hover:text-orange-500" size={20} />
                     </div>
                   </Link>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // --- DETAIL VIEW ---
  const benefitsList = getBenefits(activeCycle.university);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 animate-fade-in">
      {/* Top Banner Area */}
      <div className="bg-slate-900 text-white pt-24 pb-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <button 
              onClick={handleBack}
              className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
            >
              <ArrowLeft size={16} /> Volver a Ciclos
            </button>
            <div className="max-w-4xl">
              <span className={`inline-block px-3 py-1 rounded mb-4 font-bold uppercase text-xs tracking-widest ${activeCycle.university === 'San Marcos' ? 'bg-brand-cyan' : 'bg-orange-500'}`}>
                {activeCycle.university}
              </span>
              <h1 className="text-4xl md:text-6xl font-black font-display italic tracking-tighter mb-6">{activeCycle.title}</h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">{activeCycle.description}</p>
            </div>
         </div>
      </div>

      {/* Main Content Area - Overlapping Banner */}
      <div className="container mx-auto px-4 relative z-20 -mt-20">
         <div className="max-w-6xl mx-auto"> {/* Constrained width for Top Card */}
            
            {/* Info Card */}
            <ScrollReveal direction="up">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 mb-20 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   <div className="flex flex-col gap-2">
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Calendar size={14} /> Inicio
                      </div>
                      <div className="text-slate-800 font-black text-xl">{activeCycle.startDate}</div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <Clock size={14} /> Duración
                      </div>
                      <div className="text-slate-800 font-black text-xl">{activeCycle.duration}</div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                         <Zap size={14} /> Modalidad
                      </div>
                      <div className="text-slate-800 font-black text-xl">{activeCycle.modality}</div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                         <Star size={14} /> Metodología
                      </div>
                      <div className={`font-black text-xl ${activeCycle.university === 'San Marcos' ? 'text-brand-cyan' : 'text-orange-500'}`}>{activeCycle.methodology}</div>
                   </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-dashed border-gray-200">
                   <h3 className="text-xl font-black text-slate-800 mb-6 uppercase">Horarios Disponibles</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {activeCycle.schedules.map((sch, i) => (
                        <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                           <span className="font-bold text-slate-600">{sch.shift}</span>
                           <span className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full shadow-sm">{sch.time}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </ScrollReveal>
         </div>
      </div>

      {/* FULL WIDTH BENEFITS SECTION - Outside the max-w-6xl constraint */}
      <section className="w-full mb-20">
         <div className="container mx-auto px-4"> {/* Standard container for margins */}
             <div className="bg-gradient-to-r from-blue-600 to-teal-400 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                <div className="flex flex-col lg:flex-row">
                   {/* Left Image Side */}
                   <div className="w-full lg:w-4/12 relative h-[300px] lg:h-auto min-h-full">
                      <div className="absolute inset-0 bg-brand-darkblue/20 z-10"></div>
                      <img 
                         src={activeCycle.image} 
                         alt="Estudiante" 
                         className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Diagonal Cut Effect (CSS Clip Path simulation via overlay or structure) */}
                      <div className="hidden lg:block absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-transparent to-transparent" style={{ background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0))' }}></div> 
                   </div>

                   {/* Right Content Side */}
                   <div className="w-full lg:w-8/12 p-8 md:p-12 lg:p-16 relative z-20">
                      <div className="mb-10">
                         <div className="flex items-center gap-2 text-blue-200 font-bold uppercase tracking-widest text-xs mb-2">
                           <Sparkles size={16} /> Propuesta Académica
                         </div>
                         <h2 className="text-4xl md:text-5xl font-black text-white font-display italic tracking-tight">
                            BENEFICIOS <span className="text-brand-yellow">PREMIUM</span>
                         </h2>
                         <p className="text-blue-100 mt-4 text-lg max-w-2xl">
                           Diseñamos cada aspecto de tu preparación con tecnología y metodología de vanguardia para asegurar tu ingreso a {activeCycle.university}.
                         </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                         {benefitsList.map((benefit, idx) => (
                           <div key={idx} className="flex gap-4 group">
                              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                                {benefit.icon}
                              </div>
                              <div>
                                 <div className="flex items-center gap-3 mb-1">
                                    <h4 className="text-white font-bold text-lg leading-tight group-hover:text-brand-yellow transition-colors">{benefit.title}</h4>
                                    {benefit.tag && (
                                       <span className="bg-brand-magenta text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
                                          {benefit.tag}
                                       </span>
                                    )}
                                 </div>
                                 <p className="text-blue-100 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    {benefit.desc}
                                 </p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* CTA Bottom */}
      <div className="container mx-auto px-4 pb-12 text-center">
         <ScrollReveal direction="up">
           <h3 className="text-2xl font-bold text-slate-700 mb-6">¿Estás listo para alcanzar tu vacante?</h3>
           <Link to="/contacto" className="inline-flex items-center gap-3 bg-brand-magenta hover:bg-pink-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
             Solicitar Matrícula <ArrowRight size={20} />
           </Link>
         </ScrollReveal>
      </div>
    </div>
  );
};

export default Cycles;