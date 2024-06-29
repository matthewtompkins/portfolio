import TestimonialSlider from '../Testimonials/TestimonialSlider';
import Grid from '../Grid/Grid';

const HomeTestimonialSlider = () => {
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

  return (
    <div className="bg-black py-32">
      <Grid>
        <div className="col-start-3 col-span-8">
          <TestimonialSlider
            testimonials={testimonialData}
            textColor="text-green"
            uiColor="green"
          />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonialSlider;
