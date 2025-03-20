
import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';

interface UserProfileHeaderProps {
  userName: string;
  userRole: 'restaurant' | 'charity';
  userImage?: string;
}

export function UserProfileHeader({ userName, userRole, userImage }: UserProfileHeaderProps) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, this would handle actual logout logic
    navigate('/');
  };
  
  return (
    <div className="flex items-center gap-4 p-4">
      <div className="flex-1">
        <h2 className="text-lg font-medium">
          Welcome, <span className="font-semibold">{userName}</span>
        </h2>
        <p className="text-foreground/60 text-sm">
          {userRole === 'restaurant' ? 'Restaurant Account' : 'Charity Account'}
        </p>
      </div>
      
      <Button variant="ghost" size="icon" className="relative">
        <Bell size={20} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-fwf-blue-500 rounded-full"></span>
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-fwf-blue-100 flex items-center justify-center">
              {userImage ? (
                <img src={userImage} alt={userName} className="w-full h-full object-cover rounded-full" />
              ) : (
                <span className="text-fwf-blue-600 font-semibold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <span className="hidden md:inline">{userName}</span>
            <ChevronDown size={16} className="text-foreground/60" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/dashboard/profile')}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/dashboard/settings')}>
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
