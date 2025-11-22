import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen pb-20">
      {/* Standard Header */}
      <PageHeader 
        title="Contáctanos" 
        subtitle="Estamos listos para resolver tus dudas y ayudarte en tu proceso de matrícula." 
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto -mt-8 relative z-20">
          {/* Contact Info & Map */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-blue mb-6">Información de Sede</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2 rounded-lg text-brand-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Sede Principal</p>
                    <p className="text-sm text-slate-600">Av. Universitaria 1234, Los Olivos, Lima</p>
                    <p className="text-xs text-slate-400 mt-1">(Frente a la universidad)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2 rounded-lg text-brand-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Teléfonos</p>
                    <p className="text-sm text-slate-600">(01) 555-1234</p>
                    <p className="text-sm text-slate-600">999-888-777 (WhatsApp)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2 rounded-lg text-brand-blue">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Horario de Atención</p>
                    <p className="text-sm text-slate-600">Lunes a Sábado: 8:00 am - 6:00 pm</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fake Map */}
            <div className="bg-white p-2 rounded-xl shadow-md">
                <div className="bg-gray-200 h-64 rounded-lg w-full flex items-center justify-center text-gray-500 border border-gray-300 overflow-hidden relative">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight={0} 
                        marginWidth={0} 
                        src={`https://maps.google.com/maps?q=Lima%20Los%20Olivos&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        title={`Mapa Sede`}
                        className="w-full h-full opacity-80"
                    ></iframe>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <form className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Envíanos un mensaje</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nombres</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition outline-none bg-slate-50 focus:bg-white" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Celular</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition outline-none bg-slate-50 focus:bg-white" placeholder="999 999 999" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition outline-none bg-slate-50 focus:bg-white" placeholder="juan@ejemplo.com" />
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-slate-700">Ciclo de Interés</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition outline-none bg-slate-50 focus:bg-white">
                  <option>Selecciona una opción</option>
                  <option>Anual UNI</option>
                  <option>Semestral San Marcos</option>
                  <option>Repaso Callao</option>
                  <option>Verano Escolar</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-slate-700">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition outline-none bg-slate-50 focus:bg-white" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>

              <button className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;