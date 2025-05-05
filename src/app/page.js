import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import NavGrid from './components/NavGrid'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="nav-grid" className="scroll-mt-20"> {/* Adds scroll margin */}
      <NavGrid />
      </section>
    </div>
  )
}