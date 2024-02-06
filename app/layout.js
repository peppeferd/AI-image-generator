import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Image Generator',
  description: 'AI Image Generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-indigo-800">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
