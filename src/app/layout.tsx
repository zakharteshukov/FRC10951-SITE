import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FRC Team 10951',
  description: 'FRC Team 10951 - Official Website. Inspiring the next generation of innovators.',
  keywords: ['FRC', 'Robotics', 'FIRST', 'Team 10951', 'STEM'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

