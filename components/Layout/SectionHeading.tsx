import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';

interface SectionHeadingProps {
  heading: MT.HeadingProps;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
}): JSX.Element => {
  heading.style = heading?.style
    ? heading.style + ' leading-none'
    : 'leading-none';
  return (
    <Grid>
      <div className="col-start-3 col-span-8 mb-12">
        <Heading {...heading} />
      </div>
    </Grid>
  );
};

export default SectionHeading;
