import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Revio | Car Spotting App for Automotive Enthusiasts',
  description: 'Join the waitlist for Revio, a social car spotting app where automotive enthusiasts share rare car sightings, compete on leaderboards, and connect with other car lovers.',
  generator: 'v0.app',
  keywords: ['car spotting', 'automotive', 'social app', 'car enthusiasts', 'luxury cars', 'supercars'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
    <body className={`${inter.variable} font-sans antialiased`}>
    {children}
    {process.env.NODE_ENV === 'production' && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
    )}
    </body>
    </html>
  )
}
