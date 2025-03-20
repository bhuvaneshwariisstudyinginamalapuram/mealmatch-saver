
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Heart, Leaf, Users, Globe, Award, ShieldCheck } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Sarah founded FoodWaste Fighter after witnessing food waste firsthand while managing a restaurant chain."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Michael brings 15 years of tech experience to create our innovative platform."
    },
    {
      name: "Aisha Patel",
      role: "Community Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "Aisha coordinates with charities and food banks to ensure seamless donation processes."
    },
    {
      name: "David Rodriguez",
      role: "Restaurant Relations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      bio: "David works with restaurants to optimize their donation processes and reduce waste."
    }
  ];

  const values = [
    {
      icon: <Heart className="text-white" size={24} />,
      title: "Compassion",
      description: "We believe in helping our communities through kindness and action.",
      color: "bg-fwf-blue-500"
    },
    {
      icon: <Leaf className="text-white" size={24} />,
      title: "Sustainability",
      description: "We're committed to creating environmentally sustainable solutions.",
      color: "bg-fwf-green-500"
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Community",
      description: "We build connections that strengthen neighborhoods and communities.",
      color: "bg-fwf-blue-500"
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: "Global Impact",
      description: "While we act locally, our vision is to create global change.",
      color: "bg-fwf-green-500"
    },
    {
      icon: <Award className="text-white" size={24} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
      color: "bg-fwf-blue-500"
    },
    {
      icon: <ShieldCheck className="text-white" size={24} />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and accountability.",
      color: "bg-fwf-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fwf-blue-50 via-white to-fwf-green-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-600 to-fwf-green-600">
                About FoodWaste Fighter
              </h1>
              <p className="text-xl text-foreground/80">
                We're on a mission to reduce food waste and fight hunger through technology and community collaboration.
              </p>
            </FadeIn>
          </div>
          
          {/* Our Story Section */}
          <div className="mb-20">
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <FadeIn delay={0.2}>
                <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <p className="text-lg mb-4">
                      FoodWaste Fighter began in 2020 when our founder, Sarah Johnson, witnessed the shocking amount of perfectly good food being thrown away at restaurants while working as a restaurant manager.
                    </p>
                    <p className="text-lg mb-4">
                      At the same time, she volunteered at a local food bank that was struggling to meet the needs of the community. The disconnect between food waste and food insecurity inspired her to create a solution.
                    </p>
                    <p className="text-lg">
                      Using her background in restaurant management and teaming up with tech experts, Sarah launched FoodWaste Fighter to bridge this gap using technology, creating an efficient system to connect surplus food with those who need it most.
                    </p>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Food donation" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                      <p className="text-fwf-blue-600 font-semibold">Since 2020</p>
                      <p className="text-3xl font-bold">10,000+</p>
                      <p className="text-sm text-foreground/70">Meals saved from waste</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Background Elements */}
              <div className="absolute -top-5 -left-5 text-fwf-blue-100 opacity-50 -z-10">
                <Leaf size={100} />
              </div>
              <div className="absolute -bottom-5 -right-5 text-fwf-green-100 opacity-50 -z-10">
                <Heart size={100} />
              </div>
            </div>
          </div>
          
          {/* Our Values Section */}
          <div className="mb-20">
            <FadeIn delay={0.3}>
              <h2 className="text-3xl font-display font-bold mb-10 text-center">Our Values</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="glass-card p-6 text-center hover:shadow-lg transition-all">
                    <div className={`w-12 h-12 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Our Team Section */}
          <div className="mb-20">
            <FadeIn delay={0.4}>
              <h2 className="text-3xl font-display font-bold mb-10 text-center">Meet Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="glass-card p-6 text-center hover:shadow-lg transition-all">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-md">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-fwf-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-foreground/70 text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Join Us CTA */}
          <div className="bg-gradient-to-r from-fwf-blue-600 to-fwf-green-600 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Join Our Mission</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a restaurant looking to reduce waste or a charity seeking to feed more people, we invite you to become part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="px-8 py-3 bg-white text-fwf-blue-600 font-semibold rounded-full hover:shadow-lg transition-all">
                Join FoodWaste Fighter
              </a>
              <a href="/contact" className="px-8 py-3 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 hover:shadow-lg transition-all">
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Floating Background Elements */}
          <FloatingElement className="absolute left-1/4 top-1/3 -z-10" amplitude={15} duration={6}>
            <div className="text-fwf-green-200 opacity-30">
              <Leaf size={120} />
            </div>
          </FloatingElement>
          <FloatingElement className="absolute right-1/4 bottom-1/4 -z-10" amplitude={20} duration={7} delay={1}>
            <div className="text-fwf-blue-200 opacity-30">
              <Heart size={100} />
            </div>
          </FloatingElement>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
