import Nav from '@/components/UI/Nav';
import HomeHero from '@/components/Home/HomeHero';
import HomeAboutMe from '@/components/Home/HomeAboutMe';
import HomeTestimonial from '@/components/Home/HomeTestimonial';

const Home = () => {
  return (
    <main className="">
      <Nav />
      <HomeHero />
      <HomeTestimonial />
      <HomeAboutMe />
    </main>
  );
};

export default Home;