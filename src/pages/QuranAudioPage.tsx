import { useState } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Pause, Volume2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const QuranAudioPage = () => {
  const [selectedReciter, setSelectedReciter] = useState("mishary");
  const [selectedSurah, setSelectedSurah] = useState("1");
  const [isPlaying, setIsPlaying] = useState(false);

  const reciters = [
    { id: "mishary", name: "Mishary Rashid Alafasy", country: "Kuwait" },
    { id: "sudais", name: "Sheikh Abdul Rahman Al-Sudais", country: "Saudi Arabia" },
    { id: "shuraim", name: "Sheikh Saud Al-Shuraim", country: "Saudi Arabia" },
    { id: "ajmi", name: "Ahmed ibn Ali al-Ajmi", country: "Saudi Arabia" },
    { id: "husary", name: "Mahmoud Khalil Al-Husary", country: "Egypt" },
    { id: "minshawi", name: "Mohamed Siddiq El-Minshawi", country: "Egypt" },
    { id: "ghamdi", name: "Saad bin Said Al-Ghamdi", country: "Saudi Arabia" },
    { id: "basfar", name: "Abdullah Basfar", country: "Saudi Arabia" }
  ];

  const surahs = [
    { id: 1, name: "Al-Fatihah", arabic: "الفاتحة", verses: 7 },
    { id: 2, name: "Al-Baqarah", arabic: "البقرة", verses: 286 },
    { id: 3, name: "Aal-E-Imran", arabic: "آل عمران", verses: 200 },
    { id: 4, name: "An-Nisa", arabic: "النساء", verses: 176 },
    { id: 5, name: "Al-Maidah", arabic: "المائدة", verses: 120 },
    { id: 6, name: "Al-An'am", arabic: "الأنعام", verses: 165 },
    { id: 7, name: "Al-A'raf", arabic: "الأعراف", verses: 206 },
    { id: 8, name: "Al-Anfal", arabic: "الأنفال", verses: 75 },
    { id: 9, name: "At-Tawbah", arabic: "التوبة", verses: 129 },
    { id: 10, name: "Yunus", arabic: "يونس", verses: 109 },
    // Continue with more surahs...
    { id: 67, name: "Al-Mulk", arabic: "الملك", verses: 30 },
    { id: 78, name: "An-Naba", arabic: "النبأ", verses: 40 },
    { id: 79, name: "An-Nazi'at", arabic: "النازعات", verses: 46 },
    { id: 80, name: "Abasa", arabic: "عبس", verses: 42 },
    { id: 114, name: "An-Nas", arabic: "الناس", verses: 6 }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Audio implementation would go here
  };

  return (
    <FeatureLayout 
      title="Quran Audio" 
      icon={<Volume2 className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Listen to Quran Recitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Reciter Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Choose Reciter</label>
              <Select value={selectedReciter} onValueChange={setSelectedReciter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reciters.map((reciter) => (
                    <SelectItem key={reciter.id} value={reciter.id}>
                      {reciter.name} ({reciter.country})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Surah Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Choose Surah</label>
              <Select value={selectedSurah} onValueChange={setSelectedSurah}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-40">
                    {surahs.map((surah) => (
                      <SelectItem key={surah.id} value={surah.id.toString()}>
                        {surah.id}. {surah.name} - {surah.arabic} ({surah.verses} verses)
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>

            {/* Audio Player */}
            <div className="bg-islamic-sage/10 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {surahs.find(s => s.id.toString() === selectedSurah)?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Recited by {reciters.find(r => r.id === selectedReciter)?.name}
                  </p>
                </div>
                <Button onClick={handlePlayPause} size="lg" className="rounded-full">
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-islamic-primary h-2 rounded-full" style={{ width: "30%" }}></div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>2:15</span>
                <span>7:42</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>High-quality audio recordings from renowned Quran reciters from around the world. 
              Perfect for daily listening, memorization, and spiritual reflection.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default QuranAudioPage;