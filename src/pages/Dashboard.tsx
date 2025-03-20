
import React from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { RoleDashboard } from '@/components/RoleDashboard';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  // In a real app, this would come from an authentication context
  // For demo purposes, we're using query params or defaulting to 'restaurant'
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = (params.get('role') as 'restaurant' | 'charity') || 'restaurant';

  return (
    <DashboardLayout userType={userType}>
      <RoleDashboard userType={userType} />
    </DashboardLayout>
  );
};

export default Dashboard;
