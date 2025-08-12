import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Calendar, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';

export const Projects: React.FC = () => {
  const { projects } = resumeData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Production': { variant: 'default' as const, className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
      'Completed': { variant: 'secondary' as const, className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
      'In Progress': { variant: 'outline' as const, className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
    };
    
    return statusConfig[status as keyof typeof statusConfig] || { variant: 'secondary' as const, className: '' };
  };

  return (
    <section id="projects" className="section-modern bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-accent rounded-full blur-3xl animate-morph" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-glass rounded-full blur-2xl floating-animation" />
      </div>

      <div className="container-modern relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Showcasing end-to-end solutions that drive real business impact and innovation
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveFilter(filter.id)}
                className={`gap-3 px-6 py-3 rounded-2xl text-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'btn-gradient shadow-glow scale-105' 
                    : 'glass-effect hover:scale-105'
                }`}
              >
                <Filter className="h-5 w-5" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="card-modern group overflow-hidden glow-effect"
              style={{ 
                animation: `stagger 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.3}s both` 
              }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-6 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">{project.year}</span>
                      </div>
                      <div 
                        className={`px-4 py-2 rounded-xl text-sm font-bold ${getStatusBadge(project.status).className}`}
                      >
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Impact */}
                {project.impact && (
                  <div className="mb-6 card-glass p-6 rounded-2xl glow-effect">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <p className="text-lg text-foreground font-semibold">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Enhanced Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-foreground mb-4">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="skill-badge px-4 py-2 rounded-xl text-sm font-medium"
                        style={{ 
                          animation: `fade-in-delayed 1s ease-out ${techIndex * 0.1}s both` 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="skill-badge px-4 py-2 rounded-xl text-sm font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 gap-3 glass-effect rounded-xl text-lg"
                    disabled
                  >
                    <Github className="h-5 w-5" />
                    Private Repository
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 gap-3 glass-effect rounded-xl text-lg"
                    disabled
                  >
                    <ExternalLink className="h-5 w-5" />
                    Enterprise Access
                  </Button>
                </div>

                {/* Enhanced Additional Info */}
                <div className="mt-6 text-muted-foreground">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">Team Collaboration</span>
                    </div>
                    <div className="capitalize font-medium">
                      {project.category} Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-24">
          <div className="card-glass p-12 rounded-3xl max-w-3xl mx-auto glow-effect">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to <span className="text-accent">Collaborate?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              I'm always excited to discuss new opportunities and challenging projects. 
              Let's connect and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="btn-gradient gap-3 px-8 py-4 text-lg rounded-2xl shadow-glow"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ExternalLink className="h-5 w-5" />
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                asChild
                className="gap-3 px-8 py-4 text-lg rounded-2xl glass-effect"
              >
                <a href="/resume-pranay-varade.pdf" download="Pranay_Varade_Resume.pdf">
                  View Complete Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};