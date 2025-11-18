import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name — Master’s student in AI. Built with love and pastel vibes.
        </div>
      </footer>
    </div>
  )
}

export default App
