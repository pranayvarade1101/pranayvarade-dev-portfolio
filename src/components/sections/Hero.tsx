import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';

export const Hero: React.FC = () => {
  const { personal, summary, availability } = resumeData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-professional text-center">
        <div className="max-w-4xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent-foreground text-sm font-medium mb-8 animate-bounce-in glow-border">
            <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
            {availability.status} • {availability.type}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            <span className="block">Hi, I'm</span>
            <span className="block text-gradient bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Professional Title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 font-medium mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {personal.title}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {personal.taglines.formal}
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover-lift stagger-animation" style={{ animationDelay: '0.6s' }}>
              <MapPin className="h-4 w-4 text-teal-300" />
              <span className="text-sm font-medium">{personal.location}</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover-lift stagger-animation" style={{ animationDelay: '0.7s' }}>
              <Calendar className="h-4 w-4 text-teal-300" />
              <span className="text-sm font-medium">{availability.startDate}</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover-lift stagger-animation" style={{ animationDelay: '0.8s' }}>
              <Github className="h-4 w-4 text-teal-300" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="btn-accent text-lg px-8 py-4 h-auto group hover-glow stagger-animation"
              onClick={() => scrollToSection('projects')}
              style={{ animationDelay: '0.9s' }}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-all duration-smooth group-hover:translate-x-2 group-hover:scale-110" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-navy-900 backdrop-blur-sm transition-all duration-smooth hover:scale-105 hover:shadow-strong stagger-animation"
              asChild
              style={{ animationDelay: '1s' }}
            >
              <a href="/resume-pranay-varade.pdf" download="Pranay_Varade_Resume.pdf">
                <Download className="mr-2 h-5 w-5 transition-transform duration-smooth group-hover:rotate-12" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-smooth hover:scale-125 hover:shadow-accent hover:rotate-12 stagger-animation"
              aria-label="GitHub Profile"
              style={{ animationDelay: '1.1s' }}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-smooth hover:scale-125 hover:shadow-accent hover:rotate-12 stagger-animation"
              aria-label="LinkedIn Profile"
              style={{ animationDelay: '1.2s' }}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-smooth hover:scale-125 hover:shadow-accent hover:rotate-12 stagger-animation"
              aria-label="Send Email"
              style={{ animationDelay: '1.3s' }}
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};