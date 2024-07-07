import CarouselSlider from '../Slider/CarouselSlider';
import Testimonial from '../Testimonials/Testimonial';
import Grid from '../Grid/Grid';
import { styleDefaults } from '@/styles/defaults';

const HomeTestimonialSlider: React.FC = (): JSX.Element => {
  const testimonialData: MT.TestimonialProps[] = [
    {
      author: 'Mark C.',
      role: 'Employer, Vice President Digital & Web at Soliant',
      text: "It's great working with Matt. He's a fast and organized developer. He's built me many WordPress sites from the ground up now and I plan on sending him as much as I can!  He's an excellent person to work with. Look no further, this is your guy if you need a WP/PHP developer.",
    },
    {
      author: 'Farah A.',
      role: 'Employer, Blind Renaissance',
      text: 'Matthew was incredible. His communication with us, his work and explanations of what he is doing, everything he completed for us was absolutely fantastic. I would 100% recommend Matthew, and his rates are extremely reasonable too. Really pleasant to work with, work was always completed on time or even before, and he exceeded my expectations! 🙂 Absolutely fantastic work and great guy. We will definitely use Matthew again for any of our web developer needs and again, I highly recommend him!',
    },
    {
      author: 'David D.',
      role: 'Client, Cubeworks',
      text: "Matt was great to work with and did an exceptional job building our website, which wasn't a simple design. I would recommend Matt highly based on his skills as a WordPress developer and how well he worked with us to pull all the elements together. Matt will be at the top of my list for my next web project!",
    },
    {
      author: 'Nate M.',
      role: 'Client',
      text: 'Matt was FANTASTIC! Very fast to complete the work, respond to emails, and the quality was amazing. I would look no further and hire him again in a heartbeat. Great customer service and I could tell he truly cared about my project and the end result. Thanks again Matt!',
    },
    {
      author: 'Wendy R.',
      role: 'Client',
      text: 'What a STAR! Great communicator. Thank you! I highly recommend to anyone. Will be working with him again!',
    },
    {
      author: 'Marianna R.',
      role: 'Client',
      text: 'Matt was great. He set out a great plan from the beginning and executed it perfectly. He was extremely responsive and finished the site before I could provide him copy. He also sent me a tutorial on how to edit the site myself. I’d give him 10 stars if I could. Consider this my highest recommendation.',
    },
    {
      author: 'Tessa E.',
      role: 'Client',
      text: "Matthew did an exceptional job. He was quick, precise, and gave extra recommendations to help with my business. I highly recommend him if you are looking for a proficient developer.",
    },
  ];

  const testimonials = testimonialData.map((cur, ind) => (
    <Testimonial color="text-green" key={ind} testimonial={cur} />
  ));

  return (
    <div
      id="testimonials"
      className={`bg-black ${styleDefaults.sectionPadding}`}
    >
      <Grid>
        <div className="col-start-3 col-span-8">
          <CarouselSlider els={testimonials} uiColor="green" />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonialSlider;
