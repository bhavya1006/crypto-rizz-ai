import React from 'react';
import { Button } from '@/components/ui/button';
import { MetaMaskConnect } from '@/components/MetaMaskConnect';
import { Play, TrendingUp, Users, Zap } from 'lucide-react';
import { AIAgentDashboard } from '@/components/AIAgentDashboard';

export const Hero: React.FC = () => {
  const stats = [
    { value: '4', label: 'AI Agents', icon: Users },
    { value: '400+', label: 'Price Feeds', icon: TrendingUp },
    { value: '<60s', label: 'Analysis Time', icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-secondary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  FinRizz AI
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-semibold text-primary">
                Multi-Agent Crypto Intelligence Platform
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Democratizing institutional-grade market analysis with AI agents, real-time data, 
                and game theory modeling. Get the same analytical capabilities traditionally reserved for hedge funds.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl p-4 lg:p-6 text-center hover:bg-glass-bg/80 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Analysis
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Demo
              </Button>
            </div>

            {/* MetaMask Connection */}
            <div className="flex justify-center lg:justify-start">
              <MetaMaskConnect variant="glass" />
            </div>
          </div>

          {/* AI Dashboard */}
          <div className="flex justify-center lg:justify-end">
            <AIAgentDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};