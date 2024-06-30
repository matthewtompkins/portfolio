import Heading from '../Typography/Heading';
import Grid from '../Grid/Grid';
import Paragraph from '../Typography/Paragraph';
import Button from '../UI/Button';

const HomeCTA: React.FC = (): JSX.Element => {
  return (
    <div className="bg-black py-32">
      <Grid>
        <div className="col-start-3 col-span-6">
          <Heading color="text-green" level="h2" text="Let's chat" />
          <Paragraph
            color="text-green"
            text="If you're interested in working together, give me a shout! 
I'd love to know a bit more about your project."
          />
          <div className="mt-16">
            <Button theme="outline" title="Contact Me" url="/contact" />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default HomeCTA;
