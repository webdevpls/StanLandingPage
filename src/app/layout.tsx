import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'



const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '300', '400', '500', '700']

})

export const metadata: Metadata = {
  title: 'Stan Agência',
  description: 'Agência',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    
    <html lang="en">
      
      <body className={poppins.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
