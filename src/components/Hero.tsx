
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, UtensilsCrossed, Building, Banana, Pizza, Carrot, Apple } from 'lucide-react';
import { FloatingElement } from '@/components/ui/animations';

export function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-fwf-blue-100 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-fwf-green-100 rounded-full blur-3xl opacity-40 animate-pulse-slow delay-1000"></div>
        
        {/* Food icons floating in background */}
        <FloatingElement className="absolute top-1/3 left-1/4" amplitude={15} duration={5}>
          <Banana className="text-fwf-green-300 opacity-30" size={48} />
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/3 right-1/4" amplitude={20} duration={6} delay={1}>
          <Pizza className="text-fwf-blue-300 opacity-30" size={64} />
        </FloatingElement>
        <FloatingElement className="absolute top-2/3 right-1/3" amplitude={18} duration={7} delay={2}>
          <Carrot className="text-fwf-green-300 opacity-30" size={56} />
        </FloatingElement>
        <FloatingElement className="absolute top-1/4 right-1/5" amplitude={12} duration={5.5} delay={3}>
          <Apple className="text-fwf-blue-300 opacity-30" size={40} />
        </FloatingElement>
      </div>
      
      <div className="container-tight relative">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center md:text-left md:items-start flex-1 max-w-3xl">
            <div className="mb-8 inline-flex gap-2 items-center px-3 py-1 rounded-full bg-accent text-foreground/70 text-sm font-medium animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-fwf-green-500"></span>
              Making a difference, one meal at a time
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-slide-up text-balance" style={{ animationDelay: "0.1s" }}>
              Connect, Donate, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-600 to-fwf-green-600">Reduce Waste</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl animate-slide-up text-balance" style={{ animationDelay: "0.2s" }}>
              FoodWaste Fighter connects restaurants with surplus food to charities and food banks, creating a seamless donation process that helps those in need and reduces waste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-gradient-to-r from-fwf-blue-500 to-fwf-blue-600 hover:shadow-lg transition-shadow text-white gap-2 rounded-full" asChild>
                <Link to="/signup?role=restaurant">
                  I'm a Restaurant
                  <Building size={18} />
                </Link>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-fwf-green-500 to-fwf-green-600 hover:shadow-lg transition-shadow text-white gap-2 rounded-full" asChild>
                <Link to="/signup?role=charity">
                  I'm a Charity
                  <UtensilsCrossed size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Hero images */}
          <div className="flex-1 relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main image */}
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden shadow-xl transform rotate-3 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                  alt="Restaurant donating food" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary image */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 glass-card rounded-2xl overflow-hidden shadow-lg transform -rotate-6 transition-transform hover:rotate-0 duration-500 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                  alt="Fresh produce" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Third image */}
              <div className="absolute -top-5 -right-5 w-36 h-36 glass-card rounded-2xl overflow-hidden shadow-lg transform rotate-12 transition-transform hover:rotate-0 duration-500 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                  alt="Charity distribution" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scrolling food items */}
        <div className="w-full max-w-4xl mx-auto mt-16 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex gap-6 overflow-hidden">
            <div className="flex gap-6 animate-[scroll_25s_linear_infinite]">
              {[
                { name: "Fresh Bread", icon: <Carrot className="text-fwf-blue-600" size={24} /> },
                { name: "Fresh Produce", icon: <Apple className="text-fwf-green-600" size={24} /> },
                { name: "Prepared Meals", icon: <UtensilsCrossed className="text-fwf-blue-600" size={24} /> },
                { name: "Dairy Products", icon: <Banana className="text-fwf-green-600" size={24} /> },
                { name: "Baked Goods", icon: <Pizza className="text-fwf-blue-600" size={24} /> },
                { name: "Canned Food", icon: <Carrot className="text-fwf-green-600" size={24} /> },
                { name: "Beverages", icon: <Apple className="text-fwf-blue-600" size={24} /> },
                { name: "Non-Perishables", icon: <UtensilsCrossed className="text-fwf-green-600" size={24} /> },
              ].map((item, index) => (
                <div key={index} className="glass-card flex-none w-48 h-48 p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 mb-3 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'bg-fwf-blue-100' : 'bg-fwf-green-100'}`}>
                    {item.icon}
                  </div>
                  <p className="font-medium text-foreground/80">{item.name}</p>
                  <p className="text-sm text-foreground/60">Ready to be saved</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
