// src/app/components/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-nautical text-antique relative mt-20">
      {/* Silhouette Section */}
      <div className="absolute inset-0 w-full h-full z-0">
            <img 
                src="/images/silloette.png"
                alt="Nautical silhouette"
                className="w-full h-full object-cover opacity-40 scale-y-60"
            />
     </div>
      {/* Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="font-title text-2xl mb-4">Juke Blue</h3>
            <p className="text-antique/80">
              Spirits forged by the sea's journey. Crafted in Germany.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/cocktails" className="hover:text-blush transition-colors">Cocktails</Link></li>
              <li><Link href="/shop" className="hover:text-blush transition-colors">Shop</Link></li>
              <li><Link href="/map" className="hover:text-blush transition-colors">Find Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-title text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-antique/80">
              <li>hello@jukeblue.com</li>
              <li>+61 2 1234 5678</li>
              <li>Port Adelaide, SA</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-title text-lg mb-4">Follow the Voyage</h4>
            <div className="flex space-x-4">
                {/* Twitter */}
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </Link>
                {/* Instagram */}
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.3 1 .7 1.3 1.3.3.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.3.6-.7 1-1.3 1.3-.4.3-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.3-1-.7-1.3-1.3-.3-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.3-.6.7-1 1.3-1.3.4-.3 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.1.8-.3.3-.5.6-.6 1.1-.1.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.8 1.1.3.3.6.5 1.1.6.4.1 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.4 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.8.3-.3.5-.6.6-1.1.1-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.8-1.1-.3-.3-.6-.5-1.1-.6-.4-.1-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.7a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 9.7a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm5.5-9.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z"/>
                    </svg>
                </Link>

                {/* LinkedIn */}
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.1c.5-.9 1.7-1.7 3.4-1.7 3.6 0 4.3 2.3 4.3 5.3v6.7h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6h-4V8z"/>
                </svg>
                </Link>

                {/* Facebook */}
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blush transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.49v-9.294H9.692v-3.622h3.123V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.6 1.324-1.337V1.337C24 .6 23.405 0 22.675 0z"/>
                </svg>
                </Link>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-antique/20 mt-8 pt-8 text-center text-antique/60">
          <p>© {new Date().getFullYear()} Juke Blue Distillery. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-blush transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blush transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}