// //---------------------------- 1 ----------------------------//
// src/app/components/NavGrid.jsx
const links = [
  { 
    title: "COCKTAILS", 
    path: "/cocktails",
    icon: (
      <svg className="w-20 h-20 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12H4M12 20l-4-4 4-4 4 4-4 4z" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    subtitle: "Siren's Brews"
  },
  { 
    title: "THE SONGBOOK", 
    path: "/songbook",
    icon: (
      <svg className="w-20 h-20 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12H4M16 5l-4 7-4-7" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    subtitle: "Sea Shanty Archive"
  },
  { 
    title: "SHOP", 
    path: "/shop",
    icon: (
      <svg className="w-20 h-20 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 7h18l-1.5 9H4.5L3 7z" strokeWidth="1.5" fill="none"/>
        <path d="M16 11a3 3 0 11-6 0" strokeWidth="1.5"/>
        <path d="M9 5V3a2 2 0 012-2h2a2 2 0 012 2v2" strokeWidth="1.5"/>
        <path d="M12 15v4" strokeWidth="1.5"/>
      </svg>
    ),
    subtitle: "Plunder & Provisions"
  },
  { 
    title: "THE MAP", 
    path: "/map",
    icon: (
      <svg className="w-20 h-20 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 5v14l6-3 6 3 6-3V5l-6 3-6-3-6 3z" strokeWidth="1.5"/>
        <path d="M9 3v16M15 5v16" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.5" strokeWidth="1.5"/>
        <path d="M12 19V12" strokeWidth="1.5"/>
      </svg>
    ),
    subtitle: "Chart the Course"
  }
];

export default function NavGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto p-8">
      {links.map((link) => (
        <a 
          key={link.path}
          href={link.path}
          className="group relative bg-antique/95 text-nautical p-10 text-center rounded-2xl 
                   hover:transform hover:scale-[1.02] transition-all duration-300 shadow-xl
                   hover:shadow-2xl border-4 border-nautical/30 hover:border-blush/50
                   min-h-[350px] flex flex-col items-center justify-center
                   bg-[url('/images/parchment-texture.png')] bg-blend-overlay"
        >
          {/* Icon Container */}
          <div className="text-nautical/90 group-hover:text-blush transition-colors mb-8">
            {link.icon}
          </div>
          
          {/* Text Container */}
          <div className="space-y-4">
            <h2 className="font-pirate text-4xl md:text-5xl tracking-wider">
              {link.title}
            </h2>
            <p className="text-lg uppercase tracking-wider text-nautical/80 font-title">
              {link.subtitle}
            </p>
          </div>
          
          {/* Animated Wave Border */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-nautical/30 via-blush/40 to-nautical/30 opacity-80 group-hover:opacity-100 transition-opacity animate-wave"></div>
        </a>
      ))}
    </div>
  )
}


