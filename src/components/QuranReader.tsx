import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuranVerse {
  id: number;
  text: string;
  translation: string;
}

interface QuranChapter {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: QuranVerse[];
}

type QuranData = QuranChapter[];

const QuranReader = () => {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [quranData, setQuranData] = useState<QuranData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuranData = async () => {
      try {
        const response = await fetch('/quran_en.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: QuranData = await response.json();
        console.log('Quran data loaded:', data);
        setQuranData(data);
      } catch (error) {
        console.error('Error loading Quran data:', error);
        // Fallback to empty data structure to prevent crashes
        setQuranData([]);
      } finally {
        setLoading(false);
      }
    };

    loadQuranData();
  }, []);

  if (loading || !quranData || !Array.isArray(quranData) || quranData.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-muted-foreground">Loading the Noble Quran...</div>
      </div>
    );
  }

  const currentSurah = quranData.find(chapter => chapter.id === selectedSurah) || quranData[0];
  const versesPerPage = 5;
  const totalPages = Math.ceil(currentSurah.verses.length / versesPerPage);
  const startIndex = currentPage * versesPerPage;
  const currentVerses = currentSurah.verses.slice(startIndex, startIndex + versesPerPage);

  const handleSurahChange = (value: string) => {
    setSelectedSurah(parseInt(value));
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
            <Select value={selectedSurah.toString()} onValueChange={handleSurahChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Surah" />
              </SelectTrigger>
              <SelectContent>
                {quranData.map((chapter) => (
                  <SelectItem key={chapter.id} value={chapter.id.toString()}>
                    {chapter.id}. {chapter.name} - {chapter.translation}
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
              {currentSurah.translation}
            </p>
          </div>

          <div className="space-y-6">
            {currentVerses.map((verse) => (
              <Card key={verse.id} className="border-islamic-sage">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-islamic-gold text-white text-sm font-bold mb-4">
                      {verse.id}
                    </div>
                  </div>

                  <div className="text-right mb-4">
                    <p className="text-3xl leading-relaxed font-arabic" style={{ fontFamily: 'Arabic, serif' }}>
                      {verse.text}
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