import About from "@/components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

import {
  navData,
  heroData,
  aboutData,
  servicesData,
  projectsData,
  testimonialsData,
} from "../data.json";

export async function getStaticProps() {
  return {
    props: {
      navData,
      heroData,
      aboutData,
      servicesData,
      projectsData,
      testimonialsData,
    },
  };
}

export default function Home({
  navData,
  heroData,
  aboutData,
  servicesData,
  projectsData,
  testimonialsData,
}) {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto ">
      <Hero navData={navData} heroData={heroData}></Hero>
      <About aboutData={aboutData}></About>
      <Services servicesData={servicesData}></Services>
      <Projects projectsData={projectsData}></Projects>
      <Testimonials testimonialsData={testimonialsData}></Testimonials>
    </div>
  );
}
