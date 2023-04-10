// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import Hero from "../components/Hero";
import { navData, heroData } from "../data.json";

export async function getStaticProps() {
  return {
    props: {
      navData,
      heroData,
    },
  };
}

export default function Home() {
  return (
    <div className="bg-blue-200 max-w-[1600px] mx-auto overflow-hidden">
      <Hero navData={navData} heroData={heroData}></Hero>
    </div>
  );
}
