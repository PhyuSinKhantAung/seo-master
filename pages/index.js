import About from "@/components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { navData, heroData, aboutData, servicesData } from "../data.json";

export async function getStaticProps() {
  return {
    props: {
      navData,
      heroData,
      aboutData,
      servicesData,
    },
  };
}

export default function Home({ navData, heroData, aboutData, servicesData }) {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto ">
      <Hero navData={navData} heroData={heroData}></Hero>
      <About aboutData={aboutData}></About>
      <Services servicesData={servicesData}></Services>
    </div>
  );
}
