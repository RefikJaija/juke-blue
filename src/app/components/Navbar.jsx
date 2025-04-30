"use client"; 
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-nautical/80 backdrop-blur-sm p-4 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/images/Juke_Blue_White.png" 
            alt="logo-test"
            className="w-10 h-10"
          />
          <span className="font-title text-3xl text-antique">Juke Blue</span>
        </a>

        {/* Desktop Nav links */}
        <div className="hidden md:flex space-x-6">
          <a href="/shop" className="text-antique hover:text-blush">Shop</a>
          <a href="/cocktails" className="text-antique hover:text-blush">Cocktails</a>
          <a href="/songbook" className="text-antique hover:text-blush">SongBook</a>
          <a href="/map" className="text-antique hover:text-blush">Map</a>
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
        <div className="px-4 pt-2 pb-4 space-y-4 bg-nautical/95 backdrop-blur-sm">
          <a href="/shop" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            Shop
          </a>
          <a href="/cocktails" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            Cocktails
          </a>
          <a href="/songbook" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            SongBook
          </a>
          <a href="/map" className="block text-antique hover:text-blush" onClick={() => setIsOpen(false)}>
            Map
          </a>
        </div>
      </div>
    </nav>
  )
}