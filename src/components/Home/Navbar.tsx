'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Sun, Moon, Monitor } from 'lucide-react'

const navItems = ['Home', 'About Me', 'Project', 'Contact']
const socialLinks = ['Github', 'LinkedIn', 'Instagram', 'Tiktok', 'Email']

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-transparent backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-white">
          &lt; Coding With Jars&apos;s /&gt;
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-primary transition"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Menu Toggle */}
      <div className="fixed top-4 right-4 z-[999] md:hidden">
        <motion.button
          onClick={() => setMobileMenuOpen(prev => !prev)}
          animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="p-2 rounded-md bg-black/70 backdrop-blur-lg"
        >
          {mobileMenuOpen ? (
            <CloseIcon className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </motion.button>
      </div>


      {/* Mobile Menu Dialog with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            className="relative z-50 md:hidden"
          >
            <div className="fixed inset-0" />
            <div className="fixed inset-0 flex justify-end">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, originX: 1, originY: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 25 }}
                className="fixed inset-y-0 right-0 w-full max-w-md bg-zinc-100 dark:bg-zinc-900 p-6 shadow-xl h-full"
              >
                <Dialog.Panel className="h-full">
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold">Navigation</h2>
                    </div>

                    <div className="flex flex-col gap-8">
                      <div>
                        <h2 className="text-xl font-semibold">&lt; Coding With Jars&apos;s /&gt;</h2>
                        <div className="border-t border-zinc-300 dark:border-zinc-700 mt-2" />
                      </div>

                      <nav className="space-y-4">
                        {navItems.map(item => (
                          <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
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
                      <div className="grid grid-cols-3 gap-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg p-2">
                        <button className="p-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700">
                          <Sun className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700">
                          <Moon className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">
                          <Monitor className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
