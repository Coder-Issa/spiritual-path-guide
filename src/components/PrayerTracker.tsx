import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

const prayers = [
  { name: "Fajr", time: "5:30 AM", arabic: "الفجر" },
  { name: "Dhuhr", time: "12:30 PM", arabic: "الظهر" },
  { name: "Asr", time: "3:45 PM", arabic: "العصر" },
  { name: "Maghrib", time: "6:15 PM", arabic: "المغرب" },
  { name: "Isha", time: "8:00 PM", arabic: "العشاء" },
];

const PrayerTracker = () => {
  const [completedPrayers, setCompletedPrayers] = useState<string[]>([]);

  const togglePrayer = (prayerName: string) => {
    setCompletedPrayers(prev =>
      prev.includes(prayerName)
        ? prev.filter(p => p !== prayerName)
        : [...prev, prayerName]
    );
  };

  const completedCount = completedPrayers.length;
  const completionPercentage = (completedCount / prayers.length) * 100;

  return (
    <div className="space-y-6">
      <Card className="shadow-islamic">
        <CardHeader className="bg-gradient-primary text-white">
          <CardTitle className="text-center text-2xl">
            Prayer Tracker - تتبع الصلاة
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Daily Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedCount}/{prayers.length} prayers
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {prayers.map((prayer) => {
              const isCompleted = completedPrayers.includes(prayer.name);
              return (
                <Card
                  key={prayer.name}
                  className={`transition-all duration-300 ${isCompleted
                    ? "bg-islamic-sage border-islamic-primary shadow-islamic"
                    : "hover:shadow-md"
                    }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-lg">{prayer.name}</h3>
                          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Arabic, serif' }}>
                            {prayer.arabic}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-islamic-primary">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{prayer.time}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => togglePrayer(prayer.name)}
                        variant={isCompleted ? "default" : "outline"}
                        size="sm"
                        className={`min-w-[100px] ${isCompleted
                          ? "bg-islamic-primary hover:bg-islamic-primary-light"
                          : "hover:bg-islamic-sage/50"
                          }`}
                      >
                        {isCompleted ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          "Mark Done"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {completedCount === prayers.length && (
            <Card className="mt-6 bg-gradient-gold">
              <CardContent className="p-4 text-center">
                <h3 className="font-bold text-lg text-white mb-2">
                  Alhamdulillah! All prayers completed today ✨
                </h3>
                <p className="text-white/90">
                  May Allah accept your prayers and grant you His blessings
                </p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PrayerTracker;