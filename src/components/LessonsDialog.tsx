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
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, CheckCircle, Lock, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LessonsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LessonsDialog = ({ open, onOpenChange }: LessonsDialogProps) => {
  const { toast } = useToast();

  const lessons = [
    {
      id: 1,
      title: "Introduction to Numbers",
      description: "Learn about natural numbers, whole numbers, and basic operations",
      duration: "15 min",
      completed: true,
      progress: 100,
      topics: ["Number Systems", "Basic Operations", "Place Value"]
    },
    {
      id: 2,
      title: "Addition and Subtraction",
      description: "Master the fundamentals of adding and subtracting numbers",
      duration: "20 min",
      completed: true,
      progress: 100,
      topics: ["Addition Rules", "Subtraction Methods", "Word Problems"]
    },
    {
      id: 3,
      title: "Multiplication Tables",
      description: "Learn multiplication tables from 1 to 12 with interactive exercises",
      duration: "25 min",
      completed: false,
      progress: 65,
      topics: ["Times Tables", "Patterns", "Quick Methods"]
    },
    {
      id: 4,
      title: "Division Basics",
      description: "Understand division as the inverse of multiplication",
      duration: "22 min",
      completed: false,
      progress: 0,
      topics: ["Division Facts", "Long Division", "Remainders"],
      locked: false
    },
    {
      id: 5,
      title: "Fractions Introduction",
      description: "Learn about parts of a whole and fraction notation",
      duration: "30 min",
      completed: false,
      progress: 0,
      topics: ["Fraction Notation", "Equivalent Fractions", "Comparing Fractions"],
      locked: true
    }
  ];

  const handleStartLesson = (lesson: any) => {
    if (lesson.locked) {
      toast({
        title: "🔒 Lesson Locked",
        description: "Complete previous lessons to unlock this content. Stay on track with your learning path!",
      });
      return;
    }

    toast({
      title: `📚 Starting: ${lesson.title}`,
      description: `Get ready for an interactive ${lesson.duration} lesson! This lesson covers ${lesson.topics.join(', ')}.`,
    });
  };

  const handleContinueLesson = (lesson: any) => {
    toast({
      title: `⏯️ Continue: ${lesson.title}`,
      description: `Resume from where you left off. You're ${lesson.progress}% complete with this lesson.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Mathematics Lessons
          </DialogTitle>
          <DialogDescription>
            Interactive lessons designed to build your math skills step by step
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-6">
          {lessons.map((lesson, index) => (
            <Card key={lesson.id} className={`p-6 transition-smooth ${lesson.locked ? 'opacity-60' : 'hover:shadow-card'}`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  lesson.completed ? 'bg-gradient-success' : 
                  lesson.progress > 0 ? 'bg-gradient-primary' :
                  lesson.locked ? 'bg-muted' : 'bg-gradient-secondary'
                }`}>
                  {lesson.completed ? (
                    <CheckCircle className="h-6 w-6 text-white" />
                  ) : lesson.locked ? (
                    <Lock className="h-6 w-6 text-muted-foreground" />
                  ) : (
                    <span className="text-white font-bold">{lesson.id}</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {lesson.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {lesson.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {lesson.progress > 0 && !lesson.completed && (
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{lesson.progress}%</span>
                      </div>
                      <Progress value={lesson.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex gap-2">
                    {lesson.completed ? (
                      <Button variant="outline" size="sm" onClick={() => handleStartLesson(lesson)}>
                        <PlayCircle className="h-4 w-4" />
                        Review Lesson
                      </Button>
                    ) : lesson.progress > 0 ? (
                      <Button variant="learning" size="sm" onClick={() => handleContinueLesson(lesson)}>
                        <PlayCircle className="h-4 w-4" />
                        Continue ({lesson.progress}%)
                      </Button>
                    ) : (
                      <Button 
                        variant={lesson.locked ? "outline" : "learning"} 
                        size="sm" 
                        onClick={() => handleStartLesson(lesson)}
                        disabled={lesson.locked}
                      >
                        {lesson.locked ? (
                          <>
                            <Lock className="h-4 w-4" />
                            Locked
                          </>
                        ) : (
                          <>
                            <PlayCircle className="h-4 w-4" />
                            Start Lesson
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-sm text-center text-foreground">
            🎯 <strong>Learning Path:</strong> Complete lessons in order to unlock advanced topics. 
            Each lesson builds on previous knowledge for optimal learning.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};