"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-4 z-40 w-full px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.5)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 0 rgba(255, 255, 255, 0.95) inset, 0 -1px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.7) inset"
          : "0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
        width: visible ? "55%" : "100%",
        borderColor: visible
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.6)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-6 py-2.5 lg:flex overflow-hidden border rounded-full",
        className,
      )}
    >
      {/* Glossy shine highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] rounded-t-2xl bg-gradient-to-b from-white/50 to-transparent" />
      {/* Subtle inner glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      <div className="relative z-10 flex w-full flex-row items-center justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2  transition-colors duration-200 text-slate-800"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-black/3 shadow-[0_0.5px_0_rgba(255,255,255,0.5)_inset]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: visible
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 0.5)",
        boxShadow: visible
          ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 0 rgba(255, 255, 255, 0.95) inset, 0 -1px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.7) inset"
          : "0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
        borderColor: visible
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.6)",
        width: visible ? "92%" : "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
      }}
      className={cn(
        "relative z-[50] mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-full px-5 py-2.5 lg:hidden border",
        className,
      )}
    >
      {/* Decorative clip wrapper */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        {/* Glossy shine highlight */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/50 to-transparent" />
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96, rotateX: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: -12, scale: 0.96, rotateX: -8 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={cn(
            "fixed inset-x-4 top-24 z-[70] flex flex-col items-start justify-start gap-2 rounded-2xl px-8 py-10 overflow-hidden",
            "bg-white/50 border border-white/80",
            "shadow-[0_8px_40px_rgba(0,0,0,0.07),0_2px_0_rgba(255,255,255,0.9)_inset,0_-1px_0_rgba(0,0,0,0.04),0_0_0_0.5px_rgba(255,255,255,0.6)]",
            className,
          )}
          style={{
            backdropFilter: "blur(50px) saturate(200%) brightness(1.1)",
            WebkitBackdropFilter: "blur(50px) saturate(200%) brightness(1.1)",
            perspective: "800px",
            transformOrigin: "top center",
          }}
        >
          {/* Glossy shine on the dropdown */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl" />
          <div className="relative z-10 flex w-full flex-col items-start gap-4">
            {React.Children.map(children, (child, index) => (
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.06 * index,
                  duration: 0.3,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {child}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <XIcon
      className="h-5 w-5 text-slate-700 cursor-pointer"
      onClick={onClick}
    />
  ) : (
    <MenuIcon
      className="h-5 w-5 text-slate-700 cursor-pointer"
      onClick={onClick}
    />
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1"
    >
      <Image
        src="/GOLD-AI.svg"
        alt="Gold Health"
        width={173}
        height={52}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient" | "glass";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-5 py-2 rounded-full text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-300 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10",
    secondary:
      "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-black/[0.04]",
    dark: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/80",
    gradient:
      "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/20 hover:shadow-amber-500/30",
    glass: "",
  };

  if (variant === "glass") {
    return (
      <Tag
        href={href || undefined}
        className={cn(
          "group relative px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer inline-block text-center overflow-hidden",
          "bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white",
          "border border-white/[0.15]",
          "shadow-[0_4px_24px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.15)_inset,0_-1px_0_rgba(0,0,0,0.3)_inset]",
          "hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.2)_inset,0_-1px_0_rgba(0,0,0,0.3)_inset]",
          "active:translate-y-0 active:shadow-[0_2px_12px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.1)_inset]",
          "transition-all duration-300",
          className,
        )}
        {...props}
      >
        {/* Noise grain texture */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay"
          aria-hidden="true"
        >
          <filter id="noiseBtn">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseBtn)" />
        </svg>
        {/* Glossy top highlight arc */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-white/25 to-transparent rounded-t-full" />
        {/* Animated shine sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
        <span className="relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          {children}
        </span>
      </Tag>
    );
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
