import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import Image from 'next/image';
import starGreen from '@/public/images/star-green.svg';
import starBlack from '@/public/images/star-black.svg';
import starWhite from '@/public/images/star-white.svg';

interface TestimonialProps {
  color: MT.TextColorClasses;
  testimonial: MT.TestimonialProps;
  uiColor?: MT.ThemeColors;
}

const Testimonial: React.FC<TestimonialProps> = ({
  color,
  testimonial,
  uiColor = 'green',
}): JSX.Element => {
  return (
    <>
      <Paragraph color={color} text={`"${testimonial.text}"`} />
      <div className="text-right">
        <Heading
          color={color}
          level="h3"
          text={`- ${testimonial.author}, ${testimonial.role}`}
        />
        <FiveStars color={uiColor} />
      </div>
    </>
  );
};

export default Testimonial;

interface FiveStarsProps {
  color?: MT.ThemeColors;
}

const FiveStars: React.FC<FiveStarsProps> = ({color}): JSX.Element => {
  const starIcon = color === 'green' ? starGreen : color === 'black' ? starBlack : starWhite;
  const stars = Array.from({ length: 5 }, (_, index) => {
    return <Image key={index} alt="star" height={24} src={starIcon} width={24} />;
  });
  return <div className="inline-flex ml-auto">{stars}</div>;
};
