// src/app/components/NavGrid.jsx
const links = [
    { title: "COCKTAILS", path: "/cocktails" },
    { title: "THE SONGBOOK", path: "/songbook" },
    { title: "SHOP", path: "/shop" },
    { title: "THE MAP", path: "/map" }
  ];
  
  export default function NavGrid() {
    return (
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto p-8">
        {links.map((link) => (
          <a 
            key={link.path}
            href={link.path}
            className="bg-antique/80 text-nautical p-6 text-center rounded-lg 
                     hover:bg-blush transition-all border-2 border-nautical/20"
          >
            <h2 className="font-title text-2xl">{link.title}</h2>
          </a>
        ))}
      </div>
    )
  }