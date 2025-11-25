import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, Award, Layers, Users, PlusCircle, Laptop, LogIn, GraduationCap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[700px] bg-brand-cyan overflow-hidden flex items-center pt-12 md:pt-0">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="hidden md:block absolute top-0 left-[20%] w-[1px] h-32 bg-white/50"></div>
        
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            
            {/* Left Content */}
            <div className="w-full md:w-5/12 space-y-2 md:space-y-6 mt-8 md:mt-0 z-20">
              <ScrollReveal direction="left" duration={800}>
                <div className="flex flex-col items-start transform -rotate-1">
                  <div className="text-white font-display font-black italic text-3xl md:text-5xl leading-tight drop-shadow-md">
                    EXIGENCIA QUE
                  </div>
                  <div className="bg-brand-magenta text-white font-display font-black italic text-3xl md:text-5xl px-3 py-1 transform skew-x-[-10deg] shadow-lg">
                    <span className="transform skew-x-[10deg] inline-block">SÍ FUNCIONA</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={200}>
                <p className="text-white text-lg font-medium max-w-md mt-4 drop-shadow-sm">
                  La mejor preparación para San Marcos y Villarreal con el sistema más exigente del país.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <div className="flex flex-col gap-3 mt-8">
                  <div className="w-3 h-3 bg-white rounded-full cursor-pointer"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white transition"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full cursor-pointer hover:bg-white transition"></div>
                </div>
              </ScrollReveal>
            </div>

            {/* Center: Person Image */}
            <div className="w-full md:w-4/12 relative flex justify-center mt-8 md:mt-0">
               <ScrollReveal direction="up" delay={300} duration={1000} className="relative w-[280px] h-[380px] md:w-[400px] md:h-[500px]">
                 <div className="absolute top-10 -right-10 w-24 h-24 bg-brand-yellow rounded-full opacity-80 animate-pulse"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                   alt="Estudiante Exitoso" 
                   className="w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-2 border-4 border-white"
                   style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
                 />
                 
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
               </ScrollReveal>
            </div>

            {/* Right: Cycle Title & CTA */}
            <div className="w-full md:w-3/12 flex flex-col items-end text-right mt-8 md:mt-0 pb-12 md:pb-0 z-20">
              <ScrollReveal direction="right" delay={500}>
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
              </ScrollReveal>
            </div>
          </div>
          
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

      {/* NEW SECTION: SOBRE LA INSTITUCIÓN & NUESTROS SERVICIOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Left Column: Institution Info */}
            <div className="w-full lg:w-7/12 space-y-8 flex flex-col">
               <ScrollReveal direction="up">
                 {/* Title Badge */}
                 <div className="inline-block bg-brand-cyan text-white px-8 py-3 font-black text-xl md:text-3xl uppercase transform skew-x-[-12deg] shadow-lg mb-4">
                    <span className="transform skew-x-[12deg] inline-block font-display">Sobre la Institución</span>
                 </div>
                 
                 {/* Image */}
                 <div className="relative h-64 md:h-[22rem] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50">
                     <div className="absolute inset-0 bg-brand-darkblue/10"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                       alt="Estudiantes Innovamas" 
                       className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                     />
                 </div>

                 {/* Text Content */}
                 <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify font-medium">
                    <p>
                      Con una destacada trayectoria académica y cultural formando estudiantes con un alto nivel, somos tu garantía de ingreso seguro a las más importantes universidades del país.
                    </p>
                    <p>
                      La <span className="font-bold text-brand-blue">academia INNOVAMAS</span> brinda sólidos conocimientos en Ciencias y Humanidades. Además, se preocupa para que sus estudiantes reciban una formación integral. Los indicadores contundentes de esta exitosa forma de trabajo son nuestros continuos ingresos masivos a la Universidad Nacional Mayor de San Marcos (UNMSM) y otras universidades como la Universidad Nacional Federico Villarreal (UNFV) y la Universidad Nacional del Callao (UNAC).
                    </p>
                    <p>
                      Nuestros programas están diseñados de acuerdo a las exigencias del examen de admisión y con una metodología adecuada para cada nivel de preparación.
                    </p>
                    <p className="border-l-4 border-brand-cyan pl-4 italic text-slate-500">
                      En la actualidad contamos con la modalidad presencial en nuestras sedes y modalidad virtual a través de nuestra moderna plataforma para estudiantes.
                    </p>
                 </div>

                 {/* Link */}
                 <div className="pt-4">
                   <Link to="/nosotros" className="inline-flex items-center gap-2 text-brand-cyan font-black uppercase tracking-wider hover:text-brand-blue transition-colors group">
                      <div className="rounded-full border-2 border-current p-1 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                        <PlusCircle size={16} strokeWidth={3} />
                      </div> 
                      Leer más
                   </Link>
                 </div>
               </ScrollReveal>
            </div>

            {/* Right Column: Services / Intranet */}
            <div className="w-full lg:w-5/12">
               <ScrollReveal direction="left" delay={200} className="h-full">
                  <div className="bg-brand-darkblue text-white rounded-[2.5rem] p-8 md:p-10 h-full shadow-2xl relative overflow-hidden group flex flex-col items-center">
                     {/* Background Decoration */}
                     <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-magenta opacity-10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                     
                     {/* Title */}
                     <div className="text-center mb-8 relative z-10">
                        <h3 className="text-3xl font-black font-display uppercase italic leading-none">
                           Nuestros <br/> <span className="text-brand-yellow text-4xl">Servicios</span>
                        </h3>
                        <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
                     </div>

                     {/* Mock Laptop/Screen Graphic */}
                     <div className="relative w-full max-w-[320px] mb-8 group-hover:scale-105 transition-transform duration-500 z-10">
                        {/* Circle Image Badge */}
                        <div className="absolute -top-10 -right-4 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg z-20">
                           <img 
                              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                              className="w-full h-full object-cover" 
                              alt="Estudiante feliz"
                           />
                        </div>

                        {/* Laptop Frame */}
                        <div className="bg-slate-700 rounded-t-xl p-3 pb-0 mx-auto shadow-2xl">
                           <div className="bg-white rounded-t-lg overflow-hidden h-40 flex flex-col relative">
                              {/* Screen Header */}
                              <div className="h-6 bg-brand-blue flex items-center px-2 space-x-1">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                              </div>
                              {/* Screen Content (Login Form Mock) */}
                              <div className="flex-1 p-4 flex flex-col items-center justify-center space-y-3 bg-slate-50">
                                 <GraduationCap className="text-brand-cyan mb-1" size={24} />
                                 <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bienvenido</div>
                                 <div className="w-full h-6 bg-white border border-slate-200 rounded flex items-center px-2 text-slate-300 text-[8px]">Usuario</div>
                                 <div className="w-full h-6 bg-white border border-slate-200 rounded flex items-center px-2 text-slate-300 text-[8px]">Contraseña</div>
                                 <div className="w-full h-6 bg-brand-blue rounded shadow-sm"></div>
                              </div>
                           </div>
                        </div>
                        <div className="bg-slate-800 h-3 rounded-b-xl w-[110%] -ml-[5%] shadow-xl flex justify-center">
                           <div className="w-12 h-1 bg-slate-600 rounded-full mt-1"></div>
                        </div>
                     </div>

                     <div className="text-center space-y-4 relative z-10 mt-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-brand-cyan font-bold text-sm mb-2 backdrop-blur-sm border border-white/20">
                           <Laptop size={16} /> Intranet
                        </div>
                        <h4 className="text-2xl font-black text-white font-display uppercase tracking-wide">
                           AULA VIRTUAL <span className="text-brand-cyan">RENOVADA</span>
                        </h4>
                        <p className="text-blue-100 leading-relaxed text-sm px-4">
                           Nuestra <strong>AULA VIRTUAL</strong> es una plataforma más dinámica, interactiva y fácil de navegar desde donde estés.
                        </p>
                        
                        <div className="pt-4 pb-2">
                           <a href="#" className="inline-flex items-center gap-2 text-brand-yellow font-black uppercase text-sm border-2 border-brand-yellow px-6 py-2 rounded-full hover:bg-brand-yellow hover:text-brand-darkblue transition-all duration-300">
                              <LogIn size={16} /> Ingresar
                           </a>
                        </div>
                        
                        <div className="flex justify-center gap-2 mt-4 opacity-50">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                           <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                           <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>

        <div className="container mx-auto px-4 relative z-10">
          
          <ScrollReveal direction="up">
            <div className="mb-16">
               <div className="w-full bg-gradient-to-r from-[#5b6bf1] to-[#00adef] py-4 md:py-6 transform skew-x-[-2deg] shadow-lg rounded-lg flex justify-center items-center">
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-display italic tracking-wider transform skew-x-[2deg]">
                     Nuestros Pilares
                  </h2>
               </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
             
             {[
               { Icon: Award, title: "Excelencia\nAcadémica", desc: "Formación de alto nivel para alcanzar tus metas universitarias con rigurosidad y disciplina." },
               { Icon: Layers, title: "Preparación\nIntegral", desc: "Habilidades y conocimientos clave para una transición universitaria exitosa y duradera." },
               { Icon: Users, title: "Educación\nen Equipo", desc: "Trabajamos junto a los padres para apoyar el crecimiento académico y personal de cada estudiante." }
             ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 150} direction="up">
                  <div className="group bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center h-full">
                      <div className="mb-8 relative">
                        <div className="w-24 h-24 border-[3px] border-brand-cyan rounded-2xl transform rotate-45 flex items-center justify-center shadow-md group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-500">
                            <div className="transform -rotate-45 text-brand-cyan group-hover:text-white transition-colors duration-500">
                              <item.Icon size={40} strokeWidth={1.5} />
                            </div>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-[#5b6bf1] mb-4 leading-tight whitespace-pre-line">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                  </div>
                </ScrollReveal>
             ))}

          </div>

        </div>
      </section>

      {/* Offers Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-300 overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
         
         <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="down">
              <div className="flex justify-center mb-16">
                 <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-10 py-4 shadow-xl transform hover:scale-105 transition duration-300">
                    <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm text-center">
                       ¿QUÉ TE OFRECEMOS?
                    </h2>
                 </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0 pb-16">
               <div className="space-y-16 text-center lg:text-right order-2 lg:order-1">
                  <ScrollReveal direction="left" delay={100}>
                    <div className="flex flex-col items-center lg:items-end group cursor-default">
                       <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                       <div className="text-white">
                          <h3 className="font-black text-4xl mb-1 leading-none">01.</h3>
                          <h4 className="font-bold text-2xl leading-tight">DOCENTES<br/>CALIFICADOS</h4>
                       </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="left" delay={300}>
                    <div className="flex flex-col items-center lg:items-end group cursor-default">
                       <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                       <div className="text-white">
                          <h3 className="font-black text-4xl mb-1 leading-none">02.</h3>
                          <h4 className="font-bold text-2xl leading-tight">ASESORÍA<br/>PSICO<br/>PEDAGÓGICA</h4>
                       </div>
                    </div>
                  </ScrollReveal>
               </div>

               <div className="relative h-[400px] md:h-[550px] flex items-end justify-center order-1 lg:order-2 -mt-10 md:mt-0">
                  <ScrollReveal direction="up" className="h-full w-full flex justify-center">
                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white opacity-20 blur-[100px] rounded-full z-0"></div>
                    <img 
                       src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                       alt="Estudiantes Innovamas" 
                       className="h-full object-cover relative z-10 drop-shadow-2xl mask-image-gradient transform hover:scale-105 transition duration-700"
                       style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />
                  </ScrollReveal>
               </div>

               <div className="space-y-16 text-center lg:text-left order-3">
                  <ScrollReveal direction="right" delay={100}>
                    <div className="flex flex-col items-center lg:items-start group cursor-default">
                       <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                       <div className="text-white">
                          <h3 className="font-black text-4xl mb-1 leading-none">03.</h3>
                          <h4 className="font-bold text-2xl leading-tight">MATERIAL<br/>DIDÁCTICO</h4>
                       </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="right" delay={300}>
                    <div className="flex flex-col items-center lg:items-start group cursor-default">
                       <div className="w-14 h-14 border-[3px] border-white rounded-xl transform rotate-45 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:bg-white/20 transition-all duration-300 group-hover:rotate-90"></div>
                       <div className="text-white">
                          <h3 className="font-black text-4xl mb-1 leading-none">04.</h3>
                          <h4 className="font-bold text-2xl leading-tight">DOCENTES<br/>CALIFICADOS</h4>
                       </div>
                    </div>
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-slate-50 pb-20">
         <div className="container mx-auto px-4 relative -mt-24 z-20">
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-brand-darkblue rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-white gap-8 divide-y md:divide-y-0 md:divide-x divide-blue-800/50 border border-blue-800">
                 {[
                   { val: "+300", lbl: "Alumnos Activos" },
                   { val: "+10", lbl: "Años preparando futuros cachimbos" },
                   { val: "20", lbl: "Docentes altamente capacitados" },
                   { val: "90%", lbl: "De nuestros estudiantes logran el ingreso" }
                 ].map((stat, i) => (
                   <div key={i} className="flex-1 flex flex-col items-center text-center px-4 w-full pt-8 md:pt-0 first:pt-0">
                      <div className="text-stroke-white text-6xl md:text-7xl font-black mb-2 tracking-tighter">{stat.val}</div>
                      <p className="font-medium text-blue-200 uppercase tracking-wide text-sm md:text-base">{stat.lbl}</p>
                   </div>
                 ))}
              </div>
            </ScrollReveal>
         </div>
      </div>
    </div>
  );
};

export default Home;