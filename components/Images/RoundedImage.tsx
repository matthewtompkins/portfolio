import Image from 'next/image';

interface RoundedImageProps {
  img: MT.ImageProps;
  style?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  img,
  style = '',
}): JSX.Element => {
  return (
    <div className={`overflow-hidden rounded-full max-w-[320px] mx-auto ${style}`}>
      <Image {...img} />
    </div>
  );
};

export default RoundedImage;
