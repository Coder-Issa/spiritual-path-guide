import { useState } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const hijriMonths = [
    "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani",
    "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban",
    "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
  ];

  const islamicEvents = [
    { date: "1 Muharram", event: "Islamic New Year", type: "major" },
    { date: "9-10 Muharram", event: "Day of Ashura", type: "major" },
    { date: "12 Rabi' al-awwal", event: "Mawlid an-Nabi (Prophet's Birthday)", type: "celebration" },
    { date: "27 Rajab", event: "Isra and Mi'raj (Night Journey)", type: "major" },
    { date: "15 Sha'ban", event: "Laylat al-Bara'at (Night of Forgiveness)", type: "special" },
    { date: "1-30 Ramadan", event: "Month of Ramadan (Fasting)", type: "major" },
    { date: "27 Ramadan", event: "Laylat al-Qadr (Night of Power)", type: "major" },
    { date: "1 Shawwal", event: "Eid al-Fitr", type: "celebration" },
    { date: "8-13 Dhu al-Hijjah", event: "Hajj Pilgrimage", type: "major" },
    { date: "9 Dhu al-Hijjah", event: "Day of Arafah", type: "major" },
    { date: "10 Dhu al-Hijjah", event: "Eid al-Adha", type: "celebration" },
    { date: "11-13 Dhu al-Hijjah", event: "Days of Tashreeq", type: "special" }
  ];

  const monthlyObservances = {
    "Muharram": "The Sacred Month - First month of Islamic calendar, contains the Day of Ashura",
    "Safar": "The Empty Month - Second month, time for reflection and preparation",
    "Rabi' al-awwal": "First Spring - Birth month of Prophet Muhammad (peace be upon him)",
    "Rabi' al-thani": "Second Spring - Month of continued spiritual growth",
    "Jumada al-awwal": "First Parched - Fifth month of the Islamic year",
    "Jumada al-thani": "Second Parched - Sixth month, time for patience and perseverance",
    "Rajab": "The Honored Month - Sacred month, preparation for Ramadan",
    "Sha'ban": "The Scattered Month - Month of preparation for Ramadan",
    "Ramadan": "The Burning Month - Holy month of fasting and spiritual purification",
    "Shawwal": "The Lifting Month - Month of Eid al-Fitr celebration",
    "Dhu al-Qi'dah": "The Master of Truce - Sacred month, preparation for Hajj",
    "Dhu al-Hijjah": "The Master of Hijjah - Sacred month of Hajj pilgrimage"
  };

  const getCurrentHijriYear = () => {
    // Approximate Hijri year calculation (for display purposes)
    const hijriYear = Math.floor((new Date().getFullYear() - 622) * 1.030684) + 1;
    return hijriYear;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <FeatureLayout 
      title="Islamic Calendar" 
      icon={<CalendarIcon className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        {/* Current Date Display */}
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary text-center">
              Current Islamic Year: {getCurrentHijriYear()} AH
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              The Islamic calendar is a lunar calendar consisting of 12 months in a year of 354 or 355 days.
            </p>
          </CardContent>
        </Card>

        {/* Month Navigation */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Button onClick={handlePreviousMonth} variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-islamic-primary">
                Islamic Months Overview
              </CardTitle>
              <Button onClick={handleNextMonth} variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hijriMonths.map((month, index) => (
                <div 
                  key={month}
                  className="p-4 border rounded-lg hover:bg-islamic-sage/10 transition-colors"
                >
                  <h3 className="font-semibold text-islamic-primary mb-2">
                    {index + 1}. {month}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {monthlyObservances[month]}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Islamic Events */}
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Important Islamic Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {islamicEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`p-4 border-l-4 rounded-r-lg ${
                    event.type === 'major' ? 'border-red-500 bg-red-50 dark:bg-red-950/20' :
                    event.type === 'celebration' ? 'border-green-500 bg-green-50 dark:bg-green-950/20' :
                    'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{event.event}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      event.type === 'major' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200' :
                      event.type === 'celebration' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sacred Months */}
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">The Four Sacred Months</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-islamic-sage/10 rounded-lg">
                <h3 className="font-semibold mb-2">Dhu al-Qi'dah</h3>
                <p className="text-sm text-muted-foreground">The 11th month, traditionally a month of truce</p>
              </div>
              <div className="p-4 bg-islamic-sage/10 rounded-lg">
                <h3 className="font-semibold mb-2">Dhu al-Hijjah</h3>
                <p className="text-sm text-muted-foreground">The 12th month, month of Hajj pilgrimage</p>
              </div>
              <div className="p-4 bg-islamic-sage/10 rounded-lg">
                <h3 className="font-semibold mb-2">Muharram</h3>
                <p className="text-sm text-muted-foreground">The 1st month, Islamic New Year</p>
              </div>
              <div className="p-4 bg-islamic-sage/10 rounded-lg">
                <h3 className="font-semibold mb-2">Rajab</h3>
                <p className="text-sm text-muted-foreground">The 7th month, preparation for Ramadan</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              These four months are considered sacred in Islam, during which fighting and conflict should be avoided.
            </p>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default CalendarPage;