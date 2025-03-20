
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { RoleDashboard } from '@/components/RoleDashboard';
import { useLocation } from 'react-router-dom';
import { UserProfileHeader } from '@/components/UserProfileHeader';

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

  return (
    <DashboardLayout userType={userType}>
      <div className="border-b">
        <UserProfileHeader 
          userName={userData.name} 
          userRole={userData.role}
        />
      </div>
      <RoleDashboard userType={userType} />
    </DashboardLayout>
  );
};

export default Dashboard;
