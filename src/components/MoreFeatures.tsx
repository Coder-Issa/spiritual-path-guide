import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Tv,
  ArrowLeft
} from "lucide-react";

const MoreFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const features = [
    { id: "quran-audio", title: "Quran Audio", icon: Volume2, description: "Listen to Quran recitations" },
    { id: "18-surahs", title: "18 easiest Surahs", icon: BookOpen, description: "Short surahs for memorization" },
    { id: "hadiths", title: "Hadiths", icon: BookOpen, description: "Prophetic traditions" },
    { id: "kalimas", title: "Kalimas", icon: Star, description: "Six fundamental beliefs" },
    { id: "dua", title: "Dua", icon: Heart, description: "Islamic supplications" },
    { id: "99-names", title: "99 Names of Allah", icon: Star, description: "Beautiful names of Allah" },
    { id: "calendar", title: "Calendar", icon: Calendar, description: "Islamic calendar" },
    { id: "prayer-schedule", title: "Prayer Schedule", icon: Clock, description: "Prayer times" },
    { id: "prayer-tracker", title: "Prayer Tracker", icon: Clock, description: "Track daily prayers" },
    { id: "islamic-fasting", title: "Islamic Fasting", icon: Calendar, description: "Fasting guidelines" },
    { id: "tasbih", title: "Tasbih", icon: Zap, description: "Digital prayer beads" },
    { id: "breath", title: "Breath", icon: Wind, description: "Breathing exercises" },
    { id: "qibla", title: "Qibla Direction", icon: Compass, description: "Find prayer direction" },
    { id: "zakat", title: "Zakat Calculator", icon: DollarSign, description: "Calculate charity" },
    { id: "benefits", title: "Benefits", icon: Star, description: "Islamic benefits" },
    { id: "5-pillars", title: "5 Pillars of Islam", icon: Star, description: "Fundamental pillars" },
    { id: "islamic-tv", title: "Live Islamic TV", icon: Tv, description: "Islamic channels" },
    { id: "stories", title: "Islamic Stories", icon: BookOpen, description: "Inspirational stories" },
    { id: "images", title: "Islamic Images", icon: Image, description: "Beautiful Islamic art" },
    { id: "salah-table", title: "Salah Rakat Table", icon: Table, description: "Prayer guide" },
    { id: "adhan", title: "Play Adhan", icon: Play, description: "Call to prayer" },
    { id: "donate", title: "Donate", icon: Gift, description: "Support Islamic causes" }
  ];

  const duas = [
    { arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", english: "In the name of Allah, the Most Gracious, the Most Merciful", transliteration: "Bismillahir-Rahmanir-Raheem" },
    { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", english: "All praise is due to Allah, Lord of all the worlds", transliteration: "Alhamdu lillahi rabbil alameen" },
    { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", english: "Our Lord, give us good in this world and good in the next world, and save us from the punishment of the Fire", transliteration: "Rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina 'adhab an-nar" },
    { arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", english: "I seek refuge in Allah from Satan, the accursed", transliteration: "A'udhu billahi min ash-shaytanir-rajim" },
    { arabic: "لَا إِلَهَ إِلَّا اللَّهُ", english: "There is no god but Allah", transliteration: "La ilaha illa Allah" },
    { arabic: "سُبْحَانَ اللَّهِ", english: "Glory be to Allah", transliteration: "Subhan Allah" },
    { arabic: "الْحَمْدُ لِلَّهِ", english: "Praise be to Allah", transliteration: "Alhamdulillah" },
    { arabic: "اللَّهُ أَكْبَرُ", english: "Allah is the Greatest", transliteration: "Allahu Akbar" },
    { arabic: "أَسْتَغْفِرُ اللَّهَ", english: "I seek forgiveness from Allah", transliteration: "Astaghfirullah" },
    { arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", english: "There is no power except with Allah", transliteration: "La hawla wa la quwwata illa billah" },
    // Add more duas...
    { arabic: "رَبِّ اغْفِرْ لِي", english: "My Lord, forgive me", transliteration: "Rabbi ghfir li" },
    { arabic: "رَبَّنَا تَقَبَّلْ مِنَّا", english: "Our Lord, accept from us", transliteration: "Rabbana taqabbal minna" },
    { arabic: "اللَّهُمَّ بَارِكْ لَنَا", english: "O Allah, bless us", transliteration: "Allahumma barik lana" },
    { arabic: "جَزَاكَ اللَّهُ خَيْرًا", english: "May Allah reward you with good", transliteration: "Jazakallahu khairan" },
    { arabic: "بَارَكَ اللَّهُ فِيكَ", english: "May Allah bless you", transliteration: "Barakallahu feek" },
    { arabic: "هِدَايَةُ اللَّهِ هِيَ الْهُدَى", english: "The guidance of Allah is the true guidance", transliteration: "Hidayatullahi hiyal huda" },
    { arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا", english: "Our Lord, do not impose blame upon us if we forget or make a mistake", transliteration: "Rabbana la tu'akhidhna in naseena aw akhta'na" },
    { arabic: "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا", english: "Our Lord, and lay not upon us a burden", transliteration: "Rabbana wa la tahmil 'alayna isran" },
    { arabic: "رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ", english: "Our Lord, and burden us not with that which we have no ability to bear", transliteration: "Rabbana wa la tuhammilna ma la taqata lana bih" },
    { arabic: "وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا", english: "And pardon us, and forgive us, and have mercy upon us", transliteration: "Wa'fu 'anna waghfir lana warhamna" }
  ];

  const names99 = [
    { arabic: "الرَّحْمَن", english: "The Most Gracious", meaning: "The One who has plenty of mercy for the believers and the blasphemers in this world" },
    { arabic: "الرَّحِيم", english: "The Most Merciful", meaning: "The One who has plenty of mercy for the believers" },
    { arabic: "المَلِك", english: "The King", meaning: "The One with the complete Dominion, the One whose Dominion is clear from imperfection" },
    { arabic: "القُدُّوس", english: "The Holy", meaning: "The One who is pure from any imperfection and clear from children and adversaries" },
    { arabic: "السَّلاَم", english: "The Source of Peace", meaning: "The One who is free from every imperfection" },
    { arabic: "المُؤْمِن", english: "The Guardian of Faith", meaning: "The One who witnessed for Himself that no one is God but Him" },
    { arabic: "المُهَيْمِن", english: "The Protector", meaning: "The One who witnesses the saying and deeds of His creatures" },
    { arabic: "العَزِيز", english: "The Mighty", meaning: "The Defeater who is not defeated" },
    { arabic: "الجَبَّار", english: "The Compeller", meaning: "The One that nothing happens in His Dominion except that which He willed" },
    { arabic: "المُتَكَبِّر", english: "The Majestic", meaning: "The One who is clear from the attributes of the creatures" },
    { arabic: "الخَالِق", english: "The Creator", meaning: "The One who brings everything from non-existence to existence" },
    { arabic: "البَارِئ", english: "The Evolver", meaning: "The Maker, The Creator who has the Power to turn the entities" },
    { arabic: "المُصَوِّر", english: "The Fashioner", meaning: "The One who forms His creatures in different pictures" },
    { arabic: "الغَفَّار", english: "The Great Forgiver", meaning: "The One who forgives the sins of His slaves time and time again" },
    { arabic: "القَهَّار", english: "The Dominant", meaning: "The One who has the perfect Power and is not unable over anything" },
    { arabic: "الوَهَّاب", english: "The Bestower", meaning: "The One who is Generous in giving plenty without any return" },
    { arabic: "الرَّزَّاق", english: "The Provider", meaning: "The One who provides sustenance to His creatures" },
    { arabic: "الفَتَّاح", english: "The Opener", meaning: "The One who opens for His slaves the closed worldly and religious matters" },
    { arabic: "العَلِيم", english: "The All-Knowing", meaning: "The One nothing is absent from His knowledge" },
    { arabic: "القَابِض", english: "The Constrictor", meaning: "The One who constricts the sustenance by His wisdom" },
    // Continue with all 99 names...
    { arabic: "البَاسِط", english: "The Expander", meaning: "The One who expands and widens" },
    { arabic: "الخَافِض", english: "The Abaser", meaning: "The One who lowers whoever He willed by His Destruction" },
    { arabic: "الرَّافِع", english: "The Exalter", meaning: "The One who raises whoever He willed by His Endowment" },
    { arabic: "المُعِز", english: "The Honorer", meaning: "He gives esteem to whoever He willed" },
    { arabic: "المُذِل", english: "The Humiliator", meaning: "The One who humiliates whoever He willed" }
  ];

  const renderFeatureContent = (featureId: string) => {
    switch (featureId) {
      case "dua":
        return (
          <ScrollArea className="h-[500px] w-full">
            <div className="space-y-4 p-4">
              {duas.map((dua, index) => (
                <Card key={index} className="p-4">
                  <div className="text-right text-xl mb-2 font-arabic text-islamic-primary">{dua.arabic}</div>
                  <div className="text-sm text-muted-foreground mb-1">{dua.transliteration}</div>
                  <div className="text-sm">{dua.english}</div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        );
      
      case "99-names":
        return (
          <ScrollArea className="h-[500px] w-full">
            <div className="grid gap-4 p-4">
              {names99.map((name, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-right text-xl mb-2 font-arabic text-islamic-primary">{name.arabic}</div>
                      <div className="font-semibold text-islamic-primary">{name.english}</div>
                      <div className="text-sm text-muted-foreground mt-1">{name.meaning}</div>
                    </div>
                    <div className="text-2xl font-bold text-islamic-gold ml-4">{index + 1}</div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        );
      
      default:
        return (
          <div className="p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">This feature is under development.</p>
          </div>
        );
    }
  };

  if (selectedFeature) {
    const feature = features.find(f => f.id === selectedFeature);
    return (
      <div className="w-full h-full">
        <div className="flex items-center gap-4 mb-6 p-4 border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedFeature(null)}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-3">
            {feature && <feature.icon className="h-6 w-6 text-islamic-primary" />}
            <h2 className="text-xl font-semibold">{feature?.title}</h2>
          </div>
        </div>
        {renderFeatureContent(selectedFeature)}
      </div>
    );
  }

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
        
        {selectedFeature ? (
          renderFeatureContent(selectedFeature)
        ) : (
          <ScrollArea className="h-[500px] w-full">
            <div className="grid grid-cols-3 gap-4 p-4">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={feature.id} 
                    className="p-4 cursor-pointer hover:shadow-islamic transition-all hover:scale-105"
                    onClick={() => setSelectedFeature(feature.id)}
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
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MoreFeatures;