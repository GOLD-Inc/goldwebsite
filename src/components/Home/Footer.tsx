import Link from "next/link";
import {
  Apple,
  Download,
  Users,
  Handshake,
  TrendingUp,
  Building2,
  Lightbulb,
  GraduationCap,
  Box,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

function GlassIcon({
  children,
  size = "lg",
  parentGroup = false,
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
  parentGroup?: boolean;
}) {
  const sizeMap = {
    md: "h-10 w-10 rounded-xl",
    lg: "h-12 w-12 rounded-2xl",
  };

  const hoverClasses = parentGroup
    ? "group-hover:-translate-y-1 group-hover:scale-105"
    : "hover:-translate-y-1 hover:scale-105 group-hover/icon:-translate-y-1 group-hover/icon:scale-105";

  return (
    <div
      className={`group/icon relative ${sizeMap[size]} overflow-hidden cursor-pointer transition-all duration-300 ${hoverClasses}`}
    >
      
      {/* Glass base */}
      <div
        className={`absolute inset-0 ${sizeMap[size]} bg-white/60 backdrop-blur-2xl border border-black/[0.06] transition-all duration-300
          shadow-[0_4px_12px_rgba(0,0,0,0.06),0_1.5px_0_rgba(255,255,255,0.9)_inset,0_-0.5px_0_rgba(0,0,0,0.04)]
          ${parentGroup ? "group-hover:bg-white/80 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)_inset,0_-1px_0_rgba(0,0,0,0.05)]" : "group-hover/icon:bg-white/80 group-hover/icon:shadow-[0_8px_24px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)_inset,0_-1px_0_rgba(0,0,0,0.05)]"}`}
      />
      {/* Glossy arc */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-white/80 to-transparent ${size === "lg" ? "rounded-t-2xl" : "rounded-t-xl"}`}
      />
      {/* Icon */}
      <div className={`relative z-10 flex h-full w-full items-center justify-center text-neutral-700 transition-colors duration-300 ${parentGroup ? "group-hover:text-neutral-950" : "group-hover/icon:text-neutral-950"}`}>
        
        {children}
      </div>
    </div>
  );
}

const footerSections = [
  {
    title: "Download",
    links: [
      { name: "iOS App", href: "/download/ios", icon: Apple },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Team", href: "/team", icon: Users },
      { name: "Partners", href: "/partners", icon: Handshake },
      { name: "Investors", href: "/investors", icon: TrendingUp },
      { name: "Companies", href: "/companies", icon: Building2 },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Solutions", href: "/solutions", icon: Lightbulb },
      { name: "Coaching", href: "/coaching", icon: GraduationCap },
      { name: "Product", href: "/product", icon: Box },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "IP & Patents", href: "/patents" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Top separator */}
      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-neutral-300/60 to-transparent" />

      <div className="relative overflow-hidden">
 

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
          {/* Main grid */}
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Brand column */}
            <div className="max-w-sm space-y-6">
              <Link href="/" className="inline-block">
                <img
                  src="GOLD-logo--black-vector.svg"
                  alt="Gold Health"
                  width={130}
                  height={52}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-[15px] leading-relaxed text-neutral-500">
                Clinical-grade health monitoring meets beautiful design.
                Reimagining how you take care of yourself.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[15px] text-neutral-600">
                  <Mail className="h-4 w-4 text-neutral-400" />
                  <span>hello@goldhealth.app</span>
                </div>
                <div className="flex items-center gap-3 text-[15px] text-neutral-600">
                  <Phone className="h-4 w-4 text-neutral-400" />
                  <span>+1 (800) GOLD-APP</span>
                </div>
                <div className="flex items-center gap-3 text-[15px] text-neutral-600">
                  <MapPin className="h-4 w-4 text-neutral-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social icons — big glassy */}
              <div className="flex items-center gap-3 pt-3">
                {socials.map((social) => (
                  <Link
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                  >
                    <GlassIcon size="lg">
                      <social.icon className="h-5 w-5" />
                    </GlassIcon>
                  </Link>
                ))}
              </div>

              {/* Backed by EvoNexus — YC-style badge */}
              <a
                href="https://evonexus.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-50/60 px-4 py-2 transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-50"
              >
                <img
                  src="/Evo-Logo.png"
                  alt="EvoNexus"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-md object-contain"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-amber-600/70">
                    Backed by
                  </span>
                  <span className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors">
                    EvoNexus
                  </span>
                </div>
              </a>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-900">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-3 text-[15px] text-neutral-700 transition-colors duration-200 hover:text-neutral-900"
                        >
                          <GlassIcon size="md" parentGroup>
                            <link.icon className="h-4 w-4" />
                          </GlassIcon>
                          <span className="font-medium group-hover:underline">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16">
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-300/60 to-transparent" />

            <div className="flex flex-col items-center justify-between gap-5 pt-7 sm:flex-row">
              <p className="text-sm text-neutral-400">
                &copy; {new Date().getFullYear()} Gold Health Inc. All rights
                reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-1">
                {legalLinks.map((link, idx) => (
                  <span key={link.name} className="flex items-center">
                    <Link
                      href={link.href}
                      className="rounded-full px-3 py-1.5 text-sm text-neutral-500 transition-all duration-200 hover:bg-black/[0.04] hover:text-neutral-800"
                    >
                      {link.name}
                    </Link>
                    {idx < legalLinks.length - 1 && (
                      <span className="text-neutral-300">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
