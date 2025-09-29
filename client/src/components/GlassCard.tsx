import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
}

export default function GlassCard({ 
  children, 
  className, 
  intensity = "medium" 
}: GlassCardProps) {
  const intensityClasses = {
    light: "bg-white/10 backdrop-blur-md border-white/20",
    medium: "bg-white/15 backdrop-blur-lg border-white/25", 
    heavy: "bg-white/20 backdrop-blur-xl border-white/30"
  };

  return (
    <div
      className={cn(
        "rounded-xl border shadow-lg",
        "transition-all duration-300 hover:bg-white/20 hover:shadow-xl",
        intensityClasses[intensity],
        className
      )}
    >
      {children}
    </div>
  );
}