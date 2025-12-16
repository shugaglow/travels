import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
// import MapSection from "../components/contact/MapSection";
import CTASection from "../components/CTASection";

const Contact = () => {
  return (
    <section className=" bg-white text-center px-6">
    <ContactHero/>
    <ContactForm/>
    <ContactInfo/>
    {/* <MapSection/> */}
    <CTASection/>
    </section>
  );
};

export default Contact;
