import Testimonial from '../Testimonials/Testimonial';
import Grid from '../Grid/Grid';

const HomeTestimonial: React.FC = (): JSX.Element => {
  const testimonialData: MT.TestimonialProps = {
    author: 'Mindy P.',
    role: 'Client',
    text: "Matt is a rare talent. He is professional, accessible, prompt, and absolutely gifted at his craft. But he's also so much more. His every interaction and fulfillment went beyond money and beyond pride in his workmanship, he was fully committed to the success of the project and it came through in every aspect, including the final product. Many freelancers may submit proposals for a job, but you'll be fortunate if you choose to have him on your team.",
  };
  return (
    <div className="py-24 md:py-32 bg-white">
      <Grid>
        <div className="col-start-3 col-span-8">
          <Testimonial color="text-black" testimonial={testimonialData} uiColor='green' />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonial;
