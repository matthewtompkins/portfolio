'use client';

import { useState, useRef, useEffect } from 'react';

import Nav from '@/components/UI/Nav';
import HomeHero from '@/components/Home/HomeHero';
import HomeAboutMe from '@/components/Home/HomeAboutMe';
import HomeTestimonial from '@/components/Home/HomeTestimonial';
import HomeTestimonialSlider from '@/components/Home/HomeTestimonialSlider';
import HomeExperience from '@/components/Home/HomeExperience';
import HomeProjects from '@/components/Home/HomeProjects';
import HomeSkills from '@/components/Home/HomeSkills';
import HomeCTA from '@/components/Home/HomeCTA';
import Footer from '@/components/UI/Footer';
import ContactOverlay from '@/components/UI/ContactOverlay';

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleContact = () => {
    setShowContact(!showContact);
  };

  useEffect(() => {
    if (showContact) {
      mainRef.current?.setAttribute('inert', 'true');
    } else {
      mainRef.current?.removeAttribute('inert');
    }
  }, [showContact]);

  const contactStyle = showContact ? 'overflow-hidden h-screen' : '';

  return (
    <>
    <main className={`${contactStyle}`} ref={mainRef}>
      <Nav callback={handleContact} />
      <HomeHero callback={handleContact} />
      <HomeTestimonial />
      <HomeAboutMe />
      <HomeExperience />
      <HomeProjects />
      <HomeSkills />
      <HomeTestimonialSlider />
      <HomeCTA callback={handleContact} />
      <Footer />
    </main>
    {showContact && <ContactOverlay callback={handleContact} />}
    </>
  );
};

export default Home;
