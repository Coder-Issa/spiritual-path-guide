import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuranReader from "@/components/QuranReader";
import PrayerTracker from "@/components/PrayerTracker";
import FastingTracker from "@/components/FastingTracker";
import TasbihCounter from "@/components/TasbihCounter";
import ThemeToggle from "@/components/ThemeToggle";

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
                <div className="flex justify-between items-start mb-8">
                    <div className="text-center flex-1" >
                    <h1 className="text-4xl font-bold text-islamic-primary mb-2">
                        Islamic Companion
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Your spiritual journey, beautifully guided
                    </p>
                    </div>
                    <ThemeToggle />
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

// import MoreFeatures from "@/components/MoreFeatures";

// const Index = () => {
//   const [activeTab, setActiveTab] = useState("quran");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "quran":
//         return <QuranReader />;
//       case "prayer":
//         return <PrayerTracker />;
//       case "fasting":
//         return <FastingTracker />;
//       case "tasbih":
//         return <TasbihCounter />;
//       default:
//         return <QuranReader />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-8 max-w-4xl">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-8">
//           <div className="text-center flex-1">
//             <h1 className="text-4xl font-bold text-islamic-primary mb-2">
//               Islamic Companion
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Your spiritual journey, beautifully guided
//             </p>
//           </div>
//           <div className="flex gap-2">
//             <MoreFeatures />
//             <ThemeToggle />
//           </div>
//         </div>

//         {/* Navigation */}
//         <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

//         {/* Main Content */}
//         <main>
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Index;
