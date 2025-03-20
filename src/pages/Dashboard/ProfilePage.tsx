
import React, { useState } from 'react';
import { DashboardLayout } from '@/layout/DashboardLayout';
import { UserProfileHeader } from '@/components/UserProfileHeader';
import { useLocation } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BlurIn, FadeIn } from '@/components/ui/animations';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  ShieldCheck, 
  Award,
  Edit,
  Save,
  UtensilsCrossed,
  CalendarClock,
  History,
  Leaf,
  BadgeCheck
} from 'lucide-react';

const ProfilePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userType = (params.get('role') as 'restaurant' | 'charity') || 'restaurant';
  
  // Mock user data - in a real app, this would come from your auth system
  const [userData] = useState({
    name: userType === 'restaurant' ? 'Fresh Eats Restaurant' : 'Hope Community Kitchen',
    role: userType,
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, Anytown, CA 94123',
    website: 'www.example.com',
    bio: userType === 'restaurant' 
      ? 'A family-owned restaurant dedicated to fresh, locally-sourced ingredients and reducing food waste through our partnership with local charities.'
      : 'A non-profit organization committed to feeding those in need while working with local businesses to reduce food waste.',
    foundedYear: '2015',
    avatar: userType === 'restaurant' 
      ? 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80'
      : 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    coverImage: userType === 'restaurant'
      ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      : 'https://images.unsplash.com/photo-1546552768-9e3a5c5e9613?ixlib=rb-4.0.3&auto=format&fit=crop&w=1492&q=80',
    stats: userType === 'restaurant' 
      ? {
          donationsCount: 156,
          weightSaved: 1240,
          charitiesHelped: 8
        }
      : {
          mealsServed: 12450,
          restaurantPartners: 24,
          volunteersActive: 63
        }
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save this data to your backend
    // setUserData(formData);
    setEditing(false);
  };

  return (
    <DashboardLayout userType={userType}>
      <div className="border-b">
        <UserProfileHeader 
          userName={userData.name} 
          userRole={userData.role}
          userImage={userData.avatar}
        />
      </div>

      <div className="p-4 md:p-8">
        <FadeIn>
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {userType === 'restaurant' ? 'Restaurant Profile' : 'Charity Profile'}
            </h1>
            <p className="text-foreground/70">
              Manage your profile information and settings
            </p>
          </div>
        </FadeIn>

        {/* Cover Image */}
        <div className="relative h-60 w-full mb-20 overflow-hidden rounded-xl">
          <BlurIn>
            <img 
              src={userData.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-16 left-8">
              <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </BlurIn>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Profile Information */}
            <Card className="md:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{editing ? 'Edit Profile' : 'Profile Information'}</CardTitle>
                  <CardDescription>
                    Your public {userType} profile information
                  </CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setEditing(!editing)}
                  type="button"
                >
                  {editing ? <Save size={18} /> : <Edit size={18} />}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    {editing ? (
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="mt-1"
                      />
                    ) : (
                      <div className="text-lg font-medium mt-1">{userData.name}</div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    {editing ? (
                      <Textarea 
                        id="bio" 
                        name="bio" 
                        value={formData.bio} 
                        onChange={handleChange}
                        rows={4}
                        className="mt-1"
                      />
                    ) : (
                      <p className="text-foreground/70 mt-1">{userData.bio}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    {editing ? (
                      <div className="flex items-center mt-1">
                        <Mail size={16} className="mr-2 text-muted-foreground" />
                        <Input 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center mt-1">
                        <Mail size={16} className="mr-2 text-muted-foreground" />
                        <span>{userData.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    {editing ? (
                      <div className="flex items-center mt-1">
                        <Phone size={16} className="mr-2 text-muted-foreground" />
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center mt-1">
                        <Phone size={16} className="mr-2 text-muted-foreground" />
                        <span>{userData.phone}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    {editing ? (
                      <div className="flex items-center mt-1">
                        <MapPin size={16} className="mr-2 text-muted-foreground" />
                        <Input 
                          id="address" 
                          name="address" 
                          value={formData.address} 
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center mt-1">
                        <MapPin size={16} className="mr-2 text-muted-foreground" />
                        <span>{userData.address}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="website">Website</Label>
                    {editing ? (
                      <div className="flex items-center mt-1">
                        <Globe size={16} className="mr-2 text-muted-foreground" />
                        <Input 
                          id="website" 
                          name="website" 
                          value={formData.website} 
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center mt-1">
                        <Globe size={16} className="mr-2 text-muted-foreground" />
                        <a href={`https://${userData.website}`} className="text-fwf-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                          {userData.website}
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="foundedYear">Founded</Label>
                    {editing ? (
                      <div className="flex items-center mt-1">
                        <Clock size={16} className="mr-2 text-muted-foreground" />
                        <Input 
                          id="foundedYear" 
                          name="foundedYear" 
                          value={formData.foundedYear} 
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center mt-1">
                        <Clock size={16} className="mr-2 text-muted-foreground" />
                        <span>Est. {userData.foundedYear}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              {editing && (
                <CardFooter>
                  <Button type="submit" className="ml-auto">Save Changes</Button>
                </CardFooter>
              )}
            </Card>

            {/* Stats and Verification */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {userType === 'restaurant' ? 'Donation Impact' : 'Community Impact'}
                  </CardTitle>
                  <CardDescription>
                    Your contributions to the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userType === 'restaurant' ? (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 p-2 bg-fwf-blue-100 rounded-full">
                              <UtensilsCrossed size={20} className="text-fwf-blue-600" />
                            </div>
                            <span>Total Donations</span>
                          </div>
                          <span className="font-bold">{userData.stats.donationsCount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 p-2 bg-fwf-green-100 rounded-full">
                              <Leaf size={20} className="text-fwf-green-600" />
                            </div>
                            <span>Kg Food Saved</span>
                          </div>
                          <span className="font-bold">{userData.stats.weightSaved} kg</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 p-2 bg-fwf-blue-100 rounded-full">
                              <Building size={20} className="text-fwf-blue-600" />
                            </div>
                            <span>Charities Helped</span>
                          </div>
                          <span className="font-bold">{userData.stats.charitiesHelped}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 p-2 bg-fwf-blue-100 rounded-full">
                              <UtensilsCrossed size={20} className="text-fwf-blue-600" />
                            </div>
                            <span>Meals Served</span>
                          </div>
                          <span className="font-bold">{userData.stats.mealsServed}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 p-2 bg-fwf-green-100 rounded-full">
                              <Building size={20} className="text-fwf-green-600" />
                            </div>
                            <span>Restaurant Partners</span>
                          </div>
                          <span className="font-bold">{userData.stats.restaurantPartners}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-3 p-2 bg-fwf-blue-100 rounded-full">
                              <ShieldCheck size={20} className="text-fwf-blue-600" />
                            </div>
                            <span>Active Volunteers</span>
                          </div>
                          <span className="font-bold">{userData.stats.volunteersActive}</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Verification</CardTitle>
                  <CardDescription>
                    Status and certifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-green-100 rounded-full">
                          <BadgeCheck size={20} className="text-green-600" />
                        </div>
                        <span>Verified Account</span>
                      </div>
                      <div className="bg-green-100 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded">Active</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-fwf-blue-100 rounded-full">
                          <Award size={20} className="text-fwf-blue-600" />
                        </div>
                        <span>{userType === 'restaurant' ? 'Food Safety Certified' : 'Non-Profit Status'}</span>
                      </div>
                      <div className="bg-green-100 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded">Verified</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 p-2 bg-fwf-green-100 rounded-full">
                          <History size={20} className="text-fwf-green-600" />
                        </div>
                        <span>Member Since</span>
                      </div>
                      <span className="font-medium">2022</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>

        {/* Activity Timeline */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userType === 'restaurant' ? (
                <>
                  <TimelineItem 
                    icon={<UtensilsCrossed size={16} />}
                    title="New Donation Listed"
                    description="You listed 5kg of bread and pastries for donation"
                    time="2 hours ago"
                    iconColor="bg-fwf-blue-100 text-fwf-blue-600"
                  />
                  <TimelineItem 
                    icon={<CalendarClock size={16} />}
                    title="Pickup Scheduled"
                    description="Hope Kitchen will pick up your donation tomorrow at 2PM"
                    time="Yesterday"
                    iconColor="bg-fwf-green-100 text-fwf-green-600"
                  />
                  <TimelineItem 
                    icon={<BadgeCheck size={16} />}
                    title="Donation Completed"
                    description="Your donation to Local Charity was successfully delivered"
                    time="3 days ago"
                    iconColor="bg-fwf-blue-100 text-fwf-blue-600"
                  />
                </>
              ) : (
                <>
                  <TimelineItem 
                    icon={<UtensilsCrossed size={16} />}
                    title="New Food Pickup"
                    description="You scheduled a pickup from Fresh Bakery for tomorrow"
                    time="1 hour ago"
                    iconColor="bg-fwf-blue-100 text-fwf-blue-600"
                  />
                  <TimelineItem 
                    icon={<CalendarClock size={16} />}
                    title="Meals Distributed"
                    description="You distributed 120 meals to the community center"
                    time="Yesterday"
                    iconColor="bg-fwf-green-100 text-fwf-green-600"
                  />
                  <TimelineItem 
                    icon={<Building size={16} />}
                    title="New Partner"
                    description="You established a new partnership with City Restaurant"
                    time="4 days ago"
                    iconColor="bg-fwf-blue-100 text-fwf-blue-600"
                  />
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  iconColor: string;
}

const TimelineItem = ({ icon, title, description, time, iconColor }: TimelineItemProps) => {
  return (
    <div className="flex gap-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColor} mt-0.5`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
