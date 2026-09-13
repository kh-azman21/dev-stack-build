export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        
        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#technologies"
              className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        
        <div className="flex-1">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <img
              src="/banner-stack.png"
              alt="Development Stack Illustration"
              className="w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
