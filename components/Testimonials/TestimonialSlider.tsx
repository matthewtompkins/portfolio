import {
  CarouselProvider,
  Slider,
  Slide,
  Dot,
} from 'pure-react-carousel';

import Testimonial from './Testimonial';

import 'node_modules/pure-react-carousel/dist/react-carousel.es.css';

interface TestimonialSliderProps {
  testimonials: MT.TestimonialProps[];
  textColor: MT.TextColorClasses;
  uiColor: MT.BackgroundColorClasses;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  textColor,
  uiColor,
}) => {
  const testimonialEls = testimonials.map((testimonial, index) => (
    <Slide className="mx-[4px]" index={index} key={index}>
      <Testimonial color={textColor} testimonial={testimonial} />
    </Slide>
  ));

  return (
    <div>
      <CarouselProvider
        dragEnabled
        naturalSlideHeight={0}
        naturalSlideWidth={320}
        isIntrinsicHeight
        totalSlides={testimonials.length}
        touchEnabled
      >
        <Slider>{testimonialEls}</Slider>
        <CarouselPagination length={testimonials.length} uiColor={uiColor} />
      </CarouselProvider>
    </div>
  );
};

export default TestimonialSlider;

interface CarouselPaginationProps {
  length: number;
  uiColor: MT.BackgroundColorClasses;
}

const CarouselPagination = ({ length, uiColor }: CarouselPaginationProps) => {
  const dots = [];
  for (let i = 0; i < length; i++) {
    dots.push(
      <Dot
        slide={i}
        key={i}
        className={`h-[12px] w-[12px] border-2 rounded-full mx-[2px] ${uiColor} disabled:bg-transparent`}
      ></Dot>
    );
  }
  return (
    <div
      data-testid="authorship-pagination"
      className="flex w-full justify-center mt-[16px]"
    >
      <div
        data-testid="authorship-dots"
        className="mx-[2px] self-stretch flex items-center"
      >
        {dots}
      </div>
    </div>
  );
};
