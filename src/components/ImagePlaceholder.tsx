import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
}

const ImagePlaceholder = ({ label, className = "", aspectRatio = "video" }: ImagePlaceholderProps) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]"
  };

  return (
    <div 
      className={`
        ${aspectClasses[aspectRatio]}
        w-full rounded-lg border-2 border-dashed border-muted-foreground/30 
        bg-muted/50
        flex flex-col items-center justify-center gap-2 md:gap-3
        transition-all hover:border-muted-foreground/50
        ${className}
      `}
    >
      <ImageIcon className="w-8 h-8 md:w-12 md:h-12 text-muted-foreground/40" />
      <span className="text-xs md:text-sm lg:text-base font-mono text-muted-foreground/60 px-2 md:px-4 text-center break-words">
        [{label}]
      </span>
    </div>
  );
};

export default ImagePlaceholder;
