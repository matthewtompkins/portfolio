'use client';

import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';

import '@/node_modules/pure-react-carousel/dist/react-carousel.es.css';

interface TestimonialSliderProps {
  els: JSX.Element[];
  isPlaying?: boolean;
  uiColor: MT.ThemeColors;
}

const CarouselSlider: React.FC<TestimonialSliderProps> = ({
  els,
  isPlaying = false,
  uiColor,
}) => {
  const elSlides = els.map((cur, ind) => (
    <Slide index={ind} key={ind}>
      <div className='mx-2'>{cur}</div>
    </Slide>
  ));

  return (
    <div>
      <CarouselProvider
        isPlaying={isPlaying}
        dragEnabled
        naturalSlideHeight={0}
        naturalSlideWidth={320}
        isIntrinsicHeight
        totalSlides={els.length}
        touchEnabled
      >
        <Slider>{elSlides}</Slider>
        <CarouselPagination length={els.length} uiColor={uiColor} />
      </CarouselProvider>
    </div>
  );
};

export default CarouselSlider;

interface CarouselPaginationProps {
  length: number;
  uiColor: MT.ThemeColors;
}

const CarouselPagination = ({ length, uiColor }: CarouselPaginationProps) => {
  const dotColors = {
    green: 'disabled:bg-green border-green',
    black: 'disabled:bg-black border-black',
    white: 'disabled:bg-white border-white',
  };
  const dots = [];
  for (let i = 0; i < length; i++) {
    dots.push(
      <Dot
        slide={i}
        key={i}
        className={`h-8 w-8 border-2 rounded-full mx-2 mt-8 ${dotColors[uiColor]} bg-transparent`}
      ></Dot>
    );
  }
  return (
    <div className="flex w-full justify-center mt-[16px]">
      <div className="mx-[2px] self-stretch flex items-center">{dots}</div>
    </div>
  );
};
