import { useState } from "react";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GlassCard from "./GlassCard";

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
  onSignup?: (email: string, password: string, name: string) => void;
  onClose?: () => void;
}

export default function LoginForm({ onLogin, onSignup, onClose }: LoginFormProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signup submitted:", formData);
      onSignup?.(formData.email, formData.password, formData.name);
    } else {
      console.log("Login submitted:", formData);
      onLogin?.(formData.email, formData.password);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <GlassCard intensity="heavy" className="p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {isSignup ? <UserPlus className="h-6 w-6 text-white" /> : <LogIn className="h-6 w-6 text-white" />}
            <h2 className="text-2xl font-bold text-white">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h2>
          </div>
          <Button
            onClick={() => {
              console.log("Close login form");
              onClose?.();
            }}
            variant="ghost"
            size="sm"
            className="text-white/60 hover:text-white hover:bg-white/10"
            data-testid="button-close-login"
          >
            ✕
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white/10 border-white/30 text-white placeholder-white/60"
                placeholder="Enter your full name"
                data-testid="input-signup-name"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-white/10 border-white/30 text-white placeholder-white/60"
              placeholder="your@email.com"
              data-testid="input-login-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="bg-white/10 border-white/30 text-white placeholder-white/60 pr-10"
                placeholder="Enter your password"
                data-testid="input-login-password"
              />
              <Button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 text-white/60 hover:text-white hover:bg-white/10"
                data-testid="button-toggle-password"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold"
            data-testid={isSignup ? "button-signup-submit" : "button-login-submit"}
          >
            {isSignup ? "Create Account" : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              console.log("Toggled to:", isSignup ? "login" : "signup");
            }}
            className="text-white/80 hover:text-white transition-colors"
            data-testid="button-toggle-form"
          >
            {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
          </button>
        </div>
      </GlassCard>
    </div>
  );
}