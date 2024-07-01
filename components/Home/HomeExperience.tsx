import SectionHeading from '../Layout/SectionHeading';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import { styleDefaults } from '@/styles/defaults';

const HomeExperience = (): JSX.Element => {
  const experienceData: ExperienceEntryProps[] = [
    {
      dates: '2021 - Present',
      skills: [
        'React',
        'NextJS',
        'TypeScript',
        'TailwindCSS',
        'Wordpress',
        'PHP',
        'MySQL',
        'DataDog',
        'MixPanel',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Skillshare',
    },
    {
      dates: '2021 - Present',
      skills: [
        'React',
        'NextJS',
        'TypeScript',
        'TailwindCSS',
        'Wordpress',
        'PHP',
        'MySQL',
        'DataDog',
        'MixPanel',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Skillshare',
    },
    {
      dates: '2021 - Present',
      skills: [
        'React',
        'NextJS',
        'TypeScript',
        'TailwindCSS',
        'Wordpress',
        'PHP',
        'MySQL',
        'DataDog',
        'MixPanel',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title: 'Skillshare',
    },
  ];
  return (
    <div className={`${styleDefaults.sectionPadding} bg-black`}>
      <SectionHeading
        heading={{
          color: 'text-green',
          level: 'h2',
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
  skills: string[];
  text: string;
  title: string;
}

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  dates,
  skills,
  text,
  title,
}): JSX.Element => {
  return (
    <>
      <div className="col-start-3 col-span-2">
        <Heading level="h3" text={title} color="text-green" />
        <Heading level="h4" text={dates} color="text-green" />
      </div>
      <div className="col-start-6 col-span-5 mb-12">
        <Paragraph text={text} color="text-green" />
        <div className="flex flex-wrap mt-8">
          {skills.map((cur, ind) => {
            return (
              <span
                className="border-2 border-green py-2 px-6 m-2 rounded-lg font-serif text-green text-sm lowercase"
                key={ind}
              >
                {cur}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
