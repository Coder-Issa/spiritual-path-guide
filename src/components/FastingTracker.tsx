import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Sun, Moon, Calendar as CalendarIcon } from "lucide-react";

const FastingTracker = () => {
  const [fastingDays, setFastingDays] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentFast, setCurrentFast] = useState<{
    isActive: boolean;
    startTime: Date | null;
  }>({
    isActive: false,
    startTime: null,
  });

  const toggleFastingDay = (date: Date) => {
    const dateString = date.toDateString();
    const isAlreadyFasting = fastingDays.some(d => d.toDateString() === dateString);

    if (isAlreadyFasting) {
      setFastingDays(prev => prev.filter(d => d.toDateString() !== dateString));
    } else {
      setFastingDays(prev => [...prev, date]);
    }
  };

  const startFast = () => {
    setCurrentFast({
      isActive: true,
      startTime: new Date(),
    });
  };

  const breakFast = () => {
    if (selectedDate) {
      toggleFastingDay(selectedDate);
    }
    setCurrentFast({
      isActive: false,
      startTime: null,
    });
  };

  const formatDuration = () => {
    if (!currentFast.startTime) return "0h 0m";

    const now = new Date();
    const diff = now.getTime() - currentFast.startTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  const thisMonthFasts = fastingDays.filter(date => {
    const now = new Date();
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).length;

  return (
    <div className="space-y-6">
      <Card className="shadow-islamic">
        <CardHeader className="bg-gradient-primary text-white">
          <CardTitle className="text-center text-2xl">
            Fasting Tracker - تتبع الصيام
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">

          {/* Current Fast Status */}
          <Card className={`mb-6 ${currentFast.isActive ? 'bg-islamic-sage border-islamic-primary' : ''}`}>
            <CardContent className="p-6">
              <div className="text-center">
                {currentFast.isActive ? (
                  <>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Moon className="w-6 h-6 text-islamic-primary" />
                      <h3 className="text-xl font-bold text-islamic-primary">Currently Fasting</h3>
                    </div>
                    <p className="text-3xl font-bold text-islamic-primary mb-2">
                      {formatDuration()}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Started at {currentFast.startTime?.toLocaleTimeString()}
                    </p>
                    <Button
                      onClick={breakFast}
                      className="bg-islamic-gold hover:bg-islamic-gold-light text-white"
                    >
                      <Sun className="w-4 h-4 mr-2" />
                      Break Fast
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Sun className="w-6 h-6 text-islamic-gold" />
                      <h3 className="text-xl font-bold text-islamic-primary">Ready to Fast</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Begin your fast and track your spiritual journey
                    </p>
                    <Button
                      onClick={startFast}
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Moon className="w-4 h-4 mr-2" />
                      Start Fasting
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-islamic-primary">{thisMonthFasts}</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-islamic-primary">{fastingDays.length}</div>
                <div className="text-sm text-muted-foreground">Total Fasts</div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Fasting Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                modifiers={{
                  fasting: fastingDays,
                }}
                modifiersStyles={{
                  fasting: {
                    backgroundColor: 'hsl(var(--islamic-sage))',
                    color: 'hsl(var(--islamic-primary))',
                    fontWeight: 'bold',
                  },
                }}
              />

              {selectedDate && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {selectedDate.toDateString()}
                  </p>
                  {fastingDays.some(d => d.toDateString() === selectedDate.toDateString()) ? (
                    <Badge variant="secondary" className="bg-islamic-sage text-islamic-primary">
                      Fasting Day ✨
                    </Badge>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleFastingDay(selectedDate)}
                      className="hover:bg-islamic-sage/50"
                    >
                      Mark as Fasting Day
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default FastingTracker;