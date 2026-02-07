export default function Home() {
  return (
    <div className="min-h-[200vh] relative">
      {/* Soft ambient color blobs so the glass blur is visible */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-[100px]" />
        <div className="absolute top-40 right-1/4 h-[400px] w-[400px] rounded-full bg-rose-200/30 blur-[100px]" />
        <div className="absolute top-96 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-sky-200/25 blur-[100px]" />
      </div>

      <div className="relative pt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
          Your health,
          <br />
          <span className="text-neutral-400">reimagined.</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
          Clinical-grade health monitoring meets beautiful design. Coming soon
          to the App Store.
        </p>
      </div>
    </div>
  );
}
