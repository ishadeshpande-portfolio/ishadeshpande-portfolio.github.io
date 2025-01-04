import { Button } from "@/components/ui/button"
import { PenTool } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isha Deshpande - Portfolio',
  description: 'Web Developer & Designer Portfolio',
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
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
              <span className="sr-only">Isha Deshpande</span>
              <span className="ml-2 text-2xl font-bold font-bold">Isha</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
                Home
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
                Projects
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blogs">
                Blogs
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
                Contact
              </Link>
            </nav>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Isha Deshpande. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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