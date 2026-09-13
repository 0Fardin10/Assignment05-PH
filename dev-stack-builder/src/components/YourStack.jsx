export default function YourStack({ stack, onRemove, onClearAll }) {
  return (
    <aside className="bg-white border border-slate-200 rounded-2xl p-6 h-fit shadow-sm sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h3 className="font-bold text-slate-900">Your Stack</h3>
          <p className="text-[11px] text-slate-400">Selected technologies</p>
        </div>
        <span className="text-xs bg-pink-100 text-pink-600 font-extrabold px-2.5 py-0.5 rounded-full">
          {stack.length}
        </span>
      </div>
      {stack.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-xs text-slate-400">No technologies added yet.</p>
          <p className="text-[11px] text-slate-300 mt-1">Click "+ Add to Stack" to select.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                {/* Ekhane Image bosano hoyeche */}
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <p className="text-xs font-bold text-slate-800">{item.name}</p>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500 text-xs font-bold p-1 transition">
                ✕
              </button>
            </div>
          ))}
          <button onClick={onClearAll} className="w-full mt-4 text-xs font-bold text-red-500 hover:text-red-600 text-center py-2 transition">
            Remove all
          </button>
        </div>
      )}
    </aside>
  );
}