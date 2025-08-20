import { ReactNode } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface ComingSoonPageProps {
  title: string;
  icon: ReactNode;
  description: string;
}

const ComingSoonPage = ({ title, icon, description }: ComingSoonPageProps) => {
  return (
    <FeatureLayout title={title} icon={icon}>
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="p-12 text-center max-w-md">
          <Construction className="h-16 w-16 text-islamic-primary mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-islamic-primary mb-4">
            Coming Soon
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            {description}
          </p>
          <p className="text-sm text-muted-foreground">
            This feature is currently under development and will be available soon.
          </p>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default ComingSoonPage;