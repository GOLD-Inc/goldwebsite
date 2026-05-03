const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

export default function PricingStrip() {
  return (
    <section aria-label="Pricing" className="pt-2 pb-10 sm:pt-3 sm:pb-12">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_28px_rgba(15,23,42,0.18)] ring-1 ring-black/5">
          <AppleIcon className="h-6 w-6 text-slate-400" />
        </div>

        <div className="flex items-baseline gap-x-5 text-xl font-bold tracking-tight text-slate-900 sm:gap-x-6 sm:text-2xl">
          <span className="whitespace-nowrap">Monthly $9.99</span>
          <span className="whitespace-nowrap">Yearly $49.99</span>
        </div>
      </div>
    </section>
  );
}
