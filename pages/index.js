// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import About from "@/components/About";
import Hero from "../components/Hero";
import { navData, heroData, aboutData } from "../data.json";

export async function getStaticProps() {
  return {
    props: {
      navData,
      heroData,
      aboutData,
    },
  };
}

export default function Home({ navData, heroData, aboutData }) {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto ">
      <Hero navData={navData} heroData={heroData}></Hero>
      <About aboutData={aboutData}></About>
    </div>
  );
}
