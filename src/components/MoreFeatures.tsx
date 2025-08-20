import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { 
  Grid3X3, 
  BookOpen, 
  Calendar, 
  Clock, 
  Heart,
  Star,
  Compass,
  DollarSign,
  Play,
  Gift,
  Volume2,
  Zap,
  Wind,
  Image,
  Table,
  Tv
} from "lucide-react";

const MoreFeatures = () => {
  const navigate = useNavigate();

  const features = [
    { id: "quran-audio", title: "Quran Audio", icon: Volume2, description: "Listen to Quran recitations", route: "/quran-audio" },
    { id: "18-surahs", title: "18 easiest Surahs", icon: BookOpen, description: "Short surahs for memorization", route: "/18-surahs" },
    { id: "hadiths", title: "Hadiths", icon: BookOpen, description: "Prophetic traditions", route: "/hadiths" },
    { id: "kalimas", title: "Kalimas", icon: Star, description: "Six fundamental beliefs", route: "/kalimas" },
    { id: "dua", title: "Dua", icon: Heart, description: "Islamic supplications", route: "/dua" },
    { id: "99-names", title: "99 Names of Allah", icon: Star, description: "Beautiful names of Allah", route: "/99-names" },
    { id: "calendar", title: "Calendar", icon: Calendar, description: "Islamic calendar", route: "/calendar" },
    { id: "prayer-schedule", title: "Prayer Schedule", icon: Clock, description: "Prayer times", route: "/prayer-schedule" },
    { id: "prayer-tracker", title: "Prayer Tracker", icon: Clock, description: "Track daily prayers", route: "/prayer-tracker" },
    { id: "islamic-fasting", title: "Islamic Fasting", icon: Calendar, description: "Fasting guidelines", route: "/islamic-fasting" },
    { id: "tasbih", title: "Tasbih", icon: Zap, description: "Digital prayer beads", route: "/tasbih" },
    { id: "breath", title: "Breath", icon: Wind, description: "Breathing exercises", route: "/breath" },
    { id: "qibla", title: "Qibla Direction", icon: Compass, description: "Find prayer direction", route: "/qibla" },
    { id: "zakat", title: "Zakat Calculator", icon: DollarSign, description: "Calculate charity", route: "/zakat" },
    { id: "benefits", title: "Benefits", icon: Star, description: "Islamic benefits", route: "/benefits" },
    { id: "5-pillars", title: "5 Pillars of Islam", icon: Star, description: "Fundamental pillars", route: "/5-pillars" },
    { id: "islamic-tv", title: "Live Islamic TV", icon: Tv, description: "Islamic channels", route: "/islamic-tv" },
    { id: "stories", title: "Islamic Stories", icon: BookOpen, description: "Inspirational stories", route: "/stories" },
    { id: "images", title: "Islamic Images", icon: Image, description: "Beautiful Islamic art", route: "/images" },
    { id: "salah-table", title: "Salah Rakat Table", icon: Table, description: "Prayer guide", route: "/salah-table" },
    { id: "adhan", title: "Play Adhan", icon: Play, description: "Call to prayer", route: "/adhan" },
    { id: "donate", title: "Donate", icon: Gift, description: "Support Islamic causes", route: "/donate" }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 border-islamic-sage hover:bg-islamic-sage/50">
          <Grid3X3 className="h-4 w-4 text-islamic-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-islamic-primary">
            All Islamic Features
          </DialogTitle>
          <p className="text-center text-muted-foreground">All Other Islamic Features and Resources</p>
        </DialogHeader>
        
        <ScrollArea className="h-[500px] w-full">
          <div className="grid grid-cols-3 gap-4 p-4">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.id} 
                  className="p-4 cursor-pointer hover:shadow-islamic transition-all hover:scale-105"
                  onClick={() => navigate(feature.route)}
                >
                  <CardContent className="flex flex-col items-center text-center p-0">
                    <div className="w-12 h-12 rounded-lg bg-islamic-sage/20 flex items-center justify-center mb-3">
                      <IconComponent className="h-6 w-6 text-islamic-primary" />
                    </div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MoreFeatures;