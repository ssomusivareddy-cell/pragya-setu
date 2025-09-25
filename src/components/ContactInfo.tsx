import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Users, HeadphonesIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactInfo = () => {
  const { toast } = useToast();

  const handleCall = () => {
    toast({
      title: "📞 Call Support",
      description: "Connecting to our education support team at +91-9876543210. Available Mon-Sat, 9 AM - 6 PM for assistance with learning, technical issues, and parent queries.",
    });
  };

  const handleWhatsApp = () => {
    toast({
      title: "💬 WhatsApp Support",
      description: "Opening WhatsApp chat with our support team. Get instant help with lessons, technical issues, or learning guidance. Available 24/7 for students and parents.",
    });
  };

  const handleEmail = () => {
    toast({
      title: "✉️ Email Support", 
      description: "Opening email to support@educationai.com. Send us your queries, feedback, or detailed questions. We'll respond within 24 hours with personalized assistance.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Need Help? We're Here for You!
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our education support team is dedicated to helping students, parents, and teachers 
          make the most of their learning journey. Get assistance in Hindi, English, and regional languages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Phone Support */}
        <Card className="p-6 hover:shadow-float transition-smooth">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto">
              <Phone className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium text-foreground">+91-9876543210</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 9 AM - 6 PM</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Users className="h-4 w-4" />
                  <span>Hindi, English, Regional</span>
                </div>
              </div>
            </div>
            
            <Button variant="learning" className="w-full" onClick={handleCall}>
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </div>
        </Card>

        {/* WhatsApp Support */}
        <Card className="p-6 hover:shadow-float transition-smooth">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <HeadphonesIcon className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp Chat</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium text-foreground">+91-9876543210</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Users className="h-4 w-4" />
                  <span>Instant Response</span>
                </div>
              </div>
            </div>
            
            <Button variant="hero" className="w-full" onClick={handleWhatsApp}>
              <HeadphonesIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </Card>

        {/* Email Support */}
        <Card className="p-6 hover:shadow-float transition-smooth">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="h-4 w-4" />
                  <span className="font-medium text-foreground">support@educationai.com</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="h-4 w-4" />
                  <span>Response in 24 hours</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Users className="h-4 w-4" />
                  <span>Detailed Solutions</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full" onClick={handleEmail}>
              <Mail className="h-4 w-4" />
              Send Email
            </Button>
          </div>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="mt-8 max-w-4xl mx-auto">
        <Card className="p-6 bg-primary/5 border border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Office Address
              </h4>
              <p className="text-sm text-muted-foreground">
                Education AI Learning Solutions<br />
                123, Technology Park, Sector 18<br />
                Gurugram, Haryana 122015<br />
                India
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">What We Help With</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Learning difficulties & subject doubts</li>
                <li>• Technical issues & app troubleshooting</li>
                <li>• Parent progress reports & guidance</li>
                <li>• Teacher training & integration support</li>
                <li>• Offline learning setup assistance</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};