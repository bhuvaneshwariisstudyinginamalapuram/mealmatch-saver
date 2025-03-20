
import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { FadeIn } from '@/components/ui/animations';
import { GripVertical, UserPlus, Building, Utensils } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get('role') || 'restaurant';
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'restaurant' | 'charity'>(defaultRole as 'restaurant' | 'charity');
  const [organizationName, setOrganizationName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      
      toast({
        title: "Account created successfully!",
        description: "Welcome to FoodWaste Fighter.",
      });
      
      // Navigate to the appropriate dashboard
      navigate(`/dashboard?role=${role}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-fwf-blue-50 to-fwf-green-50 p-4">
      <div className="w-full max-w-md">
        <FadeIn delay={0.1}>
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-8">
              <div className="bg-gradient-to-br from-fwf-blue-500 to-fwf-green-500 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
                <GripVertical className="text-white" size={20} />
              </div>
              <span className="font-display font-semibold text-xl">
                FoodWaste <span className="text-fwf-blue-600">Fighter</span>
              </span>
            </Link>
            <h1 className="text-3xl font-display font-bold mb-2">Join FoodWaste Fighter</h1>
            <p className="text-foreground/70">Create an account to get started</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
            <Tabs defaultValue={role} onValueChange={(value) => setRole(value as 'restaurant' | 'charity')}>
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="restaurant" className="flex items-center gap-2">
                  <Building size={16} />
                  Restaurant
                </TabsTrigger>
                <TabsTrigger value="charity" className="flex items-center gap-2">
                  <Utensils size={16} />
                  Charity
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="restaurant">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="restaurant-name" className="block text-sm font-medium">
                      Restaurant Name
                    </label>
                    <Input
                      id="restaurant-name"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      placeholder="Your Restaurant"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="restaurant-contact-name" className="block text-sm font-medium">
                      Contact Person's Name
                    </label>
                    <Input
                      id="restaurant-contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="restaurant-email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="restaurant-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="restaurant-password" className="block text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="restaurant-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="restaurant-confirm-password" className="block text-sm font-medium">
                        Confirm Password
                      </label>
                      <Input
                        id="restaurant-confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-fwf-blue-500 hover:bg-fwf-blue-600 text-white font-medium mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <UserPlus size={18} />
                        Create Restaurant Account
                      </span>
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="charity">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="charity-name" className="block text-sm font-medium">
                      Charity/Food Bank Name
                    </label>
                    <Input
                      id="charity-name"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      placeholder="Your Charity"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="charity-contact-name" className="block text-sm font-medium">
                      Contact Person's Name
                    </label>
                    <Input
                      id="charity-contact-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="charity-email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="charity-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="charity-password" className="block text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="charity-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="charity-confirm-password" className="block text-sm font-medium">
                        Confirm Password
                      </label>
                      <Input
                        id="charity-confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-fwf-green-500 hover:bg-fwf-green-600 text-white font-medium mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <UserPlus size={18} />
                        Create Charity Account
                      </span>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-center text-foreground/70">
            Already have an account?{" "}
            <Link to="/login" className="text-fwf-blue-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Signup;
