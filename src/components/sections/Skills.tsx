import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Wrench } from 'lucide-react';
import { resumeData } from '@/data/resume';

export const Skills: React.FC = () => {
  const { skills } = resumeData;

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: skills.frontend,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
    },
    {
      title: 'Backend Development', 
      icon: Database,
      skills: skills.backend,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
    },
  ];

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: 'Expert', color: 'text-emerald-600' };
    if (level >= 80) return { label: 'Advanced', color: 'text-blue-600' };
    if (level >= 70) return { label: 'Intermediate', color: 'text-yellow-600' };
    return { label: 'Beginner', color: 'text-gray-600' };
  };

  return (
    <section id="skills" className="section-modern bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-gradient-glass rounded-full blur-2xl animate-morph" />
      </div>

      <div className="container-modern relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Technical <span className="bg-gradient-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications that drive innovation
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-modern glow-effect group"
              style={{ 
                animation: `stagger 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${categoryIndex * 0.4}s both` 
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-accent rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span 
                            className={`px-3 py-1 rounded-xl text-xs font-bold ${getSkillLevel(skill.level).color} bg-current/10`}
                          >
                            {getSkillLevel(skill.level).label}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {skill.experience}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Specializations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Core <span className="text-accent">Specializations</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {skills.specializations.map((spec, index) => (
              <div 
                key={spec.name}
                className="card-glass p-8 text-center group glow-effect"
                style={{ 
                  animation: `bounce-in 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.2}s both` 
                }}
              >
                <div className="mb-6">
                  <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300">
                    {spec.level}%
                  </div>
                </div>
                <h4 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors duration-300">
                  {spec.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Technology Stack */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Complete Technology <span className="text-accent">Arsenal</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              ...skills.frontend.map(s => s.name),
              ...skills.backend.map(s => s.name),
              ...skills.tools.map(s => s.name),
              'EJS', 'Puppeteer', 'PM2', 'Bitbucket', 'EdTech', 'Data Visualization'
            ].map((tech, index) => (
              <span 
                key={tech} 
                className="skill-badge px-6 py-3 text-lg font-medium rounded-2xl"
                style={{ 
                  animation: `fade-in-delayed 1s ease-out ${index * 0.05}s both` 
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Growth Timeline */}
        <div className="mt-20">
          <div className="card-glass p-12 rounded-3xl glow-effect">
            <h3 className="text-2xl font-bold text-foreground text-center mb-10">
              Professional Growth <span className="text-accent">Journey</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="space-y-4 group">
                <div className="text-6xl mb-6">🎓</div>
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  2022
                </div>
                <div className="text-lg font-semibold text-foreground">Started MSc.</div>
                <div className="text-muted-foreground">Foundation Building & Academic Excellence</div>
              </div>
              <div className="space-y-4 group">
                <div className="text-6xl mb-6">🚀</div>
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  2024
                </div>
                <div className="text-lg font-semibold text-foreground">Joined Industry</div>
                <div className="text-muted-foreground">Rapid Skill Development & Real-world Impact</div>
              </div>
              <div className="space-y-4 group">
                <div className="text-6xl mb-6">👑</div>
                <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  2025
                </div>
                <div className="text-lg font-semibold text-foreground">Leading Projects</div>
                <div className="text-muted-foreground">Mentoring, Innovation & Technical Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};