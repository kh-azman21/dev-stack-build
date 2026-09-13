import { useEffect, useState } from 'react';

export default function TechGrid({ selectedStack, onAddStack }) {
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
      <div className="flex-1 py-16 text-center">
        <p className="text-lg font-medium text-slate-500">Loading technologies...</p>
      </div>
    );
  }

  const getBadgeStyle = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'popular':
      case 'top sql':
      case 'essential':
      case 'robust':
      case 'containers':
        return 'bg-sky-50 text-sky-500';
      case 'versatile':
      case 'standard':
        return 'bg-emerald-50 text-emerald-500';
      case 'fast':
        return 'bg-amber-50 text-amber-600';
      case 'cache':
        return 'bg-rose-50 text-rose-500';
      case 'ubiquitous':
        return 'bg-yellow-50 text-yellow-600';
      case 'modern':
        return 'bg-cyan-50 text-cyan-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  const handleButtonClick = (tech, isSelected) => {
    if (isSelected) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    onAddStack(tech);
  };

  return (
    <div className="flex-1">
      <div className="text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((tech) => {
          const isSelected = selectedStack.some((item) => item.id === tech.id);

          return (
            <div
              key={tech.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${getBadgeStyle(tech.badge)}`}>
                    {tech.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{tech.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
                  {tech.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600 font-medium">
                    {tech.category}
                  </span>
                  <span>{tech.difficulty}</span>
                  <span className="flex items-center gap-1 font-semibold text-slate-800">
                    <span className="text-amber-400">★</span> {tech.rating}
                  </span>
                </div>
              </div>

              <button
                type="button"
                disabled={isSelected}
                onClick={() => handleButtonClick(tech, isSelected)}
                className={`mt-6 w-full rounded-xl py-3 text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'cursor-not-allowed bg-emerald-500 text-white opacity-90'
                    : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}
              >
                {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

