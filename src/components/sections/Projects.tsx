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
    <section id="projects" className="section-spacing bg-background">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Showcasing end-to-end solutions that drive real business impact
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={`gap-2 ${
                  activeFilter === filter.id 
                    ? 'btn-accent' 
                    : 'hover:bg-secondary'
                }`}
              >
                <Filter className="h-4 w-4" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="card-professional elegant-hover group overflow-hidden glow-border"
              style={{ 
                animation: `stagger 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s both` 
              }}
            >
              <CardHeader className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                      <Badge 
                        {...getStatusBadge(project.status)}
                        className={getStatusBadge(project.status).className}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-0">
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                {project.impact && (
                  <div className="mb-4 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="skill-tag text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 text-xs"
                    disabled
                  >
                    <Github className="h-4 w-4" />
                    Private Repo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 text-xs"
                    disabled
                  >
                    <ExternalLink className="h-4 w-4" />
                    Enterprise
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="mt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>Team Project</span>
                    </div>
                    <div className="capitalize">
                      {project.category} Development
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-professional bg-gradient-subtle border-2 border-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to discuss new opportunities and challenging projects. 
                Let's connect and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="btn-accent gap-2"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="gap-2"
                >
                  <a href="/resume-pranay-varade.pdf" download="Pranay_Varade_Resume.pdf">
                    View Full Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};