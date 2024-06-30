import Nav from '@/components/UI/Nav';
import HomeHero from '@/components/Home/HomeHero';
import HomeAboutMe from '@/components/Home/HomeAboutMe';
import HomeTestimonial from '@/components/Home/HomeTestimonial';
import HomeTestimonialSlider from '@/components/Home/HomeTestimonialSlider';
import HomeExperience from '@/components/Home/HomeExperience';
import HomeProjects from '@/components/Home/HomeProjects';
import HomeToolkit from '@/components/Home/HomeToolkit';
import HomeCTA from '@/components/Home/HomeCTA';
import Footer from '@/components/UI/Footer';

const Home = () => {
  return (
    <main className="">
      <Nav />
      <HomeHero />
      <HomeTestimonial />
      <HomeAboutMe />
      <HomeExperience />
      <HomeProjects />
      <HomeToolkit />
      <HomeTestimonialSlider />
      <HomeCTA />
      <Footer />
    </main>
  );
};

export default Home;