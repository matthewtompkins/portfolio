import Testimonial from '../Testimonials/Testimonial';
import Grid from '../Grid/Grid';
import { styleDefaults } from '@/styles/defaults';

const HomeTestimonial: React.FC = (): JSX.Element => {
  const testimonialData: MT.TestimonialProps = {
    author: 'Carla Rucian',
    relationship: 'Coworker',
    role: 'SEO Manager',
    text: "I've had the pleasure of working with Matt for the past two and a half years, and I can confidently say that he is one of the most talented and dedicated engineers I've ever encountered. His expertise in Next.js is unmatched, and I've witnessed him tackle complex and challenging problems with a level of skill and perseverance that's truly inspiring... Beyond his technical abilities, Matt brings an infectious energy and wit to the team. He's the kind of person who makes work not only productive but enjoyable. His positive attitude, sense of humour, and willingness to help others make him an invaluable team member and a great person to be around.",
  };
  return (
    <div className={`bg-white ${styleDefaults.sectionPadding}`}>
      <Grid>
        <div className="col-start-3 col-span-8">
          <Testimonial color="text-black" testimonial={testimonialData} />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonial;
