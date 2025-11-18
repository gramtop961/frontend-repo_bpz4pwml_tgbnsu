import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'LLM-Powered Research Assistant',
    description: 'Built a retrieval-augmented generation pipeline with embeddings, vector search, and a conversational agent for literature review.',
    tags: ['Python', 'FastAPI', 'LangChain', 'Pinecone'],
    link: '#',
    github: '#'
  },
  {
    title: 'Computer Vision for Quality Control',
    description: 'Deployed a lightweight YOLOv8 model to detect defects on a conveyor line with real-time feedback UI.',
    tags: ['PyTorch', 'ONNX', 'YOLOv8', 'React'],
    link: '#',
    github: '#'
  },
  {
    title: 'Time-Series Forecasting Toolkit',
    description: 'Designed modular pipelines for feature engineering and forecasting with Prophet and LSTMs, exposing a simple API.',
    tags: ['Python', 'Prophet', 'LSTM', 'Docker'],
    link: '#',
    github: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-indigo-50/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
          <a href="#contact" className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold">Let’s collaborate →</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(148,163,184,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/20 via-pink-200/10 to-sky-200/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.github} className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-800 text-sm font-medium">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
