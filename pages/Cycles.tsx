import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Calendar, MapPin, BookOpen, Award, Zap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Cycle } from '../types';

// Datos de las Universidades (Categorías)
const universities = [
  {
    id: 'unfv',
    name: 'Federico Villarreal',
    shortName: 'Villarreal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Local_Central_de_la_UNFV.jpg', // Imagen referencial UNFV
    color: 'bg-orange-500',
    textColor: 'text-[#5b6bf1]', // Tono azul/lila de la imagen referencia
  },
  {
    id: 'unmsm',
    name: 'San Marcos',
    shortName: 'San Marcos',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Casona_de_la_Universidad_Nacional_Mayor_de_San_Marcos_-_Parque_Universitario_-_Lima.jpg/1200px-Casona_de_la_Universidad_Nacional_Mayor_de_San_Marcos_-_Parque_Universitario_-_Lima.jpg', // Imagen referencial UNMSM
    color: 'bg-red-700',
    textColor: 'text-[#5b6bf1]',
  },
  {
    id: 'uni',
    name: 'UNI',
    shortName: 'UNI',
    image: 'https://portal.uni.edu.pe/images/slider/fachada_uni.jpg', // Imagen referencial UNI
    color: 'bg-brand-magenta',
    textColor: 'text-[#5b6bf1]',
  }
];

// Datos de los Ciclos Específicos
const allCycles: Cycle[] = [
  {
    id: '1',
    title: 'Anual UNI 2025',
    university: 'UNI',
    description: 'Preparación integral desde cero. Domina todas las materias con la máxima exigencia.',
    startDate: '15 de Marzo',
    schedule: 'Lun-Sab 8am - 2pm',
    image: 'https://picsum.photos/id/1/400/300',
    modality: 'Presencial'
  },
  {
    id: '2',
    title: 'Semestral San Marcos',
    university: 'San Marcos',
    description: 'Ciclo intensivo para estudiantes con base. Full práctica DECO.',
    startDate: '01 de Abril',
    schedule: 'Lun-Sab 8am - 2pm',
    image: 'https://picsum.photos/id/2/400/300',
    modality: 'Híbrido'
  },
  {
    id: '3',
    title: 'Repaso Villarreal',
    university: 'Callao', // Usando Callao como placeholder para otros
    description: 'Las fijas para el examen. Exámenes pasados y simulacros constantes.',
    startDate: '20 de Mayo',
    schedule: 'Lun-Sab 3pm - 8pm',
    image: 'https://picsum.photos/id/3/400/300',
    modality: 'Virtual'
  },
  {
    id: '4',
    title: 'Verano Escolar',
    university: 'General',
    description: 'Adelanto escolar para alumnos de 3ro, 4to y 5to de secundaria.',
    startDate: '05 de Enero',
    schedule: 'Lun-Vie 8am - 1pm',
    image: 'https://picsum.photos/id/4/400/300',
    modality: 'Presencial'
  },
  {
    id: '5',
    title: 'Semestral UNI',
    university: 'UNI',
    description: 'Alta exigencia en matemáticas y ciencias. Nivel avanzado.',
    startDate: '01 de Abril',
    schedule: 'Lun-Sab 8am - 2pm',
    image: 'https://picsum.photos/id/5/400/300',
    modality: 'Presencial'
  },
  {
    id: '6',
    title: 'Repaso San Marcos',
    university: 'San Marcos',
    description: 'Full simulacros y resolución de dudas las últimas semanas antes del examen.',
    startDate: '15 de Agosto',
    schedule: 'Lun-Sab 8am - 5pm',
    image: 'https://picsum.photos/id/6/400/300',
    modality: 'Virtual'
  }
];

const Cycles: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredCycles = filter === 'Todos' 
    ? allCycles 
    : allCycles.filter(c => c.university === filter || (filter === 'Villarreal' && c.university === 'Callao')); // Logic adjust for demo

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Header */}
      <PageHeader 
        title="Nuestros Ciclos" 
        subtitle="Elige tu destino académico y comienza tu preparación con los mejores." 
      />

      {/* SECTION: University Selector (The Requested Design) */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 font-display uppercase">
              Elige tu <span className="text-brand-cyan">Universidad</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-yellow mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {universities.map((uni) => (
              <div 
                key={uni.id}
                onClick={() => setFilter(uni.shortName === 'Villarreal' ? 'Villarreal' : uni.shortName)}
                className="group cursor-pointer"
              >
                {/* The Card */}
                <div className="bg-[#EFEFEF] rounded-[3rem] p-6 pb-0 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 h-full">
                  
                  {/* Title */}
                  <div className="mt-4 mb-6 px-4">
                    <h3 className={`text-4xl md:text-5xl font-black font-display leading-tight ${uni.textColor} drop-shadow-sm`}>
                      {uni.name.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                  </div>

                  {/* Image Container */}
                  <div className="w-full mt-auto relative">
                     <div className="rounded-t-[2.5rem] rounded-b-[2.5rem] overflow-hidden h-56 md:h-64 w-full shadow-inner relative z-10">
                        <img 
                          src={uni.image} 
                          alt={uni.name} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                     </div>

                     {/* Floating Action Button - Positioned to overlap image and card */}
                     <div className={`absolute bottom-4 right-4 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full ${uni.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                        <ChevronRight size={28} strokeWidth={3} />
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Benefits / Value Add */}
      <section className="py-16 bg-slate-50 border-y border-gray-200">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="flex flex-col items-center space-y-4 p-6 hover:bg-white hover:shadow-lg rounded-2xl transition">
                  <div className="bg-brand-cyan/10 p-4 rounded-full text-brand-cyan">
                     <Award size={32} />
                  </div>
                  <h4 className="font-black text-xl text-brand-darkblue">Exigencia Académica</h4>
                  <p className="text-slate-600 text-sm">Niveles diferenciados según tu base académica para garantizar tu aprendizaje.</p>
               </div>
               <div className="flex flex-col items-center space-y-4 p-6 hover:bg-white hover:shadow-lg rounded-2xl transition">
                  <div className="bg-brand-magenta/10 p-4 rounded-full text-brand-magenta">
                     <BookOpen size={32} />
                  </div>
                  <h4 className="font-black text-xl text-brand-darkblue">Material Actualizado</h4>
                  <p className="text-slate-600 text-sm">Libros y separatas con las últimas preguntas de exámenes de admisión.</p>
               </div>
               <div className="flex flex-col items-center space-y-4 p-6 hover:bg-white hover:shadow-lg rounded-2xl transition">
                  <div className="bg-brand-yellow/20 p-4 rounded-full text-brand-darkblue">
                     <Zap size={32} />
                  </div>
                  <h4 className="font-black text-xl text-brand-darkblue">Plataforma Virtual</h4>
                  <p className="text-slate-600 text-sm">Acceso 24/7 a clases grabadas, solucionarios y biblioteca virtual.</p>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION: Specific Cycles List */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
             <span className="text-brand-cyan font-bold uppercase tracking-widest text-sm">Programación 2025</span>
             <h2 className="text-3xl md:text-4xl font-black text-slate-800 font-display mt-2">
               Ciclos Disponibles: <span className="text-brand-blue">{filter}</span>
             </h2>
           </div>
           <div className="flex gap-2 mt-4 md:mt-0">
             {['Todos', 'UNI', 'San Marcos', 'Villarreal'].map(f => (
               <button 
                 key={f}
                 onClick={() => setFilter(f === 'Villarreal' ? 'Villarreal' : f)} // Simplified logic
                 className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${
                   (filter === f || (f === 'Villarreal' && filter === 'Villarreal')) 
                   ? 'bg-brand-darkblue text-white shadow-md' 
                   : 'bg-gray-100 text-slate-500 hover:bg-gray-200'
                 }`}
               >
                 {f}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCycles.map(cycle => (
            <div key={cycle.id} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              
              {/* Image Side */}
              <div className="w-full md:w-2/5 relative overflow-hidden h-48 md:h-auto">
                <img src={cycle.image} alt={cycle.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 bg-brand-yellow text-brand-darkblue text-xs font-bold px-2 py-1 rounded uppercase">
                  {cycle.modality}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{cycle.university}</span>
                      <span className="text-xs font-bold text-brand-magenta bg-pink-50 px-2 py-1 rounded-full">Vacantes Limitadas</span>
                   </div>
                   <h3 className="text-2xl font-black text-slate-800 mb-3 leading-tight group-hover:text-brand-cyan transition-colors">
                     {cycle.title}
                   </h3>
                   
                   <div className="space-y-2 mb-6">
                      <div className="flex items-center text-slate-600 text-sm font-medium">
                        <Calendar size={16} className="mr-2 text-brand-cyan" />
                        Inicio: {cycle.startDate}
                      </div>
                      <div className="flex items-center text-slate-600 text-sm font-medium">
                        <Clock size={16} className="mr-2 text-brand-cyan" />
                        {cycle.schedule}
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link to="/contacto" className="flex-1 bg-brand-darkblue text-white text-center py-3 rounded-lg font-bold text-sm hover:bg-brand-blue transition shadow-lg">
                    Matricularme
                  </Link>
                  <button className="w-12 h-11 flex items-center justify-center border-2 border-gray-200 rounded-lg text-slate-400 hover:border-brand-cyan hover:text-brand-cyan transition">
                     <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Scholarship Banner */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-[#5b6bf1] to-brand-cyan rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
           <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-brand-magenta/40 rounded-full blur-3xl"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black font-display italic mb-2">¡CONCURSO DE BECAS!</h2>
                <p className="text-blue-100 text-lg max-w-xl">Demuestra tu talento y gana una beca completa para el Ciclo Semestral. Próximo examen: 15 de Marzo.</p>
              </div>
              <Link to="/contacto" className="bg-white text-brand-darkblue px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl uppercase tracking-wide whitespace-nowrap">
                 Inscribirme Ahora
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Cycles;
