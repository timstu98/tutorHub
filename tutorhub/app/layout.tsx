import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tutor Hub',
  description: 'A home for learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"${inter.className} bg-slate-100 container mx-auto px-4"}>{children}</body>
    </html>
  )
}


// Colours:
