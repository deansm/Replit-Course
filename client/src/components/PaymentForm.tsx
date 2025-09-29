import { useState } from "react";
import { CreditCard, Lock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GlassCard from "./GlassCard";

interface PaymentFormProps {
  amount: number;
  serviceName: string;
  onPayment?: (paymentData: any) => void;
  onCancel?: () => void;
}

export default function PaymentForm({ 
  amount, 
  serviceName, 
  onPayment, 
  onCancel 
}: PaymentFormProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: "",
    billingAddress: ""
  });

  const months = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 10}, (_, i) => (currentYear + i).toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment submitted:", paymentData);
    onPayment?.(paymentData);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <GlassCard intensity="heavy" className="p-8 max-w-lg w-full">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="h-6 w-6 text-white" />
          <h2 className="text-2xl font-bold text-white">Secure Payment</h2>
          <Lock className="h-4 w-4 text-green-400 ml-auto" />
        </div>

        {/* Order Summary */}
        <div className="bg-white/10 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-white mb-2">Order Summary</h3>
          <div className="flex justify-between items-center">
            <span className="text-white/80">{serviceName}</span>
            <span className="text-white font-semibold" data-testid="text-payment-amount">${amount}</span>
          </div>
          <div className="border-t border-white/20 mt-2 pt-2 flex justify-between items-center font-semibold text-white">
            <span>Total</span>
            <span>${amount}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardholderName" className="text-white">Cardholder Name</Label>
            <Input
              id="cardholderName"
              value={paymentData.cardholderName}
              onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
              className="bg-white/10 border-white/30 text-white placeholder-white/60"
              placeholder="Name on card"
              data-testid="input-cardholder-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber" className="text-white">Card Number</Label>
            <Input
              id="cardNumber"
              value={paymentData.cardNumber}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                if (formatted.length <= 19) {
                  setPaymentData({...paymentData, cardNumber: formatted});
                }
              }}
              className="bg-white/10 border-white/30 text-white placeholder-white/60"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              data-testid="input-card-number"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-white">Month</Label>
              <Select value={paymentData.expiryMonth} onValueChange={(value) => setPaymentData({...paymentData, expiryMonth: value})}>
                <SelectTrigger className="bg-white/10 border-white/30 text-white" data-testid="select-expiry-month">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Year</Label>
              <Select value={paymentData.expiryYear} onValueChange={(value) => setPaymentData({...paymentData, expiryYear: value})}>
                <SelectTrigger className="bg-white/10 border-white/30 text-white" data-testid="select-expiry-year">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv" className="text-white">CVV</Label>
              <Input
                id="cvv"
                value={paymentData.cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 4) {
                    setPaymentData({...paymentData, cvv: value});
                  }
                }}
                className="bg-white/10 border-white/30 text-white placeholder-white/60"
                placeholder="123"
                maxLength={4}
                data-testid="input-cvv"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="billingAddress" className="text-white">Billing Address</Label>
            <Input
              id="billingAddress"
              value={paymentData.billingAddress}
              onChange={(e) => setPaymentData({...paymentData, billingAddress: e.target.value})}
              className="bg-white/10 border-white/30 text-white placeholder-white/60"
              placeholder="123 Main St, City, State 12345"
              data-testid="input-billing-address"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button"
              onClick={() => {
                console.log("Payment cancelled");
                onCancel?.();
              }}
              variant="ghost"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/30"
              data-testid="button-cancel-payment"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-green-600/80 hover:bg-green-600 text-white border border-green-500/50 font-semibold"
              data-testid="button-submit-payment"
            >
              Pay ${amount}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-white/60 text-sm">
          <Lock className="h-3 w-3 inline mr-1" />
          Your payment information is secure and encrypted
        </div>
      </GlassCard>
    </div>
  );
}