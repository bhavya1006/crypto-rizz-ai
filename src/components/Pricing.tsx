import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Explorer',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for getting started with crypto intelligence',
      features: [
        { text: '5 basic analyses/month', included: true },
        { text: 'Price alerts', included: true },
        { text: 'Community access', included: true },
        { text: 'Whale tracking', included: false },
        { text: 'Game theory analysis', included: false },
        { text: 'Portfolio optimization', included: false },
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Professional',
      price: '25 0G',
      period: 'per month',
      description: 'Full access to all AI agents and premium features',
      features: [
        { text: 'Unlimited analyses', included: true },
        { text: 'Real-time whale alerts', included: true },
        { text: 'Game theory modeling', included: true },
        { text: 'Portfolio optimization', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced indicators', included: true },
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'hero' as const,
      popular: true,
    },
    {
      name: 'Institution',
      price: '500 0G',
      period: 'per month',
      description: 'Enterprise-grade solutions for institutions',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'API access', included: true },
        { text: 'Custom models', included: true },
        { text: 'White-label solution', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Revenue sharing', included: true },
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Intelligence Level
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-glass-bg backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:shadow-card hover:-translate-y-2 animate-slide-up ${
                plan.popular 
                  ? 'border-primary shadow-primary scale-105 lg:scale-110' 
                  : 'border-glass-border hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-black text-primary">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{plan.period}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      feature.included ? 'bg-success text-white' : 'bg-muted'
                    }`}>
                      {feature.included ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3 text-muted-foreground" />
                      )}
                    </div>
                    <span className={`text-sm ${
                      feature.included ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 24/7 support and access to our community. 
            <br />
            Institutional plans can be customized to your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};