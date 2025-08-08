import React from 'react';
import { Calendar, MapPin, ChevronRight, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resume';

export const Experience: React.FC = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section-spacing bg-gradient-subtle">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful EdTech solutions and leading development teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experience.map((company, companyIndex) => (
            <div key={companyIndex} className="relative">
              {/* Company Header */}
              <div className="mb-8">
                <Card className="card-professional border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Building2 className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {company.company}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{company.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                              {company.positions[company.positions.length - 1].period.split(' – ')[0]} – Present
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Positions */}
              <div className="space-y-8 ml-8 border-l-2 border-border pl-8">
                {company.positions.map((position, positionIndex) => (
                  <div key={positionIndex} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-11 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-soft" />
                    
                    <Card className="card-professional hover-lift">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                            {position.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{position.period}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          {position.achievements.map((achievement, achievementIndex) => (
                            <div 
                              key={achievementIndex}
                              className="flex items-start gap-3 group"
                            >
                              <div className="mt-2 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Position Badge */}
                        <div className="mt-4 pt-4 border-t border-border">
                          <Badge 
                            variant="secondary" 
                            className="bg-accent/10 text-accent hover:bg-accent/20"
                          >
                            {positionIndex === 0 ? 'Current Role' : 'Previous Role'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Career Progression Summary */}
              {companyIndex === experience.length - 1 && (
                <div className="mt-12">
                  <Card className="card-professional bg-accent/5 border-accent/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <ChevronRight className="h-5 w-5 text-accent" />
                        Career Progression
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent mb-1">Junior</div>
                          <div className="text-muted-foreground">Intern Developer</div>
                          <div className="text-xs text-muted-foreground mt-1">Feb - Oct 2024</div>
                        </div>
                        <div className="flex items-center justify-center">
                          <ChevronRight className="h-6 w-6 text-accent" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent mb-1">Level 1</div>
                          <div className="text-muted-foreground">Software Developer</div>
                          <div className="text-xs text-muted-foreground mt-1">Nov 2024 - Present</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Technologies Used */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Technologies in Daily Use</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['Angular', 'Node.js', 'MySQL', 'TypeScript', 'Figma', 'AmCharts 5', 'Ionic', 'REST APIs', 'Git', 'Jira'].map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="skill-tag text-sm px-4 py-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};