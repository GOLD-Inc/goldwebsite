export default function LegalPage({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white pt-40 sm:pt-48 pb-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          )}
          <p className="mt-4 text-sm text-slate-500">
            Last Updated: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-slate-300/80 via-slate-200 to-transparent" />
        </header>

        {/* Body — prose styles */}
        <div className="legal-prose space-y-8 text-[15px] leading-relaxed text-slate-600
          [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
          [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-800
          [&_p]:mb-4
          [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-slate-500
          [&_ol]:my-4 [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:list-decimal [&_ol]:marker:text-slate-500
          [&_li]:pl-1
          [&_a]:text-teal-700 [&_a]:underline [&_a]:decoration-teal-700/30 [&_a]:underline-offset-2 hover:[&_a]:decoration-teal-700/80 [&_a]:transition-colors
          [&_strong]:font-semibold [&_strong]:text-slate-800
          [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-slate-700 [&_code]:border [&_code]:border-slate-200/60
          [&_em]:text-slate-600
        ">
          {children}
        </div>
      </div>
    </main>
  );
}

export function Callout({
  children,
  variant = "info",
}: {
  children: React.ReactNode;
  variant?: "info" | "warning";
}) {
  const styles = {
    info: "border-teal-200 bg-teal-50/50 text-teal-900",
    warning: "border-amber-200 bg-amber-50/50 text-amber-900",
  };

  return (
    <div
      className={`my-6 rounded-xl border px-5 py-4 text-[15px] leading-relaxed ${styles[variant]}`}
    >
      {children}
    </div>
  );
}
