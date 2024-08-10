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
      author: 'Carla Rucian',
      role: 'SEO Manager, Skillshare',
      text: "I've had the pleasure of working with Matt for the past two and a half years, and I can confidently say that he is one of the most talented and dedicated engineers I've ever encountered. His expertise in Next.js is unmatched, and I've witnessed him tackle complex and challenging problems with a level of skill and perseverance that's truly inspiring... Beyond his technical abilities, Matt brings an infectious energy and wit to the team. He's the kind of person who makes work not only productive but enjoyable. His positive attitude, sense of humour, and willingness to help others make him an invaluable team member and a great person to be around.",
    },
    {
      author: 'Mindy P.',
      role: 'Client',
      text: "Matt is a rare talent. He is professional, accessible, prompt, and absolutely gifted at his craft. But he's also so much more. His every interaction and fulfillment went beyond money and beyond pride in his workmanship, he was fully committed to the success of the project and it came through in every aspect, including the final product. Many freelancers may submit proposals for a job, but you'll be fortunate if you choose to have him on your team.",
    },
    {
      author: 'Farah A.',
      role: 'Employer, Blind Renaissance',
      text: 'Matt was incredible. His communication with us, his work and explanations of what he is doing, everything he completed for us was absolutely fantastic. I would 100% recommend Matt. Really pleasant to work with, work was always completed on time or even before, and he exceeded my expectations! 🙂 Absolutely fantastic work and great guy. We will definitely use Matt again for any of our web developer needs and again, I highly recommend him!',
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
      author: 'Marianna R.',
      role: 'Client',
      text: 'Matt was great. He set out a great plan from the beginning and executed it perfectly. He was extremely responsive and finished the site before I could provide him copy. He also sent me a tutorial on how to edit the site myself. I\'d give him 10 stars if I could. Consider this my highest recommendation.',
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
          <CarouselSlider els={testimonials} isPlaying={true} uiColor="green" />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonialSlider;
