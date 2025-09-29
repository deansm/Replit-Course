import { useState } from "react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import BookingForm from "@/components/BookingForm";
import LoginForm from "@/components/LoginForm";
import PaymentForm from "@/components/PaymentForm";
import GlassCard from "@/components/GlassCard";
import { Scissors, Clock, DollarSign } from "lucide-react";

export default function Services() {
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
    },
    {
      title: "Hair Extensions",
      description: "Add length and volume with our premium quality hair extensions. Multiple color and texture options available.",
      duration: "2-3 hours",
      price: 200
    },
    {
      title: "Keratin Treatment",
      description: "Smooth and strengthen your hair with our professional keratin treatment for frizz-free, manageable hair.",
      duration: "3 hours",
      price: 180
    },
    {
      title: "Beard Trim & Style",
      description: "Professional beard trimming and styling service to complement your overall look.",
      duration: "30 min",
      price: 35
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard intensity="heavy" className="p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Scissors className="h-8 w-8 text-white" />
              <span className="text-white/80 font-medium tracking-wide">OUR SERVICES</span>
              <Scissors className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Hair
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of professional hair services designed to enhance your natural beauty 
              and express your unique style.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">Flexible Hours</div>
                <div className="text-white/70">Book at your convenience</div>
              </div>
              <div className="text-center">
                <Scissors className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">Expert Stylists</div>
                <div className="text-white/70">Certified professionals</div>
              </div>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">Fair Pricing</div>
                <div className="text-white/70">Quality at great value</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
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

      {/* Pricing Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard intensity="medium" className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Service Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• Professional consultation</li>
                  <li>• Premium hair products</li>
                  <li>• Expert styling techniques</li>
                  <li>• Aftercare recommendations</li>
                  <li>• Satisfaction guarantee</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Booking Policy</h3>
                <ul className="text-white/80 space-y-2">
                  <li>• 24-hour cancellation notice</li>
                  <li>• Flexible rescheduling options</li>
                  <li>• Secure online payments</li>
                  <li>• Free consultation for first visit</li>
                  <li>• Group bookings available</li>
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