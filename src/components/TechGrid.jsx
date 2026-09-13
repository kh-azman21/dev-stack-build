import { useEffect, useState } from 'react';

export default function TechGrid() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load technologies:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="technologies" className="py-16 text-center">
        <p className="text-lg font-medium text-slate-500">Loading technologies...</p>
      </section>
    );
  }

  return (
    <section id="technologies" className="bg-slate-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore the <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
                    {tech.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-slate-900">{tech.name}</h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
                  {tech.description}
                </p>

                {/* Meta Details: Category, Difficulty, Rating */}
                <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600">
                    {tech.category}
                  </span>
                  <span>{tech.difficulty}</span>
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <span className="text-amber-400">★</span> {tech.rating}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Add to Stack
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}