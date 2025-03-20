
import React from 'react';
import { 
  CircleCheck, 
  Calendar, 
  ShoppingBag, 
  UtensilsCrossed, 
  Building, 
  ArrowRight, 
  Leaf,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BlurIn, FadeIn } from './ui/animations';

interface RoleDashboardProps {
  userType: 'restaurant' | 'charity';
}

export function RoleDashboard({ userType }: RoleDashboardProps) {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <BlurIn delay={0.1}>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome to your {userType === 'restaurant' ? 'Restaurant' : 'Charity'} Dashboard
          </h1>
          <p className="text-foreground/70">
            {userType === 'restaurant' 
              ? 'Manage your food donations and make a difference in your community.' 
              : 'Discover available donations and schedule pickups for your organization.'}
          </p>
        </BlurIn>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <BlurIn delay={0.2} className="glass-card p-6 flex flex-col">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-fwf-blue-100 text-fwf-blue-600 mb-4">
            {userType === 'restaurant' ? <ShoppingBag size={24} /> : <Building size={24} />}
          </div>
          <h3 className="text-lg font-semibold mb-2">
            {userType === 'restaurant' ? 'Available Donations' : 'Available Foods'}
          </h3>
          <p className="text-foreground/70 mb-6 flex-1">
            {userType === 'restaurant' 
              ? 'View and manage your currently active food donations.' 
              : 'Browse available food donations from local restaurants.'}
          </p>
          <Button 
            variant="outline" 
            className="mt-auto gap-2 justify-between" 
            asChild
          >
            <Link to={userType === 'restaurant' ? '/dashboard/donations' : '/dashboard/restaurants'}>
              <span>
                {userType === 'restaurant' ? 'Manage Donations' : 'Browse Available'}
              </span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </BlurIn>
        
        <BlurIn delay={0.3} className="glass-card p-6 flex flex-col">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-fwf-green-100 text-fwf-green-600 mb-4">
            <Calendar size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Scheduled Pickups</h3>
          <p className="text-foreground/70 mb-6 flex-1">
            {userType === 'restaurant' 
              ? 'View and manage upcoming scheduled food pickups.' 
              : 'Check your scheduled food pickups and delivery details.'}
          </p>
          <Button 
            variant="outline" 
            className="mt-auto gap-2 justify-between" 
            asChild
          >
            <Link to="/dashboard/schedule">
              <span>View Schedule</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </BlurIn>
        
        <BlurIn delay={0.4} className="glass-card p-6 flex flex-col">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-fwf-blue-100 text-fwf-blue-600 mb-4">
            <Leaf size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Your Impact</h3>
          <p className="text-foreground/70 mb-6 flex-1">
            Check your contribution to reducing food waste and helping the community.
          </p>
          <Button 
            variant="outline" 
            className="mt-auto gap-2 justify-between" 
            asChild
          >
            <Link to="/dashboard/analytics">
              <span>View Analytics</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </BlurIn>
      </div>
      
      <div className="mb-8">
        <FadeIn delay={0.3}>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="glass-card overflow-hidden">
            <div className="divide-y">
              {userType === 'restaurant' ? (
                <>
                  <ActivityItem 
                    icon={<CircleCheck className="text-fwf-green-500" />} 
                    title="Donation Confirmed" 
                    description="Charity Food Bank has confirmed pickup for your donation."
                    time="2 hours ago"
                  />
                  <ActivityItem 
                    icon={<ShoppingBag className="text-fwf-blue-500" />} 
                    title="New Donation Created" 
                    description="You've listed 5kg of bread and pastries for donation."
                    time="Yesterday"
                  />
                  <ActivityItem 
                    icon={<Clock className="text-fwf-blue-500" />} 
                    title="Pickup Scheduled" 
                    description="Hope Kitchen will pick up your donation tomorrow at 2PM."
                    time="2 days ago"
                  />
                </>
              ) : (
                <>
                  <ActivityItem 
                    icon={<UtensilsCrossed className="text-fwf-green-500" />} 
                    title="New Food Available" 
                    description="Fresh Bakery has listed new bread and pastries."
                    time="1 hour ago"
                  />
                  <ActivityItem 
                    icon={<Calendar className="text-fwf-blue-500" />} 
                    title="Pickup Confirmed" 
                    description="Your pickup from Local Restaurant is confirmed for today at 5PM."
                    time="Yesterday"
                  />
                  <ActivityItem 
                    icon={<CircleCheck className="text-fwf-green-500" />} 
                    title="Donation Received" 
                    description="You've successfully received 10kg of produce from Urban Farm."
                    time="3 days ago"
                  />
                </>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
      
      <div>
        <FadeIn delay={0.4}>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userType === 'restaurant' ? (
              <>
                <QuickActionButton 
                  icon={<ShoppingBag size={20} />} 
                  label="Add Donation" 
                  path="/dashboard/donations/new"
                  color="bg-fwf-blue-500"
                />
                <QuickActionButton 
                  icon={<Calendar size={20} />} 
                  label="View Calendar" 
                  path="/dashboard/schedule"
                  color="bg-fwf-green-500"
                />
                <QuickActionButton 
                  icon={<Leaf size={20} />} 
                  label="Impact Report" 
                  path="/dashboard/analytics"
                  color="bg-fwf-blue-500"
                />
                <QuickActionButton 
                  icon={<Building size={20} />} 
                  label="Local Charities" 
                  path="/dashboard/charities"
                  color="bg-fwf-green-500"
                />
              </>
            ) : (
              <>
                <QuickActionButton 
                  icon={<Building size={20} />} 
                  label="Find Food" 
                  path="/dashboard/restaurants"
                  color="bg-fwf-blue-500"
                />
                <QuickActionButton 
                  icon={<Calendar size={20} />} 
                  label="Schedule Pickup" 
                  path="/dashboard/schedule"
                  color="bg-fwf-green-500"
                />
                <QuickActionButton 
                  icon={<Clock size={20} />} 
                  label="Pickup History" 
                  path="/dashboard/history"
                  color="bg-fwf-blue-500"
                />
                <QuickActionButton 
                  icon={<Leaf size={20} />} 
                  label="Impact Report" 
                  path="/dashboard/analytics"
                  color="bg-fwf-green-500"
                />
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}

function ActivityItem({ icon, title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-foreground/70 text-sm">{description}</p>
      </div>
      <div className="text-xs text-foreground/50">{time}</div>
    </div>
  );
}

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  color: string;
}

function QuickActionButton({ icon, label, path, color }: QuickActionButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className="h-auto flex flex-col items-center gap-2 p-4 bg-accent/50 hover:bg-accent"
    >
      <Link to={path}>
        <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <span className="text-sm text-center">{label}</span>
      </Link>
    </Button>
  );
}
