import React from 'react';
import { MapPin, Phone, Mail, Globe, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  web: string;
  image: string;
  mapQuery: string;
}

const locations: Location[] = [
  {
    id: 'lima',
    name: 'Centro de Lima',
    address: 'Avenida Uruguay 351, Lima, Perú',
    phone: '971 010 239',
    email: 'contacto@innovamasacademia.com',
    web: 'innovamasacademia.com',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Commercial building look
    mapQuery: 'Avenida Uruguay 351, Lima, Peru'
  },
  {
    id: 'comas',
    name: 'Comas',
    address: 'Av. Túpac Amaru 358, Comas',
    phone: '938 393 041',
    email: 'contacto@innovamasacademia.com',
    web: 'innovamasacademia.com',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Educational building
    mapQuery: 'Av. Túpac Amaru 358, Comas, Peru'
  },
  {
    id: 'sjl',
    name: 'San Juan de Lurigancho',
    address: 'Av. Próceres de la Independencia 1963',
    phone: '938 393 041',
    email: 'contacto@innovamasacademia.com',
    web: 'innovamasacademia.com',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Modern exterior
    mapQuery: 'Av. Próceres de la Independencia 1963, San Juan de Lurigancho'
  }
];

const Locations: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <PageHeader 
        title="Nuestras Sedes" 
        subtitle="Encuentra la sede más cercana a ti. Presencial en Lima y Virtual para todo el Perú." 
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-sm md:text-lg font-medium opacity-90 text-white">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-magenta rounded-full animate-pulse"></div>
            Presencial en Lima Metropolitana
          </span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
            Virtual en todo el Perú
          </span>
        </div>
      </PageHeader>

      {/* Locations List */}
      <div className="container mx-auto px-4 mt-8 md:-mt-12 space-y-8 relative z-20">
        {locations.map((loc, index) => (
          <ScrollReveal key={loc.id} delay={index * 200} direction="up">
            <div 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-brand-blue/20 hover:border-brand-cyan transition-all duration-300 flex flex-col lg:flex-row h-auto lg:h-[320px] group"
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/3 h-64 lg:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-darkblue/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-cyan text-white text-xs font-bold px-3 py-1 rounded-full z-20">
                  SEDE OFICIAL
                </div>
              </div>

              {/* Info Column */}
              <div className="w-full lg:w-1/3 p-8 flex flex-col justify-center bg-white relative z-10">
                <h2 className="text-3xl font-black text-slate-800 mb-6 font-display">{loc.name}</h2>
                
                <div className="space-y-4 text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-brand-magenta shrink-0 mt-1" size={20} />
                    <span className="font-medium leading-tight">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-brand-cyan shrink-0" size={20} />
                    <span className="font-bold text-slate-800">{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="text-slate-400 shrink-0" size={18} />
                    <span className="truncate">{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="text-slate-400 shrink-0" size={18} />
                    <span>{loc.web}</span>
                  </div>
                </div>
              </div>

              {/* Map Column (Intuitive Map "Al Costado") */}
              <div className="w-full lg:w-1/3 h-64 lg:h-full bg-slate-100 relative border-t lg:border-t-0 lg:border-l border-gray-100">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  title={`Mapa ${loc.name}`}
                  className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                ></iframe>
                
                {/* Floating Button Overlay */}
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-brand-darkblue transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Ver en Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Locations;