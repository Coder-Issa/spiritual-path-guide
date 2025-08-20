import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

interface FeatureLayoutProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const FeatureLayout = ({ title, icon, children }: FeatureLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/")}
              className="h-10 w-10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-3">
              {icon}
              <h1 className="text-3xl font-bold text-islamic-primary">{title}</h1>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default FeatureLayout;