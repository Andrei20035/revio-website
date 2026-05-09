"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Leaderboard", href: "#leaderboard" },
  { name: "Early Access", href: "#early-access" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass backdrop-blur-[20px] backdrop-saturate-150" : ""
          }`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              {/*<img*/}
              {/*    src="/logo_round.png"*/}
              {/*    alt="Revio Logo"*/}
              {/*    className="w-12 h-12 object-contain"*/}
              {/*/>*/}
              <span className="text-3xl font-bold text-white">Revio</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#waitlist"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get Early Access
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-20 z-40 px-4 md:hidden">
            <div className="glass backdrop-blur-[20px] backdrop-saturate-150 rounded-2xl p-6 space-y-4">
              {navLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-white/70 hover:text-white transition-colors py-2"
                  >
                    {link.name}
                  </a>
              ))}

              <a
                  href="#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] text-white font-medium"
              >
                Get Early Access
              </a>
            </div>
          </div>
      )}
    </>
  )
}
