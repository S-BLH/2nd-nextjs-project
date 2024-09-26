import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen`}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-white mt-8 py-6">
          <div className="container mx-auto px-4 text-center text-gray-500">
            &copy; 2023 My Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}