import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import BookingForm from "@/components/BookingForm";
import GlassCard from "@/components/GlassCard";
import { Camera, Heart, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const { isAuthenticated, userName, login, signup, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "color", label: "Color" },
    { id: "cuts", label: "Cuts & Styling" },
    { id: "special", label: "Special Events" },
    { id: "before-after", label: "Transformations" }
  ];

  // todo: remove mock functionality - replace with real gallery images
  const galleryItems = [
    {
      id: 1,
      category: "color",
      title: "Vibrant Pink Balayage",
      description: "Bold color transformation with seamless blending",
      likes: 124,
      views: 892
    },
    {
      id: 2,
      category: "cuts",
      title: "Modern Bob Cut",
      description: "Sleek and sophisticated everyday style",
      likes: 89,
      views: 645
    },
    {
      id: 3,
      category: "special",
      title: "Wedding Updo",
      description: "Elegant bridal styling for special day",
      likes: 156,
      views: 1024
    },
    {
      id: 4,
      category: "before-after",
      title: "Complete Makeover",
      description: "Dramatic transformation from long to pixie cut",
      likes: 203,
      views: 1456
    },
    {
      id: 5,
      category: "color",
      title: "Platinum Blonde",
      description: "Expert color correction and toning",
      likes: 167,
      views: 978
    },
    {
      id: 6,
      category: "cuts",
      title: "Layered Waves",
      description: "Textured cut with natural movement",
      likes: 98,
      views: 723
    },
    {
      id: 7,
      category: "special",
      title: "Prom Styling",
      description: "Glamorous styling for formal events",
      likes: 134,
      views: 856
    },
    {
      id: 8,
      category: "before-after",
      title: "Color Correction",
      description: "From damaged to healthy, vibrant hair",
      likes: 189,
      views: 1234
    },
    {
      id: 9,
      category: "color",
      title: "Sunset Ombre",
      description: "Warm gradient color blend",
      likes: 145,
      views: 967
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleLogin = (email: string, password: string) => {
    login(email, password);
    setShowLogin(false);
  };

  const handleSignup = (email: string, password: string, name: string) => {
    signup(email, password, name);
    setShowLogin(false);
  };

  const handleBookingSubmit = (bookingData: any) => {
    console.log("Booking submitted:", bookingData);
    setShowBooking(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header 
        onLoginClick={() => setShowLogin(true)}
        onBookingClick={() => setShowBooking(true)}
        isAuthenticated={isAuthenticated}
        userName={userName}
        onLogout={logout}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard intensity="heavy" className="p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Camera className="h-8 w-8 text-white" />
              <span className="text-white/80 font-medium tracking-wide">OUR GALLERY</span>
              <Camera className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hair
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Transformations
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of stunning hair transformations, creative color work, 
              and precision cuts that showcase the artistry of our talented team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Camera className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">500+ Photos</div>
                <div className="text-white/70">Work showcased</div>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">10K+ Likes</div>
                <div className="text-white/70">Client appreciation</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">Award Winning</div>
                <div className="text-white/70">Recognition</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard intensity="medium" className="p-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    console.log(`Filtering by: ${category.label}`);
                  }}
                  variant={selectedCategory === category.id ? "default" : "ghost"}
                  className={`${
                    selectedCategory === category.id 
                      ? "bg-white/30 text-white" 
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/30"
                  }`}
                  data-testid={`button-filter-${category.id}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GlassCard key={item.id} className="overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-white/60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2" data-testid={`text-gallery-${item.id}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => {
                      console.log(`Inspired by ${item.title}`);
                      if (!isAuthenticated) {
                        setShowLogin(true);
                        return;
                      }
                      setShowBooking(true);
                    }}
                    className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    data-testid={`button-book-inspired-${item.id}`}
                  >
                    Get This Look
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard intensity="medium" className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for Your Transformation?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let our expert stylists create a look that's uniquely you. Book your consultation today 
              and join our gallery of beautiful transformations.
            </p>
            <Button 
              onClick={() => {
                if (!isAuthenticated) {
                  setShowLogin(true);
                  return;
                }
                setShowBooking(true);
              }}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg border-0"
              data-testid="button-gallery-book-now"
            >
              Book Your Transformation
            </Button>
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