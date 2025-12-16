import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import NewsletterCTA from "../components/blog/NewsletterCTA";
import CTASection from "../components/CTASection";
import BlogSection from "./BlogSection";



const Blog = () => {
  return (
    <section className=" bg-gray-50 text-center">
<BlogHero/>
<FeaturedPost/>
<BlogSection/>
<NewsletterCTA/>
<CTASection/>
    </section>
  );
};

export default Blog;
