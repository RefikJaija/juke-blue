"use client"; 
import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-nautical/80 backdrop-blur-sm p-4 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo + Text Image */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/Juke_Blue_White.png" 
              alt="Logo icon"
              className="w-10 h-10"
            />
            <img
              src="/images/logoname.png"  // <-- image with "Juke Blue" text
              alt="Juke Blue Text"
              className="h-8 w-auto"             // auto width, keeps proportions
            />
          </Link>


        {/* Desktop Nav links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/shop" className="text-antique hover:text-blush">Shop</Link>
          <Link href="/cocktails" className="text-antique hover:text-blush">Cocktails</Link>
          <Link href="/songbook" className="text-antique hover:text-blush">SongBook</Link>
          <Link href="/map" className="text-antique hover:text-blush">Map</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-antique focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-4 bg-nautical/95 backdrop-blur-sm mt-2">
          <Link href="/shop" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link href="/cocktails" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            Cocktails
          </Link>
          <Link href="/songbook" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            SongBook
          </Link>
          <Link href="/map" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            Map
          </Link>
        </div>
      </div>
    </nav>
  )
}