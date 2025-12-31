import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart } from "lucide-react";
import FeatureLayout from "./FeatureLayout";

const DuaPage = () => {
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
    { arabic: "رَبِّ اغْفِرْ لِي", english: "My Lord, forgive me", transliteration: "Rabbi ghfir li" },
    { arabic: "رَبَّنَا تَقَبَّلْ مِنَّا", english: "Our Lord, accept from us", transliteration: "Rabbana taqabbal minna" },
    { arabic: "اللَّهُمَّ بَارِكْ لَنَا", english: "O Allah, bless us", transliteration: "Allahumma barik lana" },
    { arabic: "جَزَاكَ اللَّهُ خَيْرًا", english: "May Allah reward you with good", transliteration: "Jazakallahu khairan" },
    { arabic: "بَارَكَ اللَّهُ فِيكَ", english: "May Allah bless you", transliteration: "Barakallahu feek" },
    { arabic: "هِدَايَةُ اللَّهِ هِيَ الْهُدَى", english: "The guidance of Allah is the true guidance", transliteration: "Hidayatullahi hiyal huda" },
    { arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا", english: "Our Lord, do not impose blame upon us if we forget or make a mistake", transliteration: "Rabbana la tu'akhidhna in naseena aw akhta'na" },
    { arabic: "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا", english: "Our Lord, and lay not upon us a burden", transliteration: "Rabbana wa la tahmil 'alayna isran" },
    { arabic: "رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ", english: "Our Lord, and burden us not with that which we have no ability to bear", transliteration: "Rabbana wa la tuhammilna ma la taqata lana bih" },
    { arabic: "وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا", english: "And pardon us, and forgive us, and have mercy upon us", transliteration: "Wa'fu 'anna waghfir lana warhamna" },
    { arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", english: "Our Lord, let not our hearts deviate after You have guided us", transliteration: "Rabbana la tuzigh quloobana ba'da idh hadaytana" },
    { arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ", english: "Our Lord, grant us from among our wives and offspring comfort to our eyes", transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yun" },
    { arabic: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا", english: "Our Lord, perfect for us our light", transliteration: "Rabbana atmim lana noorana" },
    { arabic: "يَا رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ", english: "O Lord, forgive and have mercy, and You are the best of the merciful", transliteration: "Ya Rabbi ghfir warham wa anta khayru'r-rahimeen" },
    { arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", english: "Sufficient for us is Allah, and He is the best Disposer of affairs", transliteration: "Hasbunallahu wa ni'mal wakeel" },
    { arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", english: "Indeed we belong to Allah, and indeed to Him we will return", transliteration: "Inna lillahi wa inna ilayhi raji'oon" },
    { arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers", transliteration: "La ilaha illa anta subhanaka inni kuntu min az-zalimeen" },
    { arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ", english: "My Lord, enable me to be grateful for Your favor", transliteration: "Rabbi awzi'ni an ashkura ni'mataka" },
    { arabic: "رَبِّ اشْرَحْ لِي صَدْرِي", english: "My Lord, expand for me my breast", transliteration: "Rabbi'sh-rah li sadri" },
    { arabic: "وَيَسِّرْ لِي أَمْرِي", english: "And ease for me my task", transliteration: "Wa yassir li amri" },
    { arabic: "رَبِّ زِدْنِي عِلْمًا", english: "My Lord, increase me in knowledge", transliteration: "Rabbi zidni 'ilma" },
    { arabic: "أَللَّهُمَّ أَصْلِحْ لِي دِينِي", english: "O Allah, set right for me my religion", transliteration: "Allahumma aslih li deeni" },
    { arabic: "أَللَّهُمَّ أَصْلِحْ لِي دُنْيَايَ", english: "O Allah, set right for me my worldly affairs", transliteration: "Allahumma aslih li dunyaya" },
    { arabic: "أَللَّهُمَّ أَصْلِحْ لِي آخِرَتِي", english: "O Allah, set right for me my Hereafter", transliteration: "Allahumma aslih li akhirati" },
    { arabic: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ", english: "Our Lord, avert from us the punishment of Hell", transliteration: "Rabbana'srif 'anna 'adhab jahannam" },
    { arabic: "أَللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى", english: "O Allah, I ask You for guidance and righteousness", transliteration: "Allahumma inni as'aluka'l-huda wat-tuqa" },
    { arabic: "أَللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ", english: "O Allah, I ask You for all that is good", transliteration: "Allahumma inni as'aluka min al-khayri kullihi" },
    { arabic: "أَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ", english: "O Allah, I seek refuge in You from all evil", transliteration: "Allahumma inni a'oodhu bika min ash-sharri kullihi" },
    { arabic: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا", english: "Our Lord, we have believed, so forgive us our sins", transliteration: "Rabbana amanna faghfir lana dhunooban" },
    { arabic: "سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا", english: "We hear and we obey. Grant us Your forgiveness, our Lord", transliteration: "Sami'na wa ata'na ghufranaka rabbana" },
    { arabic: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا", english: "Our Lord, upon You we have relied, and to You we have returned", transliteration: "Rabbana 'alayka tawakkalna wa ilayka anabna" },
    { arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا", english: "Our Lord, make us not a trial for those who disbelieve", transliteration: "Rabbana la taj'alna fitnatan lilladhina kafaru" },
    { arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا", english: "Our Lord, pour upon us patience", transliteration: "Rabbana afrigh 'alayna sabra" },
    { arabic: "وَتَوَفَّنَا مُسْلِمِينَ", english: "And take us in death as Muslims", transliteration: "Wa tawaffana muslimeen" },
    { arabic: "أَللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ", english: "O Allah, help me remember You, thank You", transliteration: "Allahumma a'inni 'ala dhikrika wa shukrika" },
    { arabic: "أَللَّهُمَّ بَلِّغْنَا رَمَضَانَ", english: "O Allah, let us reach Ramadan", transliteration: "Allahumma ballighna Ramadan" },
    { arabic: "أَللَّهُمَّ تَقَبَّلْ مِنَّا صِيَامَنَا", english: "O Allah, accept our fasting", transliteration: "Allahumma taqabbal minna siyamana" },
    { arabic: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ", english: "Our Lord, and accept our supplication", transliteration: "Rabbana wa taqabbal du'a" },
    { arabic: "أَللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ", english: "O Allah, make what You have made lawful sufficient for me instead of what You have made unlawful", transliteration: "Allahumma'kfini bi halalika 'an haramika" },
    { arabic: "أَللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", english: "O Allah, You are Pardoning and You love to pardon, so pardon me", transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni" }
  ];

  return (
    <FeatureLayout 
      title="Islamic Supplications (Dua)" 
      icon={<Heart className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground mb-6">
          A comprehensive collection of Islamic supplications with Arabic text, transliteration, and English translations.
        </p>
        
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-4 pr-4">
            {duas.map((dua, index) => (
              <Card key={index} className="p-6 hover:shadow-islamic transition-shadow">
                <div className="space-y-3">
                  <div className="text-right text-2xl font-arabic text-islamic-primary leading-relaxed">
                    {dua.arabic}
                  </div>
                  <div className="text-sm text-muted-foreground italic">
                    {dua.transliteration}
                  </div>
                  <div className="text-foreground">
                    {dua.english}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </FeatureLayout>
  );
};

export default DuaPage;