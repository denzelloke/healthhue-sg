interface DecorativeShapesProps {
  variant?: "circles" | "dots" | "grid";
}

const DecorativeShapes = ({ variant = "circles" }: DecorativeShapesProps) => {
  if (variant === "circles") {
    return (
      <>
        {/* Top left circle - reduced opacity on mobile */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 md:bg-primary/10 blur-3xl" />
        
        {/* Top right circle - reduced opacity on mobile */}
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-secondary/5 md:bg-secondary/10 blur-3xl" />
        
        {/* Bottom left circle - reduced opacity on mobile */}
        <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-primary/8 md:bg-primary/15 blur-3xl" />
        
        {/* Bottom right circle - reduced opacity on mobile */}
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/10 md:bg-accent/20 blur-3xl" />

        {/* Extra middle circle - reduced opacity on mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/4 md:bg-primary/8 blur-3xl" />
      </>
    );
  }

  if (variant === "dots") {
    return (
      <div className="absolute inset-0 opacity-15 md:opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    );
  }

  return null;
};

export default DecorativeShapes;
