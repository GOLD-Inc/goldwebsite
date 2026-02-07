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
      className={cn("fixed inset-x-0 top-6 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? "blur(50px) saturate(200%) brightness(1.1)"
          : "blur(16px) saturate(140%)",
        boxShadow: visible
          ? "0 8px 40px rgba(0, 0, 0, 0.07), 0 2px 0 rgba(255, 255, 255, 0.9) inset, 0 -1px 0 rgba(0, 0, 0, 0.04), 0 0 0 0.5px rgba(255, 255, 255, 0.6)"
          : "none",
        width: visible ? "55%" : "100%",
        y: visible ? 14 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-6 py-2.5 lg:flex overflow-hidden",
        visible
          ? "rounded-2xl bg-white/50 border border-white/80"
          : "bg-transparent border-b border-transparent",
        className
      )}
    >
      {/* Glossy shine highlight — only when scrolled */}
      {visible && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl" />
      )}
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
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2  transition-colors duration-200 text-neutral-800"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-xl bg-black/3 shadow-[0_0.5px_0_rgba(255,255,255,0.5)_inset]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? "blur(50px) saturate(200%) brightness(1.1)"
          : "blur(16px) saturate(140%)",
        boxShadow: visible
          ? "0 8px 40px rgba(0, 0, 0, 0.07), 0 2px 0 rgba(255, 255, 255, 0.9) inset, 0 -1px 0 rgba(0, 0, 0, 0.04), 0 0 0 0.5px rgba(255, 255, 255, 0.6)"
          : "none",
        width: visible ? "92%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "16px" : "0px",
        y: visible ? 14 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-2.5 lg:hidden overflow-hidden",
        visible
          ? "bg-white/50 border border-white/80"
          : "bg-transparent border-b border-transparent",
        className
      )}
    >
      {visible && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl" />
      )}
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
        className
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white/60 backdrop-blur-3xl border border-white/70 px-6 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_0_rgba(255,255,255,0.8)_inset]",
            className
          )}
        >
          {children}
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
      className="h-5 w-5 text-neutral-700 cursor-pointer"
      onClick={onClick}
    />
  ) : (
    <MenuIcon
      className="h-5 w-5 text-neutral-700 cursor-pointer"
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
      <img
        src="GOLD-logo--black-vector.svg"
        alt="Gold Health"
        width={100}
        height={40}
        className="h-8 w-auto"
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
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-5 py-2 rounded-full text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-300 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-md shadow-neutral-900/10",
    secondary:
      "bg-transparent text-neutral-500 hover:text-neutral-900 hover:bg-black/[0.04]",
    dark: "bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200/80",
    gradient:
      "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/20 hover:shadow-amber-500/30",
  };

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
