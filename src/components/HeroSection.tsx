import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle, Users, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import { useToast } from "@/hooks/use-toast";
import { SubjectSelectionDialog } from "./SubjectSelectionDialog";
import { LessonsDialog } from "./LessonsDialog";
import { QuizDialog } from "./QuizDialog";
import { useState } from "react";

export const HeroSection = () => {
  const { toast } = useToast();
  const [subjectDialogOpen, setSubjectDialogOpen] = useState(false);
  const [lessonsDialogOpen, setLessonsDialogOpen] = useState(false);
  const [quizDialogOpen, setQuizDialogOpen] = useState(false);

  const handleStartLearning = () => {
    setSubjectDialogOpen(true);
  };

  const handleJoinStudyGroup = () => {
    toast({
      title: "👥 Join Study Group",
      description: "Connect with classmates for collaborative learning! Share notes, discuss topics, and learn together even when offline. Groups are organized by subject and grade level.",
    });
  };

  const handleTrackProgress = () => {
    toast({
      title: "📊 Track Progress",
      description: "View your learning analytics! See completed lessons, time spent studying, skill improvements, and personalized recommendations for your learning path.",
    });
  };

  const handleGetHelp = () => {
    toast({
      title: "🆘 Get Help",
      description: "Our support team is ready to help! Contact us via phone (+91-9876543210), WhatsApp, or email for learning assistance, technical support, or parent guidance.",
    });
  };

  const handleDownloadContent = () => {
    toast({
      title: "📱 Download Content",
      description: "Download lessons for offline study! Access video lessons, practice exercises, and study materials even without internet connection. Perfect for remote learning.",
    });
  };

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
              <Button variant="hero" size="lg" className="text-lg px-8" onClick={handleStartLearning}>
                <PlayCircle className="h-5 w-5" />
                Start Learning
              </Button>
              <Button variant="learning" size="lg" className="text-lg px-8" onClick={handleJoinStudyGroup}>
                <Users className="h-5 w-5" />
                Join Study Group
              </Button>
            </div>

            {/* Additional Learning Options */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" className="text-sm" onClick={() => setLessonsDialogOpen(true)}>
                View Lessons
              </Button>
              <Button variant="outline" className="text-sm" onClick={() => setQuizDialogOpen(true)}>
                Take Quiz
              </Button>
              <Button variant="outline" className="text-sm" onClick={handleTrackProgress}>
                Track Progress
              </Button>
              <Button variant="outline" className="text-sm" onClick={handleGetHelp}>
                Get Help
              </Button>
              <Button variant="outline" className="text-sm" onClick={handleDownloadContent}>
                Download Content
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

      {/* Dialogs */}
      <SubjectSelectionDialog 
        open={subjectDialogOpen} 
        onOpenChange={setSubjectDialogOpen} 
      />
      <LessonsDialog 
        open={lessonsDialogOpen} 
        onOpenChange={setLessonsDialogOpen} 
      />
      <QuizDialog 
        open={quizDialogOpen} 
        onOpenChange={setQuizDialogOpen} 
      />
    </section>
  );
};