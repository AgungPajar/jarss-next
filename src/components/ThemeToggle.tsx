'use client'

import { useTheme } from "next-themes"
import {Sun,Moon} from 'lucide-react'
import { useEffect, useState } from "react"

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10"/>
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="p-2 rounded-md bg-warna-2 text-text-utama hover:bg-warna-3 transition-all"
    >
      {isDark ? <Sun size={24}/> : <Moon size={24}/>}
    </button>
  )
}
