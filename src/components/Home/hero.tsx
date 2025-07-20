'use client'

import Image from 'next/image'
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';

export default function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    const bounce = async () => {
      while (true) {
        const x = Math.floor(Math.random() * 100 - 50)
        const y = Math.floor(Math.random() * 50 - 25)

        await controls.start({
          x: `${x}%`,
          y: `${y}%`,
          transition: {
            duration: 3,
            ease: 'easeInOut',
          },
        })
      }
    }

    bounce()
  }, [controls])

  return (
    <section className="flex flex-col items-center justify-center text-center mt-36 sm:mt-24 space-y-3 px-4">
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
      />

      <div className="text-6xl mt-2 sm:mt-8 sm:text-8xl font-bold text-white opacity-10 leading-none select-none space-y-7 sm:space-y-5">
        <h1>AGUNG</h1>
        <h1>PAJAR</h1>
        <h1>PANGESTU</h1>
        <h1>RUSYANTO</h1>
      </div>

      <motion.div animate={controls} style={{ willChange: 'transform' }} className="w-[180px] h-[240px] sm:w-[250px] sm:h-[310px] absolute z-10 rounded-xl overflow-hidden border-2 border-white shadow-xl">
        <Image
          src="/gw.png"
          alt='Agung Pajar foto'
          fill
          objectFit='object-cover'
          priority
        />
      </motion.div>

      <AuroraText className="mt-12 sm:mt-10 text-5xl sm:text-8xl font-bold" colors={['#3b82f6', '#9333ea', '#f43f5e']}>
        FRONTEND DEVELOPER
      </AuroraText>

    </section>
  )
}