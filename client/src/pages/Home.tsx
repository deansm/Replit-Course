import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TeamMember from "@/components/TeamMember";
import BookingForm from "@/components/BookingForm";
import LoginForm from "@/components/LoginForm";
import PaymentForm from "@/components/PaymentForm";
import GlassCard from "@/components/GlassCard";
import { Sparkles, Award, Clock, Shield } from "lucide-react";
import femaleStyleImage from '@assets/generated_images/Hair_stylist_profile_photo_979d5f1b.png';
import maleStyleImage from '@assets/generated_images/Male_hair_stylist_photo_98c51867.png';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  const services = [
    {
      title: "Hair Cut & Style",
      description: "Professional haircut with personalized styling to match your unique look and lifestyle. Includes wash, cut, and finish.",
      duration: "45 min",
      price: 65
    },
    {
      title: "Color Treatment",
      description: "Full color transformation using premium products for vibrant, long-lasting results. Consultation included.",
      duration: "2-3 hours", 
      price: 150
    },
    {
      title: "Highlights",
      description: "Expert highlighting techniques to add dimension and brightness to your hair with natural-looking results.",
      duration: "2 hours",
      price: 120
    },
    {
      title: "Hair Wash & Blowdry",
      description: "Luxurious hair washing experience followed by professional blowdry and styling for instant glamour.",
      duration: "30 min",
      price: 45
    },
    {
      title: "Deep Conditioning",
      description: "Intensive moisture treatment to restore and strengthen damaged hair, leaving it silky and healthy.",
      duration: "45 min",
      price: 35
    },
    {
      title: "Special Event Styling",
      description: "Complete hair transformation for weddings, proms, and special occasions. Trial session available.",
      duration: "90 min",
      price: 95
    }
  ];

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
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Stylists",
      description: "Our certified professionals bring years of experience and creativity to every appointment."
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "We use only the finest hair care products for exceptional results and hair health."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book appointments that fit your schedule with our convenient online booking system."
    },
    {
      icon: Shield,
      title: "Satisfaction Guaranteed",
      description: "We're committed to ensuring you love your new look with our satisfaction guarantee."
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

  const handleServiceBook = (service: any) => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    setSelectedService(service);
    setShowBooking(true);
  };

  const handleBookingSubmit = (bookingData: any) => {
    console.log("Booking submitted:", bookingData);
    setShowBooking(false);
    setSelectedService(selectedService);
    setShowPayment(true);
  };

  const handlePayment = (paymentData: any) => {
    console.log("Payment processed:", paymentData);
    setShowPayment(false);
    setSelectedService(null);
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
      
      <HeroSection 
        onBookNow={() => setShowBooking(true)}
        onViewServices={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Luxe Hair Studio?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We're committed to providing exceptional service and results that exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              From cuts and color to special event styling, we offer a full range of premium hair services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                onBook={() => handleServiceBook(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our talented stylists are passionate about creating beautiful hair and making you feel amazing.
            </p>
          </div>
          
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard intensity="medium" className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Visit Our Studio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-white/80 mb-2">123 Beauty Boulevard</p>
                <p className="text-white/80 mb-2">Downtown, CA 90210</p>
                <p className="text-white/80">(555) 123-HAIR</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-white/80 mb-2">Monday - Friday: 9am - 8pm</p>
                <p className="text-white/80 mb-2">Saturday: 8am - 6pm</p>
                <p className="text-white/80">Sunday: 10am - 5pm</p>
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

      {showPayment && selectedService && (
        <PaymentForm 
          amount={selectedService.price}
          serviceName={selectedService.title}
          onPayment={handlePayment}
          onCancel={() => setShowPayment(false)}
        />
      )}
    </div>
  );
}