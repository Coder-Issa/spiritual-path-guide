import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star } from "lucide-react";
import FeatureLayout from "./FeatureLayout";

const Names99Page = () => {
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
    { arabic: "البَاسِط", english: "The Expander", meaning: "The One who expands and widens" },
    { arabic: "الخَافِض", english: "The Abaser", meaning: "The One who lowers whoever He willed by His Destruction" },
    { arabic: "الرَّافِع", english: "The Exalter", meaning: "The One who raises whoever He willed by His Endowment" },
    { arabic: "المُعِز", english: "The Honorer", meaning: "He gives esteem to whoever He willed" },
    { arabic: "المُذِل", english: "The Humiliator", meaning: "The One who humiliates whoever He willed" },
    { arabic: "السَّمِيع", english: "The All-Hearing", meaning: "The One who Hears all things that are heard by His Eternal Hearing without an ear" },
    { arabic: "البَصِير", english: "The All-Seeing", meaning: "The One who Sees all things that are seen by His Eternal Seeing without an eye" },
    { arabic: "الحَكَم", english: "The Judge", meaning: "He is the Ruler and His judgment is His Word" },
    { arabic: "العَدْل", english: "The Just", meaning: "The One who is entitled to do what He does" },
    { arabic: "اللَّطِيف", english: "The Gentle", meaning: "The One who is kind to His slaves and endows upon them" },
    { arabic: "الخَبِير", english: "The Aware", meaning: "The One who knows the truth of things" },
    { arabic: "الحَلِيم", english: "The Forbearing", meaning: "The One who delays the punishment for those who deserve it" },
    { arabic: "العَظِيم", english: "The Great", meaning: "The One deserving the attributes of Exaltment, Glory, Extolment" },
    { arabic: "الغَفُور", english: "The Forgiving", meaning: "The One who forgives the sins of His slaves" },
    { arabic: "الشَّكُور", english: "The Appreciative", meaning: "The One who gives a lot of reward for a little obedience" },
    { arabic: "العَلِيّ", english: "The High", meaning: "The One who is clear from the attributes of the creatures" },
    { arabic: "الكَبِير", english: "The Great", meaning: "The One who is greater than everything in status" },
    { arabic: "الحَفِيظ", english: "The Preserver", meaning: "The One who protects whatever and whoever He willed to protect" },
    { arabic: "المُقِيت", english: "The Sustainer", meaning: "The One who has the Power" },
    { arabic: "الحَسِيب", english: "The Reckoner", meaning: "The One who gives the satisfaction" },
    { arabic: "الجَلِيل", english: "The Majestic", meaning: "The One who is attributed with greatness of Power and Glory of status" },
    { arabic: "الكَرِيم", english: "The Generous", meaning: "The One who is clear from abjectness" },
    { arabic: "الرَّقِيب", english: "The Watchful", meaning: "The One that nothing is absent from Him" },
    { arabic: "المُجِيب", english: "The Responsive", meaning: "The One who answers the one in need if he asks Him" },
    { arabic: "الوَاسِع", english: "The Vast", meaning: "The One who comprehends all things in deeds and dimensions" },
    { arabic: "الحَكِيم", english: "The Wise", meaning: "The One who is correct in His doings" },
    { arabic: "الوَدُود", english: "The Loving", meaning: "The One who loves His believing slaves and His believing slaves love Him" },
    { arabic: "المَجِيد", english: "The Glorious", meaning: "The One who is with perfect Power, High Status, Compassion, Generosity and Kindness" },
    { arabic: "البَاعِث", english: "The Resurrector", meaning: "The One who resurrects His slaves after death for reward and/or punishment" },
    { arabic: "الشَّهِيد", english: "The Witness", meaning: "The One who nothing is absent from Him" },
    { arabic: "الحَق", english: "The Truth", meaning: "The One who truly exists" },
    { arabic: "الوَكِيل", english: "The Trustee", meaning: "The One who gives the satisfaction and is relied upon" },
    { arabic: "القَوِيّ", english: "The Strong", meaning: "The One with the complete Power" },
    { arabic: "المَتِين", english: "The Firm", meaning: "The One with extreme Power which is un-interrupted and He does not get tired" },
    { arabic: "الوَلِيّ", english: "The Protecting Friend", meaning: "The One who supports and gives victory to His believing slaves" },
    { arabic: "الحَمِيد", english: "The Praiseworthy", meaning: "The One who is praised and praiseworthy" },
    { arabic: "المُحْصِي", english: "The Counter", meaning: "The One who the count of things are known to him" },
    { arabic: "المُبْدِئ", english: "The Originator", meaning: "The One who started the human being" },
    { arabic: "المُعِيد", english: "The Restorer", meaning: "The One who brings back the creatures after death" },
    { arabic: "المُحْيِي", english: "The Giver of Life", meaning: "The One who took out a living human from semen that does not have a soul" },
    { arabic: "اَلمُمِيت", english: "The Bringer of Death", meaning: "The One who renders the living dead" },
    { arabic: "الحَيّ", english: "The Ever Living", meaning: "The One attributed with a life that is neither born nor dies" },
    { arabic: "القَيُّوم", english: "The Self-Subsisting", meaning: "The One who remains and does not end" },
    { arabic: "الوَاجِد", english: "The Perceiver", meaning: "The Rich who is never poor" },
    { arabic: "المَاجِد", english: "The Illustrious", meaning: "The One who is clear from any imperfection and attributed with perfect attributes" },
    { arabic: "الوَاحِد", english: "The One", meaning: "The One without a partner" },
    { arabic: "الصَّمَد", english: "The Eternal", meaning: "The Master who is relied upon in matters and reverted to in ones needs" },
    { arabic: "القَادِر", english: "The Capable", meaning: "The One attributed with Power" },
    { arabic: "المُقْتَدِر", english: "The Powerful", meaning: "The One with the perfect Power that nothing is withheld from Him" },
    { arabic: "المُقَدِّم", english: "The Expediter", meaning: "He makes ahead what He wills" },
    { arabic: "المُؤَخِّر", english: "The Delayer", meaning: "The One who delays what He wills" },
    { arabic: "الأوَّل", english: "The First", meaning: "The One whose Existence is without a beginning" },
    { arabic: "الآخِر", english: "The Last", meaning: "The One whose Existence is without an end" },
    { arabic: "الظَّاهِر", english: "The Manifest", meaning: "The One that nothing is above Him and nothing is underneath Him" },
    { arabic: "البَاطِن", english: "The Hidden", meaning: "The One that nothing is above Him and nothing is underneath Him" },
    { arabic: "الوَالِي", english: "The Governor", meaning: "The One who owns things and manages them" },
    { arabic: "المُتَعَالِي", english: "The Self Exalted", meaning: "The One who is clear from the attributes of the creation" },
    { arabic: "البَرّ", english: "The Source of All Goodness", meaning: "The One who is kind to His creatures, who covered them with His sustenance" },
    { arabic: "التَّوَاب", english: "The Acceptor of Repentance", meaning: "The One who grants repentance to whoever He willed" },
    { arabic: "المُنْتَقِم", english: "The Avenger", meaning: "The One who victoriously prevails over His enemies" },
    { arabic: "العَفُوّ", english: "The Pardoner", meaning: "The One with wide forgiveness" },
    { arabic: "الرَّؤُوف", english: "The Compassionate", meaning: "The One with extreme Mercy" },
    { arabic: "مَالِكُ المُلْك", english: "Master of the Kingdom", meaning: "The One who controls the Dominion and gives dominion to whoever He willed" },
    { arabic: "ذُوالجَلاَلِ وَالإكْرَام", english: "Owner of Glory and Honor", meaning: "The One who deserves to be Exalted and not denied" },
    { arabic: "المُقْسِط", english: "The Equitable", meaning: "The One who is Just in His judgment" },
    { arabic: "الجَامِع", english: "The Gatherer", meaning: "The One who gathers the creatures on a day that there is no doubt about" },
    { arabic: "الغَنِيّ", english: "The Rich", meaning: "The One who does not need the creation" },
    { arabic: "المُغْنِي", english: "The Enricher", meaning: "The One who satisfies the necessities of the creatures" },
    { arabic: "المَانِع", english: "The Preventer", meaning: "The Supporter who protects and gives victory to His pious believers" },
    { arabic: "الضَّار", english: "The Distressor", meaning: "The One who makes harm reach to whoever He willed" },
    { arabic: "النَّافِع", english: "The Propitious", meaning: "The One who gives benefits to whoever He willed" },
    { arabic: "النُّور", english: "The Light", meaning: "The One who guides" },
    { arabic: "الهَادِي", english: "The Guide", meaning: "The One whom with His Guidance His believers were guided" },
    { arabic: "البَدِيع", english: "The Incomparable", meaning: "The One who created the creation and formed it without any preceding example" },
    { arabic: "البَاقِي", english: "The Everlasting", meaning: "The One that the state of non-existence is impossible for Him" },
    { arabic: "الوَارِث", english: "The Inheritor", meaning: "The One whose Existence remains" },
    { arabic: "الرَّشِيد", english: "The Guide to Right Path", meaning: "The One who guides" },
    { arabic: "الصَّبُور", english: "The Patient", meaning: "The One who does not quickly punish the sinners" }
  ];

  return (
    <FeatureLayout 
      title="99 Names of Allah (Asma ul-Husna)" 
      icon={<Star className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground mb-6">
          The 99 Beautiful Names of Allah with their meanings and significance in Islamic tradition.
        </p>
        
        <ScrollArea className="h-[600px] w-full">
          <div className="grid gap-4 pr-4">
            {names99.map((name, index) => (
              <Card key={index} className="p-6 hover:shadow-islamic transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-right text-2xl mb-3 font-arabic text-islamic-primary leading-relaxed">
                      {name.arabic}
                    </div>
                    <div className="font-semibold text-lg text-islamic-primary mb-2">
                      {name.english}
                    </div>
                    <div className="text-muted-foreground">
                      {name.meaning}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-islamic-gold ml-6 bg-islamic-sage/20 rounded-full w-12 h-12 flex items-center justify-center">
                    {index + 1}
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

export default Names99Page;