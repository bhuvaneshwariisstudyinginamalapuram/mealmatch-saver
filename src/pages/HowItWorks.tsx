
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Utensils, Building, Clock, Truck, Award, CheckCircle } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Utensils size={32} />,
      title: "Restaurant Lists Surplus Food",
      description: "Restaurants identify surplus food that is still safe to consume and list it on our platform with details about quantity, type, and expiry.",
      color: "bg-fwf-blue-500",
      delay: 0.1
    },
    {
      icon: <Building size={32} />,
      title: "Charity Views Available Food",
      description: "Charities and food banks browse available donations in their area and select what they need for their communities.",
      color: "bg-fwf-green-500",
      delay: 0.2
    },
    {
      icon: <Clock size={32} />,
      title: "Pickup Time Scheduled",
      description: "Once a charity selects food items, both parties agree on a convenient pickup time that suits their schedules.",
      color: "bg-fwf-blue-500",
      delay: 0.3
    },
    {
      icon: <Truck size={32} />,
      title: "Food Pickup & Delivery",
      description: "The charity collects the food from the restaurant at the scheduled time, ensuring it remains fresh and safe to consume.",
      color: "bg-fwf-green-500",
      delay: 0.4
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Confirmation & Tracking",
      description: "Both parties confirm the successful handover, and our system tracks the amount of food saved and impact created.",
      color: "bg-fwf-blue-500",
      delay: 0.5
    },
    {
      icon: <Award size={32} />,
      title: "Impact Reporting",
      description: "Restaurants and charities receive impact reports showing their contribution to reducing food waste and helping the community.",
      color: "bg-fwf-green-500",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fwf-blue-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-600 to-fwf-green-600">
              How FoodWaste Fighter Works
            </h1>
            <p className="text-xl text-foreground/80">
              Our platform makes it easy for restaurants to donate surplus food and for charities to access it. Here's our simple 6-step process:
            </p>
          </div>
          
          <div className="relative mb-20">
            {/* Animated food icons floating in the background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <FloatingElement className="absolute top-1/4 left-1/5" amplitude={15} duration={4}>
                <div className="text-fwf-green-300 opacity-20">
                  <Utensils size={64} />
                </div>
              </FloatingElement>
              <FloatingElement className="absolute bottom-1/3 right-1/4" amplitude={20} duration={5} delay={1}>
                <div className="text-fwf-blue-300 opacity-20">
                  <Building size={72} />
                </div>
              </FloatingElement>
              <FloatingElement className="absolute top-1/2 right-1/5" amplitude={12} duration={4.5} delay={2}>
                <div className="text-fwf-green-300 opacity-20">
                  <Truck size={56} />
                </div>
              </FloatingElement>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <FadeIn key={index} delay={step.delay} className="glass-card p-8 border border-white/20 hover:shadow-lg transition-all">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mb-6`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                  <div className="absolute top-6 right-6 text-5xl font-display font-bold text-foreground/10">
                    {index + 1}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-fwf-blue-500 to-fwf-green-500 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join FoodWaste Fighter today and be part of the solution to food waste and hunger in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup?role=restaurant" className="px-8 py-3 bg-white text-fwf-blue-600 font-semibold rounded-full hover:shadow-lg transition-all">
                Join as Restaurant
              </a>
              <a href="/signup?role=charity" className="px-8 py-3 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 hover:shadow-lg transition-all">
                Join as Charity
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
