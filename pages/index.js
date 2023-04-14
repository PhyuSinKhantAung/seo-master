import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Teams from "../components/Teams";
import Footer from "../components/Footer";

import {
  navData,
  heroData,
  aboutData,
  servicesData,
  projectsData,
  testimonialsData,
  teamsData,
  footerData,
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
      teamsData,
      footerData,
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
  teamsData,
  footerData,
}) {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-gray-50 text-black">
      <Hero navData={navData} heroData={heroData}></Hero>
      <About aboutData={aboutData}></About>
      <Services servicesData={servicesData}></Services>
      <Projects projectsData={projectsData}></Projects>
      <Testimonials testimonialsData={testimonialsData}></Testimonials>
      <Teams teamsData={teamsData}></Teams>
      <Footer footerData={footerData}></Footer>
    </div>
  );
}
