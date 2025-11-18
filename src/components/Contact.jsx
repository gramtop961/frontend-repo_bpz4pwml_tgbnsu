import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-pink-50/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_24px_rgba(148,163,184,0.15)]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Mail />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Let’s talk</h3>
              <p className="text-slate-600">Have a project in mind or want to collaborate?</p>
            </div>
          </div>

          <form onSubmit={submit} className="mt-6 grid gap-4">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <textarea
              required
              rows={4}
              placeholder="Say hello and tell me about your idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white hover:bg-indigo-600 transition-colors"
            >
              <Send size={18} /> Send Message
            </button>
            {sent && (
              <p className="text-sm text-emerald-600">Thanks! I’ll get back to you soon.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
