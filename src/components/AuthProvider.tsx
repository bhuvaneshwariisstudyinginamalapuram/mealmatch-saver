
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from '@supabase/supabase-js';

type UserRole = 'restaurant' | 'charity' | null;

interface UserData {
  id: string;
  email: string;
  organization_name: string;
  contact_name: string;
  user_role: UserRole;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  userData: UserData | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  userData: null,
  isLoading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Extract user data from user metadata instead of fetching from database
          const metadata = session.user.user_metadata;
          
          if (metadata) {
            setUserData({
              id: session.user.id,
              email: session.user.email || '',
              organization_name: metadata.organization_name || '',
              contact_name: metadata.contact_name || '',
              user_role: metadata.user_role || null
            });
          }
        } else {
          setUserData(null);
        }
      }
    );

    // THEN check for existing session
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Extract user data from user metadata
          const metadata = session.user.user_metadata;
          
          if (metadata) {
            setUserData({
              id: session.user.id,
              email: session.user.email || '',
              organization_name: metadata.organization_name || '',
              contact_name: metadata.contact_name || '',
              user_role: metadata.user_role || null
            });
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
      setUserData(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    user,
    session,
    userData,
    isLoading,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
