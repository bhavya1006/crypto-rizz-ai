import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MetaMaskConnect } from '@/components/MetaMaskConnect';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'AI Agents', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Demo', href: '#demo' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-md border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-black bg-gradient-primary bg-clip-text text-transparent">
              FinRizz
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <MetaMaskConnect variant="glass" />
            <Button variant="hero" size="lg">
              Start Analysis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-glass-bg border border-glass-border"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-glass-border">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <MetaMaskConnect variant="glass" />
                <Button variant="hero" size="lg" className="w-full">
                  Start Analysis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};