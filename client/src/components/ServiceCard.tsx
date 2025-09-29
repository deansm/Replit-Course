import { Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price: number;
  imageUrl?: string;
  onBook?: () => void;
}

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  imageUrl,
  onBook
}: ServiceCardProps) {
  return (
    <GlassCard className="p-6 hover:scale-105 transition-transform duration-300">
      {imageUrl && (
        <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      
      <p className="text-white/80 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-white/70">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{duration}</span>
        </div>
        
        <div className="flex items-center gap-1 text-white font-semibold">
          <DollarSign className="h-4 w-4" />
          <span data-testid={`text-price-${title.toLowerCase().replace(/\s+/g, '-')}`}>{price}</span>
        </div>
      </div>
      
      <Button 
        onClick={() => {
          console.log(`Booking ${title} service`);
          onBook?.();
        }}
        className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
        data-testid={`button-book-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Book Now
      </Button>
    </GlassCard>
  );
}