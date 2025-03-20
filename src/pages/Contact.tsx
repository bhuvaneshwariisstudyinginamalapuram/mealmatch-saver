
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fwf-green-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fwf-blue-600 to-fwf-green-600">
                Get in Touch
              </h1>
              <p className="text-xl text-foreground/80">
                Have questions about FoodWaste Fighter? We're here to help!
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 mb-20">
            <FadeIn delay={0.2} className="md:col-span-2">
              <div className="glass-card p-8 h-full">
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-fwf-blue-100 flex items-center justify-center text-fwf-blue-600 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-foreground/70">info@foodwastefighter.org</p>
                      <p className="text-foreground/70">support@foodwastefighter.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-fwf-green-100 flex items-center justify-center text-fwf-green-600 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-foreground/70">+1 (555) 123-4567</p>
                      <p className="text-foreground/70">Mon-Fri: 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-fwf-blue-100 flex items-center justify-center text-fwf-blue-600 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-foreground/70">123 Green Street</p>
                      <p className="text-foreground/70">New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-fwf-blue-500 text-white flex items-center justify-center hover:bg-fwf-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-fwf-blue-500 text-white flex items-center justify-center hover:bg-fwf-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-fwf-blue-500 text-white flex items-center justify-center hover:bg-fwf-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-fwf-blue-500 text-white flex items-center justify-center hover:bg-fwf-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} className="md:col-span-3">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">Your Name</label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">Email Address</label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-medium">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <Textarea id="message" placeholder="Write your message here..." className="min-h-[150px]" required />
                  </div>
                  
                  <Button type="submit" className="bg-gradient-to-r from-fwf-blue-500 to-fwf-green-500 text-white px-8 py-6 h-auto rounded-full">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
          
          <div className="bg-gradient-to-r from-fwf-blue-100 to-fwf-green-100 rounded-3xl p-10 text-center">
            <MessageSquare className="mx-auto mb-4 text-fwf-blue-600" size={48} />
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Check out our <a href="/faq" className="text-fwf-blue-600 underline">FAQ page</a> for more information or reach out to us directly!
            </p>
          </div>
          
          {/* Background Animations */}
          <div className="absolute left-0 top-1/4 -z-10">
            <FloatingElement amplitude={20} duration={6}>
              <div className="text-fwf-green-200 opacity-30">
                <MessageSquare size={100} />
              </div>
            </FloatingElement>
          </div>
          <div className="absolute right-10 bottom-1/3 -z-10">
            <FloatingElement amplitude={15} duration={5} delay={2}>
              <div className="text-fwf-blue-200 opacity-30">
                <Mail size={80} />
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
