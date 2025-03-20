
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { BlurIn, FadeIn } from '@/components/ui/animations';
import { Building, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CharityRestaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const restaurants = [
    {
      id: 1,
      name: 'Fresh Eats Restaurant',
      address: '123 Main St, Cityville',
      distance: '1.2 miles away',
      availableDonations: 3,
      lastDonation: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      name: 'Garden Bistro',
      address: '456 Oak Ave, Townsville',
      distance: '0.8 miles away',
      availableDonations: 1,
      lastDonation: 'Yesterday',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      name: 'Urban Kitchen',
      address: '789 Pine Blvd, Villagetown',
      distance: '2.5 miles away',
      availableDonations: 2,
      lastDonation: '3 days ago',
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
  ];
  
  const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <DashboardLayout userType="charity">
      <div className="p-6 md:p-8">
        <BlurIn>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Partner Restaurants
          </h1>
          <p className="text-foreground/70 mb-6">
            Browse restaurants with available food donations in your area.
          </p>
        </BlurIn>
        
        <div className="mb-8">
          <FadeIn>
            <div className="flex gap-4">
              <Input
                placeholder="Search restaurants by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-3xl"
              />
            </div>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <FadeIn key={restaurant.id}>
              <div className="glass-card overflow-hidden flex flex-col h-full">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                  <div className="text-foreground/70 text-sm space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-fwf-blue-500" />
                      <span>{restaurant.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building size={16} className="text-fwf-blue-500" />
                      <span>{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-fwf-green-500" />
                      <span>Last donation: {restaurant.lastDonation}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <div className="bg-fwf-blue-50 text-fwf-blue-600 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      {restaurant.availableDonations} donations available
                    </div>
                    <Button className="w-full justify-between" asChild>
                      <a href={`/dashboard/restaurants/${restaurant.id}`}>
                        <span>View Available Food</span>
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12 glass-card">
            <Building size={48} className="text-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
            <p className="text-foreground/70">
              Try adjusting your search criteria or check back later.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CharityRestaurants;
