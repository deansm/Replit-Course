import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import GlassCard from "@/components/GlassCard";
import { Calendar, Clock, Mail, Phone, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Appointment } from "@shared/schema";

export default function Appointments() {
  const { isAuthenticated, userName, login, signup, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const { data: appointments, isLoading } = useQuery<Appointment[]>({
    queryKey: ["/api/appointments"],
    enabled: true, // Always fetch for now since we don't have proper auth
  });

  const handleLogin = (email: string, password: string) => {
    login(email, password);
    setShowLogin(false);
  };

  const handleSignup = (email: string, password: string, name: string) => {
    signup(email, password, name);
    setShowLogin(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case "cancelled":
        return <XCircle className="h-5 w-5 text-red-400" />;
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "cancelled":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
    }
  };

  const sortedAppointments = appointments?.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header 
        onLoginClick={() => setShowLogin(true)}
        onBookingClick={() => {}}
        isAuthenticated={isAuthenticated}
        userName={userName}
        onLogout={logout}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard intensity="heavy" className="p-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Calendar className="h-8 w-8 text-white" />
              <span className="text-white/80 font-medium tracking-wide">MY APPOINTMENTS</span>
              <Calendar className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Appointments
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              View and manage all your upcoming and past appointments in one place.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Appointments List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="text-center">
              <GlassCard intensity="medium" className="p-12">
                <div className="text-white text-lg">Loading appointments...</div>
              </GlassCard>
            </div>
          ) : !appointments || appointments.length === 0 ? (
            <div className="text-center">
              <GlassCard intensity="medium" className="p-12">
                <Calendar className="h-16 w-16 text-white/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No Appointments Yet</h3>
                <p className="text-white/70 mb-6">
                  You haven't booked any appointments. Ready to get started?
                </p>
                <a 
                  href="/services"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg border border-white/30 transition-colors"
                  data-testid="link-book-first-appointment"
                >
                  Book Your First Appointment
                </a>
              </GlassCard>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {appointments.length} {appointments.length === 1 ? 'Appointment' : 'Appointments'}
                </h2>
              </div>

              {sortedAppointments?.map((appointment) => (
                <GlassCard key={appointment.id} intensity="medium" className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left: Date & Time */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className="inline-block bg-white/20 rounded-lg p-4">
                        <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
                        <div className="text-white font-bold text-lg" data-testid={`text-date-${appointment.id}`}>
                          {new Date(appointment.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="text-white/70 flex items-center justify-center gap-1 mt-1">
                          <Clock className="h-4 w-4" />
                          <span data-testid={`text-time-${appointment.id}`}>{appointment.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Appointment Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1" data-testid={`text-service-${appointment.id}`}>
                            {appointment.service}
                          </h3>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(appointment.status)}
                            <span className={`text-sm px-3 py-1 rounded-full border ${getStatusColor(appointment.status)}`}>
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-white/80">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm" data-testid={`text-email-${appointment.id}`}>{appointment.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm" data-testid={`text-phone-${appointment.id}`}>{appointment.phone}</span>
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="bg-white/10 rounded-lg p-3 mt-3">
                          <div className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-white/70 mt-1" />
                            <div>
                              <div className="text-white/70 text-xs mb-1">Special Requests:</div>
                              <p className="text-white text-sm" data-testid={`text-notes-${appointment.id}`}>{appointment.notes}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
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
    </div>
  );
}