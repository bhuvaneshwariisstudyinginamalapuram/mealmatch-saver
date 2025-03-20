
import React from 'react';
import { FloatingElement } from '@/components/ui/animations';
import { Banana, Coffee, Pizza, Apple, Carrot, Utensils, Leaf, Cake } from 'lucide-react';

interface FoodAnimationsProps {
  variant?: 'scatter' | 'circle' | 'floating';
  color?: 'primary' | 'secondary' | 'accent';
  density?: 'low' | 'medium' | 'high';
}

export function FoodAnimations({ 
  variant = 'scatter', 
  color = 'primary',
  density = 'medium',
}: FoodAnimationsProps) {
  const foodIcons = [
    <Banana size={32} />,
    <Coffee size={32} />,
    <Pizza size={32} />,
    <Apple size={32} />,
    <Carrot size={32} />,
    <Utensils size={32} />,
    <Leaf size={32} />,
    <Cake size={32} />,
  ];
  
  const getColorClass = () => {
    switch (color) {
      case 'primary': return 'text-fwf-blue-300';
      case 'secondary': return 'text-fwf-green-300';
      case 'accent': return 'text-primary/30';
      default: return 'text-fwf-blue-300';
    }
  };
  
  const getCount = () => {
    switch (density) {
      case 'low': return 5;
      case 'medium': return 10;
      case 'high': return 15;
      default: return 10;
    }
  };
  
  const colorClass = getColorClass();
  const count = getCount();
  
  const renderScatterAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10">
        {Array.from({ length: count }).map((_, index) => (
          <FloatingElement 
            key={index}
            className={`absolute ${colorClass} opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            amplitude={10 + Math.random() * 15}
            duration={3 + Math.random() * 5}
            delay={Math.random() * 5}
          >
            {foodIcons[index % foodIcons.length]}
          </FloatingElement>
        ))}
      </div>
    );
  };
  
  const renderCircleAnimation = () => {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        {Array.from({ length: count }).map((_, index) => {
          const angle = (index / count) * 2 * Math.PI;
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <FloatingElement 
              key={index}
              className={`absolute ${colorClass} opacity-30`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              amplitude={8}
              duration={4 + (index % 3)}
              delay={index * 0.5}
            >
              {foodIcons[index % foodIcons.length]}
            </FloatingElement>
          );
        })}
      </div>
    );
  };
  
  const renderFloatingAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="relative w-full h-full">
          {Array.from({ length: count }).map((_, index) => (
            <FloatingElement 
              key={index}
              className={`absolute ${colorClass} opacity-30`}
              style={{
                left: `${10 + (index * 80 / count)}%`,
                top: `${Math.random() * 100}%`,
              }}
              amplitude={15 + (index % 10)}
              duration={5 + (index % 3)}
              delay={index * 0.3}
            >
              {foodIcons[index % foodIcons.length]}
            </FloatingElement>
          ))}
        </div>
      </div>
    );
  };
  
  switch (variant) {
    case 'scatter': return renderScatterAnimation();
    case 'circle': return renderCircleAnimation();
    case 'floating': return renderFloatingAnimation();
    default: return renderScatterAnimation();
  }
}
