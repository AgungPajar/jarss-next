'use client'

import { useRef, createRef, useMemo } from 'react'
import { AnimatedBeam } from "@/components/magicui/AnimatedBeam"
import Image, { StaticImageData } from 'next/image'
import reactLogo from '../../../public/Icon/react-logo.svg'
import jsLogo from '../../../public/Icon/js-logo.svg'
import nextjsLogo from '../../../public/Icon/nextjs-logo.svg'
import tailwindLogo from '../../../public/Icon/tailwind-logo.svg'
import laravelLogo from '../../../public/Icon/laravel-logo.svg'
import phpLogo from '../../../public/Icon/php-logo.svg'

interface Skill {
  name: string;
  logo: StaticImageData | string;
  ref: React.RefObject<HTMLDivElement | null>;
  reverse?: boolean;
  isStraight?: boolean;
}

const skillData: Omit<Skill, 'ref'>[] = [
  { name: 'React', logo: reactLogo, reverse: false },
  { name: 'JavaScript', logo: jsLogo, reverse: false, isStraight: true },
  { name: 'Next.js', logo: nextjsLogo, reverse: false },
  { name: 'Tailwind CSS', logo: tailwindLogo, reverse: true },
  { name: 'Laravel', logo: laravelLogo, reverse: true, isStraight: true },
  { name: 'PHP', logo: phpLogo, reverse: true },
];

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const skillsBoxRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = useMemo(() => skillData.map(skill => ({
    ...skill,
    ref: createRef<HTMLDivElement>()
  })), []);

  const midpoint = Math.ceil(skills.length / 2);

  return (
    <section id='about-me' className="px-4 sm:px-6 py-20 sm:py-24 lg:px-8 bg-primary-jars/90 text-white overflow-hidden">
      <div className="mx-auto max-w-5xl text-start">
        <h2 className="text-4xl text-center font-semibold leading-7 text-indigo-400 tracking-widest uppercase">Tentang Aku</h2>
        <p className="mt-8 text-lg leading-8 text-gray-300">
          hallo, perkenalkan aku <span className="text-indigo-400 font-semibold">Agung Pajar</span> umur 18 tahun lahir di garut pada tanggal 31 juli 2007, saat ini aku sedang menduduki kelas 12 di SMKN 1 Garut, aku tinggal di Desa Margamulya, Kec. Cikajang - Garut
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          awal mula tertarik di dunia pemrograman di mulai dari kelas 9 smp akhir saya melihat kaka saya sedang mengerjakan tugas kuliahnya kebetulan jurusan informatika dari aku mencoba untuk mempelajari nya dimulai dari HTML tentunya
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          sekarang aku sedang mendalami front-end tapi terkadang fullstack. so kalau teman teman mau membuat website boleh hubungi saya ya di instagram jarss_pajar yaa, thanks.
        </p>
      </div>

      <div ref={containerRef} className="relative mx-auto w-full max-w-5xl mt-12">
        <div className='flex flex-row items-center justify-center sm:justify-between gap-x-12 sm:gap-x-0'>

          <div className="flex flex-col items-center gap-y-12">
            {skills.slice(0, midpoint).map((skill) => (
              <div key={skill.name} ref={skill.ref} className=" w-16 h-16 flex items-center justify-center p-3 bg-gray-800/50 rounded-full">
                <Image src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>

          <div ref={skillsBoxRef} className="px-4 py-2 sm:px-8 sm:py-4 rounded-lg bg-[#1a1a1a] text-white shadow-lg text-center">
            <h3 className="text-sm sm:text-2xl font-bold">My Skills</h3>
          </div>

          <div className="flex flex-col items-center gap-y-12">
            {skills.slice(midpoint).map((skill) => (
              <div key={skill.name} ref={skill.ref} className="w-16 h-16 flex items-center justify-center p-3 bg-gray-800/50 rounded-full">
                <Image src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>

        </div>

        {skills.map((skill) => (
          <AnimatedBeam
            key={skill.name}
            containerRef={containerRef}
            fromRef={skill.ref}
            toRef={skillsBoxRef}
            curvature={skill.isStraight ? 0 : 25}
            endYOffset={0}
            reverse={skill.reverse}
            duration={3 + Math.random() * 2}
          />
        ))}
      </div>

    </section>  
  )
}