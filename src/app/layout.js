// src/app/layout.js

import { Rye } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Add this import
import Footer from '@/components/Footer';

const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rye.variable} h-full`}>
      <body className="relative h-full min-h-screen bg-antique">
        {/* Compass Background */}
        <div className="fixed inset-0 -z-10 opacity-20 mix-blend-multiply">
          <img
            src="/images/compass.png"
            alt="ancient compass"
            className="h-full w-full scale-75 transform object-contain"
            style={{
              maxWidth: '600px',
              maxHeight: '600px',
              margin: 'auto',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Page Content */}
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
