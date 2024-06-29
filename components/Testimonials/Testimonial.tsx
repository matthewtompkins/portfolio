import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

interface TestimonialProps {
  color: MT.TextColorClasses;
  testimonial: MT.TestimonialProps;
}

const Testimonial: React.FC<TestimonialProps> = ({
  color,
  testimonial,
}): JSX.Element => {
  return (
    <>
      <Paragraph color={color} text={`"${testimonial.text}"`} />
      <div className='text-right'>
        <Heading
          color={color}
          level="h3"
          text={`- ${testimonial.author}, ${testimonial.role}`}
        />
      </div>
    </>
  );
};

export default Testimonial;
