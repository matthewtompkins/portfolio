import Image from 'next/image';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel';

import 'node_modules/pure-react-carousel/dist/react-carousel.es.css';

const TestimonialSlider = (props) => {
  const authorEls = authors.map((author, index) => (
    <Slide className="mx-[4px]" index={index} key={index}></Slide>
  ));

  return (
    <div>
      <CarouselProvider
        dragEnabled
        naturalSlideHeight={0}
        naturalSlideWidth={320}
        isIntrinsicHeight
        totalSlides={authors.length}
        touchEnabled
      >
        <Slider>{authorEls}</Slider>
        <CarouselPagination length={authors.length} />
      </CarouselProvider>
    </div>
  );
};

export default TestimonialSlider;

interface CarouselPaginationProps {
  length: number;
}

const CarouselPagination = ({ length }: CarouselPaginationProps) => {
  const dots = [];
  for (let i = 0; i < length; i++) {
    dots.push(
      <Dot
        slide={i}
        key={i}
        className="h-[12px] w-[12px] bg-[rgb(220,222,225)] rounded-full mx-[2px] disabled:bg-violet"
      ></Dot>
    );
  }
  return (
    <div
      data-testid="authorship-pagination"
      className="flex w-full justify-center mt-[16px]"
    >
      <ButtonBack>
        <PaginationArrowButton direction="prev" />
      </ButtonBack>
      <div
        data-testid="authorship-dots"
        className="mx-[2px] self-stretch flex items-center"
      >
        {dots}
      </div>
      <ButtonNext>
        <PaginationArrowButton direction="next" />
      </ButtonNext>
    </div>
  );
};

interface PaginationArrowButtonProps {
  direction: 'next' | 'prev';
}

const PaginationArrowButton = ({ direction }: PaginationArrowButtonProps) => {
  return <span></span>;
};
