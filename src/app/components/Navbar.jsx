export default function Navbar() {
  return (
    <nav className="bg-nautical/80 backdrop-blur-sm p-4 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <a href="/" className="flex items-center space-x-2">
           <img
              src="/images/Juke_Blue_White.png" 
              alt="logo-test"
              style={{ width: 40, height: 40 }}
           />
           <span className="font-title text-3xl text-antique">Juke Blue</span>
        </a>

        {/* Nav links */}
        <div className="space-x-6">
          <a href="/shop"      className="text-antique hover:text-blush">Shop</a>
          <a href="/cocktails" className="text-antique hover:text-blush">Cocktails</a>
          <a href="/songbook"  className="text-antique hover:text-blush">SongBook</a>
          <a href="/map"       className="text-antique hover:text-blush">Map</a>
        </div>
      </div>
    </nav>
  )
}
