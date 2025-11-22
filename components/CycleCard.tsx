import React from 'react';
import { Cycle } from '../types';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CycleCardProps {
  cycle: Cycle;
  featured?: boolean;
}

const CycleCard: React.FC<CycleCardProps> = ({ cycle, featured = false }) => {
  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 relative top-0 hover:-top-2`}>
      {/* Image Header */}
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-darkblue/10 group-hover:bg-brand-cyan/20 transition-colors z-10"></div>
        <img 
          src={cycle.image} 
          alt={cycle.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badge */}
        <div className="absolute top-4 right-4 z-20">
           <span className={`text-xs font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow-sm ${
             featured ? 'bg-brand-magenta text-white' : 'bg-brand-darkblue text-white'
           }`}>
             {cycle.university}
           </span>
        </div>
        
        {/* Slanted bottom separation */}
        <div className="absolute -bottom-1 left-0 w-full h-8 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-brand-cyan transition-colors uppercase italic">
          {cycle.title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 font-medium">
          {cycle.description}
        </p>
        
        <div className="space-y-3 mb-6 border-t border-dashed border-gray-200 pt-4">
          <div className="flex items-center text-sm text-slate-700 font-semibold">
            <Calendar size={18} className="mr-3 text-brand-cyan" />
            <span className="uppercase text-xs text-gray-400 mr-2">Inicio:</span>
            <span>{cycle.startDate}</span>
          </div>
          <div className="flex items-center text-sm text-slate-700 font-semibold">
            <Clock size={18} className="mr-3 text-brand-cyan" />
             <span className="uppercase text-xs text-gray-400 mr-2">Horario:</span>
            <span>{cycle.schedule}</span>
          </div>
          <div className="flex items-center text-sm text-slate-700 font-semibold">
            <CheckCircle size={18} className="mr-3 text-brand-cyan" />
            <span className="uppercase text-xs text-gray-400 mr-2">Mod:</span>
            <span>{cycle.modality}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link 
            to="/contacto" 
            className="flex items-center justify-center w-full py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-all duration-300 border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white group-hover:shadow-lg"
          >
            Más Información <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CycleCard;