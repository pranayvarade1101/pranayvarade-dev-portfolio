import React from 'react';
import { resumeData } from '@/data/resume';

export const Stats: React.FC = () => {
  const { stats } = resumeData;

  return (
    <section className="py-16 bg-gradient-subtle border-y border-border">
      <div className="container-professional">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group elegant-hover"
              style={{ 
                animation: `stagger 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s both` 
              }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2 group-hover:scale-125 transition-all duration-smooth group-hover:text-accent-hover">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-smooth">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};