import Nav from '@/components/UI/Nav';
import HomeHero from '@/components/Home/HomeHero';
import HomeAboutMe from '@/components/Home/HomeAboutMe';
import HomeTestimonial from '@/components/Home/HomeTestimonial';
import HomeTestimonialSlider from '@/components/Home/HomeTestimonialSlider';
import HomeExperience from '@/components/Home/HomeExperience';
import HomeProjects from '@/components/Home/HomeProjects';

const Home = () => {
  return (
    <main className="">
      <Nav />
      <HomeHero />
      <HomeTestimonial />
      <HomeAboutMe />
      <HomeExperience />
      <HomeProjects />
      <HomeTestimonialSlider />
    </main>
  );
};

export default Home;