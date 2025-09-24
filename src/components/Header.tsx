import { Button } from "@/components/ui/button";
import { Bell, Menu, User, Globe } from "lucide-react";

export const Header = () => {
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
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs flex items-center justify-center text-white">
              2
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};