import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';

interface SectionHeadingProps {
  heading: MT.HeadingProps;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
}): JSX.Element => {
  return (
    <Grid>
      <div className="col-start-3 col-span-8">
        <Heading {...heading} />
      </div>
    </Grid>
  );
};

export default SectionHeading;
