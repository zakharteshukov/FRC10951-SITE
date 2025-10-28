import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FRC10951 - First Robotics Competition',
  description: 'Official website for First Robotics Competition Team 10951',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



