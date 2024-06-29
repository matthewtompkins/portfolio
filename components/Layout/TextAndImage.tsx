import Heading from '../Typography/Heading';
import Grid from '../Grid/Grid';

import RoundedImage from '../Images/RoundedImage';
import Paragraph from '../Typography/Paragraph';

interface TextAndImageProps {
  heading?: MT.HeadingProps;
  img: MT.ImageProps;
  paragraph: MT.ParagraphProps;
}

const TextAndImage: React.FC<TextAndImageProps> = ({
  heading,
  img,
  paragraph,
}): JSX.Element => {
  return (
    <Grid>
      <div
        className={`row-start-1 col-span-3 ${
          img.position === 'left' ? 'col-start-3' : 'col-start-8'
        }`}
      >
        <RoundedImage img={img} />
      </div>
      <div
        className={`row-start-1 col-span-4 ${
          img.position === 'left' ? 'col-start-7' : 'col-start-3'
        }`}
      >
        {heading && <Heading {...heading} />}
        <Paragraph {...paragraph} />
      </div>
    </Grid>
  );
};

export default TextAndImage;
