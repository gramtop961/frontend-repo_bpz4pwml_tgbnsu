import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/75 to-white pointer-events-none"></div>

      <div className="relative z-10 h-full mx-auto max-w-6xl px-6 flex flex-col justify-end pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Open to internships and research collaborations
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Building intelligent systems with a human touch
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            I’m a Master’s student in Artificial Intelligence focused on applied ML, LLMs, and human-centered AI. I design, prototype, and ship end‑to‑end solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-xl bg-indigo-500 text-white px-5 py-3 text-sm font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.35)] hover:bg-indigo-600 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-700 px-5 py-3 text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
