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
        w-full rounded-lg border-2 border-dashed border-primary/30 
        bg-gradient-to-br from-primary/5 to-primary/10
        flex flex-col items-center justify-center gap-3
        transition-all hover:border-primary/50 hover:shadow-lg
        ${className}
      `}
    >
      <ImageIcon className="w-12 h-12 text-primary/40" />
      <span className="text-sm md:text-base font-mono text-primary/60 px-4 text-center">
        [{label}]
      </span>
    </div>
  );
};

export default ImagePlaceholder;
