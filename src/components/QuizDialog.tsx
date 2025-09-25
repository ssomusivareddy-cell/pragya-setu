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
import { CheckCircle, XCircle, Clock, Trophy, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface QuizDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuizDialog = ({ open, onOpenChange }: QuizDialogProps) => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is 15 + 27?",
      options: ["40", "41", "42", "43"],
      correctAnswer: 2,
      explanation: "15 + 27 = 42. Add the ones place: 5 + 7 = 12, write 2 and carry 1. Add the tens: 1 + 2 + 1 = 4."
    },
    {
      id: 2,
      question: "Which of these is a prime number?",
      options: ["12", "15", "17", "21"],
      correctAnswer: 2,
      explanation: "17 is prime because it can only be divided by 1 and itself without remainder."
    },
    {
      id: 3,
      question: "What is 8 × 7?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 1,
      explanation: "8 × 7 = 56. You can think of it as 8 × (10 - 3) = 80 - 24 = 56."
    },
    {
      id: 4,
      question: "What fraction is equivalent to 0.5?",
      options: ["1/3", "1/2", "2/3", "3/4"],
      correctAnswer: 1,
      explanation: "0.5 = 5/10 = 1/2. Half of something is represented by 1/2."
    },
    {
      id: 5,
      question: "If a triangle has angles of 60°, 60°, and ?, what is the missing angle?",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: 2,
      explanation: "All angles in a triangle sum to 180°. So 60° + 60° + ? = 180°, which means ? = 60°. This is an equilateral triangle."
    }
  ];

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const finishQuiz = () => {
    const score = calculateScore();
    toast({
      title: `🎯 Quiz Complete!`,
      description: `You scored ${score.correct}/${score.total} (${score.percentage}%). ${score.percentage >= 80 ? 'Excellent work!' : score.percentage >= 60 ? 'Good job! Keep practicing.' : 'Keep learning and try again!'}`,
    });
    onOpenChange(false);
    resetQuiz();
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              <Trophy className="h-6 w-6 text-warning" />
              Quiz Results
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {score.percentage}%
              </div>
              <p className="text-lg text-muted-foreground">
                You got {score.correct} out of {score.total} questions correct
              </p>
            </div>

            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <Card key={question.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCorrect ? 'bg-gradient-success' : 'bg-destructive'
                      }`}>
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-white" />
                        ) : (
                          <XCircle className="h-5 w-5 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-2">
                          Q{index + 1}: {question.question}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="text-muted-foreground">Your answer:</span>{" "}
                            <span className={isCorrect ? 'text-success' : 'text-destructive'}>
                              {question.options[userAnswer]}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p>
                              <span className="text-muted-foreground">Correct answer:</span>{" "}
                              <span className="text-success">
                                {question.options[question.correctAnswer]}
                              </span>
                            </p>
                          )}
                          <p className="text-muted-foreground italic">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={resetQuiz}>
                Retake Quiz
              </Button>
              <Button variant="learning" onClick={finishQuiz}>
                Finish
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Mathematics Quiz
          </DialogTitle>
          <DialogDescription>
            Test your knowledge with these interactive questions
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>No time limit</span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {currentQ.question}
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`p-4 text-left rounded-lg border transition-smooth ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary text-white'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <CheckCircle className="h-4 w-4" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            <Button
              variant="learning"
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};