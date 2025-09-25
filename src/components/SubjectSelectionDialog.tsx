import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import mathIcon from "@/assets/math-icon.jpg";
import scienceIcon from "@/assets/science-icon.jpg";
import englishIcon from "@/assets/english-icon.jpg";
import { useToast } from "@/hooks/use-toast";

interface SubjectSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SubjectSelectionDialog = ({ open, onOpenChange }: SubjectSelectionDialogProps) => {
  const { toast } = useToast();

  const subjects = [
    {
      title: "Mathematics",
      description: "Master algebra, geometry, and problem-solving with AI-powered adaptive learning",
      icon: mathIcon,
      totalLessons: 45,
      completedLessons: 31,
      estimatedTime: "25 min/lesson",
      difficulty: "Medium",
      students: "2.5K+ students",
      color: "bg-gradient-secondary"
    },
    {
      title: "Science",
      description: "Explore physics, chemistry, and biology through interactive experiments",
      icon: scienceIcon,
      totalLessons: 38,
      completedLessons: 17,
      estimatedTime: "30 min/lesson",
      difficulty: "Easy",
      students: "1.8K+ students",
      color: "bg-gradient-success"
    },
    {
      title: "English",
      description: "Improve reading, writing, and communication skills with voice practice",
      icon: englishIcon,
      totalLessons: 32,
      completedLessons: 23,
      estimatedTime: "20 min/lesson",
      difficulty: "Easy",
      students: "3.2K+ students",
      color: "bg-gradient-primary"
    }
  ];

  const handleSelectSubject = (subject: string) => {
    toast({
      title: `🎯 Starting ${subject}`,
      description: `Welcome to ${subject}! Your personalized learning path has been created. Let's begin with fundamentals and build up your skills step by step.`,
    });
    onOpenChange(false);
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Easy": return "text-learning-green";
      case "Medium": return "text-warning";
      case "Hard": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Choose Your Subject</DialogTitle>
          <DialogDescription className="text-center">
            Select a subject to start your personalized learning journey
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {subjects.map((subject, index) => (
            <Card key={index} className="p-6 hover:shadow-float transition-smooth cursor-pointer">
              <div className="text-center space-y-4">
                <div className={`w-20 h-20 rounded-full ${subject.color} mx-auto flex items-center justify-center`}>
                  <img src={subject.icon} alt={subject.title} className="w-12 h-12 rounded-full object-cover" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{subject.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{subject.description}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{subject.totalLessons} lessons</span>
                    </div>
                    <Badge variant="outline" className={getDifficultyColor(subject.difficulty)}>
                      {subject.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{subject.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="text-xs">{subject.students}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  variant="learning"
                  onClick={() => handleSelectSubject(subject.title)}
                >
                  Start {subject.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            💡 <strong>Tip:</strong> All subjects work offline and adapt to your learning pace. 
            You can switch between subjects anytime!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};