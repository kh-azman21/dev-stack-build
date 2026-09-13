export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/50 px-4 py-1.5 text-xs font-semibold text-pink-600">
          <span>✨ Figma to Code Stack Builder</span>
        </div>

        {/* Main Heading */}
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Build Your Tech Stack{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Faster
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Select your framework, database, and styling tools to generate ready-to-use project templates instantly.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition-all hover:opacity-90">
            Start Building
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
            View Templates
          </button>
        </div>

      </div>
    </section>
  );
}
