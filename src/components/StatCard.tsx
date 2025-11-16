import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/use-count-up";

interface StatCardProps {
  stat: {
    number: string;
    description: string;
    source: string;
  };
  isVisible: boolean;
  index: number;
}

const StatCard = ({ stat, isVisible, index }: StatCardProps) => {
  // Extract numeric value for count-up animation
  const getNumericValue = (str: string): number => {
    if (str === "1 in 3") return 33; // percentage
    if (str === "200%") return 200;
    if (str === "Age 19") return 19;
    return 0;
  };

  const numericValue = getNumericValue(stat.number);
  const count = useCountUp({ end: numericValue, duration: 1500, isVisible });

  const getDisplayValue = (str: string, currentCount: number): string => {
    if (str === "1 in 3") return isVisible ? "1 in 3" : "0 in 3";
    if (str === "200%") return `${currentCount}%`;
    if (str === "Age 19") return `Age ${currentCount}`;
    return str;
  };

  return (
    <Card 
      className={`
        text-center hover:shadow-glow hover:scale-105 transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transition: 'all 0.5s ease-out'
      }}
    >
      <CardContent className="pt-8 pb-6">
        <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
          {getDisplayValue(stat.number, count)}
        </div>
        <p className="text-base mb-3 text-foreground leading-relaxed">
          {stat.description}
        </p>
        <p className="text-xs text-muted-foreground italic">
          {stat.source}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
