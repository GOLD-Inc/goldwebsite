"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.3223 4.39453C13.4941 4.39453 13.7871 4.42188 14.2012 4.47656C14.6152 4.53125 15.0684 4.6875 15.5605 4.94531C16.0605 5.19531 16.5137 5.61328 16.9199 6.19922C16.8965 6.22266 16.7832 6.30859 16.5801 6.45703C16.377 6.59766 16.1504 6.80859 15.9004 7.08984C15.6504 7.36328 15.4316 7.71484 15.2441 8.14453C15.0566 8.56641 14.9629 9.07031 14.9629 9.65625C14.9629 10.3281 15.0801 10.8984 15.3145 11.3672C15.5566 11.8359 15.834 12.2148 16.1465 12.5039C16.4668 12.7852 16.748 12.9922 16.9902 13.125C17.2402 13.2578 17.373 13.3281 17.3887 13.3359C17.3809 13.3672 17.2793 13.6445 17.084 14.168C16.8965 14.6914 16.584 15.2734 16.1465 15.9141C15.7637 16.4688 15.3496 16.9805 14.9043 17.4492C14.4668 17.918 13.9395 18.1523 13.3223 18.1523C12.9082 18.1523 12.5684 18.0938 12.3027 17.9766C12.0371 17.8516 11.7637 17.7305 11.4824 17.6133C11.2012 17.4883 10.8223 17.4258 10.3457 17.4258C9.88477 17.4258 9.49805 17.4883 9.18555 17.6133C8.88086 17.7383 8.58789 17.8633 8.30664 17.9883C8.0332 18.1133 7.70898 18.1758 7.33398 18.1758C6.76367 18.1758 6.26367 17.9492 5.83398 17.4961C5.4043 17.043 4.96289 16.5 4.50977 15.8672C3.98633 15.1172 3.53711 14.2031 3.16211 13.125C2.79492 12.0391 2.61133 10.9453 2.61133 9.84375C2.61133 8.66406 2.83398 7.67578 3.2793 6.87891C3.72461 6.07422 4.29492 5.46875 4.99023 5.0625C5.69336 4.64844 6.41992 4.44141 7.16992 4.44141C7.56836 4.44141 7.94336 4.50781 8.29492 4.64062C8.64648 4.76562 8.97461 4.89453 9.2793 5.02734C9.5918 5.16016 9.87305 5.22656 10.123 5.22656C10.3652 5.22656 10.6465 5.15625 10.9668 5.01562C11.2871 4.875 11.6465 4.73828 12.0449 4.60547C12.4434 4.46484 12.8691 4.39453 13.3223 4.39453ZM12.6777 2.90625C12.373 3.27344 11.9902 3.58203 11.5293 3.83203C11.0684 4.07422 10.6309 4.19531 10.2168 4.19531C10.1309 4.19531 10.0488 4.1875 9.9707 4.17188C9.96289 4.14844 9.95508 4.10547 9.94727 4.04297C9.93945 3.98047 9.93555 3.91406 9.93555 3.84375C9.93555 3.375 10.0371 2.92188 10.2402 2.48438C10.4434 2.03906 10.6738 1.67188 10.9316 1.38281C11.2598 0.992188 11.6738 0.667969 12.1738 0.410156C12.6738 0.152344 13.1504 0.015625 13.6035 0C13.627 0.101562 13.6387 0.222656 13.6387 0.363281C13.6387 0.832031 13.5488 1.28906 13.3691 1.73438C13.1895 2.17188 12.959 2.5625 12.6777 2.90625Z"
      fill="currentColor"
    />
  </svg>
);

interface GetAppButtonProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  onClick?: () => void;
}

export function GetAppButton({
  href = "#",
  size = "md",
  label = "Get App",
  className,
  onClick,
}: GetAppButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-xs gap-2",
    md: "px-7 py-3 text-sm gap-2",
    lg: "px-10 py-4 text-sm gap-2",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-5 h-5",
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-400 hover:to-orange-400 hover:shadow-xl cursor-pointer",
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
      <AppleIcon className={cn("relative z-10", iconSizes[size])} />
      <span className="relative z-10 font-semibold">{label}</span>
    </motion.a>
  );
}
