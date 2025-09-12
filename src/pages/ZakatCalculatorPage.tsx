import { useState } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Calculator } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ZakatCalculatorPage = () => {
  const [currency, setCurrency] = useState("USD");
  const [cash, setCash] = useState("");
  const [savings, setSavings] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [business, setBusiness] = useState("");
  const [debts, setDebts] = useState("");
  const [zakatAmount, setZakatAmount] = useState(0);

  const currencies = [
    { value: "USD", label: "USD ($)", symbol: "$" },
    { value: "EUR", label: "EUR (€)", symbol: "€" },
    { value: "GBP", label: "GBP (£)", symbol: "£" },
    { value: "KES", label: "KES (KSh)", symbol: "KSh" },
    { value: "SAR", label: "SAR (ر.س)", symbol: "ر.س" },
    { value: "AED", label: "AED (د.إ)", symbol: "د.إ" }
  ];

  const currentCurrency = currencies.find(c => c.value === currency);

  const calculateZakat = () => {
    const cashAmount = parseFloat(cash) || 0;
    const savingsAmount = parseFloat(savings) || 0;
    const goldAmount = parseFloat(gold) || 0;
    const silverAmount = parseFloat(silver) || 0;
    const businessAmount = parseFloat(business) || 0;
    const debtAmount = parseFloat(debts) || 0;

    const totalWealth = cashAmount + savingsAmount + goldAmount + silverAmount + businessAmount - debtAmount;

    // Nisab values (approximate, should be updated regularly)
    const nisabValues = {
      USD: 595, // Based on silver nisab
      EUR: 550,
      GBP: 475,
      KES: 75000,
      SAR: 2231,
      AED: 2186
    };

    const nisab = nisabValues[currency] || 595;

    if (totalWealth >= nisab) {
      const zakat = totalWealth * 0.025; // 2.5%
      setZakatAmount(zakat);
    } else {
      setZakatAmount(0);
    }
  };

  const resetForm = () => {
    setCash("");
    setSavings("");
    setGold("");
    setSilver("");
    setBusiness("");
    setDebts("");
    setZakatAmount(0);
  };

  return (
    <FeatureLayout 
      title="Zakat Calculator" 
      icon={<DollarSign className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Calculate Your Zakat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Zakat is one of the Five Pillars of Islam and a religious obligation for all Muslims who meet 
              the necessary criteria of wealth. Calculate your Zakat accurately using our calculator.
            </p>
            
            <div className="space-y-6">
              {/* Currency Selection */}
              <div className="space-y-2">
                <Label>Select Currency</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((curr) => (
                      <SelectItem key={curr.value} value={curr.value}>
                        {curr.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Wealth Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cash">Cash in Hand/Bank ({currentCurrency?.symbol})</Label>
                  <Input
                    id="cash"
                    type="number"
                    placeholder="0"
                    value={cash}
                    onChange={(e) => setCash(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="savings">Savings/Investments ({currentCurrency?.symbol})</Label>
                  <Input
                    id="savings"
                    type="number"
                    placeholder="0"
                    value={savings}
                    onChange={(e) => setSavings(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gold">Gold Value ({currentCurrency?.symbol})</Label>
                  <Input
                    id="gold"
                    type="number"
                    placeholder="0"
                    value={gold}
                    onChange={(e) => setGold(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="silver">Silver Value ({currentCurrency?.symbol})</Label>
                  <Input
                    id="silver"
                    type="number"
                    placeholder="0"
                    value={silver}
                    onChange={(e) => setSilver(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business">Business Assets ({currentCurrency?.symbol})</Label>
                  <Input
                    id="business"
                    type="number"
                    placeholder="0"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="debts">Outstanding Debts ({currentCurrency?.symbol})</Label>
                  <Input
                    id="debts"
                    type="number"
                    placeholder="0"
                    value={debts}
                    onChange={(e) => setDebts(e.target.value)}
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <div className="flex gap-4">
                <Button onClick={calculateZakat} className="flex-1">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Zakat
                </Button>
                <Button onClick={resetForm} variant="outline">
                  Reset
                </Button>
              </div>

              {/* Results */}
              {zakatAmount > 0 && (
                <div className="p-6 bg-islamic-sage/10 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Your Zakat Calculation</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-islamic-primary">
                      {currentCurrency?.symbol}{zakatAmount.toFixed(2)}
                    </p>
                    <p className="text-muted-foreground">
                      This is your obligatory Zakat amount (2.5% of eligible wealth)
                    </p>
                  </div>
                </div>
              )}

              {zakatAmount === 0 && (cash || savings || gold || silver || business) && (
                <div className="p-6 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-200">
                    Your wealth is below the Nisab threshold. Zakat is not obligatory at this time, 
                    but voluntary charity (Sadaqah) is always encouraged.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">About Zakat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What is Zakat?</h3>
              <p className="text-muted-foreground">
                Zakat is a religious obligation and one of the Five Pillars of Islam. It is a form of 
                obligatory charity that purifies wealth and helps reduce inequality in society.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Who Must Pay Zakat?</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Adult Muslims who are mentally sound</li>
                <li>• Those whose wealth exceeds the Nisab threshold</li>
                <li>• Wealth held for a full lunar year (Hawl)</li>
                <li>• Free from debt that would bring wealth below Nisab</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Nisab</h3>
              <p className="text-muted-foreground">
                The Nisab is the minimum amount of wealth a Muslim must have before being obliged to pay Zakat. 
                It is equivalent to 87.48 grams of gold or 612.36 grams of silver.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Distribution of Zakat</h3>
              <p className="text-muted-foreground">
                Zakat should be distributed to eight categories of recipients as mentioned in the Quran: 
                the poor, the needy, Zakat collectors, those whose hearts are inclined to Islam, 
                freeing slaves, debtors, for Allah's cause, and wayfarers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default ZakatCalculatorPage;