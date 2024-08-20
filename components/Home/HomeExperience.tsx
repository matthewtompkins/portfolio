import SectionHeading from '../Layout/SectionHeading';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

const HomeExperience = (): JSX.Element => {
  const experienceData: ExperienceEntryProps[] = [
    {
      dates: 'November 2021 - August 2024',
      skills: [
        'Soft Skills',
        'Stakeholder Management',
        'Project Management',
        'React',
        'NextJS',
        'TypeScript',
        'TailwindCSS',
        'Wordpress',
        'PHP',
        'MySQL',
        'Google Analytics',
        'Google Tag Manager',
      ],
      text: "While at Skillshare, I built their headless blog service from the ground up using Next.js/Typescript and WPGraphQL. I later oversaw and contributed to a full redesign of the blog, which launched in Q2 of 2024. I was a member of the Growth Pod, which was responsible for experimentation, organic growth and checkout. My additional contributions included leading several conversion-focused experiments and significant work on Google Tag Manager and related third-party integrations. During my time at Skillshare I also worked with PHP, Datadog, Mixpanel and Split.io.",
      title: 'Skillshare',
    },
    {
      dates: '2016 - Present',
      skills: [
        'Project Management',
        'Adaptability',
        'Firebase',
        'React',
        'NextJS',
        'TypeScript',
      ],
      text: 'Passenger Recovery is a support service that provides access to AA and NA meetings for individuals in recovery while they travel. The Passenger Compass is a meeting finder web application featuring over 14,000 meetings. It is built on Google Maps and deployed/hosted through Firebase, and was one of the first things I ever built as a coder. I am slating a release of a full rebuild of Compass for Q3 of 2024. The new version is built on Next.js and Typescript, expands its use of Firebase and Google Cloud Service tools and will also feature headless Wordpress functionality. Later this year I will begin developing a Node.js-based crawler service to keep our meeting database up-to-date over time.',
      title: 'Passenger Recovery',
    },
    {
      dates: 'March 2020 - March 2021',
      skills: [
        'Soft Skills',
        'Client Management',
        'Time Management',
        'Project Management',
        'Wordpress',
        'PHP',
        'MySQL',
        'ACF',
        'JavaScript'
      ],
      text: 'While at ClearEdge, I built various custom Wordpress themes for the company\'s clients, which at times included custom coding solutions such as store finders. My team oversaw the deployment and hosting of 10-20 client websites at any given time. During this time I also rebuilt the website for ClearEdge itself.',
      title: 'ClearEdge Marketing',
    },
    {
      dates: '2016 - Present',
      skills: [
        'Soft Skills',
        'Client Management',
        'Time Management',
        'Project Management',
        'Adaptability',
        'Wordpress',
        'PHP',
        'MySQL',
        'ACF',
        'WPML',
        'React',
        'NextJS',
        'TypeScript',
      ],
      text: 'For the first 4 years of my time freelancing, I was mainly working for individual clients creating small websites for events and restaurants. As I began to gain experience with Wordpress, I started to move into more bespoke projects, often creating custom Wordpress themes and plugins to suit the needs of my clients and eventually moving into embracing Gutenberg and creating themes based on collections of custom blocks.<br/><br/>During this time I worked for a client called Soliant, where I created a number of job board websites for temporary staffing across health and education industries. I also worked for a west coast design agency called Blind Renaissance on a number of custom Wordpress sites for their clients, along with a design and animation-heavy website for the agency itself. I now focus more on React and headless Wordpress development.',
      title: 'Freelance Web Developer',
    },
    {
      dates: '2015 - 2022',
      skills: [
        'Soft Skills',
        'Adaptability',
        'Stress Management',
        'Creativity',
        'Performance',
        'Music Production',
        'Project Management',
      ],
      text: "I studied music at Berklee College of Music in Boston, and have performed on stage since I was in high school. I've been a part of a number of projects, but in 2015 I was offered a full-time spot in Electric Six - a Detroit rock band with whom I had established a relationship over the years. I was ecstatic to tour, it was my dream. The band took me all across the United States, Great Britain, Mainland Europe, Russia and Central America.<br/><br/>I feel like I saw it all - performing in front of 40 people in Norman, Oklahoma 1 night, then 2 months later in front of thousands in Moscow and a month later in front of 10,000 people in Greece. During this time I gained patience, humility, resilience and world experience. I learned how to work with a team, how to manage my time and stress and how to perform at a high level every night. Importantly, during that time I was also managing my own projects - a skill I have carried with me since. I am incredibly grateful for this experience.",
      title: 'Professional Musician',
    },
    {
      dates: '2009 - 2019',
      skills: [
        'Soft Skills',
        'Guest Relations',
        'Client Management',
        'Stress Management',
        'Performance',
        'Sales',
        'Product Knowledge',
      ],
      text: "I entered the professional world, as many creatives do, in restaurants. The restaurant industry can be grueling - good pay for young professionals, but a high-stress environment and late hours. I worked across a number of restaurants in Boston, New York and Detroit - slowly polishing my interpersonal skills, performance skills and knowledge along the way. I entered the industry as a sheepish college kid, and I feel like I left it with confidence and a set of people skills I certainly didn't learn in music school.<br/><br/>During this time I also worked at a few higher-end bars where I learned not only how to establish relationships with regular clients, but also had to gain a more involved beverage knowledge. I also worked in a Spanish restaurant in New York as a wine steward, where I was responsible for tasting and recommending wine to guests. I gained an intricate knowledge of Spanish food and wine - a hobby that I still enjoy to this day (and certainly a motivating factor for my move to Barcelona).",
      title: 'Wine Steward, Bartender, Waiter',
    },
  ];
  return (
    <div className={`pb-24 md:pb-48 bg-black`}>
      <SectionHeading
        heading={{
          color: 'text-green',
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
      <div className="col-start-3 col-span-2 mb-6 md:mb-0">
        <Heading level="h3" text={title} color="text-green" />
        <Heading level="h4" text={dates} color="text-green" />
      </div>
      <div className="col-start-6 col-span-5 mb-12">
        <Paragraph html={true} text={text} color="text-green" />
        <div className="flex flex-wrap mt-8 ml-[-4px]">
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
