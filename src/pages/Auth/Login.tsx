
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { FadeIn } from '@/components/ui/animations';
import { GripVertical, LogIn, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Authenticate with Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      if (data?.user) {
        // Get user role to determine which dashboard to show
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('user_role')
          .eq('id', data.user.id)
          .single();
        
        if (userError) throw userError;
        
        toast({
          title: "Logged in successfully!",
          description: "Welcome back to FoodWaste Fighter.",
        });
        
        // Navigate to the appropriate dashboard based on user role
        navigate(`/dashboard?role=${userData?.user_role || 'restaurant'}`);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setError(error.message || "Failed to sign in. Please check your credentials.");
      toast({
        title: "Login Failed",
        description: error.message || "Failed to sign in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
            <h1 className="text-3xl font-display font-bold mb-2">Welcome Back!</h1>
            <p className="text-foreground/70">Sign in to continue to your account</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-xl shadow-xl p-8 mb-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
                <AlertCircle className="text-red-500 mr-2 mt-0.5 shrink-0" size={16} />
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-fwf-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-fwf-blue-500 to-fwf-blue-600 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn size={18} />
                    Sign in
                  </span>
                )}
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-foreground/60">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Not implemented yet",
                      description: "Social login will be available in a future update.",
                      variant: "default",
                    });
                  }}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Not implemented yet",
                      description: "Social login will be available in a future update.",
                      variant: "default",
                    });
                  }}
                >
                  <svg className="w-5 h-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                  </svg>
                  Facebook
                </Button>
              </div>
            </form>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-center text-foreground/70">
            Don't have an account?{" "}
            <Link to="/signup" className="text-fwf-blue-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Login;
