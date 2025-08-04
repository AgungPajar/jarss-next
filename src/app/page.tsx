import Image from "next/image";
import Navbar from "@/components/Home/Navbar";
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
