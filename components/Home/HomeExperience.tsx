import SectionHeading from '../Layout/SectionHeading';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

const HomeExperience = (): JSX.Element => {
  const experienceData: ExperienceEntryProps[] = [
    {
      dates: '2021 - Present',
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
        'Google Tag Manager'
      ],
      text: 'I was originally brought onto the Skillshare team as a contractor. Their blog was starting to get a lot of traffic, and they asked me to help internationalize it and prepare it for experimentation. I implemented an i18n configuration using WPML, and eventually migrated the blog to a decoupled headless configuration using NextJS as the frontend application.<br/><br/>After a few months, I was hired a full-time position. I joined the Growth team, responsible for organic growth and experimentation, and have since branched out to work on our checkout, third-party tooling and Google Tag Manager implementation. It\'s been an incredible period of growth for me, and I\'m fortunate to work with an amazing group of incredibly talented individuals.',
      title: 'Skillshare',
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
      text: 'As a touring musician I had quite a lot of free time moving from city to city. I decided to start learning to code in my downtime, and eventually began taking on small freelance jobs here and there. I initially learned the basics of HTML/CSS/JS, but the work I was receiving took me toward Wordpress.<br/><br/>I began to develop custom themes and plugins for clients, and eventually started to take on larger projects, either solo or on medium-sized teams. I have been fortunate to work with some wonderful clients that have allowed me to grow my base of knowledge, learn how to manage my own time and stress and, most importantly, learn to how to establish strong, lasting working relationships with clients.',
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
      text: 'I studied music at Berklee College of Music in Boston, and have performed on stage since I was in high school. I\'ve been a part of a number of projects, but in 2015 I was offered a full-time spot in Electric Six - a Detroit rock band with whom I had established a relationship over the years. I was ecstatic to tour, it was my dream. The band took me all across the United States, Great Britain, Mainland Europe, Russia and Central America.<br/><br/>I feel like I saw it all - performing in front of 40 people in Norman, Oklahoma 1 night, then 2 months later in front of thousands in Moscow and a month later in front of 10,000 people in Greece. During this time I gained patience, humility, resilience and world experience. I learned how to work with a team, how to manage my time and stress and how to perform at a high level every night. Importantly, during that time I was also managing my own projects - a skill I have carried with me since. I am incredibly grateful for this experience.',
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
      text: 'I entered the professional world, as many creatives do, in restaurants. The restaurant industry can be grueling - good pay for young professionals, but a high-stress environment and late hours. I worked across a number of restaurants in Boston, New York and Detroit - slowly polishing my interpersonal skills, performance skills and knowledge along the way. I entered the industry as a sheepish college kid, and I feel like I left it with confidence and a set of people skills I certainly didn\'t learn in music school.<br/><br/>During this time I also worked at a few higher-end bars where I learned not only how to establish relationships with regular clients, but also had to gain a more involved beverage knowledge. I also worked in a Spanish restaurant in New York as a wine steward, where I was responsible for tasting and recommending wine to guests. I gained an intricate knowledge of Spanish food and wine - a hobby that I still enjoy to this day (and certainly a motivating factor for my move to Barcelona).',
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
        <Heading
          level="h3"
          text={title}
          color="text-green"
        />
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
