import React from 'react';
import { MessageSquare, Github, MessageCircle, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'AI Agents', href: 'https://t.me/FinrizzBot?start', external: true },
        { label: 'Architecture', href: 'https://t.me/FinrizzBot?start', external: true },
        { label: 'Live Demo', href: 'https://t.me/FinrizzBot?start', external: true },
        { label: 'Pricing', href: 'https://t.me/FinrizzBot?start', external: true },
      ],
    },
    {
      title: 'Infrastructure',
      links: [
        { label: 'Pyth Network', href: 'https://pyth.network', external: true },
        { label: 'The Graph Protocol', href: 'https://thegraph.com', external: true },
        { label: '0G Network', href: 'https://0g.ai', external: true },
        { label: 'Telegram Bot API', href: 'https://telegram.org', external: true },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Telegram Bot', href: 'https://t.me/FinrizzBot', external: true, icon: MessageSquare },
        { label: 'GitHub', href: 'https://github.com/Ankur2606/FinRizz', external: true, icon: Github },
        { label: 'Discord', href: 'https://discord.gg/finrizz', external: true, icon: MessageCircle },
        { label: 'Contact', href: 'mailto:team@finrizz.ai', external: true, icon: Mail },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer id="contact" className="bg-card border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black bg-gradient-primary bg-clip-text text-transparent mb-4">
              FinRizz AI
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Revolutionary multi-agent AI system democratizing institutional-grade crypto market intelligence. 
              Built on cutting-edge blockchain infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
              <span className="text-sm text-success font-medium">All Systems Operational</span>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 text-left"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 FinRizz AI. Democratizing institutional-grade crypto intelligence.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
              <button className="hover:text-primary transition-colors">API Documentation</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};