import { Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  specialties: string[];
  yearsExperience: number;
  onBookWith?: () => void;
}

export default function TeamMember({
  name,
  title,
  image,
  rating,
  specialties,
  yearsExperience,
  onBookWith
}: TeamMemberProps) {
  return (
    <GlassCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-1" data-testid={`text-stylist-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {name}
      </h3>
      
      <p className="text-white/70 mb-3">{title}</p>
      
      <div className="flex items-center justify-center gap-1 mb-3">
        {Array.from({length: 5}).map((_, i) => (
          <Star 
            key={i}
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
          />
        ))}
        <span className="text-white/80 ml-1 text-sm">({rating}.0)</span>
      </div>
      
      <div className="mb-4">
        <p className="text-white/60 text-sm mb-2">{yearsExperience} years experience</p>
        <div className="flex flex-wrap gap-1 justify-center">
          {specialties.map((specialty, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-white/20 rounded-full text-xs text-white"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
      
      <Button 
        onClick={() => {
          console.log(`Booking with ${name}`);
          onBookWith?.();
        }}
        className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
        data-testid={`button-book-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Calendar className="h-4 w-4 mr-2" />
        Book with {name.split(' ')[0]}
      </Button>
    </GlassCard>
  );
}