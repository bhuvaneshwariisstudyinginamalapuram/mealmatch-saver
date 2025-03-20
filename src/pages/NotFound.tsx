
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animations";
import { GripVertical, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <FadeIn delay={0.1}>
          <div className="mx-auto w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="text-fwf-blue-500" size={36} />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-gradient-to-br from-fwf-blue-500 to-fwf-green-500 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <GripVertical className="text-white" size={16} />
            </div>
            <span className="font-display font-semibold text-lg">
              FoodWaste <span className="text-fwf-blue-600">Fighter</span>
            </span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-foreground/70 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <Button 
            className="bg-gradient-to-r from-fwf-blue-500 to-fwf-blue-600 hover:shadow-md transition-shadow rounded-full" 
            asChild
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotFound;
