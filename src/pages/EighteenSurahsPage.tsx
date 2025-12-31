import { useState } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const EighteenSurahsPage = () => {
  const [currentSurah, setCurrentSurah] = useState(0);

  const surahs = [
    {
      number: 78,
      name: "An-Naba",
      arabic: "النبأ",
      transliteration: "An-Naba'",
      meaning: "The Tidings",
      verses: [
        {
          arabic: "عَمَّ يَتَسَاءَلُونَ",
          transliteration: "Amma yatasaa'aloon",
          translation: "What are they asking one another about?"
        },
        {
          arabic: "عَنِ النَّبَإِ الْعَظِيمِ",
          transliteration: "Anin naba'il azeem",
          translation: "About the great news"
        },
        {
          arabic: "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
          transliteration: "Allazee hum feehi mukh talifoon",
          translation: "That over which they are in disagreement."
        }
      ]
    },
    {
      number: 79,
      name: "An-Nazi'at",
      arabic: "النازعات",
      transliteration: "An-Nazi'at",
      meaning: "Those Who Drag Forth",
      verses: [
        {
          arabic: "وَالنَّازِعَاتِ غَرْقًا",
          transliteration: "Wan naazi'aati gharqa",
          translation: "By those [angels] who extract with violence"
        },
        {
          arabic: "وَالنَّاشِطَاتِ نَشْطًا",
          transliteration: "Wan naashitaati nashta",
          translation: "And [by] those who remove with ease"
        },
        {
          arabic: "وَالسَّابِحَاتِ سَبْحًا",
          transliteration: "Was saabi haati sabha",
          translation: "And [by] those who glide [as if] swimming"
        }
      ]
    },
    {
      number: 80,
      name: "Abasa",
      arabic: "عبس",
      transliteration: "Abasa",
      meaning: "He Frowned",
      verses: [
        {
          arabic: "عَبَسَ وَتَوَلَّىٰ",
          transliteration: "Abasa wa tawalla",
          translation: "The Prophet frowned and turned away"
        },
        {
          arabic: "أَن جَاءَهُ الْأَعْمَىٰ",
          transliteration: "An jaa'ahul a'ma",
          translation: "Because there came to him the blind man [interrupting]."
        }
      ]
    },
    {
      number: 81,
      name: "At-Takwir",
      arabic: "التكوير",
      transliteration: "At-Takwir",
      meaning: "The Overthrowing",
      verses: [
        {
          arabic: "إِذَا الشَّمْسُ كُوِّرَتْ",
          transliteration: "Izash shamsu kuwwirat",
          translation: "When the sun is wrapped up [in darkness]"
        },
        {
          arabic: "وَإِذَا النُّجُومُ انكَدَرَتْ",
          transliteration: "Wa izan nujoomun kadarat",
          translation: "And when the stars fall, dispersing"
        }
      ]
    },
    {
      number: 114,
      name: "An-Nas",
      arabic: "الناس",
      transliteration: "An-Nas",
      meaning: "The People",
      verses: [
        {
          arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          transliteration: "Qul a'oodhu birabbin naas",
          translation: "Say, 'I seek refuge in the Lord of mankind'"
        },
        {
          arabic: "مَلِكِ النَّاسِ",
          transliteration: "Malikin naas",
          translation: "The Sovereign of mankind"
        },
        {
          arabic: "إِلَٰهِ النَّاسِ",
          transliteration: "Ilaahin naas",
          translation: "The God of mankind"
        },
        {
          arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
          transliteration: "Min sharril waswaasil khannaas",
          translation: "From the evil of the retreating whisperer"
        },
        {
          arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
          transliteration: "Allazee yuwas wisu fee sudoorin naas",
          translation: "Who whispers [evil] into the breasts of mankind"
        },
        {
          arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
          transliteration: "Minal jinnati wan naas",
          translation: "From among the jinn and mankind."
        }
      ]
    }
  ];

  const handlePrevious = () => {
    setCurrentSurah(prev => prev > 0 ? prev - 1 : surahs.length - 1);
  };

  const handleNext = () => {
    setCurrentSurah(prev => prev < surahs.length - 1 ? prev + 1 : 0);
  };

  const currentSurahData = surahs[currentSurah];

  return (
    <FeatureLayout 
      title="18 Easiest Surahs" 
      icon={<BookOpen className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary flex items-center justify-between">
              <span>Surah {currentSurahData.number}: {currentSurahData.name}</span>
              <span className="text-sm font-normal">({currentSurah + 1} of {surahs.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Surah Header */}
              <div className="text-center p-6 bg-islamic-sage/10 rounded-lg">
                <h2 className="text-4xl font-arabic mb-2">{currentSurahData.arabic}</h2>
                <p className="text-lg font-medium">{currentSurahData.transliteration}</p>
                <p className="text-muted-foreground">{currentSurahData.meaning}</p>
              </div>

              {/* Verses */}
              <div className="space-y-4">
                {currentSurahData.verses.map((verse, index) => (
                  <div key={index} className="border-l-4 border-islamic-primary pl-4 py-2">
                    <div className="text-right mb-3">
                      <p className="text-2xl font-arabic leading-relaxed">{verse.arabic}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground italic">{verse.transliteration}</p>
                      <p className="text-base">{verse.translation}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4">
                <Button onClick={handlePrevious} variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Surah
                </Button>
                <Button onClick={handleNext} variant="outline">
                  Next Surah
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">About These Surahs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These are among the shortest and most commonly memorized surahs in the Quran. 
              They are perfect for beginners learning to recite the Quran and are frequently 
              used in daily prayers. Each surah contains profound meanings and guidance for Muslims.
            </p>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default EighteenSurahsPage;