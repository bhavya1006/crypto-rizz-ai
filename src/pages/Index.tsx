import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Architecture } from '@/components/Architecture';
import { Demo } from '@/components/Demo';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Architecture />
      <Demo />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
