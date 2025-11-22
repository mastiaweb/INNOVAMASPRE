import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy InnovaBot. ¿En qué puedo ayudarte hoy? Pregúntame sobre ciclos, costos o nuestras sedes.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Construct history for the API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(history, userMsg.text);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button - Moved higher to accommodate Whatsapp/Phone buttons */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-40 right-7 z-40 bg-brand-blue text-white p-3 rounded-full shadow-xl hover:bg-brand-dark transition transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        title="Asistente IA"
      >
        <Bot size={20} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-40 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`} style={{ height: '450px' }}>
        
        {/* Header */}
        <div className="bg-brand-blue text-white p-4 rounded-t-2xl flex justify-between items-center shadow">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-1.5 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Asistente Innovamas</h3>
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs opacity-80">En línea</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-blue text-white rounded-br-none' 
                  : 'bg-white text-slate-700 border border-gray-100 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-xl rounded-bl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin text-brand-accent" />
                <span className="text-xs text-slate-400">Escribiendo...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta aquí..."
              className="w-full pl-4 pr-12 py-3 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="absolute right-1.5 p-2 bg-brand-blue text-white rounded-full hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiChat;