
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Heart, Leaf, Users, Globe, Award, ShieldCheck } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';

const About = () => {
  const values = [
    {
      icon: <Heart className="text-white" size={24} />,
      title: "Compassion",
      description: "We believe in helping our communities through kindness and action.",
      color: "bg-orange-500"
    },
    {
      icon: <Leaf className="text-white" size={24} />,
      title: "Sustainability",
      description: "We're committed to creating environmentally sustainable solutions.",
      color: "bg-green-500"
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Community",
      description: "We build connections that strengthen neighborhoods and communities.",
      color: "bg-orange-500"
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: "Global Impact",
      description: "While we act locally, our vision is to create global change.",
      color: "bg-green-500"
    },
    {
      icon: <Award className="text-white" size={24} />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
      color: "bg-orange-500"
    },
    {
      icon: <ShieldCheck className="text-white" size={24} />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and accountability.",
      color: "bg-green-500"
    }
  ];

  const photoGallery = [
    {
      url: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Local farmers providing fresh produce"
    },
    {
      url: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Volunteers preparing food packages"
    },
    {
      url: "https://images.unsplash.com/photo-1626783416763-960911f49a88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Community food distribution event"
    },
    {
      url: "https://images.unsplash.com/photo-1606787366850-de6330128a02?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Food rescue mission in action"
    },
    {
      url: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Local restaurant joining our initiative"
    },
    {
      url: "https://images.unsplash.com/photo-1536746953345-c896a2a39c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Community gathering for food awareness"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">
                About FoodWaste Fighter
              </h1>
              <p className="text-xl text-foreground/80">
                We're on a mission to reduce food waste and fight hunger through technology and community collaboration in India and beyond.
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
                      src="https://images.unsplash.com/photo-1578898887932-dce23a595ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Food donation in India" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                      <p className="text-orange-600 font-semibold">Since 2020</p>
                      <p className="text-3xl font-bold">10,000+</p>
                      <p className="text-sm text-foreground/70">Meals saved from waste</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Background Elements */}
              <div className="absolute -top-5 -left-5 text-orange-100 opacity-50 -z-10">
                <Leaf size={100} />
              </div>
              <div className="absolute -bottom-5 -right-5 text-green-100 opacity-50 -z-10">
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
          
          {/* Photo Gallery */}
          <div className="mb-20">
            <FadeIn delay={0.4}>
              <h2 className="text-3xl font-display font-bold mb-10 text-center">Our Impact in Pictures</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photoGallery.map((photo, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <p className="font-medium">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          {/* Indian Culture Section */}
          <div className="mb-20">
            <FadeIn delay={0.5}>
              <div className="glass-card p-8 md:p-12 rounded-3xl bg-gradient-to-r from-orange-50 to-green-50">
                <h2 className="text-3xl font-display font-bold mb-6 text-center">Indian Heritage of Giving</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1592628654757-99c7af44fadf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Indian community meal" 
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-4">
                      Our mission is deeply inspired by the Indian tradition of "Anna Daan" (donation of food), which is considered one of the noblest forms of charity in Indian culture.
                    </p>
                    <p className="text-lg mb-4">
                      For centuries, temples, gurudwaras, and community kitchens across India have provided meals to millions regardless of caste, creed, or religion - exemplifying the spirit of service and compassion.
                    </p>
                    <p className="text-lg">
                      We've built our platform to honor this tradition while adding modern technology to make food donation more efficient, trackable, and widespread than ever before.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Join Us CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-green-600 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Join Our Mission</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a restaurant looking to reduce waste or a charity seeking to feed more people, we invite you to become part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:shadow-lg transition-all">
                Join FoodWaste Fighter
              </a>
              <a href="/contact" className="px-8 py-3 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 hover:shadow-lg transition-all">
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Floating Background Elements */}
          <FloatingElement className="absolute left-1/4 top-1/3 -z-10" amplitude={15} duration={6}>
            <div className="text-green-200 opacity-30">
              <Leaf size={120} />
            </div>
          </FloatingElement>
          <FloatingElement className="absolute right-1/4 bottom-1/4 -z-10" amplitude={20} duration={7} delay={1}>
            <div className="text-orange-200 opacity-30">
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
