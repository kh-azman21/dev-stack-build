export default function YourStack({ selectedStack, onRemoveItem, onRemoveAll }) {
  const count = selectedStack.length;

  return (
    <div className="w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:w-80 lg:shrink-0">
      <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-xs text-slate-400">
        {count > 0
          ? `${count} Technology Selected`
          : 'No technologies selected yet.'}
      </p>

      {/* Empty State */}
      {count === 0 ? (
        <div className="mt-6 flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        /* Selected Items List */
        <div className="mt-6 space-y-3">
          {selectedStack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {tech.name}
                  </h4>
                  <p className="text-[10px] text-slate-400">{tech.category}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemoveItem(tech.id)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Clear All Button */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-xl border border-rose-200 py-2.5 text-xs font-semibold text-rose-500 hover:bg-rose-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
