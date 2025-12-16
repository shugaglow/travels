import AboutHero from "../components/about/AboutHero";
import OurMission from "../components/about/OurMission";
import OurStory from "../components/about/OurStory";
// import TeamShowcase from "../components/about/TeamShowcase";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <section className=" bg-white text-center px-6">

      <AboutHero/>
      <OurStory/>
      <OurMission/>
      {/* <TeamShowcase/> */}
      <Testimonials/>
      <CTASection/>

      <div>
        
      </div>
    </section>
  );
};

export default About;
