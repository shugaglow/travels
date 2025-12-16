import { Link } from "react-router-dom";
import heroVideo from "../videos/video1.mp4";
import WhyChooseUs from "../components/WhyChooseUs";
import Dest from "../components/Dest";
import FeaturedPackages from "../components/FeaturedPackages";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import BlogSection from "./BlogSection";


const Home = () => {
  return (
    <section className="">
   
  {/* Hero Content */}
  <div className="relative text-center py-20 text-white">
          {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-10"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

   <div className="relative z-10 py-32 px-6 container mx-auto">

    <h1 className="text-5xl font-bold mb-4">
      Discover the World with <span className="text-rose-500">WanderSoul</span>
    </h1>
    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
      From breathtaking beaches to cultural wonders, let us craft your next unforgettable adventure.
    </p>
    <Link
      to="/destinations"
      className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition"
    >
      Explore Destinations
    </Link>
  </div>

  </div>


<Dest/>

<WhyChooseUs/>
<FeaturedPackages/>
<Testimonials/>
<BlogSection/>
<CTASection/>


    </section>
  );
};

export default Home;

