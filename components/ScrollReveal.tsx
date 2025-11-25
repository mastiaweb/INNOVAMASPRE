import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Dirección de la animación
  delay?: number; // Retraso en ms
  duration?: number; // Duración en ms
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0,
  duration = 700
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo activar una vez cuando sea visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15, // Activar cuando el 15% del elemento sea visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Definir transformaciones iniciales basadas en la dirección
  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-y-0 translate-x-0';
    
    switch (direction) {
      case 'up': return 'opacity-0 translate-y-16';
      case 'down': return 'opacity-0 -translate-y-16';
      case 'left': return 'opacity-0 -translate-x-16';
      case 'right': return 'opacity-0 translate-x-16';
      case 'none': return 'opacity-0';
      default: return 'opacity-0 translate-y-16';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getTransformClass()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;