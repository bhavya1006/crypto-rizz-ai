import React from 'react';
import { Search, Waves, TrendingUp, Brain } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'Token Discovery Agent',
      description: 'Crawls funding platforms using Firecrawl, extracts tokenomics and vesting schedules, analyzes Twitter sentiment with bot detection, and identifies early-stage opportunities before mainstream discovery.',
      icon: Search,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Whale Tracking Agent',
      description: 'Monitors top 100 holder wallets in real-time, tracks large transfers and accumulation patterns, calculates concentration risk, and provides early warning alerts for major market movements.',
      icon: Waves,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Market Data Agent',
      description: 'Fetches live prices via Pyth Network, calculates real-time market caps, performs technical analysis (RSI, MACD), and assesses liquidity depth and trading volume patterns.',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Financial Analysis Agent',
      description: 'Applies game theory to model whale vs. retail dynamics, generates DCF-based valuations, performs scenario analysis, and delivers institutional-grade investment recommendations.',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Four Specialized AI Agents Working In Concert
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass-bg/80 hover:border-primary/20 hover:shadow-card hover:-translate-y-2 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};