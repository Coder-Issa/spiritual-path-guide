import { useState } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const HadithsPage = () => {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const hadiths = [
    {
      id: 1,
      collection: "Bukhari",
      number: "6011",
      arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
      transliteration: "Innama al-a'malu bin niyyat, wa innama li kulli imri'in ma nawa",
      english: "Actions are but by intention and every man shall have but that which he intended.",
      narrator: "Umar ibn Al-Khattab (RA)"
    },
    {
      id: 2,
      collection: "Muslim",
      number: "16",
      arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      transliteration: "Man kana yu'minu billahi wal yawmil akhiri falyaqul khayran aw liyasmut",
      english: "Whoever believes in Allah and the Last Day should speak good or keep silent.",
      narrator: "Abu Hurairah (RA)"
    },
    {
      id: 3,
      collection: "Bukhari",
      number: "13",
      arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      transliteration: "La yu'minu ahadukum hatta yuhibba li akheehi ma yuhibbu li nafsihi",
      english: "None of you truly believes until he loves for his brother what he loves for himself.",
      narrator: "Anas ibn Malik (RA)"
    },
    {
      id: 4,
      collection: "Muslim",
      number: "2564",
      arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      transliteration: "Al-muslimu man salima al-muslimuna min lisanihi wa yadihi",
      english: "The Muslim is one from whose tongue and hand the people are safe.",
      narrator: "Abdullah ibn Amr (RA)"
    },
    {
      id: 5,
      collection: "Tirmidhi",
      number: "1987",
      arabic: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا",
      transliteration: "Inna Allaha tayyibun la yaqbalu illa tayyiban",
      english: "Indeed Allah is pure and accepts only that which is pure.",
      narrator: "Abu Hurairah (RA)"
    },
    // Continue with more hadiths...
    {
      id: 6,
      collection: "Bukhari",
      number: "2442",
      arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
      transliteration: "Man ghashshana falaysa minna",
      english: "He who deceives us is not one of us.",
      narrator: "Abu Hurairah (RA)"
    }
  ];

  const collections = [
    { value: "all", label: "All Collections" },
    { value: "Bukhari", label: "Sahih Bukhari" },
    { value: "Muslim", label: "Sahih Muslim" },
    { value: "Tirmidhi", label: "Jami' at-Tirmidhi" },
    { value: "AbuDawud", label: "Sunan Abu Dawud" },
    { value: "Nasai", label: "Sunan an-Nasa'i" },
    { value: "IbnMajah", label: "Sunan Ibn Majah" }
  ];

  const filteredHadiths = hadiths.filter(hadith => {
    const matchesCollection = selectedCollection === "all" || hadith.collection === selectedCollection;
    const matchesSearch = searchTerm === "" || 
      hadith.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadith.narrator.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCollection && matchesSearch;
  });

  return (
    <FeatureLayout 
      title="Hadiths" 
      icon={<BookOpen className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Filter Hadiths</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Collection</label>
                <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {collections.map((collection) => (
                      <SelectItem key={collection.value} value={collection.value}>
                        {collection.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search hadiths..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hadiths List */}
        <ScrollArea className="h-[600px]">
          <div className="space-y-4">
            {filteredHadiths.map((hadith) => (
              <Card key={hadith.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-islamic-primary flex justify-between items-start">
                    <span>Hadith #{hadith.id}</span>
                    <span className="text-sm font-normal bg-islamic-sage/20 px-2 py-1 rounded">
                      {hadith.collection} {hadith.number}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Arabic Text */}
                  <div className="text-right p-4 bg-islamic-sage/10 rounded-lg">
                    <p className="text-xl font-arabic leading-relaxed">{hadith.arabic}</p>
                  </div>

                  {/* Transliteration */}
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm italic text-muted-foreground">{hadith.transliteration}</p>
                  </div>

                  {/* English Translation */}
                  <div className="p-4 border-l-4 border-islamic-primary bg-white dark:bg-gray-900">
                    <p className="text-base leading-relaxed">{hadith.english}</p>
                  </div>

                  {/* Narrator */}
                  <div className="text-sm text-muted-foreground">
                    <strong>Narrated by:</strong> {hadith.narrator}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">About Hadiths</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Hadiths are collections of traditions containing sayings of the Prophet Muhammad (peace be upon him), 
              his actions, and his tacit approval of others' actions. They serve as an important source of Islamic 
              law and moral guidance alongside the Quran. The collections shown here are from the most authentic 
              sources recognized by Islamic scholars.
            </p>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default HadithsPage;