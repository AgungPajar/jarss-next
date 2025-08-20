'use client'

import Image from 'next/image'
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id='home' className="relative min-h-screen text-center px-4">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_40%)]"
      />

      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-6xl">
        <div className="relative flex items-center justify-center h-[300px] sm:h-[400px]">
          <div className="absolute text-6xl font-bold text-primary-text select-none sm:text-8xl opacity-10 leading-none">
            <h1>AGUNG</h1>
            <h1>PAJAR</h1>
            <h1>PANGESTU</h1>
            <h1>RUSYANTO</h1>
          </div>

          <motion.div
            animate={{
              x: ['-40%', '40%', '-40%'],
              y: ['-30%', '30%', '-30%'],
            }}
            transition={{
              duration: 8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            style={{ willChange: 'transform' }}
            className="relative z-10 w-[180px] h-[240px] sm:w-[250px] sm:h-[310px] rounded-xl overflow-hidden border-3 border-secondary-jars shadow-2xl"
          >
            <Image
              src="/Images/gw.png"
              alt='Agung Pajar foto'
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute z-10 bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 w-full">
        <AuroraText 
          className="text-5xl font-bold sm:text-7xl" 
          colors={['#3b82f6', '#9333ea', '#f43f5e']}
        >
          FRONTEND DEVELOPER
        </AuroraText>
      </div>

    </section>
  )
}