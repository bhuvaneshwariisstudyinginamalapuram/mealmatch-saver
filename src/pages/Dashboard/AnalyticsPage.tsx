
import React from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { useLocation } from 'react-router-dom';
import { BlurIn, FadeIn } from '@/components/ui/animations';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart as Chart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Line, Pie, Cell, LineChart as LineChartComponent, PieChart as PieChartComponent } from 'recharts';

const AnalyticsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = (params.get('role') as 'restaurant' | 'charity') || 'restaurant';
  
  // Mock data for charts
  const monthlyData = [
    { name: 'Jan', donations: 20, meals: 60, waste: 40 },
    { name: 'Feb', donations: 25, meals: 75, waste: 50 },
    { name: 'Mar', donations: 30, meals: 90, waste: 60 },
    { name: 'Apr', donations: 35, meals: 105, waste: 70 },
    { name: 'May', donations: 40, meals: 120, waste: 80 },
    { name: 'Jun', donations: 45, meals: 135, waste: 90 },
  ];
  
  const categoryData = [
    { name: 'Bakery', value: 30, color: '#3498db' },
    { name: 'Produce', value: 25, color: '#2ecc71' },
    { name: 'Dairy', value: 15, color: '#f1c40f' },
    { name: 'Meals', value: 20, color: '#e74c3c' },
    { name: 'Other', value: 10, color: '#9b59b6' },
  ];
  
  const impactData = [
    { name: 'Carbon', savedCO2: 100, month: 'Jan' },
    { name: 'Carbon', savedCO2: 120, month: 'Feb' },
    { name: 'Carbon', savedCO2: 150, month: 'Mar' },
    { name: 'Carbon', savedCO2: 180, month: 'Apr' },
    { name: 'Carbon', savedCO2: 200, month: 'May' },
    { name: 'Carbon', savedCO2: 220, month: 'Jun' },
  ];
  
  return (
    <DashboardLayout userType={userType}>
      <div className="p-6 md:p-8">
        <BlurIn>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Your Impact Dashboard
          </h1>
          <p className="text-foreground/70 mb-6">
            Track your contribution to reducing food waste and helping the community.
          </p>
        </BlurIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <FadeIn delay={0.1}>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-fwf-blue-600 mx-auto mb-4">
                <BarChart size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{userType === 'restaurant' ? '125' : '320'}</div>
              <p className="text-foreground/70">{userType === 'restaurant' ? 'Total Donations' : 'Meals Received'}</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-fwf-green-600 mx-auto mb-4">
                <LineChart size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">250kg</div>
              <p className="text-foreground/70">Food Waste Prevented</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-fwf-blue-600 mx-auto mb-4">
                <PieChart size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500kg</div>
              <p className="text-foreground/70">CO₂ Emissions Saved</p>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn>
          <div className="glass-card p-6 mb-8">
            <Tabs defaultValue="monthly">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Activity Overview</h2>
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="monthly" className="pt-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChartComponent data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="donations" stroke="#3498db" name={userType === 'restaurant' ? 'Donations' : 'Meals Received'} />
                    <Line type="monotone" dataKey="waste" stroke="#2ecc71" name="Waste Prevented (kg)" />
                  </LineChartComponent>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="yearly" className="pt-4">
                <div className="text-center py-8 text-foreground/70">
                  Yearly data will be available after a full year of activity.
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">Donation Categories</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChartComponent>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChartComponent>
              </ResponsiveContainer>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">Environmental Impact</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="savedCO2" name="CO₂ Saved (kg)" fill="#2ecc71" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
