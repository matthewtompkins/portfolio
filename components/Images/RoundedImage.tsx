import Image from 'next/image';
import Paragraph from '../Typography/Paragraph';

interface RoundedImageProps {
  img: MT.ImageProps;
  style?: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({
  img,
  style = '',
}): JSX.Element => {
  const {caption, ...imgWithoutCaption} = img;
  return (
    <div className={`overflow-hidden rounded-lg max-w-[320px] mx-auto ${style}`}>
      <Image {...imgWithoutCaption} />
      {caption && <Paragraph
        color={caption.color}
        text={caption.text} />}
    </div>
  );
};

export default RoundedImage;
