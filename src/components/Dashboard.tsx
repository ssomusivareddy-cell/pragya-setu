import { SubjectCard } from "./SubjectCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Target, Users, Mic, BookOpen } from "lucide-react";
import mathIcon from "@/assets/math-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import englishIcon from "@/assets/english-icon.jpg";

export const Dashboard = () => {
  const subjects = [
    {
      title: "Mathematics",
      titleHindi: "गणित",
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
      titleHindi: "विज्ञान",
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
      titleHindi: "अंग्रेजी",
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
        <Button variant="hero" className="hidden md:flex">
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
        <Button variant="outline" size="sm">
          <Mic className="h-4 w-4" />
          Practice Speaking
        </Button>
        <Button variant="outline" size="sm">
          📚 Study with Friends
        </Button>
        <Button variant="outline" size="sm">
          🏆 View Achievements
        </Button>
        <Button variant="outline" size="sm">
          📊 Parent Report
        </Button>
      </div>
    </div>
  );
};