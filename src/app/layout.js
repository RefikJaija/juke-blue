// // src/app/layout.js
// import { Rye } from 'next/font/google'
// import './globals.css'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import WelcomeGate from './components/WelcomeGate'; 

// const rye = Rye({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-rye',
// })

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${rye.variable} h-full`}>
//       <body className="h-full min-h-screen bg-blush relative">

//         {/* Add Age Verification  */}
//         {/* Add Cookie Consent  */}
//          <WelcomeGate /> 

//         {/* 1. Sand‐grain overlay */}
//         <div
//           className="
//             pointer-events-none fixed inset-0 -z-20
//             bg-grain bg-repeat bg-[length:400px_400px]
//             opacity-30 sm:opacity-30
//             mix-blend-multiply
//           "
//         />

//         {/* 2. backgroud image */}
//           <div
//             className="
//               pointer-events-none fixed inset-0 -z-20
//               bg-backgroundImage bg-repeat bg-contain
//               bg-[position:0%_0%] opacity-15 sm:opacity-15
//             "
//           />       

//         {/* Content wrapper */}
//         <div className="relative z-10 min-h-screen flex flex-col">
//           <Navbar />
//           <main className="flex-1">{children}</main>
//           <Footer />
//         </div>


//       </body>
//     </html>
//   )
// }


// src/app/layout.js
import { Rye } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomeGate from './components/WelcomeGate';

const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rye.variable} h-full`}>
      <head>
        {/* 👇 MOVE THE MAILCHIMP SCRIPT HERE, INSIDE THE <head> TAG 👇 */}
       <Script
          id="mcjs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(c,h,i,m,p){
                m=c.createElement(h),p=c.getElementsByTagName(h)[0],
                m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
              }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/87333c96265e38890d8578a41/81437feb20fcf0c9f1c993ee9.js");
            `,
          }}
        />

      </head>
      <body className="h-full min-h-screen bg-blush relative">
        {/* ... rest of your body content ... */}
        <WelcomeGate />
        <div
          className="
            pointer-events-none fixed inset-0 -z-20
            bg-grain bg-repeat bg-[length:400px_400px]
            opacity-30 sm:opacity-30
            mix-blend-multiply
          "
        />
        <div
          className="
            pointer-events-none fixed inset-0 -z-20
            bg-backgroundImage bg-repeat bg-contain
            bg-[position:0%_0%] opacity-15 sm:opacity-15
          "
        />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}