import Heading from '../Typography/Heading';
import Grid from '../Grid/Grid';
import Button from '../UI/Button';

const HomeCTA: React.FC<MT.CallbackProps> = ({ callback }): JSX.Element => {
  return (
    <div className="bg-black pb-24 md:pb-48">
      <Grid>
        <div className="col-start-3 col-span-8">
          <div className="mb-6">
            <Heading
              color="text-green"
              level="h2"
              text="Let's work together."
              style="leading-none"
            />
          </div>
          <Heading
            color="text-green"
            level="h3"
            fontStyle="font-sans"
            text="If you're interested in working together, give me a shout! 
I'd love to know a bit more about your project."
          />
          <div className="mt-16">
            <Button
              onClick={callback}
              theme="outline"
              title="Let's work together"
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default HomeCTA;
