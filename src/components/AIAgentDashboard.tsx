import React, { useState, useEffect } from 'react';
import { Search, Waves, TrendingUp, Brain, CheckCircle } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  status: string;
}

export const AIAgentDashboard: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const agents: Agent[] = [
    {
      id: 'discovery',
      name: 'Token Discovery',
      description: 'Scanning funding platforms...',
      icon: Search,
      gradient: 'from-pink-500 to-rose-500',
      status: 'ACTIVE'
    },
    {
      id: 'whale',
      name: 'Whale Tracking',
      description: 'Monitoring 100 top holders...',
      icon: Waves,
      gradient: 'from-blue-500 to-cyan-500',
      status: 'ACTIVE'
    },
    {
      id: 'market',
      name: 'Market Data',
      description: 'Processing Pyth feeds...',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      status: 'ACTIVE'
    },
    {
      id: 'analysis',
      name: 'Game Theory',
      description: 'Analyzing whale dynamics...',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      status: 'ACTIVE'
    }
  ];

  const messages = [
    'Scanning funding platforms...',
    'Processing new tokens...',
    'Analyzing sentiment data...',
    'Updating risk scores...',
    'Cross-referencing whale movements...',
    'Calculating market correlations...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-6 lg:p-8 w-full max-w-md animate-float">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">AI Agents Status</h3>
        <div className="flex items-center gap-2 text-success">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
          <span className="text-sm font-medium">All Systems Active</span>
        </div>
      </div>

      {/* Agent List */}
      <div className="space-y-4">
        {agents.map((agent, index) => (
          <div
            key={agent.id}
            className="flex items-center gap-4 p-4 bg-glass-bg/50 rounded-xl border border-glass-border/50 hover:bg-glass-bg/80 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon */}
            <div className={`w-10 h-10 bg-gradient-to-r ${agent.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <agent.icon className="w-5 h-5 text-white" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground truncate">
                {agent.name}
              </h4>
              <p className="text-sm text-muted-foreground truncate">
                {agent.description}
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-1 px-2 py-1 bg-success/10 text-success rounded-full">
              <CheckCircle className="w-3 h-3" />
              <span className="text-xs font-medium">{agent.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Status */}
      <div className="mt-6 p-4 bg-gradient-glow rounded-xl border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <span className="text-sm font-medium text-foreground">Live Updates</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {messages[currentMessageIndex]}
        </p>
      </div>
    </div>
  );
};