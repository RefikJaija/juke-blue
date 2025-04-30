// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <video 
        autoPlay 
        muted 
        loop 
        className="w-full h-full object-cover brightness-75"
      >
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
            <p className="font-title text-xl md:text-3xl text-antique mb-6 leading-relaxed">
              "Crafted from the finest German wheat and secrets from the deep blue yonder,<br />
              Juke Blue’s Double Blue distills the essence of humanity into every blessed drop."
            </p>
            
            <div className="space-y-4 animate-fadeInUp">
              <p className="text-antique/90 italic text-lg">
                Although the Juke cannot reveal details, he can say the mystery was revealed to him
              </p>
              <p className="text-blush font-bold text-xl">
                as he stood destitute on the shores of the Aegean Sea.
              </p>
              <a 
                  href="/story" 
                  className="inline-block mt-8 px-8 py-3 bg-antique text-nautical 
                            border-2 border-nautical rounded-xl font-title text-lg 
                            tracking-wider shadow-md hover:bg-blush transition-all duration-200"
                >
                  See how he got there →
                </a>

            </div>
        </div>
      </div>
    </section>
  )
}

