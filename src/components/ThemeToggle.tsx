import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" classname="w-10 h-10">
        <Sun className="h-4 w-4" />
      </Button>
    )
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 border-islamic-sage hover:bg-islamic-sage/50" >

      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-islamic-gold" />
      ) : (
        <Moon className="h-4 w-4 text-islamic-primary " />
      )}
    </Button>
  );
};

export default ThemeToggle;

