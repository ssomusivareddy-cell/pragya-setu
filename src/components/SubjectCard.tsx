import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Star, PlayCircle } from "lucide-react";

interface SubjectCardProps {
  title: string;
  titleHindi: string;
  description: string;
  progress: number;
  icon: string;
  totalLessons: number;
  completedLessons: number;
  estimatedTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const SubjectCard = ({
  title,
  titleHindi,
  description,
  progress,
  icon,
  totalLessons,
  completedLessons,
  estimatedTime,
  difficulty
}: SubjectCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Easy": return "text-learning-green";
      case "Medium": return "text-warning";
      case "Hard": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 shadow-card hover:shadow-float transition-smooth border-l-4 border-l-primary">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-warm flex-shrink-0">
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <span className="text-sm text-muted-foreground">• {titleHindi}</span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {estimatedTime}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3" />
              <span className={getDifficultyColor(difficulty)}>{difficulty}</span>
            </div>
            <div>
              {completedLessons}/{totalLessons} lessons
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            
            <div className="flex gap-2 pt-2">
              <Button variant="learning" size="sm" className="flex-1">
                <PlayCircle className="h-4 w-4" />
                Continue Learning
              </Button>
              <Button variant="outline" size="sm">
                Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};