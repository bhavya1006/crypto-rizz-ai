import React from 'react';
import { TrendingUp, Network, Rocket, MessageSquare, Flame, Brain } from 'lucide-react';

export const Architecture: React.FC = () => {
  const techStack = [
    { name: 'Pyth Network Oracles', icon: TrendingUp },
    { name: 'The Graph Substreams', icon: Network },
    { name: '0G Network Integration', icon: Rocket },
    { name: 'Telegram Bot API', icon: MessageSquare },
    { name: 'Firecrawl Web Scraping', icon: Flame },
    { name: 'Game Theory Models', icon: Brain },
  ];

  const codeExample = `# FinRizz Multi-Agent Analysis System
async def comprehensive_analysis(token_address):
    # Initialize all four agents
    discovery_agent = TokenDiscoveryAgent()
    whale_agent = WhaleTrackingAgent()
    market_agent = MarketDataAgent()
    analysis_agent = GameTheoryAgent()
    
    # Run agents in parallel
    results = await asyncio.gather(
        discovery_agent.discover_token(token_address),
        whale_agent.track_whales(token_address),
        market_agent.fetch_market_data(token_address),
        analysis_agent.analyze_dynamics(token_address)
    )
    
    # Generate final recommendation
    recommendation = synthesize_analysis(results)
    return recommendation`;

  return (
    <section id="architecture" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                Powered by Cutting-Edge Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                FinRizz leverages the most advanced blockchain infrastructure to deliver 
                institutional-grade analysis with retail accessibility. Our multi-chain approach 
                ensures comprehensive market coverage.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl hover:bg-glass-bg/80 hover:border-primary/20 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <tech.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Preview */}
          <div className="bg-card border border-glass-border rounded-2xl overflow-hidden shadow-card animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-glass-bg border-b border-glass-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded-full" />
                <div className="w-3 h-3 bg-warning rounded-full" />
                <div className="w-3 h-3 bg-success rounded-full" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-primary">Multi-Agent Analysis Pipeline</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Python</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm bg-card overflow-x-auto">
              <pre className="text-card-foreground leading-relaxed">
                <code className="whitespace-pre-wrap">
                  {codeExample.split('\n').map((line, index) => (
                    <div key={index} className="hover:bg-glass-bg/30 px-2 py-1 rounded transition-colors">
                      {line.includes('#') ? (
                        <span className="text-muted-foreground">{line}</span>
                      ) : line.includes('async def') || line.includes('await') || line.includes('return') ? (
                        <span className="text-primary">{line}</span>
                      ) : line.includes('Agent') ? (
                        <span className="text-success">{line}</span>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};