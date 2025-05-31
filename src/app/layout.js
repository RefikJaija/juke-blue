// // src/app/layout.js
// import { Rye } from 'next/font/google'
// import './globals.css'
// import Navbar from './components/Navbar' // Add this import
// import Footer from './components/Footer'

// const rye = Rye({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-rye'
// })

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${rye.variable} h-full`}>
//       <body className="h-full min-h-screen bg-antique relative">
//         {/* Compass Background */}
//         <div className="fixed inset-0 -z-10 opacity-20 mix-blend-multiply">
//           <img
//             src="/images/compass.png"
//             alt="ancient compass"
//             className="w-full h-full object-contain transform scale-75"
//             style={{
//               maxWidth: '600px',
//               maxHeight: '600px',
//               margin: 'auto',
//               pointerEvents: 'none'
//             }}
//           />
//         </div>

//         {/* Page Content */}
//         <div className="relative min-h-screen flex flex-col">
//           <Navbar /> 
//           <main className="flex-1">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }

// src/app/layout.js
import { Rye } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AgeVerification from './components/AgeVerification'
import CookieConsent from './components/CookieConsent'

const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rye.variable} h-full`}>
      <body className="h-full min-h-screen bg-blush relative">

        {/* Add Age Verification FIRST */}
        <AgeVerification />

        {/* 1. Sand‐grain overlay */}
        <div
          className="
            pointer-events-none fixed inset-0 -z-20
            bg-grain bg-repeat bg-[length:400px_400px]
            opacity-30 sm:opacity-50
            mix-blend-multiply
          "
        />

        {/* 2. backgroud image (hide on mobile) */}
          <div
            className="
              pointer-events-none fixed inset-0 -z-20
              bg-backgroundImage bg-repeat bg-contain
              bg-[position:0%_0%] opacity-25 sm:opacity-15
            "
          />       

        {/* Content wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Add Cookie Consent LAST */}
        <CookieConsent />

      </body>
    </html>
  )
}

