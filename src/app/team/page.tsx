"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TeamMember {
  name: string;
  role: string;
  subtitle?: string;
  photo?: string;
  landscapePhoto?: string;
  bio?: string[];
  linkedin?: string;
}

interface Partner {
  name: string;
  description: string;
  url?: string;
}

const founders: TeamMember[] = [
  {
    name: "Sky Christopherson",
    role: "Founder",
    subtitle: "Olympic Athlete",
    photo: "/Team-Photos/Headshots/Sky-Christopherson.jpg",
    landscapePhoto: "/Team-Photos/landscape-imges/Sky.jpg",
    linkedin: "https://www.linkedin.com/in/skychristopherson/",
    bio: [
      "Sky Christopherson is an Olympic cyclist, world record holder, and multiple patent-holding innovator at the intersection of sport, technology, and public health. Featured in Fortune, Sports Illustrated, Outside Magazine, and the Financial Times, he is the inventor of 10 issued core AI coaching patents that define the next frontier of AI-powered health and wellness.",
      "Sky pioneered a data-driven model to set a world record and supported the U.S. Olympic team in winning Olympic medals, captured in the award-winning documentary Personal Gold. At the Paris Olympic Games, he announced GOLD, the consumer platform with the mission of helping everyone thrive.",
    ],
  },
  {
    name: "Tom Gruber",
    role: "Founding Advisor",
    subtitle: "Apple Siri",
    photo: "/Team-Photos/Headshots/Tom-Gruber.jpg",
    landscapePhoto: "/Team-Photos/landscape-imges/Tom.jpg",
    linkedin: "https://www.linkedin.com/in/tomgruberprofile/",
    bio: [
      "Tom Gruber is the co-founder of Apple\u2019s Siri, the first widely deployed intelligent assistant. As Siri\u2019s CTO and head of design, he guided the product through its acquisition by Apple, a core feature used over a billion times daily.",
      "For over four decades, Tom has pursued a singular mission: to use AI to augment human intelligence, not replace it. In 2024, he joined GOLD as a founding advisor, then co-founder in 2025 to help build emotionally intelligent AI Avatar Coaches that combine behavioral science, real-time data, and human connection to deliver scalable wellness.",
    ],
  },
];

const buildingTheFuture: TeamMember[] = [
  {
    name: "Stefan Groschupf",
    role: "Founding Advisor",
    photo: "/Team-Photos/Headshots/Stefan-Groschupf.jpg.webp",
    landscapePhoto: "/Team-Photos/landscape-imges/Stefan.jpg",
    linkedin: "https://www.linkedin.com/in/stefangroschupf/",
    bio: [
      "Stefan Groschupf is a multi-time Silicon Valley AI founder. He founded Datameer, the company that provided data analytics to GOLD\u2019s Olympic project. He also founded Automation Hero, and Centrum-AI, with over two decades building distributed systems and AI infrastructure.",
      "At GOLD, Stefan advises on CTO strategy and ensures the platform is scalable, secure, and investor-ready, translating the company\u2019s vision into a robust technical foundation that supports measurable health outcomes and rapid growth.",
    ],
  },
  {
    name: "Bekzod Rakhmatov",
    role: "Lead AI Engineer",
    photo: "/Team-Photos/Headshots/Bekzod.jpg.webp",
    landscapePhoto: "/Team-Photos/landscape-imges/bekzod-bio.png",
    linkedin: "https://www.linkedin.com/in/bekzodrakhmatov/",
    bio: [
      "Bekzod Rakhmatov is a Lead Software and Engineer at GOLD, where he leads mobile and AI architecture for next-generation coaching experiences. He specializes in building high-performance iOS systems paired with intelligent backend services, turning complex AI capabilities into fast, reliable product features.",
      "He has shipped and scaled consumer apps across fitness, smart devices, and cloud streaming, and brings strong technical leadership in Swift, full-stack development, and applied AI to deliver polished, production-ready software.",
    ],
  },
  {
    name: "Dr. Yvonne Cagle",
    role: "Scientific Advisor",
    photo: "/Team-Photos/Headshots/Yvonne-Cagle.jpg.webp",
    landscapePhoto: "/Team-Photos/landscape-imges/Yvonne.png",
    linkedin: "https://www.linkedin.com/in/yvonnedcagle/",
    bio: [
      "Dr. Yvonne Cagle is a physician whose pioneering research examines human health and resilience in extreme environments, including space. Her work on muscle loss, bone decline, and cognitive strain offers critical insights into the effects of modern sedentary lifestyles.",
      "As a GOLD advisor, Dr. Cagle helps shape our AI Avatar Coaches to guide users toward more active, resilient lives \u2014 applying proven science to support mental health, vitality, and longevity, aligned with GOLD\u2019s mission to make evidence-based health accessible to all.",
    ],
  },
  {
    name: "Bao Tran",
    role: "Patent Attorney",
    photo: "/Team-Photos/Headshots/Bao-Tran.jpg.webp",
    landscapePhoto: "/Team-Photos/landscape-imges/Bao.png",
    linkedin: "https://www.linkedin.com/in/baotran/",
    bio: [
      "Bao Tran is a Silicon Valley-based investor focusing on early-stage technology ventures. He is also the founder of PowerPatent, a SaaS company streamlining IP workflows with AI, and a partner at PatentPC, where he advises startups on patent strategy and IP monetization.",
      "Bao is an investor in GOLD and serving as our in-house IP attorney, securing 7 patents issued for core AI coaching technologies, and 3 favorably disposed (upcoming issuance).",
    ],
  },
  {
    name: "Nataliia Karpenko",
    role: "Product Advisor",
    photo: "/Team-Photos/Headshots/Nataliia-Karpenko.jpg.webp",
    landscapePhoto: "/Team-Photos/landscape-imges/Nataliia.png", // add when headshot is ready
    linkedin: "https://www.linkedin.com/in/nataliiakarpenko/",
    bio: [
      "Nataliia is former Meta and Advisor for Product at GOLD Health, connecting the company to Silicon Valley's digital health ecosystems. With experience in healthcare strategy, startup development, user research, and product marketing at Meta, she brings expertise in positioning emerging technologies for broad adoption.",
      "At GOLD, she supports product strategy, partnerships, and community engagement, designing workshops that unite Olympic talent, AI leaders, and early users to drive momentum and ensure the platform resonates with both consumers and strategic stakeholders.",
    ],
  },
  {
    name: "Quincy Burgers",
    role: "Fitness Coaching Advisor",
    photo: "/Team-Photos/Headshots/Quincy-Burgers.jpg.webp",
    landscapePhoto: "/Team-Photos/landscape-imges/Quincy.png", // add when headshot is ready
    linkedin: "https://www.linkedin.com/in/quincy-burgers-443ab914/",
    bio: [
      "Quincy Burgers is a Level 1 trainer at Equinox and GOLD Health's Workout Coaching Advisor, shaping the company's training methodology and exercise programming. A respected performance coach, he specializes in evidence-based strength training, mobility, and sustainable body recomposition.",
      "At GOLD, Quincy helps design workout protocols, coaching frameworks, and tests programs in real-world settings to ensure they are effective, accessible, and adaptable for users at all fitness levels, aligning science with practical results.",
    ],
  },
];

const partners: Partner[] = [
  {
    name: "EvoNexus",
    description: "Incubator \u2014 2026 Selection",
    url: "https://evonexus.org",
  },
  {
    name: "Cooley LLP",
    description: "Outside Counsel",
    url: "https://www.cooley.com",
  },
];

const advisors: TeamMember[] = [
  { name: "Vince Voron", role: "Former Apple. Design Advisor" },
  { name: "Ben Dubin", role: "Digital Health & VC Advisor" },
  { name: "Dr. Sarah Townley", role: "Health Coaching" },
  { name: "Michael Ostrolenk", role: "Health Coaching" },
  { name: "Elizabeth Frances", role: "Health Coaching" },
];

const investors: TeamMember[] = [
  { name: "Philip Marshall", role: "London based PE. Pre-SEED" },
  { name: "Bill Simpson", role: "Pre-SEED & Tech Advisory" },
  { name: "D. Christopherson", role: "Pre-SEED" },
  { name: "Reza Kazemipour", role: "Prototype Investor & VC Advisory" },
];

const firstOlympicProject: TeamMember[] = [
  { name: "Adam Laurent", role: "Olympian, Drug-Free Program" },
  { name: "Tamara Cheek", role: "Olympian, Personal Gold Director" },
  { name: "Dr. Eric Topol", role: "Digital Health Advisor" },
  { name: "Rich Yang", role: "CGM Advisor & GOLD Sensing Advisor" },
  { name: "CDR Mark Divine", role: "Navy SEAL. Team Building Advisor" },
  { name: "Michael Morris, MD", role: "Medical Advisor & Pre-SEED Investor" },
];

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] sm:rounded-[50px] border border-slate-200 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/60 cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image — prefer landscape photo in modal */}
        {(member.landscapePhoto || member.photo) && (
          <div className="relative w-full shrink-0 bg-slate-100">
            <Image
              src={member.landscapePhoto || member.photo!}
              alt={member.name}
              width={672}
              height={500}
              className="w-full h-auto max-h-[40vh] object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        )}

        {/* Bio content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {member.name}
          </h3>
          <p className="mt-1 text-base font-medium text-slate-600">
            {member.role}
            {member.subtitle && (
              <span className="text-slate-500"> · {member.subtitle}</span>
            )}
          </p>

          <div className="mt-6 space-y-4">
            {member.bio?.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-[#065b64] hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              View LinkedIn profile &rarr;
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cards                                                              */
/* ------------------------------------------------------------------ */

function PhotoCard({
  member,
  onOpen,
  size = "large",
}: {
  member: TeamMember;
  onOpen: () => void;
  size?: "large" | "medium";
}) {
  const aspect = size === "large" ? "aspect-[3/4]" : "aspect-[3/4]";
  const nameSize =
    size === "large"
      ? "text-xl font-bold sm:text-2xl"
      : "text-base font-bold sm:text-lg";
  const roleSize = size === "large" ? "text-sm" : "text-xs";
  const rounding =
    size === "large"
      ? "rounded-[2rem] sm:rounded-[50px]"
      : "rounded-[1.75rem] sm:rounded-[50px]";
  const padding =
    size === "large" ? "p-6 pl-8 sm:pl-10" : "p-4 sm:p-5 pl-6 sm:pl-8";

  return (
    <button
      onClick={onOpen}
      className={`group relative ${aspect} w-full overflow-hidden ${rounding} border border-slate-200/80 bg-slate-100 text-left transition-transform duration-300 ease-out hover:scale-[1.03] cursor-pointer`}
    >
      {member.photo && (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes={
            size === "large"
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 50vw, 33vw"
          }
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className={`absolute inset-x-0 bottom-0 ${padding}`}>
        <h3 className={`${nameSize} text-white`}>{member.name}</h3>
        {member.subtitle && (
          <p className={`mt-0.5 ${roleSize} font-semibold text-white`}>
            {member.subtitle}
          </p>
        )}
        <p className={`mt-0.5 ${roleSize} font-medium text-white/75`}>
          {member.role}
        </p>
      </div>
    </button>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  const content = (
    <>
      <h3 className="text-sm font-semibold text-slate-900">{partner.name}</h3>
      <p className="mt-1 text-xs text-slate-600">{partner.description}</p>
    </>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-[1.5rem] sm:rounded-[50px] border border-slate-200/80 bg-white px-6 py-5 transition-colors duration-200 hover:border-[#065b64]/40 hover:bg-[#065b64]/[0.02] cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-[1.5rem] sm:rounded-[50px] border border-slate-200/80 bg-white px-6 py-5 transition-colors duration-200 hover:border-slate-300">
      {content}
    </div>
  );
}

function TextCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-[1.5rem] sm:rounded-[50px] border border-slate-200/80 bg-white px-6 py-5 transition-colors duration-200 hover:border-slate-300">
      <h3 className="text-sm font-semibold text-slate-900">{member.name}</h3>
      <p className="mt-1 text-xs text-slate-600">{member.role}</p>
    </div>
  );
}

function ExpandableSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-slate-200/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
      >
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <ChevronDown
          className={`h-6 w-6 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <main className="min-h-screen pb-24">
      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-32">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[50px]">
          <Image
            src="/Team-Photos/Team photos/GOLD-Team.jpeg"
            alt="Gold Health Team"
            width={2400}
            height={1600}
            className="w-full h-auto block"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center px-6 pb-8 sm:pb-12 lg:pb-16">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              10 Patents. 1 Mission.
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
              Translating medal-winning innovation to consumer health &amp;
              fitness.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Founders
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row">
          {founders.map((member) => (
            <div key={member.name} className="flex-1">
              <PhotoCard
                member={member}
                onOpen={() => setSelectedMember(member)}
                size="large"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Building the Future */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Building the Future
        </h2>
        <div className="flex flex-wrap gap-5">
          {buildingTheFuture.map((member) => (
            <div
              key={member.name}
              className="w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)]"
            >
              <PhotoCard
                member={member}
                onOpen={() => setSelectedMember(member)}
                size="medium"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Work with Us CTA */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <div className="flex flex-col items-center text-center py-8">
          <p className="max-w-xl text-lg sm:text-xl md:text-2xl text-black leading-relaxed">
            Join us and help improve the health of millions as a
            <br className="hidden sm:block" />
            partner, investor, or teammate.
          </p>
          <a
            href="/career"
            className="mt-8 rounded-full bg-[#FF8D25] px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#e67d1e]"
          >
            Work with Us
          </a>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Strategic Partners
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col gap-5 sm:flex-row">
          {partners.map((partner) => (
            <div key={partner.name} className="flex-1">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </section>

      {/* Expandable sections */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <ExpandableSection title="Advisors & Consultants">
          <div className="flex flex-wrap gap-4">
            {advisors.map((member) => (
              <div
                key={member.name}
                className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
              >
                <TextCard member={member} />
              </div>
            ))}
          </div>
        </ExpandableSection>

        <ExpandableSection title="Investors">
          <div className="flex flex-wrap gap-4">
            {investors.map((member) => (
              <div
                key={member.name}
                className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
              >
                <TextCard member={member} />
              </div>
            ))}
          </div>
        </ExpandableSection>

        <ExpandableSection title="Olympic Project">
          <div className="flex flex-wrap gap-4">
            {firstOlympicProject.map((member) => (
              <div
                key={member.name}
                className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
              >
                <TextCard member={member} />
              </div>
            ))}
          </div>
        </ExpandableSection>
      </section>
    </main>
  );
}
