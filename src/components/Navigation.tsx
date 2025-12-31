import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Calendar, Zap } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "quran", label: "Quran", icon: BookOpen },
    { id: "prayer", label: "Prayer", icon: Clock },
    { id: "fasting", label: "Fasting", icon: Calendar },
    { id: "tasbih", label: "Tasbih", icon: Zap },
  ];

  return (
    <Card className="mb-6 shadow-islamic">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center gap-2 h-auto py-4 ${activeTab === tab.id
                  ? "bg-gradient-primary text-white shadow-islamic"
                  : "hover:bg-islamic-sage/50"
                  }`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="text-sm font-medium">{tab.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Navigation;