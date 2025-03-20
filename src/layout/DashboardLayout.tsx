
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Home,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  User,
  GripVertical,
  UtensilsCrossed,
  Building
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'restaurant' | 'charity' | 'admin';
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, this would handle actual logout logic
    navigate('/');
  };

  // Navigation items based on user type
  const getNavigationItems = () => {
    const commonItems = [
      { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard' },
      { icon: <Calendar size={20} />, label: 'Schedule', path: '/dashboard/schedule' },
      { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/dashboard/analytics' },
      { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/settings' },
    ];

    if (userType === 'restaurant') {
      return [
        ...commonItems,
        { icon: <UtensilsCrossed size={20} />, label: 'Donations', path: '/dashboard/donations' },
      ];
    } else if (userType === 'charity') {
      return [
        ...commonItems,
        { icon: <Building size={20} />, label: 'Restaurants', path: '/dashboard/restaurants' },
      ];
    } else {
      return [
        ...commonItems,
        { icon: <User size={20} />, label: 'Users', path: '/dashboard/users' },
      ];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar for desktop */}
      <aside
        className={cn(
          "bg-white fixed inset-y-0 z-20 flex flex-col border-r shadow-sm transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          "left-0 hidden lg:flex"
        )}
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-fwf-blue-500 to-fwf-green-500 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
                <GripVertical className="text-white" size={16} />
              </div>
              <span className="font-display font-semibold text-lg">
                FoodWaste <span className="text-fwf-blue-600">Fighter</span>
              </span>
            </div>
          )}
          {isCollapsed && (
            <div className="bg-gradient-to-br from-fwf-blue-500 to-fwf-green-500 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm mx-auto">
              <GripVertical className="text-white" size={16} />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex"
          >
            <Menu size={20} />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent transition-colors",
                    "hover:shadow-sm"
                  )}
                >
                  <span>{item.icon}</span>
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-foreground/70 hover:text-destructive",
              isCollapsed && "justify-center"
            )}
            onClick={handleLogout}
          >
            <LogOut size={20} className="mr-2" />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b z-10 lg:pl-16 lg:hidden">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-fwf-blue-500 to-fwf-green-500 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <GripVertical className="text-white" size={16} />
            </div>
            <span className="font-display font-semibold text-lg">
              FoodWaste <span className="text-fwf-blue-600">Fighter</span>
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-background lg:hidden animate-fade-scale">
          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-foreground/70 hover:text-destructive mt-4"
                  onClick={handleLogout}
                >
                  <LogOut size={20} className="mr-2" />
                  <span>Logout</span>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Main content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          "lg:ml-16",
          !isCollapsed && "lg:ml-64",
          "pt-16 lg:pt-0"
        )}
      >
        {children}
      </main>
    </div>
  );
}
