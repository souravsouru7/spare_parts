'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-slate-900/90 backdrop-blur-sm fixed top-0 z-50 border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              className="text-xl font-bold text-orange-400"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              AutoParts
            </motion.span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={pathname === '/'}>
              Home
            </NavLink>
            <NavLink href="/about" active={pathname === '/about'}>
              About Us
            </NavLink>
            <NavLink href="/contact" active={pathname === '/contact'}>
              Contact Us
            </NavLink>
            <NavLink href="/blog" active={pathname === '/blog'}>
              Blog
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-slate-200 hover:text-orange-400 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" active={pathname === '/'}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" active={pathname === '/about'}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === '/contact'}>
              Contact Us
            </MobileNavLink>
            <MobileNavLink href="/blog" active={pathname === '/blog'}>
              Blog
            </MobileNavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, active, children }) {
  return (
    <Link href={href}>
      <motion.span
        className={`${
          active
            ? 'text-orange-400 font-semibold'
            : 'text-slate-200 hover:text-orange-400'
        } transition-colors duration-200`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

function MobileNavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`${
        active
          ? 'bg-orange-500/10 text-orange-400'
          : 'text-slate-200 hover:bg-orange-500/10 hover:text-orange-400'
      } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  )
}
