import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Menu, User, Globe, Languages } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleNotificationClick = () => {
    // First notification
    toast({
      title: t('notification.welcome'),
      description: t('notification.welcomeDesc'),
    });
    
    // Second notification with a slight delay
    setTimeout(() => {
      toast({
        title: t('notification.studyGroup'),
        description: t('notification.studyGroupDesc'),
      });
    }, 1000);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
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
              {t('header.title')}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32 h-8">
              <Languages className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="te">తెలుగు</SelectItem>
              <SelectItem value="hi">हिंदी</SelectItem>
            </SelectContent>
          </Select>
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
                    <h2 className="text-xl font-bold">{t('profile.name')}</h2>
                    <p className="text-sm text-muted-foreground">{t('profile.role')}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{t('profile.enrolled')}</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{t('profile.completed')}</span>
                  <Badge variant="secondary">47</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{t('profile.groups')}</span>
                  <Badge variant="secondary">2</Badge>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{t('profile.streak')}</span>
                  <Badge className="bg-primary">12 {t('profile.days')} 🔥</Badge>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};