import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import salonBackground from '@assets/generated_images/Hair_salon_interior_background_f8204e8e.png';

interface HeroSectionProps {
  onBookNow?: () => void;
  onViewServices?: () => void;
}

export default function HeroSection({ onBookNow, onViewServices }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={salonBackground}
          alt="Luxe Hair Studio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-indigo-900/70" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <GlassCard intensity="heavy" className="p-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <span className="text-white/80 font-medium tracking-wide">PREMIUM HAIR STUDIO</span>
            <Sparkles className="h-8 w-8 text-yellow-400" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hair Story
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience luxury hair styling with our expert team. From precision cuts to vibrant colors, 
            we create looks that reflect your unique personality and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => {
                console.log("Book appointment clicked from hero");
                onBookNow?.();
              }}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg border-0"
              data-testid="button-hero-book-now"
            >
              Book Your Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => {
                console.log("View services clicked from hero");
                onViewServices?.();
              }}
              variant="outline"
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md font-semibold px-8 py-4 text-lg"
              data-testid="button-hero-view-services"
            >
              View Our Services
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5★</div>
              <div className="text-white/70">Average Rating</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}