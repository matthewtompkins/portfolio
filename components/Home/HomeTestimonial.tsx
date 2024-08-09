import Testimonial from '../Testimonials/Testimonial';
import Grid from '../Grid/Grid';

const HomeTestimonial: React.FC = (): JSX.Element => {
  const testimonialData: MT.TestimonialProps = {
    author: 'Zach Bridges',
    role: 'Senior Software Engineer, Skillshare',
    text: "Matt Tompkins was one of my favorite peers while we worked together at Skillshare. My favorite feature of Matt is that he is a full-time student, always learning new things and digging deeper where he feels there's room for improvement. In practice, Matt works with the high bar of a professional, always seeking feedback and refusing to ship anything doesn't meet his high expectations. Matt\'s reputation with me is that \"good enough\" will not cut it with him.",
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
