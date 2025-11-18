export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About Me</h2>
        <p className="mt-6 text-slate-600 leading-relaxed text-lg">
          I’m a Master’s student in Artificial Intelligence with a passion for applied machine learning and product thinking. My work spans building data pipelines, training models, deploying APIs, and crafting intuitive interfaces. I enjoy turning complex research ideas into useful, accessible tools.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Focus Areas</p>
            <p className="mt-1 font-medium text-slate-800">LLMs • NLP • CV • Time‑Series • MLOps</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Toolbox</p>
            <p className="mt-1 font-medium text-slate-800">Python • PyTorch • FastAPI • React • Docker • MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  )
}
