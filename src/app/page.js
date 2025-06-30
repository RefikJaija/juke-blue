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
      <HeroSection
      previewClip="/videos/hero-clip.mp4"
      fullVideo="/videos/hero.mp4"
      title=""
      description="Juke Blue's Double Blue instills the holy essence of nature into every blessed drop.
          Its secret was revealed as he stood destitute on the shores of the Aegean Sea."
      buttonText="See how he got there →"
    />
      <section id="nav-grid" className="scroll-mt-20">
        <NavGrid />
      </section>
    </div>
  )
}
