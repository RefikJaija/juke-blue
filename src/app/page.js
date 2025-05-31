// import HeroSection from './components/HeroSection'
// import Navbar from './components/Navbar'
// import NavGrid from './components/NavGrid'
// import Footer from './components/Footer'

// export default function Home() {
//   return (
//     <div>
//       <HeroSection />
//       <section id="nav-grid" className="scroll-mt-20"> {/* Adds scroll margin */}
//       <NavGrid />
//       </section>
//     </div>
//   )
// }

// src/app/page.js
import HeroSection from './components/HeroSection'
import NavGrid from './components/NavGrid'

export default function Home() {
  return (
    /* make sure this wrapper is above backgrounds */
    <div className="relative z-10">
      <HeroSection />
      <section id="nav-grid" className="scroll-mt-20">
        <NavGrid />
      </section>
    </div>
  )
}
