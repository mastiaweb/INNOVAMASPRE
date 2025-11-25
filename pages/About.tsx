import React from 'react';
import { Target, Heart, BookOpen, Library, Presentation, CheckCircle, Users, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const benefits = [
    {
      id: 1,
      icon: (
        <div className="flex flex-col items-center justify-center leading-none text-brand-cyan group-hover:text-white transition-colors duration-500">
          <span className="text-5xl font-black tracking-tighter">+10</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Años</span>
        </div>
      ),
      isTextIcon: true,
      title: "EXPERIENCIA ACADÉMICA",
      desc: "Más de 10 años de brillante trayectoria académica y cultural formando estudiantes con un alto nivel."
    },
    {
      id: 2,
      icon: <Users size={48} strokeWidth={1.5} />,
      title: "DOCENTES CALIFICADOS",
      desc: "Docentes especializados con una innovadora y amplia experiencia en la enseñanza preuniversitaria."
    },
    {
      id: 3,
      icon: <CheckCircle size={48} strokeWidth={1.5} />,
      title: "ACOMPAÑAMIENTO PSICOPEDAGÓGICO",
      desc: "Orientación al estudiante en la elección de su carrera, contemplando su disposición y aptitudes."
    },
    {
      id: 4,
      icon: <BookOpen size={48} strokeWidth={1.5} />,
      title: "MATERIAL DIDÁCTICO",
      desc: "Otorgamos material de enseñanza virtual compuesto por resumen teórico y práctica dirigida según la programación curricular."
    },
    {
      id: 5,
      icon: <Presentation size={48} strokeWidth={1.5} />,
      title: "SEMINARIOS",
      desc: "Nuestra plana docente desarrolla temas complementarios y de profundización de todos los cursos con los últimos avances."
    },
    {
      id: 6,
      icon: <Library size={48} strokeWidth={1.5} />,
      title: "BIBLIOTECA",
      desc: "Espacio dedicado a nuestros estudiantes con el objetivo de que puedan complementar sus conocimientos con bibliografía selecta."
    }
  ];

  return (
    <div className="pb-20 bg-slate-50">
       {/* Standard Header */}
       <PageHeader 
         title="Nosotros" 
         subtitle="Formando líderes para el futuro del Perú con exigencia y calidad humana." 
       />

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* Historia Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 md:pl-16 space-y-6">
            <ScrollReveal direction="left">
              <div>
                <span className="text-brand-cyan font-bold tracking-widest uppercase text-sm">Nuestra Esencia</span>
                <h2 className="text-4xl font-black text-slate-800 font-display mt-2">Nuestra Historia</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  La Academia Innovamas nació con el propósito firme de elevar el nivel educativo preuniversitario en Lima Norte. Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la excelencia académica.
                </p>
                <p>
                  Inspirados en la rigurosidad de instituciones como la UNI y San Marcos, desarrollamos una metodología propia que combina teoría profunda con práctica intensiva, permitiendo a miles de estudiantes alcanzar sus sueños.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 relative">
             <ScrollReveal direction="right" delay={300}>
               <div className="relative">
                 <div className="absolute top-4 -right-4 w-full h-full border-4 border-brand-cyan rounded-xl"></div>
                 <img src="https://picsum.photos/id/1073/600/400" alt="Historia Innovamas" className="rounded-xl shadow-2xl relative z-10 transform hover:-translate-y-2 transition duration-500" />
               </div>
             </ScrollReveal>
          </div>
        </div>

        {/* Misión / Visión / Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión */}
          <ScrollReveal direction="up" delay={0}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-cyan hover:shadow-xl transition hover:-translate-y-1 duration-300 h-full">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-brand-cyan">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Brindar una formación preuniversitaria integral y de alta exigencia académica, potenciando las capacidades intelectuales y personales de nuestros estudiantes para asegurar su ingreso a las mejores universidades del país.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Visión */}
          <ScrollReveal direction="up" delay={150}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-magenta hover:shadow-xl transition hover:-translate-y-1 duration-300 h-full">
              <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-brand-magenta">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Visión</h3>
              <p className="text-slate-600 leading-relaxed">
                Ser reconocidos como la academia líder en innovación educativa y resultados en Lima, formando no solo ingresantes, sino futuros profesionales comprometidos con el desarrollo de la sociedad.
              </p>
            </div>
          </ScrollReveal>

          {/* Valores */}
          <ScrollReveal direction="up" delay={300}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-yellow hover:shadow-xl transition hover:-translate-y-1 duration-300 h-full">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Valores</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0"></div> Disciplina y Constancia</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0"></div> Excelencia Académica</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0"></div> Innovación Continua</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-yellow rounded-full shrink-0"></div> Integridad</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Beneficios Académicos */}
        <div className="relative">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase font-display">
                 Beneficios <span className="text-brand-cyan">Académicos</span>
               </h2>
               <div className="w-24 h-1.5 bg-brand-magenta mx-auto mt-4 rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
             {benefits.map((benefit, index) => (
               <ScrollReveal key={benefit.id} delay={index * 100} direction="up">
                 <div className="group flex flex-col items-center text-center cursor-default">
                    {/* Circle Icon Container */}
                    <div className="w-40 h-40 rounded-full border-[6px] border-brand-cyan flex items-center justify-center mb-8 bg-white shadow-xl relative overflow-hidden transition-all duration-500 group-hover:bg-brand-cyan group-hover:scale-110 group-hover:shadow-cyan-500/40 group-hover:border-brand-cyan">
                       <div className={`text-brand-cyan transition-colors duration-500 transform group-hover:scale-110 ${benefit.isTextIcon ? '' : 'group-hover:text-white'}`}>
                         {benefit.icon}
                       </div>
                    </div>
                    
                    {/* Text Content */}
                    <h3 className="text-xl font-black text-brand-cyan mb-3 uppercase tracking-tight px-4 group-hover:text-brand-blue transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed px-6 font-medium group-hover:text-slate-700 transition-colors duration-300">
                      {benefit.desc}
                    </p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;