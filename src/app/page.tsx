import Image from "next/image";
import Navbar from "@/layouts/Navbar";
import Hero from "@/components/Home/hero";
import About from "@/components/Home/AboutMe";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
