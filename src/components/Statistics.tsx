
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, ShoppingBag, Leaf } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const statsData = [
  { id: 1, icon: <Utensils size={24} />, value: 500, label: "Restaurant Partners", color: "from-fwf-blue-500 to-fwf-blue-600" },
  { id: 2, icon: <Users size={24} />, value: 150, label: "Charity Organizations", color: "from-fwf-green-500 to-fwf-green-600" },
  { id: 3, icon: <ShoppingBag size={24} />, value: 10000, label: "Meals Saved", color: "from-fwf-blue-500 to-fwf-blue-600" },
  { id: 4, icon: <Leaf size={24} />, value: 5000, label: "CO₂ Prevented (kg)", color: "from-fwf-green-500 to-fwf-green-600" }
];

export function Statistics() {
  return (
    <section className="py-24 bg-background">
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-500 to-fwf-green-500">Impact</span> So Far
          </h2>
          <p className="text-foreground/70 text-lg">
            Together with our partners, we're making a real difference in reducing food waste and helping communities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div key={stat.id} className="glass-card p-6 text-center">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <CountUp target={stat.value} />
              </div>
              <p className="text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Animation component for counting up
function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const step = Math.max(1, Math.floor(target / 100)); // Adjust for smoother animation
    
    if (count < target) {
      const timeout = setTimeout(() => {
        setCount(prev => Math.min(prev + step, target));
      }, 20);
      
      return () => clearTimeout(timeout);
    }
  }, [count, target]);
  
  return <>{count.toLocaleString()}</>;
}
