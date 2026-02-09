import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team — Gold Health",
  description:
    "Meet the world-class team behind Gold Health — Olympic athletes, AI pioneers, NASA astronauts, and healthcare innovators.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  // linkedin?: string;
}

interface Partner {
  name: string;
  description: string;
}

const leadership: TeamMember[] = [
  {
    name: "Sky Christopherson",
    role: "Founder & CEO",
    photo: "/Team-Photos/Headshots/sky-christopherson.jpg.webp",
    bio: "Olympic Gold Medalist and pioneer in athlete health technology. Sky founded Gold Health to bring clinical-grade health monitoring to everyone.",
  },
  {
    name: "Tom Gruber",
    role: "Co-Founder — Creator of Siri (Apple)",
    photo: "/Team-Photos/Headshots/Tom-Gruber.jpg.webp",
    bio: "Co-creator of Siri at Apple and leading AI visionary. Tom brings decades of experience building intelligence systems that understand people.",
  },
];

const coreTeam: TeamMember[] = [
  {
    name: "Stefan Groschupf",
    role: "Founding Advisor",
    photo: "/Team-Photos/Headshots/Stefan-Groschupf.jpg.webp",
  },
  {
    name: "Bekzod Rakhmatov",
    role: "Lead AI Engineer",
    photo: "/Team-Photos/Headshots/Bekzod.jpg.webp",
  },
  {
    name: "Yvonne Cagle, MD",
    role: "Scientific Advisor — NASA Astronaut",
    photo: "/Team-Photos/Headshots/Yvonne-Cagle.jpg.webp",
  },
  {
    name: "Bao Tran",
    role: "Patent Attorney",
    photo: "/Team-Photos/Headshots/Bao-Tran.jpg.webp",
  },
];

const partners: Partner[] = [
  {
    name: "EvoNexus",
    description: "Incubator — 2026 Selection",
  },
  {
    name: "Cooley LLP",
    description: "Outside Counsel",
  },
];

const advisors: TeamMember[] = [
  {
    name: "Vince Voron",
    role: "Former Apple. Design Advisor",
  },
  {
    name: "Nataliia Karpenko",
    role: "Former Meta, Product Advisor",
  },
  {
    name: "Quincy Burgers",
    role: "Equinox Level 1 Trainer, Advisor",
  },
  {
    name: "Ben Dubin",
    role: "Digital Health & VC Advisor",
  },
];

const consultants: TeamMember[] = [
  {
    name: "Dr. Sarah Townley",
    role: "Health Coaching Consultant",
  },
  {
    name: "Michael Ostrolenk",
    role: "Marketing Consultant",
  },
  {
    name: "Elizabeth Frances",
    role: "Health Coaching Consultant",
  },
];

const investors: TeamMember[] = [
  {
    name: "Philip Marshall",
    role: "London based PE. Pre-SEED",
  },
  {
    name: "Bill Simpson",
    role: "Pre-SEED & Tech Advisory",
  },
  {
    name: "D. Christopherson",
    role: "Pre-SEED",
  },
  {
    name: "Reza Kazemipour",
    role: "Prototype Investor & VC Advisory",
  },
];

const firstOlympicProject: TeamMember[] = [
  {
    name: "Adam Laurent",
    role: "Olympian, Drug-Free Program",
  },
  {
    name: "Tamara Cheek",
    role: "Olympian, Personal Gold Director",
  },
  {
    name: "Dr. Eric Topol",
    role: "Digital Health Advisor",
  },
  {
    name: "Rich Yang",
    role: "CGM Advisor & GOLD Sensing Advisor",
  },
  {
    name: "CDR Mark Divine",
    role: "Navy SEAL. Team Building Advisor",
  },
  {
    name: "Michael Morris, MD",
    role: "Medical Advisor & Pre-SEED Investor",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((w) => !w.includes(".") || w.length <= 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const INITIALS_COLORS = [
  "from-[#065b64] to-[#0a8f9c]",
  "from-[#EC7013] to-[#f4a261]",
  "from-[#7c3aed] to-[#a78bfa]",
  "from-[#065b64] to-[#10b981]",
  "from-[#d97706] to-[#f4d03f]",
  "from-[#6366f1] to-[#818cf8]",
];

function colorForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return INITIALS_COLORS[Math.abs(hash) % INITIALS_COLORS.length];
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10 text-center">
      <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Avatar({
  name,
  photo,
  size = 80,
}: {
  name: string;
  photo?: string;
  size?: number;
}) {
  if (photo) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-white/80"
        style={{ width: size, height: size }}
      >
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          sizes={`${size}px`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colorForName(name)} ring-2 ring-white/80`}
      style={{ width: size, height: size }}
    >
      <span
        className="font-semibold text-white"
        style={{ fontSize: size * 0.35 }}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}

function FeaturedCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col items-center gap-6 rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] sm:flex-row sm:items-start">
      <Avatar name={member.name} photo={member.photo} size={120} />
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#EC7013]">
          {member.role}
        </p>
        {member.bio && (
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {member.bio}
          </p>
        )}
        {/* <a href="#" className="mt-3 inline-block text-sm text-neutral-400 hover:text-neutral-600">LinkedIn &rarr;</a> */}
      </div>
    </div>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col items-center rounded-3xl border border-white/50 bg-white/30 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)]">
      <Avatar name={member.name} photo={member.photo} />
      <h3 className="mt-4 text-center text-sm font-semibold text-neutral-900">
        {member.name}
      </h3>
      <p className="mt-1 text-center text-xs text-neutral-500">
        {member.role}
      </p>
      {/* <a href="#" className="mt-2 text-xs text-neutral-400 hover:text-neutral-600">LinkedIn</a> */}
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="rounded-3xl border border-white/40 bg-white/20 px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      <h3 className="text-sm font-semibold text-neutral-900">
        {partner.name}
      </h3>
      <p className="mt-1 text-xs text-neutral-500">{partner.description}</p>
    </div>
  );
}

function TextCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-3xl border border-white/40 bg-white/20 px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      <h3 className="text-sm font-semibold text-neutral-900">
        {member.name}
      </h3>
      <p className="mt-1 text-xs text-neutral-500">{member.role}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function TeamPage() {
  return (
    <main className="relative min-h-screen pb-24 pt-32">
      {/* Background gradient blobs for glassmorphism */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-20 right-[10%] h-[600px] w-[600px] rounded-full bg-[#EC7013]/15 blur-[100px]" />
        <div className="absolute top-[20%] -left-20 h-[500px] w-[500px] rounded-full bg-[#065b64]/12 blur-[100px]" />
        <div className="absolute top-[45%] right-[5%] h-[450px] w-[450px] rounded-full bg-[#f4d03f]/15 blur-[100px]" />
        <div className="absolute top-[65%] left-[15%] h-[400px] w-[400px] rounded-full bg-[#EC7013]/10 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[30%] h-[350px] w-[350px] rounded-full bg-[#065b64]/10 blur-[100px]" />
      </div>
      {/* Content (relative to sit above gradient blobs) */}
      <div className="relative">

      {/* Hero with team photo */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Team photo background */}
          <div className="relative h-[280px] sm:h-[340px]">
            <Image
              src="/Team-Photos/Team photos/team.webp"
              alt="Gold Health Team"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>
          {/* Glass overlay with text */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Who We Are
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Team
            </h1>
            <p className="mx-auto mt-4 max-w-2xl px-4 text-base leading-relaxed text-white/80">
              Olympic athletes, AI pioneers, NASA astronauts, and healthcare
              innovators — united to reimagine personal health.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto mt-20 max-w-5xl px-6">
        <SectionHeading label="Leadership" title="Founded by the Best" />
        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((member) => (
            <FeaturedCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeading label="Core Team" title="Building the Future" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {coreTeam.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeading label="Partners" title="Strategic Partners" />
        <div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeading label="Advisors" title="Guided by Experts" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {advisors.map((member) => (
            <TextCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Consultants */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeading label="Consultants" title="Specialized Expertise" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {consultants.map((member) => (
            <TextCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Investors */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeading label="Investors" title="Backed by Believers" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {investors.map((member) => (
            <TextCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* First Olympic Project */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeading
          label="Where It Started"
          title="First Olympic Project"
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {firstOlympicProject.map((member) => (
            <TextCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      </div>
    </main>
  );
}
