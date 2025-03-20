
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Statistics } from '@/components/Statistics';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/animations';
import { Users, Utensils, ArrowRight } from 'lucide-react';
import { FoodAnimations } from '@/components/FoodAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fwf-blue-50 to-white relative overflow-hidden">
      <Navigation />
      
      {/* Background food animations */}
      <FoodAnimations variant="scatter" color="primary" density="medium" />
      
      <Hero />
      
      <Features />
      
      <Statistics />
      
      {/* Role Selection Section */}
      <section className="py-24 bg-gradient-to-b from-accent/30 to-background relative">
        <FoodAnimations variant="floating" color="secondary" density="low" />
        
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Join FoodWaste <span className="text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-500 to-fwf-green-500">Fighter</span> Today
              </h2>
              <p className="text-foreground/70 text-lg">
                Whether you're a restaurant with surplus food or a charity organization, we've got you covered.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="glass-card p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-fwf-blue-100 flex items-center justify-center mb-6">
                  <Utensils className="text-fwf-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">For Restaurants</h3>
                <p className="text-foreground/70 mb-6">
                  Reduce food waste, make a positive impact on your community, and track your contribution to sustainability.
                </p>
                <ul className="text-left w-full mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-fwf-blue-100 flex items-center justify-center text-fwf-blue-600 text-xs">✓</span>
                    <span>Easily list surplus food</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-fwf-blue-100 flex items-center justify-center text-fwf-blue-600 text-xs">✓</span>
                    <span>Schedule convenient pickups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-fwf-blue-100 flex items-center justify-center text-fwf-blue-600 text-xs">✓</span>
                    <span>Receive impact reports</span>
                  </li>
                </ul>
                <Button className="bg-fwf-blue-500 hover:bg-fwf-blue-600 gap-2 rounded-full mt-auto" asChild>
                  <Link to="/signup?role=restaurant">
                    Join as Restaurant
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="glass-card p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-fwf-green-100 flex items-center justify-center mb-6">
                  <Users className="text-fwf-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">For Charities</h3>
                <p className="text-foreground/70 mb-6">
                  Access quality surplus food from local restaurants, streamline your donation process, and help those in need.
                </p>
                <ul className="text-left w-full mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-fwf-green-100 flex items-center justify-center text-fwf-green-600 text-xs">✓</span>
                    <span>Find available food donations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-fwf-green-100 flex items-center justify-center text-fwf-green-600 text-xs">✓</span>
                    <span>Manage pickup schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-fwf-green-100 flex items-center justify-center text-fwf-green-600 text-xs">✓</span>
                    <span>Track received donations</span>
                  </li>
                </ul>
                <Button className="bg-fwf-green-500 hover:bg-fwf-green-600 gap-2 rounded-full mt-auto" asChild>
                  <Link to="/signup?role=charity">
                    Join as Charity
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
