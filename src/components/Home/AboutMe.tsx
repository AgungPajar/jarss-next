'use client'

export default function AboutMe() {
  return (
    <section id='about-me' className="px-6 py-24 sm:py-32 lg:px-8 bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-3xl text-center"> 
        <h2 className="text-base font-semibold leading-7 text-indigo-400 tracking-widest uppercase">About Me</h2>
        <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Transforming ideas into real frontend magic
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Hey, Im <span className="text-indigo-400 font-semibold">Agung Pajar</span> – a passionate frontend developer with a strong eye for clean UI and smooth UX. I’ve been diving deep into React, Next.js, and Tailwind CSS, turning creative concepts into fully functional, responsive, and modern websites.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          Besides coding, Im also skilled in graphic design and have more than 4 years of experience creating posters, web designs, and digital content. I love learning new tech, building cool side projects, and constantly leveling up.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-400">
          Im currently exploring more advanced tools like Framer Motion and headless UI libraries to bring smooth animations and accessibility into my projects. Always down for a collab or freelance project – lets build something awesome together.
        </p>
      </div>
    </section>
  )
}