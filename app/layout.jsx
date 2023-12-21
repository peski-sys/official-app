import { Poppins } from 'next/font/google'
import './globals.css'

const pop = Poppins({ weight: '500',subsets: ['latin'] })

export const metadata = {
  title: 'CarsAI',
  description: 'Leverage the power of AI to get the most out of your valuable sales calls',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="stylesheet" href="globals.css"></link>
      </head>
      <body className={pop.className}>
        {children}</body>
    </html>
  )
}
