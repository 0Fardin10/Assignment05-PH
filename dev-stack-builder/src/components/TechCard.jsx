export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/5 transition duration-200">
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Ekhane Image bosano hoyeche */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 ${tech.iconBg}`}>
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
            {tech.badge}
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900">{tech.name}</h3>
        <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">{tech.desc}</p>
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Category: <strong className="text-slate-700">{tech.category}</strong></span>
          <span className="flex items-center gap-1 text-amber-500 font-semibold">★ {tech.rating}</span>
        </div>
      </div>
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2.5 rounded-xl text-xs font-semibold transition ${
          isAdded
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
            : 'bg-slate-900 hover:bg-pink-600 text-white shadow-sm'
        }`}
      >
        {isAdded ? 'Added to Stack' : '+ Add to Stack'}
      </button>
    </div>
  );
}