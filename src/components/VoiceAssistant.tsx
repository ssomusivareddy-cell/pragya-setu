import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Volume2, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const VoiceAssistant = () => {
  const { toast } = useToast();
  const [isListening, setIsListening] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleVoiceAssistant = () => {
    if (!isActive) {
      setIsActive(true);
      toast({
        title: "🎤 Voice Assistant Activated",
        description: "Hello! I'm your AI learning companion. Ask me about lessons, get help with problems, or practice pronunciation. I can explain concepts in English or regional languages!",
      });
    } else {
      setIsActive(false);
      setIsListening(false);
      toast({
        title: "🔇 Voice Assistant Deactivated",
        description: "Voice assistant is now off. Click the microphone button anytime to reactivate and get voice-powered learning help!",
      });
    }
  };

  const handleStartListening = () => {
    if (!isActive) {
      toast({
        title: "🎤 Activate Voice Assistant First",
        description: "Please activate the voice assistant before starting to listen. Click the 'Activate Voice Assistant' button first.",
      });
      return;
    }

    setIsListening(!isListening);
    if (!isListening) {
      toast({
        title: "🎧 Listening...",
        description: "I'm listening! Ask me: 'Explain fractions', 'Help with homework', 'Practice English pronunciation', or 'Quiz me on science topics'.",
      });
    } else {
      toast({
        title: "🔇 Stopped Listening",
        description: "I've stopped listening. Click the microphone again when you're ready to ask questions or need help with your studies!",
      });
    }
  };

  const handleTextToSpeech = () => {
    if (!isActive) {
      toast({
        title: "🎤 Activate Voice Assistant First",
        description: "Please activate the voice assistant to use text-to-speech features for lesson narration and explanations.",
      });
      return;
    }

    toast({
      title: "🔊 Text-to-Speech Active",
      description: "I can now read lessons aloud, explain concepts verbally, and help with pronunciation practice. Perfect for audio learners and accessibility!",
    });
  };

  const handleVoiceHelp = () => {
    toast({
      title: "🆘 Voice Assistant Help",
      description: "Voice commands: 'Explain [topic]', 'Quiz me on [subject]', 'Read this lesson', 'Help with homework', 'Practice pronunciation', 'Switch to [language]'. Available in multiple languages!",
    });
  };

  return (
    <Card className="p-6 max-w-md mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
            isActive ? 'bg-gradient-primary animate-pulse' : 'bg-muted'
          }`}>
            <MessageCircle className={`h-8 w-8 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            AI Voice Assistant
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your personal learning companion with voice interaction, explanation, and multilingual support
          </p>
        </div>

        <div className="space-y-3">
          <Button 
            variant={isActive ? "destructive" : "hero"} 
            className="w-full" 
            onClick={handleVoiceAssistant}
          >
            <MessageCircle className="h-4 w-4" />
            {isActive ? "Deactivate Assistant" : "Activate Voice Assistant"}
          </Button>

          <div className="grid grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleStartListening}
              disabled={!isActive}
              className={isListening ? "bg-primary/20" : ""}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleTextToSpeech}
              disabled={!isActive}
            >
              <Volume2 className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleVoiceHelp}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center justify-between">
              <span>Voice Commands:</span>
              <span className={isActive ? "text-learning-green" : "text-muted-foreground"}>
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Listening:</span>
              <span className={isListening ? "text-learning-green" : "text-muted-foreground"}>
                {isListening ? "On" : "Off"}
              </span>
            </div>
          </div>
        </div>

        {isActive && (
          <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs text-foreground">
              💡 <strong>Try saying:</strong> "Explain photosynthesis", "Quiz me on math", 
              "Read this lesson aloud", or "Switch to Telugu"
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};