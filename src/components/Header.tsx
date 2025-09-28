import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Menu, User, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleNotificationClick = () => {
    // First notification
    toast({
      title: "🎉 Welcome Back!",
      description: "You have 3 new lessons available in Mathematics. Continue your learning journey!",
    });
    
    // Second notification with a slight delay
    setTimeout(() => {
      toast({
        title: "📚 Study Group Invitation",
        description: "Join the Physics study group for tomorrow's discussion on Newton's Laws. 5 members waiting!",
      });
    }, 1000);
  };

  return (
    <header className="bg-card shadow-card border-b border-border px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">
              Education <span className="text-primary">AI</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="warm" size="sm" className="hidden sm:flex">
            <Globe className="h-4 w-4" />
            English
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={handleNotificationClick}>
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              2
            </Badge>
          </Button>
          
          <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                    <AvatarFallback className="bg-primary text-white font-semibold text-lg">
                      SS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">S Somusivareddy</h2>
                    <p className="text-sm text-muted-foreground">Student</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">Subjects Enrolled</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">Completed Lessons</span>
                  <Badge variant="secondary">47</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">Study Groups</span>
                  <Badge variant="secondary">2</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">Learning Streak</span>
                  <Badge className="bg-primary">12 days 🔥</Badge>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};