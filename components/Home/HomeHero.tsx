import Grid from '../Grid/Grid';
import Button from '../UI/Button';
import profile from '@/public/images/profile.jpg';
import { getSectionThemeColors } from '@/utilities/getSectionThemeColors';
import RoundedImage from '../Images/RoundedImage';
import { styleDefaults } from '@/styles/defaults';
import Heading from '../Typography/Heading';

const HomeHero: React.FC<MT.CallbackProps> = ({ callback }): JSX.Element => {
  const colors = getSectionThemeColors('black');
  return (
    <div className={`${colors.bgColor} ${styleDefaults.sectionPadding}`}>
      <Grid>
        <div
          className={`col-start-3 col-span-5 ${colors.textColor} mb-24 md:mb-0`}
        >
          <Heading
            color="text-green"
            style="mb-8 leading-none"
            level="h1"
            text="Matt Tompkins"
          />
          <h2 className="font-sans text-md leading-1 mb-6">
            Frontend developer with 8+ years experience and a focus on soft skills and communication specializing in:
          </h2>
          <ul className="text-base [&>li:not(:last-child)]:mb-2 mb-10">
            <li key="0">React & NextJS Development</li>
            <li key="1">Headless Wordpress Development</li>
            <li key="2">Custom Wordpress Themes&nbsp;&&nbsp;Plugins</li>
          </ul>
          <Button
            theme="outline"
            title="Let's work together"
            onClick={callback}
          />
        </div>
        <div className="col-span-3 col-start-8">
          <RoundedImage
            img={{
              src: profile,
              alt: 'Matt Tompkins profile picture',
            }}
          />
        </div>
      </Grid>
    </div>
  );
};
export default HomeHero;
