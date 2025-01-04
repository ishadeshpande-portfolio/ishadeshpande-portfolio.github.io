'use client';

import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basePath = "/portfolio-pages"; // Your GitHub repository name

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Header Section */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-4 md:px-8 h-16 flex items-center justify-center">
            <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
              {/* Logo or Brand */}
              <Link className="flex items-center justify-center mr-6" href={`${basePath}/`}>
                <span className="sr-only">Isha Deshpande</span>
              </Link>

              {/* Navbar */}
              <nav className="flex-1 flex justify-evenly items-center space-x-4 md:space-x-6 overflow-x-auto">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/#about">ABOUT</NavLink>
                <NavLink href="/#experience">EXPERIENCE</NavLink>
                <NavLink href="/#education">EDUCATION</NavLink>
                <NavLink href="/projects">PROJECTS</NavLink>
                <NavLink href="/designs">DESIGNS</NavLink>
                <NavLink href="/blogs">BLOGS</NavLink>
                <NavLink href="/#contact">CONTACT</NavLink>
              </nav>
            </div>
          </header>


          {/* Main Content */}
          <main className="flex-1 pt-14">{children}</main>

          {/* Footer Section */}
          <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
              © 2023 Isha Deshpande. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href={`${basePath}/terms`}>
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href={`${basePath}/privacy`}>
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const basePath = "/portfolio-pages"; // Your GitHub repository name

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={`${basePath}${href}`}
      // href={`${href}`}
      onClick={handleClick}
      className="text-sm font-medium px-2 py-2 relative group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </a>
  );
}
