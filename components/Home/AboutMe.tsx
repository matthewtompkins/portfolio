import Grid from '../Grid/Grid';
import { getSectionThemeColors } from '@/utilities/getSectionThemeColors';

const AboutMe: React.FC = (): JSX.Element => {
    const colors = getSectionThemeColors('black');
  return (
    <div className={`${colors.bgColor}`}>
      <Grid></Grid>
    </div>
  );
};

export default AboutMe;
