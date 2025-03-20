import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { FadeIn, FloatingElement } from '@/components/ui/animations';
import { GripVertical, UserPlus, Building, Utensils, AlertCircle, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

// Password requirements schema
const passwordSchema = z.string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .refine((password) => /[A-Z]/.test(password), { message: "Password must contain at least one uppercase letter" })
  .refine((password) => /[0-9]/.test(password), { message: "Password must contain at least one number" });

// Form schema with validation
const formSchema = z.object({
  organizationName: z.string().min(2, { message: "Organization name must be at least 2 characters" }),
  name: z.string().min(2, { message: "Contact name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Signup = () => {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get('role') || 'restaurant';
  
  const [role, setRole] = useState<'restaurant' | 'charity'>(defaultRole as 'restaurant' | 'charity');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  // Initialize form for restaurant
  const restaurantForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Initialize form for charity
  const charityForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Calculate password strength when password changes
  useEffect(() => {
    const password = restaurantForm.watch("password") || charityForm.watch("password") || "";
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  }, [restaurantForm.watch("password"), charityForm.watch("password")]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Register the user with Supabase Auth only, without adding to the users table
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            organization_name: data.organizationName,
            contact_name: data.name,
            user_role: role
          }
        }
      });
      
      if (authError) throw authError;
      
      // Show success message
      toast({
        title: "Account created successfully!",
        description: "Welcome to FoodWaste Fighter. Please check your email to verify your account.",
      });
      
      // Navigate to the appropriate dashboard
      navigate(`/dashboard?role=${role}`);
    } catch (error: any) {
      console.error("Error creating account:", error);
      toast({
        title: "Error Creating Account",
        description: error.message || "There was a problem creating your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-green-50 p-4">
      <div className="w-full max-w-md">
        <FadeIn delay={0.1}>
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-8">
              <div className="bg-gradient-to-br from-orange-500 to-green-500 w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
                <GripVertical className="text-white" size={20} />
              </div>
              <span className="font-display font-semibold text-xl">
                FoodWaste <span className="text-orange-600">Fighter</span>
              </span>
            </Link>
            <h1 className="text-3xl font-display font-bold mb-2">Join FoodWaste Fighter</h1>
            <p className="text-foreground/70">Create an account to get started</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="glass-card p-8 mb-6 border-2 border-orange-100 shadow-xl">
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
                <Form {...restaurantForm}>
                  <form onSubmit={restaurantForm.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={restaurantForm.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Restaurant Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Restaurant" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={restaurantForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={restaurantForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={restaurantForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <div className="mt-2">
                              <div className="flex items-center mb-1">
                                <div className="h-1 flex-grow flex space-x-1">
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 1 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 3 ? 'bg-green-300' : 'bg-gray-200'}`}></div>
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                                </div>
                                <span className="ml-2 text-xs text-gray-500">
                                  {passwordStrength === 0 && "Weak"}
                                  {passwordStrength === 1 && "Fair"}
                                  {passwordStrength === 2 && "Good"}
                                  {passwordStrength === 3 && "Strong"}
                                  {passwordStrength === 4 && "Excellent"}
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 mt-1">
                              <div className="flex items-center">
                                {/^.{8,}$/.test(field.value) ? <Check size={12} className="text-green-500 mr-1" /> : <AlertCircle size={12} className="text-red-500 mr-1" />}
                                <span>At least 8 characters</span>
                              </div>
                              <div className="flex items-center">
                                {/[A-Z]/.test(field.value) ? <Check size={12} className="text-green-500 mr-1" /> : <AlertCircle size={12} className="text-red-500 mr-1" />}
                                <span>At least one uppercase letter</span>
                              </div>
                              <div className="flex items-center">
                                {/[0-9]/.test(field.value) ? <Check size={12} className="text-green-500 mr-1" /> : <AlertCircle size={12} className="text-red-500 mr-1" />}
                                <span>At least one number</span>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={restaurantForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium mt-6"
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
                </Form>
              </TabsContent>
              
              <TabsContent value="charity">
                <Form {...charityForm}>
                  <form onSubmit={charityForm.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={charityForm.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Charity/Food Bank Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Charity" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={charityForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={charityForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={charityForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <div className="mt-2">
                              <div className="flex items-center mb-1">
                                <div className="h-1 flex-grow flex space-x-1">
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 1 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 3 ? 'bg-green-300' : 'bg-gray-200'}`}></div>
                                  <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength >= 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                                </div>
                                <span className="ml-2 text-xs text-gray-500">
                                  {passwordStrength === 0 && "Weak"}
                                  {passwordStrength === 1 && "Fair"}
                                  {passwordStrength === 2 && "Good"}
                                  {passwordStrength === 3 && "Strong"}
                                  {passwordStrength === 4 && "Excellent"}
                                </span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 space-y-1 mt-1">
                              <div className="flex items-center">
                                {/^.{8,}$/.test(field.value) ? <Check size={12} className="text-green-500 mr-1" /> : <AlertCircle size={12} className="text-red-500 mr-1" />}
                                <span>At least 8 characters</span>
                              </div>
                              <div className="flex items-center">
                                {/[A-Z]/.test(field.value) ? <Check size={12} className="text-green-500 mr-1" /> : <AlertCircle size={12} className="text-red-500 mr-1" />}
                                <span>At least one uppercase letter</span>
                              </div>
                              <div className="flex items-center">
                                {/[0-9]/.test(field.value) ? <Check size={12} className="text-green-500 mr-1" /> : <AlertCircle size={12} className="text-red-500 mr-1" />}
                                <span>At least one number</span>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={charityForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium mt-6"
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
                </Form>
              </TabsContent>
            </Tabs>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-center text-foreground/70">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </FadeIn>
      </div>
      
      {/* Animated food-related background elements */}
      <FloatingElement className="absolute left-0 top-0 -z-10" amplitude={20} duration={8}>
        <div className="text-orange-100 opacity-20">
          <img src="https://cdn-icons-png.flaticon.com/512/3165/3165589.png" alt="Food pattern" className="w-32 h-32" />
        </div>
      </FloatingElement>
      <FloatingElement className="absolute right-0 bottom-0 -z-10" amplitude={15} duration={6} delay={1}>
        <div className="text-green-100 opacity-20">
          <img src="https://cdn-icons-png.flaticon.com/512/2515/2515020.png" alt="Vegetable pattern" className="w-40 h-40" />
        </div>
      </FloatingElement>
    </div>
  );
};

export default Signup;
