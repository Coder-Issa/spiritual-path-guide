import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, DollarSign, Calendar, MapPin } from "lucide-react";

const FivePillarsPage = () => {
  const pillars = [
    {
      id: 1,
      name: "Shahada",
      arabic: "الشهادة",
      transliteration: "Ash-Shahādah",
      icon: <Heart className="h-8 w-8 text-islamic-primary" />,
      meaning: "Declaration of Faith",
      description: "The testimony that there is no god but Allah, and Muhammad is His messenger.",
      details: {
        arabic_text: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
        transliteration: "Ashhadu an la ilaha illa Allah, wa ashhadu anna Muhammadan rasul Allah",
        english: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah.",
        importance: [
          "Foundation of Islamic faith",
          "Entry point into Islam",
          "Affirmation of monotheism",
          "Recognition of Prophet Muhammad's role",
          "Must be recited with sincere belief"
        ],
        practice: [
          "Recited during conversion to Islam",
          "Part of daily prayers",
          "Whispered to newborns",
          "Last words before death",
          "Constant reminder of faith"
        ]
      }
    },
    {
      id: 2,
      name: "Salah",
      arabic: "الصلاة",
      transliteration: "Aṣ-Ṣalāh",
      icon: <Star className="h-8 w-8 text-islamic-primary" />,
      meaning: "Prayer",
      description: "Performing ritual prayers five times daily facing the direction of Mecca.",
      details: {
        prayers: [
          { name: "Fajr", time: "Before sunrise", rakats: "2" },
          { name: "Dhuhr", time: "After midday", rakats: "4" },
          { name: "Asr", time: "Afternoon", rakats: "4" },
          { name: "Maghrib", time: "After sunset", rakats: "3" },
          { name: "Isha", time: "Evening", rakats: "4" }
        ],
        importance: [
          "Direct connection with Allah",
          "Spiritual purification",
          "Remembrance throughout the day",
          "Community bonding (congregational prayers)",
          "Discipline and time management"
        ],
        benefits: [
          "Mental peace and clarity",
          "Stress relief",
          "Physical exercise through movements",
          "Improved focus and concentration",
          "Spiritual growth and development"
        ]
      }
    },
    {
      id: 3,
      name: "Zakat",
      arabic: "الزكاة",
      transliteration: "Az-Zakāh",
      icon: <DollarSign className="h-8 w-8 text-islamic-primary" />,
      meaning: "Almsgiving",
      description: "Giving a portion of one's wealth to those in need, typically 2.5% annually.",
      details: {
        recipients: [
          "The poor (Al-Fuqara)",
          "The needy (Al-Masakin)",
          "Zakat administrators",
          "Those whose hearts are inclined to Islam",
          "Freeing slaves",
          "Debtors",
          "In the path of Allah",
          "Wayfarers"
        ],
        importance: [
          "Purification of wealth",
          "Social justice and equality",
          "Helping the less fortunate",
          "Economic distribution",
          "Spiritual purification"
        ],
        calculation: [
          "2.5% of savings above Nisab threshold",
          "Based on lunar calendar (354 days)",
          "Only on wealth held for full year",
          "After deducting debts and basic needs",
          "Different rates for different assets"
        ]
      }
    },
    {
      id: 4,
      name: "Sawm",
      arabic: "الصوم",
      transliteration: "Aṣ-Ṣawm",
      icon: <Calendar className="h-8 w-8 text-islamic-primary" />,
      meaning: "Fasting",
      description: "Fasting during the month of Ramadan from dawn to sunset.",
      details: {
        rules: [
          "No food or drink from dawn to sunset",
          "No smoking or sexual relations",
          "No negative thoughts or actions",
          "Increased worship and charity",
          "Exemptions for sick, traveling, pregnant"
        ],
        importance: [
          "Self-discipline and self-control",
          "Empathy for the less fortunate",
          "Spiritual purification",
          "Community solidarity",
          "Health benefits"
        ],
        benefits: [
          "Improved physical health",
          "Mental clarity and focus",
          "Emotional regulation",
          "Increased gratitude",
          "Strengthened willpower"
        ]
      }
    },
    {
      id: 5,
      name: "Hajj",
      arabic: "الحج",
      transliteration: "Al-Ḥajj",
      icon: <MapPin className="h-8 w-8 text-islamic-primary" />,
      meaning: "Pilgrimage",
      description: "Pilgrimage to Mecca at least once in a lifetime if physically and financially able.",
      details: {
        rituals: [
          "Ihram (Sacred state and clothing)",
          "Tawaf (Circling the Kaaba)",
          "Sa'i (Walking between Safa and Marwa)",
          "Standing at Arafat",
          "Stoning of the Devil",
          "Sacrifice of animal",
          "Cutting of hair"
        ],
        importance: [
          "Unity of Muslim community",
          "Equality before Allah",
          "Forgiveness of sins",
          "Spiritual renewal",
          "Following Prophet's example"
        ],
        conditions: [
          "Muslim and adult",
          "Mentally and physically capable",
          "Financially able",
          "Safe route available",
          "Women need male guardian (in some interpretations)"
        ]
      }
    }
  ];

  return (
    <FeatureLayout 
      title="5 Pillars of Islam" 
      icon={<Star className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">The Five Pillars of Islam</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The Five Pillars of Islam are the foundation of Muslim life and the framework that shapes 
              a Muslim's identity and practice. They represent the core beliefs and practices that define 
              what it means to be a Muslim.
            </p>
          </CardContent>
        </Card>

        {pillars.map((pillar) => (
          <Card key={pillar.id} className="overflow-hidden">
            <CardHeader className="bg-islamic-sage/10">
              <CardTitle className="flex items-center gap-4 text-islamic-primary">
                {pillar.icon}
                <div>
                  <div className="flex items-center gap-3">
                    <span>{pillar.id}. {pillar.name}</span>
                    <span className="text-2xl font-arabic">{pillar.arabic}</span>
                  </div>
                  <p className="text-sm font-normal text-muted-foreground">
                    {pillar.transliteration} - {pillar.meaning}
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <p className="text-muted-foreground">{pillar.description}</p>

              {pillar.id === 1 && (
                <div className="space-y-4">
                  <div className="text-right p-4 bg-islamic-sage/10 rounded-lg">
                    <p className="text-xl font-arabic leading-relaxed">{pillar.details.arabic_text}</p>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-sm italic">{pillar.details.transliteration}</p>
                  </div>
                  <div className="p-4 border-l-4 border-islamic-primary">
                    <p>{pillar.details.english}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Importance:</h4>
                      <ul className="space-y-1">
                        {pillar.details.importance.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-islamic-primary rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Practice:</h4>
                      <ul className="space-y-1">
                        {pillar.details.practice.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-islamic-primary rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {pillar.id === 2 && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Daily Prayers:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pillar.details.prayers.map((prayer, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <h5 className="font-semibold">{prayer.name}</h5>
                          <p className="text-sm text-muted-foreground">{prayer.time}</p>
                          <p className="text-sm">{prayer.rakats} Rakats</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Importance:</h4>
                      <ul className="space-y-1">
                        {pillar.details.importance.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-islamic-primary rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {pillar.details.benefits.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreforeground">
                            <span className="w-1.5 h-1.5 bg-islamic-primary rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {(pillar.id === 3 || pillar.id === 4 || pillar.id === 5) && (
                <div className="grid grid-cols-1 gap-6">
                  {Object.entries(pillar.details).map(([key, value]) => (
                    <div key={key}>
                      <h4 className="font-semibold mb-3 capitalize">{key.replace('_', ' ')}:</h4>
                      <ul className="space-y-1">
                        {value.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-islamic-primary rounded-full mt-2 flex-shrink-0"></span>
                            {typeof item === 'string' ? item : `${item.name}: ${item.time} (${item.rakats} Rakats)`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Unity Through Practice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The Five Pillars create unity among Muslims worldwide, regardless of their cultural background, 
              language, or nationality. They provide a common framework of belief and practice that bonds 
              the global Muslim community (Ummah) together in faith and purpose.
            </p>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default FivePillarsPage;