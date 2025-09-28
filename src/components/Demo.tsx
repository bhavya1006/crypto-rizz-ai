import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Play, TrendingUp, Shield, Target, AlertTriangle } from 'lucide-react';

export const Demo: React.FC = () => {
  const commands = [
    { command: '/analyze 0x1234...abcd', description: 'Comprehensive 4-agent analysis' },
    { command: '/discover', description: 'Find newly funded utility tokens' },
    { command: '/whale_alert BTC', description: 'Set whale movement notifications' },
    { command: '/portfolio', description: 'AI-powered portfolio optimization' },
  ];

  const metrics = [
    { label: 'Verdict', value: 'BUY 🟢', type: 'success' },
    { label: 'Risk Score', value: '3/10 (Low)', type: 'neutral' },
    { label: 'Price Target', value: '$2.45 (+34%)', type: 'success' },
    { label: 'Whale Risk', value: 'LOW', type: 'neutral' },
  ];

  return (
    <section id="demo" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent leading-tight">
                See FinRizz In Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience institutional-grade crypto intelligence through our intuitive Telegram bot. 
                Get comprehensive analysis reports in under 60 seconds with actionable insights backed 
                by game theory and real-time data.
              </p>
            </div>

            {/* Commands */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-4">Try These Commands:</h3>
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl hover:bg-glass-bg/80 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <code className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-mono text-sm font-semibold">
                    {cmd.command}
                  </code>
                  <span className="text-muted-foreground">- {cmd.description}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Try Free Analysis
              </Button>
            </div>
          </div>

          {/* Analysis Report */}
          <div className="bg-card border border-glass-border rounded-2xl overflow-hidden shadow-card animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-glow border-b border-glass-border">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                🔍 FinRizz Analysis: $EXAMPLE
              </h3>
              <div className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                Confidence: 87%
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 bg-glass-bg rounded-xl border border-glass-border"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                    <div className={`font-bold text-lg ${
                      metric.type === 'success' ? 'text-success' : 
                      metric.type === 'warning' ? 'text-warning' : 
                      'text-foreground'
                    }`}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Investment Thesis */}
              <div className="p-4 bg-gradient-glow rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">Investment Thesis</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Game theory analysis suggests favorable whale-retail dynamics with low manipulation risk. 
                  Strong fundamentals backed by institutional funding with clear utility value proposition...
                </p>
              </div>

              {/* Risk Assessment */}
              <div className="flex items-center gap-3 p-4 bg-glass-bg rounded-xl border border-glass-border">
                <Shield className="w-5 h-5 text-success" />
                <div>
                  <div className="font-medium text-foreground">Risk Assessment</div>
                  <div className="text-sm text-success">Low volatility expected, strong holder distribution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};