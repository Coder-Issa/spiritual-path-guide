import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuranReader from "@/components/QuranReader";
import PrayerTracker from "@/components/PrayerTracker";
import FastingTracker from "@/components/FastingTracker";
import TasbihCounter from "@/components/TasbihCounter";

const Index = () => {
    const [activeTab, setActiveTab] = useState("quran");

    const renderContent = () => {
        switch (activeTab) {
            case "quran":
                return <QuranReader />;
            case "prayer":
                return <PrayerTracker />;
            case "fasting":
                return <FastingTracker />;
            case "tasbih":
                return <TasbihCounter />;
            default:
                return <QuranReader />;
        }
    };
    
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-islamic-primary mb-2">
                        Islamic Companion
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Your spiritual journey, beautifully guided
                    </p>
                </div>

                {/* Navigation */}
                <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Main Content */}
                <main>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
    };

export default Index;