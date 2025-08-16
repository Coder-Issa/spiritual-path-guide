import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample Quran data - in a real app, this would come from a comprehensive database
const quranData: Record<string, {
  name: string;
  englishName: string;
  verses: Array<{
    arabic: string;
    translation: string;
    number: number;
  }>;
}> = {
  "1": {
    name: "Al-Fatihah",
    englishName: "The Opening",
    verses: [
      {
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        number: 1
      },
      {
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translation: "All praise is due to Allah, Lord of the worlds.",
        number: 2
      },
      {
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "The Entirely Merciful, the Especially Merciful,",
        number: 3
      },
      {
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        translation: "Sovereign of the Day of Recompense.",
        number: 4
      },
      {
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translation: "It is You we worship and You we ask for help.",
        number: 5
      },
      {
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        translation: "Guide us to the straight path -",
        number: 6
      },
      {
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        number: 7
      }
    ]
  },
  "2": {
    name: "Al-Baqarah",
    englishName: "The Cow",
    verses: [
      {
        arabic: "الم",
        translation: "Alif, Lam, Meem.",
        number: 1
      },
      {
        arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah -",
        number: 2
      },
      {
        arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        translation: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
        number: 3
      }
    ]
  },
  "112": {
    name: "Al-Ikhlas",
    englishName: "The Sincerity",
    verses: [
      {
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        translation: "Say, 'He is Allah, [who is] One,",
        number: 1
      },
      {
        arabic: "اللَّهُ الصَّمَدُ",
        translation: "Allah, the Eternal Refuge.",
        number: 2
      },
      {
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translation: "He neither begets nor is born,",
        number: 3
      },
      {
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translation: "Nor is there to Him any equivalent.",
        number: 4
      }
    ]
  }
};

const QuranReader = () => {
  const [selectedSurah, setSelectedSurah] = useState("1");
  const [currentPage, setCurrentPage] = useState(0);
  
  const currentSurah = quranData[selectedSurah] || quranData["1"];
  const versesPerPage = 5;
  const totalPages = Math.ceil(currentSurah.verses.length / versesPerPage);
  const startIndex = currentPage * versesPerPage;
  const currentVerses = currentSurah.verses.slice(startIndex, startIndex + versesPerPage);

  const handleSurahChange = (value: string) => {
    setSelectedSurah(value);
    setCurrentPage(0);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-islamic">
        <CardHeader className="bg-gradient-primary text-white">
          <CardTitle className="text-center text-2xl">
            القرآن الكريم - The Noble Quran
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <Select value={selectedSurah} onValueChange={handleSurahChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Surah" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(quranData).map(([key, surah]) => (
                  <SelectItem key={key} value={key}>
                    {key}. {surah.name} - {surah.englishName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-islamic-primary mb-2">
              {currentSurah.name}
            </h2>
            <p className="text-islamic-primary-light text-lg">
              {currentSurah.englishName}
            </p>
          </div>

          <div className="space-y-6">
            {currentVerses.map((verse) => (
              <Card key={verse.number} className="border-islamic-sage">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-islamic-gold text-white text-sm font-bold mb-4">
                      {verse.number}
                    </div>
                  </div>
                  
                  <div className="text-right mb-4">
                    <p className="text-3xl leading-relaxed font-arabic" style={{ fontFamily: 'Arabic, serif' }}>
                      {verse.arabic}
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {verse.translation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <span className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </span>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuranReader;