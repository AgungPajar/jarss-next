import Image from "next/image";
import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/hero";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
      </main>
    </>
  );
}
