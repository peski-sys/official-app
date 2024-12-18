import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";

const pop = Poppins({ weight: '500',subsets: ['latin'] })

export const metadata = {
  title: 'CarsAI | AI Sales SaaS to get the most out of your audio',
  description: 'Leverage the power of AI to get the most out of your valuable sales calls',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
      <link rel="icon" href="/images/dashicon.ico" sizes="any" />
      </head>
      <body className={pop.className}>  
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
