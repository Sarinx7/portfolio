import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sarin - Portfolio',
  description: 'Sarin - Portfolio',
  generator: 'Sarin',
  icons: {
    icon: '/placeholder-logo.svg?height=192&width=192',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
