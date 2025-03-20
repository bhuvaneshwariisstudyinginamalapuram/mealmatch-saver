
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { useLocation } from 'react-router-dom';
import { BlurIn, FadeIn } from '@/components/ui/animations';
import { User, Building, Mail, Phone, MapPin, Lock, Bell, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const SettingsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = (params.get('role') as 'restaurant' | 'charity') || 'restaurant';
  const { toast } = useToast();
  
  // Mock user data - in a real app, this would come from your auth system
  const [userData, setUserData] = useState({
    name: userType === 'restaurant' ? 'Fresh Eats Restaurant' : 'Hope Community Kitchen',
    contactName: 'John Doe',
    email: 'contact@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Cityville',
    bio: userType === 'restaurant' 
      ? 'A modern restaurant focused on fresh, sustainable ingredients and minimizing food waste.'
      : 'A community-focused charity that provides meals to those in need while fighting food insecurity.',
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    pickupHours: {
      start: '09:00',
      end: '17:00',
    }
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1500);
  };
  
  const handleToggleNotification = (type: 'email' | 'push' | 'sms') => {
    setUserData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type]
      }
    }));
  };
  
  return (
    <DashboardLayout userType={userType}>
      <div className="p-6 md:p-8">
        <BlurIn>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Account Settings
          </h1>
          <p className="text-foreground/70 mb-6">
            Manage your profile, notifications, and account preferences.
          </p>
        </BlurIn>
        
        <FadeIn>
          <Tabs defaultValue="profile" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              {userType === 'restaurant' && <TabsTrigger value="pickup">Pickup Hours</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="profile">
              <div className="glass-card p-6">
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <Building size={16} className="text-fwf-blue-500" />
                          {userType === 'restaurant' ? 'Restaurant Name' : 'Organization Name'}
                        </Label>
                        <Input 
                          id="name" 
                          value={userData.name}
                          onChange={(e) => setUserData({...userData, name: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="contactName" className="flex items-center gap-2">
                          <User size={16} className="text-fwf-blue-500" />
                          Contact Person
                        </Label>
                        <Input 
                          id="contactName" 
                          value={userData.contactName}
                          onChange={(e) => setUserData({...userData, contactName: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail size={16} className="text-fwf-blue-500" />
                          Email Address
                        </Label>
                        <Input 
                          id="email" 
                          type="email"
                          value={userData.email}
                          onChange={(e) => setUserData({...userData, email: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone size={16} className="text-fwf-blue-500" />
                          Phone Number
                        </Label>
                        <Input 
                          id="phone" 
                          value={userData.phone}
                          onChange={(e) => setUserData({...userData, phone: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <Label htmlFor="address" className="flex items-center gap-2">
                          <MapPin size={16} className="text-fwf-blue-500" />
                          Address
                        </Label>
                        <Input 
                          id="address" 
                          value={userData.address}
                          onChange={(e) => setUserData({...userData, address: e.target.value})}
                          className="mt-2"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="bio" className="flex items-center gap-2">
                          <Building size={16} className="text-fwf-blue-500" />
                          {userType === 'restaurant' ? 'Restaurant Bio' : 'Organization Bio'}
                        </Label>
                        <Textarea 
                          id="bio" 
                          value={userData.bio}
                          onChange={(e) => setUserData({...userData, bio: e.target.value})}
                          className="mt-2 h-32"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white min-w-32"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : 'Save Changes'}
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-fwf-blue-500" />
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                      </div>
                      <p className="text-sm text-foreground/70">Receive notifications about new donations, pickups, etc.</p>
                    </div>
                    <Switch 
                      id="email-notifications" 
                      checked={userData.notifications.email}
                      onCheckedChange={() => handleToggleNotification('email')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Bell size={16} className="text-fwf-blue-500" />
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                      </div>
                      <p className="text-sm text-foreground/70">Receive push notifications in your browser.</p>
                    </div>
                    <Switch 
                      id="push-notifications" 
                      checked={userData.notifications.push}
                      onCheckedChange={() => handleToggleNotification('push')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-fwf-blue-500" />
                        <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      </div>
                      <p className="text-sm text-foreground/70">Receive text messages for important updates.</p>
                    </div>
                    <Switch 
                      id="sms-notifications" 
                      checked={userData.notifications.sms}
                      onCheckedChange={() => handleToggleNotification('sms')}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="password">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                <form className="space-y-4 max-w-lg">
                  <div>
                    <Label htmlFor="current-password" className="flex items-center gap-2">
                      <Lock size={16} className="text-fwf-blue-500" />
                      Current Password
                    </Label>
                    <Input id="current-password" type="password" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="new-password" className="flex items-center gap-2">
                      <Lock size={16} className="text-fwf-blue-500" />
                      New Password
                    </Label>
                    <Input id="new-password" type="password" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirm-password" className="flex items-center gap-2">
                      <Lock size={16} className="text-fwf-blue-500" />
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" className="mt-2" />
                  </div>
                  
                  <div className="pt-2">
                    <Button className="bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white min-w-32">
                      Update Password
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
            
            {userType === 'restaurant' && (
              <TabsContent value="pickup">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Pickup Hours</h3>
                  <form className="space-y-4 max-w-lg">
                    <div className="space-y-2">
                      <p className="text-foreground/70">Set the hours when charities can pick up donations from your restaurant.</p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="pickup-start" className="flex items-center gap-2">
                            <Clock size={16} className="text-fwf-blue-500" />
                            Start Time
                          </Label>
                          <Input 
                            id="pickup-start" 
                            type="time"
                            value={userData.pickupHours.start}
                            onChange={(e) => setUserData({
                              ...userData, 
                              pickupHours: {...userData.pickupHours, start: e.target.value}
                            })}
                            className="mt-2"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="pickup-end" className="flex items-center gap-2">
                            <Clock size={16} className="text-fwf-blue-500" />
                            End Time
                          </Label>
                          <Input 
                            id="pickup-end" 
                            type="time"
                            value={userData.pickupHours.end}
                            onChange={(e) => setUserData({
                              ...userData, 
                              pickupHours: {...userData.pickupHours, end: e.target.value}
                            })}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white min-w-32">
                        Save Pickup Hours
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </FadeIn>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
