import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <section className="relative bg-gradient-to-r from-brand-blue to-brand-cyan py-20 text-center overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
      
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-magenta opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-white font-display italic tracking-tighter drop-shadow-md mb-4">
          {title}
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
};

export default PageHeader;