import CarouselSlider from '../Slider/CarouselSlider';
import Testimonial from '../Testimonials/Testimonial';
import Grid from '../Grid/Grid';
import { styleDefaults } from '@/styles/defaults';

const HomeTestimonialSlider: React.FC = (): JSX.Element => {
  const testimonialData: MT.TestimonialProps[] = [
    {
      author: 'Mindy P.',
      role: 'Client',
      text: "Matt is a rare talent. He is professional, accessible, prompt, and absolutely gifted at his craft. But he's also so much more. His every interaction and fulfillment went beyond money and beyond pride in his workmanship, he was fully committed to the success of the project and it came through in every aspect, including the final product. Many freelancers may submit proposals for a job, but you'll be fortunate if you choose to have him on your team.",
    },
    {
      author: 'Mindy P.',
      role: 'Client',
      text: "Matt is a rare talent. He is professional, accessible, prompt, and absolutely gifted at his craft. But he's also so much more. His every interaction and fulfillment went beyond money and beyond pride in his workmanship, he was fully committed to the success of the project and it came through in every aspect, including the final product. Many freelancers may submit proposals for a job, but you'll be fortunate if you choose to have him on your team.",
    },
    {
      author: 'Mindy P.',
      role: 'Client',
      text: "Matt is a rare talent. He is professional, accessible, prompt, and absolutely gifted at his craft. But he's also so much more. His every interaction and fulfillment went beyond money and beyond pride in his workmanship, he was fully committed to the success of the project and it came through in every aspect, including the final product. Many freelancers may submit proposals for a job, but you'll be fortunate if you choose to have him on your team.",
    },
  ];

  const testimonials = testimonialData.map((cur, ind) => <Testimonial color="text-green" key={ind} testimonial={cur} />);

  return (
    <div id="testimonials" className={`bg-black ${styleDefaults.sectionPadding}`}>
      <Grid>
        <div className="col-start-3 col-span-8">
          <CarouselSlider
            els={testimonials}
            uiColor="green"
          />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonialSlider;
