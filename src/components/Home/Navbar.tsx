"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { GetAppButton } from "@/components/ui/get-app-button";
import { useState } from "react";

export function NavbarComponent() {
  const navItems = [
    { name: "Features", link: "/features" },
    // { name: "Mission", link: "/mission" },
    { name: "Team", link: "/team" },
    { name: "Support", link: "/support" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <GetAppButton size="sm" />
          </div>
        </NavBody>

        {/* Mobile Navigation — header bar only */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {/* Mobile menu — rendered outside Navbar to avoid backdrop-filter clipping */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => (
          <a
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative w-full rounded-xl px-4 py-4 text-2xl sm:text-3xl font-semibold text-slate-900 transition-all duration-150 active:bg-black/[0.06] active:scale-[0.97] hover:bg-black/[0.04]"
          >
            <span className="relative z-10">
              {item.name}
            </span>
          </a>
        ))}
        <div className="flex w-full flex-col gap-3 pt-6 border-t border-black/[0.06]">
          <GetAppButton
            size="sm"
            className="max-w-[200px] justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </MobileNavMenu>
    </div>
  );
}
