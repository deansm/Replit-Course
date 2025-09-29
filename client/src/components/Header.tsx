import { Scissors, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import GlassCard from "./GlassCard";

interface HeaderProps {
  onLoginClick?: () => void;
  onBookingClick?: () => void;
  isAuthenticated?: boolean;
  userName?: string;
}

export default function Header({ 
  onLoginClick, 
  onBookingClick, 
  isAuthenticated = false,
  userName 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <GlassCard intensity="heavy" className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 rounded-lg">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Luxe Hair Studio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Navigating to ${item.label}`);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-white/80 hidden sm:block">Welcome, {userName}</span>
                <Button 
                  onClick={() => {
                    console.log("Logout clicked");
                  }}
                  variant="ghost"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30"
                  data-testid="button-logout"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  onClick={() => {
                    console.log("Login clicked");
                    onLoginClick?.();
                  }}
                  variant="ghost"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hidden sm:block"
                  data-testid="button-login"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => {
                    console.log("Book Now clicked");
                    onBookingClick?.();
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold"
                  data-testid="button-book-now"
                >
                  Book Now
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden bg-white/10 hover:bg-white/20 text-white border border-white/30"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Mobile nav: ${item.label}`);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
              {!isAuthenticated && (
                <Button 
                  onClick={() => {
                    console.log("Mobile login clicked");
                    onLoginClick?.();
                    setMobileMenuOpen(false);
                  }}
                  variant="ghost"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 w-full justify-start"
                  data-testid="button-mobile-login"
                >
                  Login
                </Button>
              )}
            </nav>
          </div>
        )}
      </GlassCard>
    </header>
  );
}