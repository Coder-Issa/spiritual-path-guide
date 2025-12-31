import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Plus, Zap } from "lucide-react";

const dhikrOptions = [
  {
    arabic: "سُبْحَانَ اللَّهِ",
    transliteration: "Subhan Allah",
    translation: "Glory be to Allah",
    target: 33
  },
  {
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Alhamdulillah",
    translation: "All praise is due to Allah",
    target: 33
  },
  {
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translation: "Allah is the Greatest",
    target: 34
  },
  {
    arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    transliteration: "La ilaha illa Allah",
    translation: "There is no god but Allah",
    target: 100
  },
  {
    arabic: "اسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah",
    translation: "I seek forgiveness from Allah",
    target: 100
  },
];

const TasbihCounter = () => {
  const [count, setCount] = useState(0);
  const [selectedDhikr, setSelectedDhikr] = useState(dhikrOptions[0]);
  const [totalSessions, setTotalSessions] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const reset = () => {
    if (count > 0) {
      setTotalSessions(prev => prev + 1);
    }
    setCount(0);
  };

  const progress = (count / selectedDhikr.target) * 100;
  const isComplete = count >= selectedDhikr.target;

  const handleDhikrChange = (value: string) => {
    const dhikr = dhikrOptions[parseInt(value)];
    setSelectedDhikr(dhikr);
    setCount(0);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-islamic">
        <CardHeader className="bg-gradient-primary text-white">
          <CardTitle className="text-center text-2xl">
            Tasbih Counter - المسبحة الرقمية
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">

          {/* Dhikr Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Dhikr:</label>
            <Select
              value={dhikrOptions.indexOf(selectedDhikr).toString()}
              onValueChange={handleDhikrChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dhikrOptions.map((dhikr, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    <div className="flex flex-col items-start">
                      <span className="font-arabic text-lg" style={{ fontFamily: 'Arabic, serif' }}>
                        {dhikr.arabic}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {dhikr.transliteration} - {dhikr.translation}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Current Dhikr Display */}
          <Card className="mb-6 bg-gradient-subtle border-islamic-sage">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <p className="text-4xl font-arabic mb-2" style={{ fontFamily: 'Arabic, serif' }}>
                  {selectedDhikr.arabic}
                </p>
                <p className="text-lg font-semibold text-islamic-primary mb-1">
                  {selectedDhikr.transliteration}
                </p>
                <p className="text-muted-foreground">
                  {selectedDhikr.translation}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Counter Display */}
          <Card className={`mb-6 ${isComplete ? 'bg-islamic-sage border-islamic-gold' : ''}`}>
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="text-6xl font-bold text-islamic-primary mb-2">
                  {count}
                </div>
                <div className="text-lg text-muted-foreground">
                  Target: {selectedDhikr.target}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-4 mb-6">
                <div
                  className={`h-4 rounded-full transition-all duration-500 ${isComplete ? 'bg-gradient-gold' : 'bg-gradient-primary'
                    }`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>

              {isComplete && (
                <Badge className="mb-4 bg-islamic-gold text-white">
                  <Zap className="w-4 h-4 mr-1" />
                  Target Completed! SubhanAllah ✨
                </Badge>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={increment}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-xl shadow-islamic"
                >
                  <Plus className="w-6 h-6 mr-2" />
                  Count
                </Button>

                <Button
                  onClick={reset}
                  variant="outline"
                  size="lg"
                  className="px-6 py-6 hover:bg-islamic-sage/50"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-islamic-primary">{totalSessions}</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-islamic-primary">
                  {Math.floor(progress)}%
                </div>
                <div className="text-sm text-muted-foreground">Current Progress</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TasbihCounter;