'use client'

import { useState } from 'react'
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react'

const navItems = ['Home', 'About Me', 'Project', 'Contact']
const socialLinks = ['Github', 'LinkedIn', 'Instagram', 'Tiktok', 'Email']

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-10 mb-10 bg-transparent backdrop-blur-md px-6 py-4 flex item-center justify-between">
      <Link href="/" className="text-lg font-bold">
        &lt; Coding With Jars&apos;s /&gt;
      </Link>

      <button onClick={() => setMobileMenuOpen(true)} className='md:hidden text-white' >
        <Menu className='w-6 h-6' />
      </button>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-zinc-100 dark:bg-zinc-900 p-6 overflow-y-auto shadow-xl">
          <Dialog.Title className="text-xl item-center mb-6">Navigation</Dialog.Title>
          <div className='flex justify-between items-center mb-6'>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className='w-6 h-6' />
            </button>
          </div>

          <nav className='space-y-4 mb-6'>
            {navItems.map(item => (
              <Link 
                key={item}
                href={`/${item.toLocaleLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className='block text-3xl font-medium hover:text-primary transition'
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className='mb-4'>
            <h3 className='font-semibold mb-2'>Links</h3>
            <div className='flex flex-wrap gap-3 text-sm'>
              {socialLinks.map(link => (
                <a key={link} href="#" className='hover:underline'>{link}</a>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-3 gap-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg p-2">
              <button className="p-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700">🌞</button>
              <button className="p-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700">🌙</button>
              <button className="p-2 rounded-lg bg-black text-white dark:bg-white dark:text-black">🖥️</button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}