import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Heart, Shield, Sun } from "lucide-react";

const BenefitsPage = () => {
  const benefits = [
    {
      category: "Spiritual Benefits",
      icon: <Heart className="h-6 w-6 text-islamic-primary" />,
      items: [
        {
          practice: "Regular Prayer (Salah)",
          benefits: [
            "Direct connection with Allah throughout the day",
            "Increased mindfulness and spiritual awareness",
            "Inner peace and tranquility",
            "Protection from sinful acts",
            "Constant remembrance of Allah"
          ]
        },
        {
          practice: "Reciting Quran",
          benefits: [
            "Healing for the heart and soul",
            "Guidance for all life matters",
            "Increased faith and certainty",
            "Protection from evil",
            "Rewards for every letter recited"
          ]
        },
        {
          practice: "Dhikr (Remembrance of Allah)",
          benefits: [
            "Purification of the heart",
            "Increased closeness to Allah",
            "Mental peace and clarity",
            "Protection from negative thoughts",
            "Continuous spiritual connection"
          ]
        }
      ]
    },
    {
      category: "Physical Benefits",
      icon: <Shield className="h-6 w-6 text-islamic-primary" />,
      items: [
        {
          practice: "Fasting (Sawm)",
          benefits: [
            "Improved digestive health",
            "Better weight management",
            "Enhanced immune system",
            "Increased energy levels",
            "Cellular regeneration and detoxification"
          ]
        },
        {
          practice: "Prayer Movements",
          benefits: [
            "Gentle physical exercise",
            "Improved flexibility and posture",
            "Enhanced blood circulation",
            "Stress relief through physical movement",
            "Mindful body awareness"
          ]
        },
        {
          practice: "Wudu (Ablution)",
          benefits: [
            "Regular hygiene and cleanliness",
            "Refreshment and alertness",
            "Improved circulation",
            "Stress relief through ritual",
            "Physical purification"
          ]
        }
      ]
    },
    {
      category: "Mental & Emotional Benefits",
      icon: <Sun className="h-6 w-6 text-islamic-primary" />,
      items: [
        {
          practice: "Trust in Allah (Tawakkul)",
          benefits: [
            "Reduced anxiety and stress",
            "Increased resilience during hardships",
            "Better emotional regulation",
            "Enhanced problem-solving abilities",
            "Greater life satisfaction"
          ]
        },
        {
          practice: "Gratitude (Shukr)",
          benefits: [
            "Improved mental well-being",
            "Increased happiness and contentment",
            "Better relationships with others",
            "Positive outlook on life",
            "Enhanced appreciation for blessings"
          ]
        },
        {
          practice: "Patience (Sabr)",
          benefits: [
            "Better stress management",
            "Improved decision-making",
            "Stronger emotional intelligence",
            "Enhanced perseverance",
            "Greater inner strength"
          ]
        }
      ]
    },
    {
      category: "Social Benefits",
      icon: <Star className="h-6 w-6 text-islamic-primary" />,
      items: [
        {
          practice: "Community Prayer (Jummah)",
          benefits: [
            "Stronger community bonds",
            "Social support network",
            "Collective worship experience",
            "Unity and brotherhood",
            "Shared spiritual growth"
          ]
        },
        {
          practice: "Charity (Zakat & Sadaqah)",
          benefits: [
            "Wealth purification",
            "Social justice and equity",
            "Compassion development",
            "Community welfare",
            "Spiritual reward and growth"
          ]
        },
        {
          practice: "Good Character (Akhlaq)",
          benefits: [
            "Better relationships",
            "Increased trust from others",
            "Personal integrity",
            "Social harmony",
            "Positive influence on society"
          ]
        }
      ]
    }
  ];

  return (
    <FeatureLayout 
      title="Islamic Benefits" 
      icon={<Star className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Benefits of Islamic Practices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Islam provides a comprehensive way of life that benefits believers spiritually, physically, 
              mentally, and socially. These practices have been scientifically proven to enhance overall 
              well-being and quality of life.
            </p>
          </CardContent>
        </Card>

        {benefits.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="text-islamic-primary flex items-center gap-3">
                {category.icon}
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-islamic-primary pl-4">
                    <h3 className="font-semibold text-lg mb-3">{item.practice}</h3>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-islamic-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Scientific Research</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Studies on Islamic Practices</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Research shows that regular prayer reduces stress hormones and blood pressure</li>
                  <li>• Fasting has been linked to improved brain function and longevity</li>
                  <li>• Meditation and dhikr practices enhance emotional regulation</li>
                  <li>• Community worship strengthens social bonds and mental health</li>
                  <li>• Charitable giving activates brain regions associated with pleasure and social connection</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Holistic Well-being</h3>
                <p className="text-muted-foreground">
                  Islam's integrated approach to worship, community, and personal development creates 
                  a balanced lifestyle that promotes overall health and happiness. The combination of 
                  spiritual practices, physical discipline, mental training, and social responsibility 
                  provides a complete framework for human flourishing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default BenefitsPage;