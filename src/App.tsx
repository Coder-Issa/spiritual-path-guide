import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DuaPage from "./pages/DuaPage";
import Names99Page from "./pages/Names99Page";
import ComingSoonPage from "./pages/ComingSoonPage";
import QuranAudioPage from "./pages/QuranAudioPage";
import EighteenSurahsPage from "./pages/EighteenSurahsPage";
import HadithsPage from "./pages/HadithsPage";
import KalimasPage from "./pages/KalimasPage";
import CalendarPage from "./pages/CalendarPage";
import BenefitsPage from "./pages/BenefitsPage";
import ZakatCalculatorPage from "./pages/ZakatCalculatorPage";
import QiblaDirectionPage from "./pages/QiblaDirectionPage";
import FivePillarsPage from "./pages/FivePillarsPage";
import { 
  Volume2, 
  BookOpen, 
  Calendar, 
  Clock, 
  Star,
  Compass,
  DollarSign,
  Play,
  Gift,
  Zap,
  Wind,
  Image,
  Table,
  Tv
} from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dua" element={<DuaPage />} />
            <Route path="/99-names" element={<Names99Page />} />
            
            {/* Islamic Feature Pages */}
            <Route path="/quran-audio" element={<QuranAudioPage />} />
            <Route path="/18-surahs" element={<EighteenSurahsPage />} />
            <Route path="/hadiths" element={<HadithsPage />} />
            <Route path="/kalimas" element={<KalimasPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/zakat" element={<ZakatCalculatorPage />} />
            <Route path="/qibla" element={<QiblaDirectionPage />} />
            <Route path="/5-pillars" element={<FivePillarsPage />} />
            
            {/* Coming Soon Pages */}
            <Route path="/prayer-schedule" element={<ComingSoonPage title="Prayer Schedule" icon={<Clock className="h-8 w-8 text-islamic-primary" />} description="Accurate prayer times based on your location." />} />
            <Route path="/prayer-tracker" element={<ComingSoonPage title="Prayer Tracker" icon={<Clock className="h-8 w-8 text-islamic-primary" />} description="Track and monitor your daily prayers." />} />
            <Route path="/islamic-fasting" element={<ComingSoonPage title="Islamic Fasting" icon={<Calendar className="h-8 w-8 text-islamic-primary" />} description="Complete guide to Islamic fasting rules and benefits." />} />
            <Route path="/tasbih" element={<ComingSoonPage title="Digital Tasbih" icon={<Zap className="h-8 w-8 text-islamic-primary" />} description="Digital prayer beads for dhikr and remembrance." />} />
            <Route path="/breath" element={<ComingSoonPage title="Breathing Exercises" icon={<Wind className="h-8 w-8 text-islamic-primary" />} description="Islamic breathing techniques for meditation and relaxation." />} />
            <Route path="/islamic-tv" element={<ComingSoonPage title="Live Islamic TV" icon={<Tv className="h-8 w-8 text-islamic-primary" />} description="Watch live Islamic channels and educational content." />} />
            <Route path="/stories" element={<ComingSoonPage title="Islamic Stories" icon={<BookOpen className="h-8 w-8 text-islamic-primary" />} description="Inspirational stories from Islamic history and tradition." />} />
            <Route path="/images" element={<ComingSoonPage title="Islamic Images" icon={<Image className="h-8 w-8 text-islamic-primary" />} description="Beautiful Islamic art, calligraphy, and photography." />} />
            <Route path="/salah-table" element={<ComingSoonPage title="Salah Rakat Table" icon={<Table className="h-8 w-8 text-islamic-primary" />} description="Complete guide to the number of rakats in each prayer." />} />
            <Route path="/adhan" element={<ComingSoonPage title="Play Adhan" icon={<Play className="h-8 w-8 text-islamic-primary" />} description="Listen to beautiful Adhan (call to prayer) recitations." />} />
            <Route path="/donate" element={<ComingSoonPage title="Donate" icon={<Gift className="h-8 w-8 text-islamic-primary" />} description="Support Islamic causes and charitable organizations." />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
