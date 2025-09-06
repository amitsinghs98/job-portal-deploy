import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Next.js Job Portal',
  description: 'Job portal built with Next.js + Firebase',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}