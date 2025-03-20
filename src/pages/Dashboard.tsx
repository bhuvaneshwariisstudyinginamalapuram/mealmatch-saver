
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { RoleDashboard } from '@/components/RoleDashboard';
import { useLocation, Navigate } from 'react-router-dom';
import { UserProfileHeader } from '@/components/UserProfileHeader';
import ThreeDAnimation from '@/components/ThreeDAnimation';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, BlurIn } from '@/components/ui/animations';

const Dashboard = () => {
  // In a real app, this would come from an authentication context
  // For demo purposes, we're using query params or defaulting to 'restaurant'
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = (params.get('role') as 'restaurant' | 'charity') || 'restaurant';
  
  // Mock user data - in a real app, this would come from your auth system
  const [userData] = useState({
    name: userType === 'restaurant' ? 'Fresh Eats Restaurant' : 'Hope Community Kitchen',
    role: userType,
  });

  // Redirect to specific dashboards based on URL patterns
  if (location.pathname === '/dashboard/donations') {
    return <Navigate to="/dashboard/donations" />;
  }
  
  if (location.pathname === '/dashboard/restaurants') {
    return <Navigate to="/dashboard/restaurants" />;
  }

  return (
    <DashboardLayout userType={userType}>
      <div className="border-b">
        <UserProfileHeader 
          userName={userData.name} 
          userRole={userData.role}
        />
      </div>

      <div className="relative">
        <div className="mb-8 relative w-full overflow-hidden rounded-lg glass-card">
          <div className="absolute inset-0 bg-gradient-to-r from-fwf-blue-500/20 to-fwf-green-500/20 mix-blend-multiply"></div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-8 flex flex-col justify-center">
              <BlurIn>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Welcome back, {userData.name}!
                </h2>
                <p className="text-foreground/70 mb-6">
                  {userType === 'restaurant' 
                    ? "Your food donations are making a real difference in your community." 
                    : "Thanks to partners like you, more people are receiving nutritious meals."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    className="gap-2 bg-fwf-blue-500 hover:bg-fwf-blue-600" 
                    asChild
                  >
                    <Link to="/dashboard/analytics">
                      View Analytics
                      <BarChart3 size={16} />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2" 
                    asChild
                  >
                    <Link to={userType === 'restaurant' ? '/dashboard/donations' : '/dashboard/restaurants'}>
                      {userType === 'restaurant' ? 'Manage Donations' : 'Find Restaurants'}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </BlurIn>
            </div>
            <div className="flex items-center justify-center py-6">
              <FadeIn>
                <ThreeDAnimation 
                  animationType={userType === 'restaurant' ? 'fruits' : 'foodPackages'} 
                  height={300}
                  className="w-full rounded-lg my-6"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <RoleDashboard userType={userType} />
    </DashboardLayout>
  );
};

export default Dashboard;
