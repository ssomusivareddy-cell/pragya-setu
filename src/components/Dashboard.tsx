import { SubjectCard } from "./SubjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Target, Users, Mic, BookOpen } from "lucide-react";
import mathIcon from "@/assets/math-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import englishIcon from "@/assets/english-icon.jpg";
import { useToast } from "@/hooks/use-toast";

export const Dashboard = () => {
  const { toast } = useToast();
  const subjects = [
    {
      title: "Mathematics",
      description: "Learn algebra, geometry, and problem-solving skills adapted to your pace",
      progress: 68,
      icon: mathIcon,
      totalLessons: 45,
      completedLessons: 31,
      estimatedTime: "25 min",
      difficulty: "Medium" as const
    },
    {
      title: "Science",
      description: "Explore physics, chemistry, and biology through interactive experiments",
      progress: 45,
      icon: scienceIcon,
      totalLessons: 38,
      completedLessons: 17,
      estimatedTime: "30 min",
      difficulty: "Easy" as const
    },
    {
      title: "English",
      description: "Improve reading, writing, and communication skills with voice practice",
      progress: 72,
      icon: englishIcon,
      totalLessons: 32,
      completedLessons: 23,
      estimatedTime: "20 min",
      difficulty: "Easy" as const
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Welcome back, Somu! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to continue your learning journey? Let's make today count!
          </p>
        </div>
        <Button variant="hero" className="hidden md:flex" onClick={() => toast({ title: "🎤 Voice Assistant", description: "AI voice assistant activated! Ask questions, get explanations, practice pronunciation, and learn interactively in your preferred language." })}>
          <Mic className="h-4 w-4" />
          Voice Assistant
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-success text-white">
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8" />
            <div>
              <p className="text-sm opacity-90">This Week</p>
              <p className="text-2xl font-bold">12 Lessons</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-secondary text-white">
          <div className="flex items-center gap-3">
            <Target className="h-8 w-8" />
            <div>
              <p className="text-sm opacity-90">Streak</p>
              <p className="text-2xl font-bold">7 Days</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-primary text-white">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8" />
            <div>
              <p className="text-sm opacity-90">Total Progress</p>
              <p className="text-2xl font-bold">62%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 bg-gradient-warm text-foreground border border-saffron/20">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-saffron" />
            <div>
              <p className="text-sm text-muted-foreground">Study Group</p>
              <p className="text-2xl font-bold">8 Friends</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Today's Learning Plan</h2>
          <Badge variant="secondary" className="ml-auto">3 subjects</Badge>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" onClick={() => toast({ title: "🎤 Practice Speaking", description: "AI voice coach activated! Practice pronunciation, speaking exercises, and get real-time feedback on your communication skills." })}>
          <Mic className="h-4 w-4" />
          Practice Speaking
        </Button>
        <Button variant="outline" size="sm" onClick={() => toast({ title: "📚 Study with Friends", description: "Join collaborative study sessions! Connect with 8 friends in your study group for group discussions, shared notes, and peer learning." })}>
          📚 Study with Friends
        </Button>
        <Button variant="outline" size="sm" onClick={() => toast({ title: "🏆 View Achievements", description: "See your learning milestones! 12 badges earned, 7-day streak maintained, and 62% overall progress across all subjects." })}>
          🏆 View Achievements
        </Button>
        <Button variant="outline" size="sm" onClick={() => toast({ title: "📊 Parent Report", description: "Weekly progress report ready! Share your learning achievements, time spent studying, and areas of improvement with parents and teachers." })}>
          📊 Parent Report
        </Button>
      </div>
    </div>
  );
};