
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, GripVertical } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-accent py-16">
      <div className="container-tight">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-fwf-blue-500 to-fwf-green-500 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                <GripVertical className="text-white" size={20} />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">
                FoodWaste <span className="text-fwf-blue-600">Fighter</span>
              </span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Connecting surplus food with those who need it most, reducing waste and making a difference in communities.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Facebook size={16} className="text-foreground/70" />
              </a>
              <a href="https://twitter.com" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Twitter size={16} className="text-foreground/70" />
              </a>
              <a href="https://instagram.com" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Instagram size={16} className="text-foreground/70" />
              </a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <Linkedin size={16} className="text-foreground/70" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-foreground transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Users</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/signup" className="text-foreground/70 hover:text-foreground transition-colors">Join as Restaurant</Link>
              </li>
              <li>
                <Link to="/signup" className="text-foreground/70 hover:text-foreground transition-colors">Join as Charity</Link>
              </li>
              <li>
                <Link to="/login" className="text-foreground/70 hover:text-foreground transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-foreground transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/support" className="text-foreground/70 hover:text-foreground transition-colors">Support</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-fwf-blue-500 flex-shrink-0 mt-1" />
                <span className="text-foreground/70">123 Green Street, Sustainable City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-fwf-blue-500 flex-shrink-0" />
                <span className="text-foreground/70">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-fwf-blue-500 flex-shrink-0" />
                <span className="text-foreground/70">contact@foodwastefighter.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} FoodWaste Fighter. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 justify-center md:justify-end text-sm text-foreground/60">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
