import React from 'react';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';

export const Footer: React.FC = () => {
  const { personal } = resumeData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container-professional py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">{personal.name}</h3>
              <p className="text-slate-200 leading-relaxed max-w-md">
                Full-stack developer passionate about creating scalable EdTech solutions 
                that make a real impact. Currently building the future of educational technology.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="p-3 hover:bg-white/10 text-white"
              >
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="p-3 hover:bg-white/10 text-white"
              >
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="p-3 hover:bg-white/10 text-white"
              >
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-slate-200 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-slate-200">
              <div>
                <div className="text-sm">Email</div>
                <a 
                  href={`mailto:${personal.email}`}
                  className="text-white hover:text-accent transition-colors duration-200"
                >
                  {personal.email}
                </a>
              </div>
              <div>
                <div className="text-sm">Phone</div>
                <a 
                  href={`tel:${personal.phone}`}
                  className="text-white hover:text-accent transition-colors duration-200"
                >
                  {personal.phone}
                </a>
              </div>
              <div>
                <div className="text-sm">Location</div>
                <span className="text-white">{personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm text-slate-200">
              <span>© {currentYear} {personal.name}. All rights reserved.</span>
              <div className="flex items-center gap-1">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <a
                href="/resume-pranay-varade.pdf"
                download="Pranay_Varade_Resume.pdf"
                className="text-slate-200 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-white transition-colors duration-200 flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};