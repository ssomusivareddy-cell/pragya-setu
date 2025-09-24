import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle, Users, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning with technology" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-warm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Personalized</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Learning
                </span>
                <br />
                <span className="text-foreground">for Every Student</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Empowering rural and government schools across India with adaptive learning technology that works offline and adapts to every student's unique needs.
              </p>
              
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span>🌟 Designed for</span>
                <span className="font-medium text-primary">Government Schools & Rural Areas</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <PlayCircle className="h-5 w-5" />
                Start Learning
              </Button>
              <Button variant="learning" size="lg" className="text-lg px-8">
                <Users className="h-5 w-5" />
                Join Study Group
              </Button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">Works Offline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">AI Adaptive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">E</span>
                </div>
                <span className="text-sm font-medium">Multilingual</span>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="space-y-4">
            <Card className="p-6 shadow-float bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Adaptive Learning Path</h3>
                  <p className="text-sm text-muted-foreground">
                    AI analyzes your learning style and creates personalized content that adapts to your pace and understanding.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-float bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Peer Learning Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with classmates, join study groups, and learn together even in offline environments.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-float bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Offline First Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Full functionality works without internet. Sync progress when connection is available.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};