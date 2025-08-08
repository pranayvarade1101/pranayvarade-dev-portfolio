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
    <section id="skills" className="section-spacing bg-gradient-subtle">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="card-professional hover-lift"
              style={{ 
                animation: `fadeInDelayed 0.6s ease-out ${categoryIndex * 0.2}s both` 
              }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground text-sm">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getSkillLevel(skill.level).color}`}
                        >
                          {getSkillLevel(skill.level).label}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.experience}
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div 
                        className="absolute top-0 left-0 h-2 bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Core Specializations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {skills.specializations.map((spec, index) => (
              <Card 
                key={spec.name}
                className="card-professional hover-lift text-center group"
                style={{ 
                  animation: `fadeInDelayed 0.8s ease-out ${index * 0.1}s both` 
                }}
              >
                <CardContent className="p-6">
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-200">
                      {spec.level}%
                    </div>
                  </div>
                  <h4 className="font-medium text-foreground text-sm group-hover:text-accent transition-colors duration-200">
                    {spec.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Complete Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              ...skills.frontend.map(s => s.name),
              ...skills.backend.map(s => s.name),
              ...skills.tools.map(s => s.name),
              'EJS', 'Puppeteer', 'PM2', 'Bitbucket', 'EdTech', 'Data Visualization'
            ].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="skill-tag text-sm px-4 py-2 hover:scale-105 transition-transform duration-200"
                style={{ 
                  animation: `fadeInDelayed 1s ease-out ${index * 0.05}s both` 
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skill Development Timeline */}
        <div className="mt-16">
          <Card className="card-professional bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground text-center mb-6">
                Professional Growth Journey
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">2022</div>
                  <div className="text-sm text-muted-foreground">Started MSc.</div>
                  <div className="text-xs text-muted-foreground">Foundation Building</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">2024</div>
                  <div className="text-sm text-muted-foreground">Joined Industry</div>
                  <div className="text-xs text-muted-foreground">Rapid Skill Development</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">2025</div>
                  <div className="text-sm text-muted-foreground">Leading Projects</div>
                  <div className="text-xs text-muted-foreground">Mentoring & Innovation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};