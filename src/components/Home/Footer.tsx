import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube, MapPin } from "lucide-react";

const footerSections = [
  {
    title: "Download",
    links: [
      {
        name: "iOS App",
        href: "https://apps.apple.com/us/app/gold-ai/id1334427427",
      },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "App Docs", href: "/docs" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Actions",
    links: [
      { name: "Request feature", href: "/support#feature" },
      { name: "Report bug", href: "/support#bug" },
      { name: "Contact", href: "/support#contact" },
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
    <footer className="relative mt-20 bg-white">
      {/* Top separator — subtle shade change */}
      <div className="h-px bg-neutral-100" />

      <div className="relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
          {/* Main grid */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
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
              <p className="text-[15px] leading-relaxed text-neutral-900">
                Medal-winning secrets for life.
              </p>
              <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                <MapPin className="h-3.5 w-3.5" />
                <span>San Francisco, CA</span>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 pt-2">
                {socials.map((social) => (
                  <Link
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200/80 text-neutral-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
                  >
                    <social.icon className="h-[16px] w-[16px]" />
                  </Link>
                ))}
              </div>

              {/* Backed by EvoNexus */}
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
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-14">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-4 text-sm font-semibold text-neutral-400">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm font-medium text-neutral-800 transition-colors duration-200 hover:text-neutral-950"
                        >
                          {link.name}
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
            <div className="h-px bg-neutral-100" />

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
                      <span className="text-neutral-300">&middot;</span>
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
