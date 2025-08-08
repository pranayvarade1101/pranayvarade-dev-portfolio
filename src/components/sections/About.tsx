import React from 'react';
import { Code, Palette, Users, Target, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resume';

export const About: React.FC = () => {
  const { summary, publications, education } = resumeData;

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "End-to-end development from database design to user interface, specializing in Angular and Node.js ecosystems."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive, user-centered designs in Figma that bridge the gap between functionality and usability."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring junior developers and leading cross-functional teams to deliver high-quality software solutions."
    },
    {
      icon: Target,
      title: "EdTech Innovation",
      description: "Building scalable educational technology solutions that impact 100+ institutions and thousands of users."
    }
  ];

  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-professional">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating software that makes a difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Story & Summary */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {summary.expanded.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Education Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                {education.slice(0, 2).map((edu, index) => (
                  <Card key={index} className="card-professional hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <BookOpen className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{edu.period}</span>
                            <span className="font-medium text-accent">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Publications */}
            {publications.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Publications</h3>
                <Card className="card-professional hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">
                          {publications[0].title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {publications[0].journal} • {publications[0].date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {publications[0].description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">What I Bring</h3>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="card-professional hover-lift group"
                  style={{ 
                    animation: `fadeInDelayed 0.6s ease-out ${index * 0.1}s both` 
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-200">
                        <highlight.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="card-professional bg-gradient-subtle border-2 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Industry Focus</span>
                    <span className="text-sm font-medium text-accent">EdTech</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Role</span>
                    <span className="text-sm font-medium text-accent">Software Developer 1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Team Size</span>
                    <span className="text-sm font-medium text-accent">3 Members</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Institutions Served</span>
                    <span className="text-sm font-medium text-accent">100+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};