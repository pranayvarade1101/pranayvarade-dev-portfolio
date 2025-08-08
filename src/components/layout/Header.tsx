import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Handle smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-professional">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="font-bold text-xl md:text-2xl text-primary hover:text-accent transition-colors duration-200"
          >
            Pranay Varade
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent'
                    : 'text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="p-2 hover:bg-secondary"
              >
                <a
                  href="https://github.com/pranayvarade"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="p-2 hover:bg-secondary"
              >
                <a
                  href="https://linkedin.com/in/pranay-varade"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="p-2 hover:bg-secondary"
              >
                <a
                  href="mailto:prannayk.varade@gmail.com"
                  aria-label="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 hover:bg-secondary"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Download Resume */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a
                href="/resume-pranay-varade.pdf"
                download="Pranay_Varade_Resume.pdf"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-medium">
            <div className="p-4 space-y-4">
              {/* Navigation Links */}
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border space-y-3">
                {/* Social Links */}
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="p-2"
                  >
                    <a
                      href="https://github.com/pranayvarade"
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
                    className="p-2"
                  >
                    <a
                      href="https://linkedin.com/in/pranay-varade"
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
                    className="p-2"
                  >
                    <a
                      href="mailto:prannayk.varade@gmail.com"
                      aria-label="Send Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleDarkMode}
                    className="p-2"
                    aria-label="Toggle dark mode"
                  >
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>

                {/* Download Resume */}
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  asChild
                >
                  <a
                    href="/resume-pranay-varade.pdf"
                    download="Pranay_Varade_Resume.pdf"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};