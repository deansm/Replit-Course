import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import BookingForm from "@/components/BookingForm";
import GlassCard from "@/components/GlassCard";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { isAuthenticated, userName, login, signup, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // todo: remove mock functionality - integrate with real contact system
    setContactForm({ name: "", email: "", phone: "", subject: "", message: "" });
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
              <MessageSquare className="h-8 w-8 text-white" />
              <span className="text-white/80 font-medium tracking-wide">GET IN TOUCH</span>
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Contact
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Our Studio
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions about our services, 
              want to schedule a consultation, or need assistance, we're here to help.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <GlassCard intensity="medium" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Visit Our Studio</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-white/80">123 Beauty Boulevard</p>
                    <p className="text-white/80">Downtown, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-white/80">(555) 123-HAIR</p>
                    <p className="text-white/60 text-sm">Call for appointments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-white/80">info@luxehairstudio.com</p>
                    <p className="text-white/60 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Hours</h3>
                    <div className="text-white/80 space-y-1 text-sm">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Quick Actions */}
            <GlassCard intensity="medium" className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    if (!isAuthenticated) {
                      setShowLogin(true);
                      return;
                    }
                    setShowBooking(true);
                  }}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 justify-start"
                  data-testid="button-quick-book"
                >
                  📅 Book an Appointment
                </Button>
                <Button 
                  onClick={() => {
                    console.log("Opening consultation booking");
                    if (!isAuthenticated) {
                      setShowLogin(true);
                      return;
                    }
                    setShowBooking(true);
                  }}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 justify-start"
                  data-testid="button-consultation"
                >
                  💬 Free Consultation
                </Button>
                <Button 
                  onClick={() => window.open("tel:5551234247")}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 justify-start"
                  data-testid="button-call-now"
                >
                  📞 Call Now
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <GlassCard intensity="medium" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-white">Name</Label>
                  <Input
                    id="contact-name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-white/10 border-white/30 text-white placeholder-white/60"
                    placeholder="Your full name"
                    data-testid="input-contact-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-white">Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-white/10 border-white/30 text-white placeholder-white/60"
                    placeholder="your@email.com"
                    data-testid="input-contact-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-white">Phone (Optional)</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder-white/60"
                  placeholder="(555) 123-4567"
                  data-testid="input-contact-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-white">Subject</Label>
                <Input
                  id="contact-subject"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder-white/60"
                  placeholder="What can we help you with?"
                  data-testid="input-contact-subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-white">Message</Label>
                <Textarea
                  id="contact-message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder-white/60"
                  placeholder="Tell us more about your needs..."
                  rows={5}
                  data-testid="input-contact-message"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold border-0"
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <GlassCard intensity="medium" className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Find Us</h2>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-white/70">123 Beauty Boulevard, Downtown CA</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                onClick={() => window.open("https://maps.google.com", "_blank")}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                data-testid="button-get-directions"
              >
                Get Directions
              </Button>
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