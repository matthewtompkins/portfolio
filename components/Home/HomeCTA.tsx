import Heading from '../Typography/Heading';
import Grid from '../Grid/Grid';
import Button from '../UI/Button';
import { styleDefaults } from '@/styles/defaults';

const HomeCTA: React.FC<MT.CallbackProps> = ({ callback }): JSX.Element => {
  return (
    <div className={`bg-white ${styleDefaults.sectionPadding}`}>
      <Grid>
        <div className="col-start-3 col-span-8">
          <div className="mb-6">
            <Heading
              color="text-black"
              level="h2"
              text="Let's work together."
              style="leading-none"
            />
          </div>
          <Heading
            color="text-black"
            level="h3"
            fontStyle="font-sans"
            html={true}
            text="If you're interested in working together, give me a shout!</br>I'd love to know more about your project."
          />
          <div className="mt-16">
            <Button
              color="black"
              onClick={callback}
              theme="outline"
              title="Email me"
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default HomeCTA;
