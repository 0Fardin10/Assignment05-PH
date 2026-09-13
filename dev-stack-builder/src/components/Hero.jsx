export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Explore frontend, backend, database, and testing options, compare them side-by-side, and pair together the best stack for your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition shadow-md shadow-pink-200">
              Explore Technologies
            </button>
            <button className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg text-sm transition">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Updated Exact Banner Path */}
            <img 
              src="/logos/banner-stack.png" 
              alt="Development Stack 3D Visual" 
              className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}