import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorkCarousel from './components/WorkCarousel'
import Technologies from './components/Technologies'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div id="top" className="page-shell">
      <Navbar />

      <main className="page-main">
        <Hero />
        <About />
        <WorkCarousel />
        <Technologies />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
