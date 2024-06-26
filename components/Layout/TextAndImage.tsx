import Image from 'next/image';
import Heading from '../Typography/Heading';

import Grid from '../Grid/Grid';
import Paragraph from '../Typography/Paragraph';

interface TextAndImageProps {
  heading?: MT.HeadingProps;
  img: {
    src: string;
    alt: string;
    position: 'left' | 'right';
  };
  paragraph: MT.ParagraphProps;
}

const TextAndImage: React.FC<TextAndImageProps> = ({
  heading,
  img,
  paragraph,
}): JSX.Element => {
  return (
    <>
      <div className="col-span-3">
        <Image src={img.src} alt={img.alt} />
      </div>
      <div className="col-span-6">
        {heading && <Heading color={} {...heading} />}
        <Paragraph {...paragraph} />
      </div>
    </>
  );
};

export default TextAndImage;
