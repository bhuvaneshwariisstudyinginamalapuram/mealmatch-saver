
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Clock, Check } from 'lucide-react';
import { BlurIn, FadeIn } from '@/components/ui/animations';
import { useNavigate } from 'react-router-dom';

const RestaurantDonations = () => {
  const navigate = useNavigate();
  const [donations] = useState([
    {
      id: 1,
      name: 'Fresh Bread & Pastries',
      quantity: '5kg',
      expiry: '24 hours',
      status: 'available',
      createdAt: '2 hours ago',
    },
    {
      id: 2,
      name: 'Cooked Meals',
      quantity: '10 portions',
      expiry: '8 hours',
      status: 'claimed',
      claimedBy: 'Hope Community Kitchen',
      createdAt: 'Yesterday',
    },
    {
      id: 3,
      name: 'Fresh Produce',
      quantity: '8kg',
      expiry: '3 days',
      status: 'completed',
      claimedBy: 'City Food Bank',
      createdAt: '3 days ago',
    },
  ]);

  return (
    <DashboardLayout userType="restaurant">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <BlurIn>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">
              Food Donations
            </h1>
          </BlurIn>
          <Button 
            onClick={() => navigate('/dashboard/donations/new')}
            className="bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Donation
          </Button>
        </div>
        
        <FadeIn>
          <div className="grid gap-6">
            {donations.map((donation) => (
              <div key={donation.id} className="glass-card p-6 flex flex-col md:flex-row gap-4 md:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{donation.name}</h3>
                    {donation.status === 'available' && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Available</span>
                    )}
                    {donation.status === 'claimed' && (
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Claimed</span>
                    )}
                    {donation.status === 'completed' && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Completed</span>
                    )}
                  </div>
                  <p className="text-foreground/70 text-sm mt-1">Quantity: {donation.quantity}</p>
                  <p className="text-foreground/70 text-sm">Expiry: {donation.expiry}</p>
                  {donation.claimedBy && (
                    <p className="text-foreground/70 text-sm">Claimed by: {donation.claimedBy}</p>
                  )}
                  <p className="text-foreground/50 text-xs mt-2">Added {donation.createdAt}</p>
                </div>
                
                <div className="flex gap-2 md:self-center">
                  {donation.status === 'available' && (
                    <>
                      <Button size="sm" variant="outline" className="h-9">
                        <Edit className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button size="sm" variant="outline" className="h-9 text-destructive border-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </>
                  )}
                  {donation.status === 'claimed' && (
                    <Button size="sm" variant="outline" className="h-9">
                      <Clock className="h-4 w-4 mr-1" /> View Pickup
                    </Button>
                  )}
                  {donation.status === 'completed' && (
                    <Button size="sm" variant="outline" className="h-9 text-green-600 border-green-600 hover:bg-green-50">
                      <Check className="h-4 w-4 mr-1" /> Completed
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
        
        {donations.length === 0 && (
          <div className="text-center py-12 glass-card">
            <h3 className="text-xl font-semibold mb-2">No donations yet</h3>
            <p className="text-foreground/70 mb-6">
              Start by adding your available food items for donation.
            </p>
            <Button 
              onClick={() => navigate('/dashboard/donations/new')}
              className="bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white"
            >
              <Plus className="mr-2 h-4 w-4" /> Add New Donation
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RestaurantDonations;
