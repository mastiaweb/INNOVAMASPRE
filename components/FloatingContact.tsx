import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-center animate-fade-in-up">
       {/* Phone Button - White bg, Black icon */}
       <a 
         href="tel:4800048"
         className="w-14 h-14 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-xl border border-gray-100"
         aria-label="Llamar"
       >
         <Phone size={24} className="text-black fill-black" />
       </a>
       
       {/* WhatsApp Button - Green bg, White icon */}
       <a 
         href="https://wa.me/51999888777" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-xl"
         aria-label="WhatsApp"
       >
         <MessageCircle size={28} className="text-white fill-white" />
       </a>
    </div>
  );
};

export default FloatingContact;