import { Rye } from 'next/font/google'
import './globals.css'

const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
})

export const metadata = {
  title: 'Juke Blue Distillery',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rye.variable} h-full`}>
      <body className="h-full min-h-screen bg-antique"> {/* Added classes */}
        {children}
      </body>
    </html>
  )
}
