interface DecorativeShapesProps {
  variant?: "circles" | "dots" | "grid";
}

const DecorativeShapes = ({ variant = "circles" }: DecorativeShapesProps) => {
  if (variant === "circles") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-2xl" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    );
  }

  return null;
};

export default DecorativeShapes;
