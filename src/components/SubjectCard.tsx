import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Star, PlayCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface SubjectCardProps {
  title: string;
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
  description,
  progress,
  icon,
  totalLessons,
  completedLessons,
  estimatedTime,
  difficulty
}: SubjectCardProps) => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleContinueLearning = () => {
    toast({
      title: `📚 Continue ${title}`,
      description: `Resume your ${title} journey! You're ${progress}% complete with ${completedLessons} of ${totalLessons} lessons finished. Next lesson: Interactive exercises and practice problems.`,
    });
  };

  const handleReview = () => {
    const reviews = {
      Mathematics: {
        rating: 4.8,
        reviews: [
          { student: "Priya S.", comment: "Amazing interactive lessons! Math became so much clearer.", rating: 5 },
          { student: "Rahul K.", comment: "Step-by-step explanations helped me understand complex problems.", rating: 5 },
          { student: "Ananya M.", comment: "Great practice exercises and immediate feedback.", rating: 4 }
        ]
      },
      Science: {
        rating: 4.9,
        reviews: [
          { student: "Arjun P.", comment: "Virtual experiments are incredible! Love the interactive approach.", rating: 5 },
          { student: "Shreya L.", comment: "Complex concepts explained in simple terms.", rating: 5 },
          { student: "Vikram R.", comment: "Great visual demonstrations and real-world examples.", rating: 4 }
        ]
      },
      English: {
        rating: 4.7,
        reviews: [
          { student: "Kavya N.", comment: "Voice practice feature helped improve my pronunciation significantly.", rating: 5 },
          { student: "Rohan T.", comment: "Interactive reading exercises made learning enjoyable.", rating: 4 },
          { student: "Meera J.", comment: "Grammar lessons are well-structured and easy to follow.", rating: 5 }
        ]
      }
    };

    const subjectReviews = reviews[title as keyof typeof reviews] || { rating: 4.8, reviews: [] };
    
    toast({
      title: `⭐ ${title} Reviews (${subjectReviews.rating}/5)`,
      description: `${subjectReviews.reviews[0]?.comment || "Excellent learning experience!"} - ${subjectReviews.reviews[0]?.student || "Student"}. View all ${subjectReviews.reviews.length} reviews and student feedback.`,
    });
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
    <Card className="p-6 shadow-card hover:shadow-float transition-smooth border-l-4 border-l-primary">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-warm flex-shrink-0">
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
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
              <Button variant="learning" size="sm" className="flex-1" onClick={handleContinueLearning}>
                <PlayCircle className="h-4 w-4" />
                Continue Learning
              </Button>
              <Button variant="outline" size="sm" onClick={handleReview}>
                {t('subjects.review')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};