import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 ${center ? 'mx-auto' : ''} mt-4 bg-accent`}></div>
    </div>
  );
};

export default SectionTitle;