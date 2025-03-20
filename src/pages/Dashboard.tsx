
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { RoleDashboard } from '@/components/RoleDashboard';
import { useLocation, Navigate } from 'react-router-dom';
import { UserProfileHeader } from '@/components/UserProfileHeader';
import ThreeDAnimation from '@/components/ThreeDAnimation';

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
      <div className="mb-8">
        <ThreeDAnimation 
          animationType={userType === 'restaurant' ? 'fruits' : 'foodPackages'} 
          height={300}
          className="w-full rounded-lg shadow-inner my-6"
        />
      </div>
      <RoleDashboard userType={userType} />
    </DashboardLayout>
  );
};

export default Dashboard;
