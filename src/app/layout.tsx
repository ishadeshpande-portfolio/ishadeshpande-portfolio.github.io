import Link from "next/link"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isha Deshpande - Portfolio',
  description: 'Cyber Security Engineer and Product Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-4 h-14 flex items-center">
            <Link className="flex items-center justify-center mr-6" href="/">
              <span className="sr-only">Isha Deshpande</span>
            </Link>
            <nav className="flex-1 flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto">
            <a href="/">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#education">EDUCATION</a>
              <a href="#experience">EXPERIENCE</a>
              <a href="/projects">PROJECTS</a>
              <a href="/blogs">BLOGS</a>
              <a href="/designs">DESIGNS</a>
              <a href="/gallery">GALLERY</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </header>
          <main className="flex-1 pt-14">
            {children}
          </main>
          <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">© 2023 Isha Deshpande. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  )
}

function a({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      className="text-sm font-medium px-2 py-2 relative group whitespace-nowrap"
      href={href}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </Link>
  );
}