import { cn } from "@/lib/utils";

interface IPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        background:
          "linear-gradient(160deg, #d9c98e 0%, #c5b083 30%, #a8935e 70%, #c5b083 100%)",
        borderRadius: "clamp(1.2rem, 3.5vw, 2.2rem)",
        padding: "clamp(2px, 0.4vw, 4px)",
      }}
    >
      {/* Inner bezel */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "clamp(1rem, 3.2vw, 2rem)" }}
      >
        {/* Screen content */}
        {children}
      </div>
    </div>
  );
}
