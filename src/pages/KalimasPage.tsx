import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const KalimasPage = () => {
  const kalimas = [
    {
      id: 1,
      name: "First Kalima - Tayyab",
      arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
      transliteration: "La ilaha illa Allah, Muhammadur Rasul Allah",
      english: "There is no god but Allah, Muhammad is the messenger of Allah.",
      meaning: "Declaration of Faith (Shahada)"
    },
    {
      id: 2,
      name: "Second Kalima - Shahadat",
      arabic: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration: "Ashhadu an la ilaha illa Allah, wa ashhadu anna Muhammadan abduhu wa rasuluh",
      english: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.",
      meaning: "Testimony of Faith"
    },
    {
      id: 3,
      name: "Third Kalima - Tamjeed",
      arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
      transliteration: "Subhan Allah, wal hamdu lillah, wa la ilaha illa Allah, wa Allahu akbar, wa la hawla wa la quwwata illa billah il 'aliyyil 'azeem",
      english: "Glory be to Allah, and praise be to Allah, and there is no god but Allah, and Allah is the Greatest, and there is no power and no strength except with Allah, the Most High, the Most Great.",
      meaning: "Glorification of Allah"
    },
    {
      id: 4,
      name: "Fourth Kalima - Tawheed",
      arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      transliteration: "La ilaha illa Allah wahdahu la shareeka lah, lahul mulku wa lahul hamd, yuhyi wa yumeetu wa huwa 'ala kulli shay'in qadeer",
      english: "There is no god but Allah alone, He has no partner. His is the kingdom and His is the praise. He gives life and death, and He has power over all things.",
      meaning: "Unity of Allah (Tawheed)"
    },
    {
      id: 5,
      name: "Fifth Kalima - Astaghfar",
      arabic: "أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً، سِرًّا أَوْ عَلَانِيَةً، وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
      transliteration: "Astaghfirullah rabbi min kulli dhambin adhnabtuhu 'amdan aw khata'an, sirran aw 'alaniyatan, wa atubu ilayhi minash dhanb alladhi a'lamu wa minash dhanb alladhi la a'lam, innaka anta 'allamul ghuyubi wa sattar ul 'uyubi wa ghaffarudh dhunubi wa la hawla wa la quwwata illa billah il 'aliyyil 'azeem",
      english: "I seek forgiveness from Allah, my Lord, for every sin I committed knowingly or unknowingly, secretly or openly, and I turn towards Him from the sin that I know and from the sin that I do not know. Certainly You are the Knower of the hidden things and the Concealer of the faults and the Forgiver of the sins. And there is no power and no strength except with Allah, the Most High, the Most Great.",
      meaning: "Seeking Forgiveness (Istighfar)"
    },
    {
      id: 6,
      name: "Sixth Kalima - Rad-de-Kufr",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ، تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا، وَأَسْلَمْتُ وَأَقُولُ لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
      transliteration: "Allahumma inni a'udhu bika min an ushrika bika shay'an wa ana a'lam, wa astaghfiruka lima la a'lam, tubtu 'anhu wa tabarra'tu minal kufri wash shirki wal kidhbi wal gheebati wal bid'ati wan nameemati wal fawahishi wal buhtani wal ma'asi kulliha, wa aslamtu wa aqulu la ilaha illa Allah Muhammadur Rasul Allah",
      english: "O Allah! I seek refuge in You from knowingly associating anything with You. I seek Your forgiveness for what I do not know. I repent from it and I free myself from disbelief and polytheism and falsehood and backbiting and innovation and tell-tales and adultery and accusation and all sins. I submit to Your will and I believe and I say there is no god except Allah and Muhammad is the Messenger of Allah.",
      meaning: "Rejection of Disbelief"
    }
  ];

  return (
    <FeatureLayout 
      title="Six Kalimas" 
      icon={<Star className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">The Six Fundamental Islamic Beliefs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The Six Kalimas are fundamental Islamic declarations that encapsulate the core beliefs of Islam. 
              They serve as expressions of faith, glorification, repentance, and rejection of disbelief. 
              Reciting and understanding these Kalimas strengthens one's connection with Allah and reinforces Islamic faith.
            </p>
          </CardContent>
        </Card>

        {kalimas.map((kalima) => (
          <Card key={kalima.id} className="overflow-hidden">
            <CardHeader className="bg-islamic-sage/10">
              <CardTitle className="text-islamic-primary">{kalima.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{kalima.meaning}</p>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Arabic Text */}
              <div className="text-right p-6 bg-islamic-sage/10 rounded-lg">
                <p className="text-2xl font-arabic leading-relaxed">{kalima.arabic}</p>
              </div>

              {/* Transliteration */}
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">Transliteration:</h4>
                <p className="text-sm italic text-muted-foreground leading-relaxed">{kalima.transliteration}</p>
              </div>

              {/* English Translation */}
              <div className="p-4 border-l-4 border-islamic-primary bg-white dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold mb-2">English Translation:</h4>
                <p className="leading-relaxed">{kalima.english}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Benefits of Reciting Kalimas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Strengthens faith and connection with Allah</li>
              <li>• Purifies the heart and soul</li>
              <li>• Provides spiritual protection</li>
              <li>• Increases remembrance of Allah (Dhikr)</li>
              <li>• Brings peace and tranquility</li>
              <li>• Earns immense spiritual rewards</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default KalimasPage;