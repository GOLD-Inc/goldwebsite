import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube, MapPin } from "lucide-react";
import Image from "next/image";

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
      { name: "Team", href: "/team" },
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
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/support#contact" },
      { name: "Mission", href: "/support#contact" },
      { name: "Careers", href: "/career" },
    ],
  },
  {
    title: "Work with Us",
    links: [
      { name: "Jobs", href: "/support#jobs" },
      { name: "Partners", href: "/support#partners" },
      { name: "Investors", href: "/support#investors" },
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
      <div className="h-px bg-slate-100" />

      <div className="relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 pt-16 pb-8">
          {/* Main grid */}
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            {/* Brand column */}
            <div className="max-w-sm space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="GOLD-logo--black-vector.svg"
                  alt="Gold Health"
                  width={130}
                  height={52}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-[15px] leading-relaxed text-slate-900">
                Medal-winning secrets for life.
              </p>
              <div className="flex items-center gap-1.5 text-sm text-slate-600">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200/80 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
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
                className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100"
              >
                <Image
                  src="/Evo-Logo.png"
                  alt="EvoNexus"
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-md object-contain"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    Backed by
                  </span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors">
                    EvoNexus
                  </span>
                </div>
              </a>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 sm:gap-8 lg:gap-12">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-4 text-sm font-semibold text-slate-500">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm font-medium text-slate-800 transition-colors duration-200 hover:text-slate-950"
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
            <div className="h-px bg-slate-100" />

            <div className="flex flex-col items-center justify-between gap-5 pt-7 sm:flex-row">
              <p className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Gold Health Inc. All rights
                reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-1">
                {legalLinks.map((link, idx) => (
                  <span key={link.name} className="flex items-center">
                    <Link
                      href={link.href}
                      className="rounded-full px-3 py-1.5 text-sm text-slate-600 transition-all duration-200 hover:bg-black/[0.04] hover:text-slate-800"
                    >
                      {link.name}
                    </Link>
                    {idx < legalLinks.length - 1 && (
                      <span className="text-slate-300">&middot;</span>
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
