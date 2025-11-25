import React, { useState } from 'react';
import { FileText, BookOpen, GraduationCap, ChevronDown, ChevronUp, Download, PlayCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
  {
    question: "¿Qué ventajas tiene que mi hijo se prepare en una academia en lugar de estudiar por su cuenta?",
    answer: "La academia ofrece una estructura disciplinada, material filtrado específicamente para el examen de admisión, simulacros tipo examen y la competencia sana con otros postulantes, lo cual eleva significativamente el nivel académico y la preparación psicológica."
  },
  {
    question: "¿Cómo afecta la carga de estudios de la academia al equilibrio entre estudio y descanso?",
    answer: "Nuestro sistema está diseñado para maximizar el aprendizaje en las horas de clase. Si bien la exigencia es alta, fomentamos técnicas de estudio eficientes para que el alumno tenga tiempo de descanso de calidad, fundamental para la retención de conocimientos."
  },
  {
    question: "¿Los horarios de clases son los mismos en las modalidades virtual y presencial?",
    answer: "Sí, mantenemos la misma carga horaria y rigor académico en ambas modalidades. Las clases inician a las 8:00 AM y terminan a las 2:00 PM, con asesorías y seminarios adicionales en las tardes."
  }
];

const Resources: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 pb-20">
      {/* Standard Header */}
      <PageHeader 
        title="Recursos" 
        subtitle="Potencia tu preparación con nuestras herramientas exclusivas." 
      />

      {/* Intro Text */}
      <section className="pt-16 pb-8 text-center px-4">
        <ScrollReveal direction="up">
          <h2 className="text-3xl font-black text-slate-800 mb-4">
            Con tu matrícula accedes a toda esta información
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto">
            ¡No te olvides de comunicarte con nosotros en cualquier red social o vía Whatsapp para activar tus accesos!
          </p>
        </ScrollReveal>
      </section>

      {/* Benefits Cards Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Preguntas DECO */}
          <ScrollReveal delay={0} direction="up" className="h-full">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start h-full border border-gray-100 group">
              <div className="bg-brand-cyan/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText size={40} className="text-brand-cyan" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Preguntas DECO</h3>
              <p className="text-slate-500 leading-relaxed">
                Preguntas que evalúan el pensamiento crítico y el análisis profundo de los postulantes, alineadas al nuevo formato de examen de San Marcos.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Recursos de clases */}
          <ScrollReveal delay={150} direction="up" className="h-full">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start h-full border border-gray-100 group">
              <div className="bg-brand-cyan/10 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen size={40} className="text-brand-cyan" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">Recursos de clases</h3>
              <p className="text-slate-500 leading-relaxed">
                Recursos que refuerzan el aprendizaje, a los alumnos acceder a conocimientos de manera estructurada, como diapositivas, resúmenes y grabaciones.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Cachimbos (Highlighted) */}
          <ScrollReveal delay={300} direction="up" className="h-full">
            <div className="bg-gradient-to-br from-brand-blue to-brand-cyan p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-start h-full transform md:-translate-y-4 relative overflow-hidden text-white group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
              <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Alumnos cachimbos</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Revisa todos nuestros cachimbos que han ingresado a universidades prestigiosas del Perú. ¡Tu foto podría estar aquí el próximo ciclo!
              </p>
              <button className="mt-auto bg-white text-brand-blue px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-50 transition-colors">
                Ver Resultados
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Matricula CTA */}
        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-16 mb-20">
              <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white p-2 pr-2 md:pr-8 rounded-full shadow-md border border-gray-100">
                  <span className="px-6 py-2 text-slate-600 font-medium">¿Recuerda que un nuevo ciclo se acerca!</span>
                  <Link to="/contacto" className="bg-[#5b6bf1] hover:bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1">
                      ¡Matricúlate!
                  </Link>
              </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Free Resources Download Section (Added Value) */}
      <section className="container mx-auto px-4 mb-20">
        <ScrollReveal direction="up">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
             {/* Background patterns */}
             <div className="absolute top-0 right-0 opacity-10"><FileText size={300} /></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2 space-y-4">
                   <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase text-xs tracking-widest">
                      <Lock size={14} /> Contenido Gratuito
                   </div>
                   <h2 className="text-3xl font-black font-display">Descarga un Boletín de Muestra</h2>
                   <p className="text-slate-400">
                      Comprueba la calidad de nuestro material. Te regalamos el primer boletín del Ciclo Anual UNI de Álgebra completamente gratis.
                   </p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 justify-end">
                   <button className="flex items-center justify-center gap-3 bg-brand-magenta hover:bg-pink-600 text-white px-6 py-4 rounded-xl font-bold transition-all">
                      <Download size={20} /> Descargar PDF
                   </button>
                   <button className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-bold transition-all border border-slate-700">
                      <PlayCircle size={20} /> Ver Clase Demo
                   </button>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal direction="up">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className={`font-bold text-base md:text-lg ${openIndex === index ? 'text-brand-blue' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-brand-cyan shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Resources;