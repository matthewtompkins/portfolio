import SectionHeading from '../Layout/SectionHeading';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import { styleDefaults } from '@/styles/defaults';

const HomeExperience = (): JSX.Element => {
  const experienceData: ExperienceEntryProps[] = [
    {
      dates: 'November 2021 - August 2024',
      text: "While at Skillshare, I built their headless blog service from the ground up using Next.js/Typescript and WPGraphQL. I later oversaw and contributed to a full redesign of the blog, which launched in Q2 of 2024. I was a member of the Growth Pod, which was responsible for experimentation, organic growth and checkout. My additional contributions included leading several conversion-focused experiments and significant work on Google Tag Manager and related third-party integrations. During my time at Skillshare I also worked with PHP, Datadog, Mixpanel and Split.io.",
      title: 'Software Developer, Skillshare',
    },
    {
      dates: '2016 - Present',
      text: 'Passenger Recovery is a support service that provides access to AA and NA meetings for individuals in recovery while they travel. The Passenger Compass is a meeting finder web application featuring over 14,000 meetings. It is built on Google Maps and deployed/hosted through Firebase, and was one of the first things I ever built as a coder. I am slating a release of a full rebuild of Compass for Q3 of 2024. The new version is built on Next.js and Typescript, expands its use of Firebase and Google Cloud Service tools and will also feature headless Wordpress functionality. Later this year I will begin developing a Node.js-based crawler service to keep our meeting database up-to-date over time.',
      title: 'Senior Software Developer, Passenger Recovery',
    },
    {
      dates: '2016 - Present',
      text: 'Soliant Health - custom Wordpress theme development for a number of job boards in the health and teaching temporary staffing industries. ClearEdge Marketing - custom Wordpress theme development, including the site for ClearEdge itself. Blind Renaissance - custom Wordpress theme development, including the site for Blind Renaissance itself',
      title: 'Freelance Web Developer',
    },
  ];
  return (
    <div className={`bg-white ${styleDefaults.sectionPadding}`}>
      <SectionHeading
        heading={{
          color: 'text-black',
          level: 'h2',
          style: 'leading-none',
          text: 'Professional Experience',
        }}
      />
      <Grid>
        {experienceData.map((cur, ind) => {
          return <ExperienceEntry key={ind} {...cur} />;
        })}
      </Grid>
    </div>
  );
};

export default HomeExperience;

interface ExperienceEntryProps {
  dates: string;
  text: string;
  title: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  dates,
  text,
  title,
}): JSX.Element => {
  return (
    <>
      <div className="col-start-3 col-span-3 mb-6 md:mb-0">
        <Heading level="h3" fontStyle="font-sans" text={title} color="text-black" />
        <Heading level="h4" fontStyle='font-sans' text={dates} color="text-black" />
      </div>
      <div className="col-start-6 col-span-5 mb-12">
        <Paragraph html={true} text={text} color="text-black" />
      </div>
    </>
  );
};
