import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-slate-700 md:text-slate-600">
      <li><a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a></li>
      <li><a href="#about" className="hover:text-indigo-500 transition-colors">About</a></li>
      <li><a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a></li>
      <li className="flex items-center gap-3 pt-2 md:pt-0">
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900"><Github size={20} /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900"><Linkedin size={20} /></a>
        <a href="mailto:you@example.com" aria-label="Email" className="text-slate-600 hover:text-slate-900"><Mail size={20} /></a>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_8px_24px_rgba(148,163,184,0.25)]">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" className="font-semibold tracking-tight text-slate-800">AI Portfolio</a>
            <nav className="hidden md:block">
              <NavLinks />
            </nav>
            <button className="md:hidden text-slate-700" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-slate-200 px-5 py-4">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
