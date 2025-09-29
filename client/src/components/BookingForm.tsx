import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlassCard from "./GlassCard";

interface BookingFormProps {
  onSubmit?: (data: any) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const services = [
    "Hair Cut & Style - $65",
    "Color Treatment - $150", 
    "Highlights - $120",
    "Hair Wash & Blowdry - $45",
    "Deep Conditioning - $35"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    onSubmit?.(formData);
  };

  return (
    <GlassCard intensity="medium" className="p-8 max-w-md w-full">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-6 w-6 text-white" />
        <h2 className="text-2xl font-bold text-white">Book Appointment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-white/10 border-white/30 text-white placeholder-white/60"
            placeholder="Enter your full name"
            data-testid="input-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="bg-white/10 border-white/30 text-white placeholder-white/60"
            placeholder="your@email.com"
            data-testid="input-email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="bg-white/10 border-white/30 text-white placeholder-white/60"
            placeholder="(555) 123-4567"
            data-testid="input-phone"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-white">Service</Label>
          <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
            <SelectTrigger className="bg-white/10 border-white/30 text-white" data-testid="select-service">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-white">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="bg-white/10 border-white/30 text-white"
              data-testid="input-date"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white">Time</Label>
            <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
              <SelectTrigger className="bg-white/10 border-white/30 text-white" data-testid="select-time">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>{time}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-white">Special Requests</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            className="bg-white/10 border-white/30 text-white placeholder-white/60"
            placeholder="Any special requests or notes..."
            rows={3}
            data-testid="input-notes"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold"
          data-testid="button-submit-booking"
        >
          Book Appointment
        </Button>
      </form>
    </GlassCard>
  );
}