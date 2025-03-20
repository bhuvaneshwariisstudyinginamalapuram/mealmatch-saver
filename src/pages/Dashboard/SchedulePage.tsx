
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { useLocation } from 'react-router-dom';
import { BlurIn, FadeIn } from '@/components/ui/animations';
import { Calendar as CalendarIcon, Clock, MapPin, Building, ShoppingBag, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const SchedulePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = (params.get('role') as 'restaurant' | 'charity') || 'restaurant';
  
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock schedule data - in a real app, this would come from an API
  const pickups = [
    {
      id: 1,
      date: new Date(),
      time: '2:00 PM',
      status: 'scheduled',
      restaurant: 'Fresh Eats Restaurant',
      charity: 'Hope Community Kitchen',
      address: '123 Main St, Cityville',
      items: ['5kg Bread & Pastries', '3kg Vegetables']
    },
    {
      id: 2,
      date: new Date(),
      time: '5:30 PM',
      status: 'completed',
      restaurant: 'Garden Bistro',
      charity: 'City Food Bank',
      address: '456 Oak Ave, Townsville',
      items: ['10 portions Cooked Meals', '2kg Fruits']
    },
    {
      id: 3,
      date: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      time: '1:00 PM',
      status: 'scheduled',
      restaurant: 'Urban Kitchen',
      charity: 'Hope Community Kitchen',
      address: '789 Pine Blvd, Villagetown',
      items: ['8kg Fresh Produce', '2kg Dairy Products']
    },
  ];
  
  // Filter pickups by selected date
  const filteredPickups = pickups.filter(pickup => 
    pickup.date.toDateString() === (date?.toDateString() || '')
  );
  
  return (
    <DashboardLayout userType={userType}>
      <div className="p-6 md:p-8">
        <BlurIn>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Pickup Schedule
          </h1>
          <p className="text-foreground/70 mb-6">
            {userType === 'restaurant' 
              ? 'Manage your scheduled food donation pickups.' 
              : 'View your scheduled food pickups from restaurants.'}
          </p>
        </BlurIn>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <FadeIn className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5 text-fwf-blue-500" />
                Select Date
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="rounded-md border"
              />
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <div className="h-3 w-3 rounded-full bg-fwf-blue-500 mr-2"></div>
                  <span>Scheduled Pickups</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="h-3 w-3 rounded-full bg-fwf-green-500 mr-2"></div>
                  <span>Completed Pickups</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Pickups for {date ? format(date, 'PPP') : 'Selected Date'}
              </h2>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-8 border-dashed">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {filteredPickups.length > 0 ? (
              <div className="space-y-4">
                {filteredPickups.map((pickup) => (
                  <FadeIn key={pickup.id}>
                    <div className={cn(
                      "glass-card p-6 border-l-4",
                      pickup.status === 'completed' 
                        ? "border-fwf-green-500" 
                        : "border-fwf-blue-500"
                    )}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 flex items-center">
                            <Clock className="mr-2 h-4 w-4 text-fwf-blue-500" />
                            {pickup.time}
                            <span className={cn(
                              "ml-3 text-xs px-2 py-0.5 rounded-full",
                              pickup.status === 'completed' 
                                ? "bg-green-100 text-green-700" 
                                : "bg-blue-100 text-blue-700"
                            )}>
                              {pickup.status === 'completed' ? 'Completed' : 'Scheduled'}
                            </span>
                          </h3>
                          <p className="text-foreground/70 text-sm flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-fwf-blue-500" />
                            {pickup.address}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          {pickup.status === 'scheduled' ? (
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="h-8">
                                Reschedule
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-destructive border-destructive hover:bg-destructive/10">
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Button size="sm" variant="outline" className="h-8 text-green-600 border-green-600 hover:bg-green-50">
                              <Check className="mr-1 h-4 w-4" /> Completed
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-foreground/70 mb-1">
                            {userType === 'restaurant' ? 'Charity' : 'Restaurant'}:
                          </p>
                          <p className="text-sm font-medium flex items-center">
                            <Building className="mr-2 h-4 w-4 text-fwf-blue-500" />
                            {userType === 'restaurant' ? pickup.charity : pickup.restaurant}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70 mb-1">Items:</p>
                          <ul className="space-y-1">
                            {pickup.items.map((item, i) => (
                              <li key={i} className="text-sm flex items-center">
                                <ShoppingBag className="mr-2 h-4 w-4 text-fwf-green-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 text-center">
                <CalendarIcon className="h-12 w-12 text-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No pickups scheduled</h3>
                <p className="text-foreground/70 mb-6">
                  {userType === 'restaurant'
                    ? 'No pickup scheduled for this date. List more food items to get scheduled pickups.'
                    : 'No pickup scheduled for this date. Browse available food to schedule pickups.'}
                </p>
                <Button className="bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white">
                  {userType === 'restaurant'
                    ? 'Add New Donation'
                    : 'Browse Available Food'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchedulePage;
