import { useState } from "react";
import Header from "@/components/Header";
import TeamMember from "@/components/TeamMember";
import BookingForm from "@/components/BookingForm";
import LoginForm from "@/components/LoginForm";
import PaymentForm from "@/components/PaymentForm";
import GlassCard from "@/components/GlassCard";
import { Users, Award, Star, Calendar } from "lucide-react";
import femaleStyleImage from '@assets/generated_images/Hair_stylist_profile_photo_979d5f1b.png';
import maleStyleImage from '@assets/generated_images/Male_hair_stylist_photo_98c51867.png';

export default function Team() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Senior Hair Stylist & Owner",
      image: femaleStyleImage,
      rating: 5,
      specialties: ["Color", "Cuts", "Styling"],
      yearsExperience: 8
    },
    {
      name: "Michael Chen",
      title: "Master Colorist",
      image: maleStyleImage,
      rating: 5,
      specialties: ["Highlights", "Balayage", "Color Correction"],
      yearsExperience: 12
    },
    {
      name: "Emily Rodriguez", 
      title: "Style Specialist",
      image: femaleStyleImage,
      rating: 4,
      specialties: ["Cuts", "Updos", "Special Events"],
      yearsExperience: 6
    },
    {
      name: "David Park",
      title: "Creative Director",
      image: maleStyleImage,
      rating: 5,
      specialties: ["Avant-garde", "Fashion", "Editorial"],
      yearsExperience: 15
    },
    {
      name: "Lisa Thompson",
      title: "Texture Specialist",
      image: femaleStyleImage,
      rating: 5,
      specialties: ["Curly Hair", "Keratin", "Extensions"],
      yearsExperience: 10
    },
    {
      name: "Marco Silva",
      title: "Men's Grooming Expert",
      image: maleStyleImage,
      rating: 4,
      specialties: ["Men's Cuts", "Beard Styling", "Classic Looks"],
      yearsExperience: 7
    }
  ];

  const handleLogin = (email: string, password: string) => {
    // todo: remove mock functionality
    console.log("Login attempt:", email);
    setIsAuthenticated(true);
    setUserName(email.split('@')[0]);
    setShowLogin(false);
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // todo: remove mock functionality
    console.log("Signup attempt:", email, name);
    setIsAuthenticated(true);
    setUserName(name);
    setShowLogin(false);
  };

  const handleBookingSubmit = (bookingData: any) => {
    console.log("Booking submitted:", bookingData);
    setShowBooking(false);
    // In real app, show success message
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header 
        onLoginClick={() => setShowLogin(true)}
        onBookingClick={() => setShowBooking(true)}
        isAuthenticated={isAuthenticated}
        userName={userName}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard intensity="heavy" className="p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="h-8 w-8 text-white" />
              <span className="text-white/80 font-medium tracking-wide">OUR EXPERT TEAM</span>
              <Users className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Master Stylists
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our talented team of certified professionals brings years of experience, creativity, 
              and passion to every appointment. Each stylist specializes in different techniques 
              to ensure you get the perfect look.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">Certified Pros</div>
                <div className="text-white/70">Licensed & trained</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">5★ Average</div>
                <div className="text-white/70">Client satisfaction</div>
              </div>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">50+ Years</div>
                <div className="text-white/70">Combined experience</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index} 
                {...member} 
                onBookWith={() => {
                  if (!isAuthenticated) {
                    setShowLogin(true);
                    return;
                  }
                  setShowBooking(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard intensity="medium" className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
                <p className="text-white/80 mb-4">
                  We believe every client is unique. Our stylists take time to understand your lifestyle, 
                  preferences, and hair goals to create a look that's perfectly tailored to you.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Individual consultations</li>
                  <li>• Custom color formulations</li>
                  <li>• Lifestyle-compatible cuts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Continuous Education</h3>
                <p className="text-white/80 mb-4">
                  Our team stays current with the latest trends, techniques, and products through 
                  ongoing education and training at top industry academies.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Regular training workshops</li>
                  <li>• Industry certification updates</li>
                  <li>• Fashion week trend studies</li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Modals */}
      {showLogin && (
        <LoginForm 
          onLogin={handleLogin}
          onSignup={handleSignup}
          onClose={() => setShowLogin(false)}
        />
      )}

      {showBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="relative">
            <BookingForm onSubmit={handleBookingSubmit} />
            <button
              onClick={() => setShowBooking(false)}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/30"
              data-testid="button-close-booking"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}