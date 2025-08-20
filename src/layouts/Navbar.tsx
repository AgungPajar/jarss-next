'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Sun, Moon, Monitor } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const navItems = ['Home', 'About Me', 'Project', 'Contact']
const socialLinks = ['Github', 'LinkedIn', 'Instagram', 'Tiktok', 'Email']

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
  }, [mobileMenuOpen])


  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-secondary-jars/70 backdrop-blur-sm transition-all duration-300">
        <div className='max-w-6xl mx-auto px-4 py-2 flex items-center justify-between'>
          <Link href="/" className="text-lg font-bold text-primary-text">
            &lt; Coding With Jars&apos;s /&gt;
          </Link>

          <div className="flex items-center gap-x-8">
            <ul className='hidden md:flex items-center space-x-14 font-bold text-sm'>
              {navItems.map(item => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary-text hover:text-indigo-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Navbar */}
      <div className="md:hidden flex items-center text-primary-text border-b-2 border-primary-text bg-primary-color backdrop-blur-sm justify-between p-4 fixed top-0 left-0 right-0 z-50">
        <Link href="/" className="text-lg font-bold">
          &lt; Coding With Jars&apos;s /&gt;
        </Link>

        <div className="fixed top-4 right-4 z-[999] md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all"
          >
            <motion.div
              initial={false}
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-8 h-8" />
              ) : (
                <MenuIcon className="w-8 h-8" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dialog with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="fixed inset-0 flex justify-end">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, originX: 1, originY: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 25 }}
                className="fixed inset-y-0 right-0 w-full max-w-md bg-zinc-100 dark:bg-zinc-900 p-6 shadow-xl h-full"
              >
                <motion.div className="h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-6" />

                    <div className="flex flex-col gap-8">
                      <div>
                        <h2 className="text-xl font-semibold">Navigation</h2>
                        <div className="border-t border-zinc-300 dark:border-zinc-700 mt-2" />
                      </div>

                      <nav className="space-y-4">
                        {navItems.map(item => (
                          <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-6xl font-medium hover:text-primary transition"
                          >
                            {item}
                          </Link>
                        ))}
                      </nav>

                      <div>
                        <h3 className="font-semibold mb-2 border-t pt-4">Links</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          {socialLinks.map(link => (
                            <a key={link} href="#" className="hover:underline">
                              {link}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="mt-6 flex justify-center">
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
