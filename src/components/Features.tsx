
import React from 'react';
import { CalendarClock, UserCheck, Bell, BarChart3, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="text-fwf-blue-500" size={24} />,
    title: "Easy Registration",
    description: "Simple onboarding process for both restaurants and charities with secure authentication."
  },
  {
    icon: <CalendarClock className="text-fwf-green-500" size={24} />,
    title: "Smart Scheduling",
    description: "Effortlessly schedule pickups and deliveries with an intuitive calendar interface."
  },
  {
    icon: <Bell className="text-fwf-blue-500" size={24} />,
    title: "Instant Notifications",
    description: "Real-time alerts for new donation opportunities and status updates."
  },
  {
    icon: <BarChart3 className="text-fwf-green-500" size={24} />,
    title: "Impact Tracking",
    description: "Comprehensive dashboard to visualize your contribution to reducing food waste."
  },
  {
    icon: <Clock className="text-fwf-blue-500" size={24} />,
    title: "Real-time Updates",
    description: "Live updates on food availability and donation status across the platform."
  },
  {
    icon: <Leaf className="text-fwf-green-500" size={24} />,
    title: "Environmental Impact",
    description: "Track your carbon footprint reduction through prevented food waste."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-500 to-fwf-green-500">FoodWaste Fighter</span> Works
          </h2>
          <p className="text-foreground/70 text-lg">
            Our platform makes food donation simple, efficient, and impactful through these key features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm mb-5 group-hover:-translate-y-1 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
