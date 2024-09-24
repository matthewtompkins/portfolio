import SectionHeading from '../Layout/SectionHeading';
import CarouselSlider from '../Slider/CarouselSlider';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import passenger from '@/public/images/projects/passenger.jpg';
import br from '@/public/images/projects/br.jpg';
import blackArchives from '@/public/images/projects/black-archives.jpg';
import skBlog from '@/public/images/projects/sk-blog.jpg';
import cubeworks from '@/public/images/projects/cubeworks.jpg';
import madisonMiles from '@/public/images/projects/madison-miles.jpg';
import Link from 'next/link';
import RoundedImage from '../Images/RoundedImage';
import { styleDefaults } from '@/styles/defaults';

const HomeProjects: React.FC = (): JSX.Element => {
  const projectData: ProjectProps[] = [
    {
      description:
        "Skillshare is one of the world's premiere online learning platforms, specializing in creative skills. The Skillshare blog is a Next.js headless Wordpress application serving as a long-term conversion funnel for the product.",
      img: {
        alt: 'Skillshare Blog',
        src: skBlog ,
      } as MT.ImageProps,
      link: 'https://www.skillshare.com/en/blog',
      subtitle: 'Headless Wordpress & Next.js Web Application',
      title: 'Skillshare Blog',
    },
    {
      description:
        'A Detroit-based support organization aimed at artists in recovery from substance abuse. The Compass application features over 17,000 meeting entries across the US and Europe, and uses AI web crawlers to keep its database up-to-date.',
      img: {
        alt: 'Passenger Recovery',
        src: passenger ,
      } as MT.ImageProps,
      link: 'https://passenger--passenger-react-10896.us-central1.hosted.app',
      subtitle: 'Headless Wordpress & Next.js Web Application (In Progress)',
      title: 'Passenger Recovery',
    },
    {
      description:
        'Blind Renaissance is an experienced, innovative design firm local to the Wenatchee Valley. I worked with Blind Renaissance on a number of projects, including a redesign of their own website.',
      img: {
        alt: 'Blind Renaissance',
        src: br ,
      } as MT.ImageProps,
      link: 'https://www.icblind.com',
      subtitle: 'Custom Wordpress Theme',
      title: 'Blind Renaissance',
    },
    {
      description:
        'Cubeworks creates wireless micro-sensors for scientific and personal application. I created a custom Wordpress theme for their website and a subsequent redesign several years later.',
      img: {
        alt: 'Cubeworks',
        src: cubeworks ,
      } as MT.ImageProps,
      link: 'https://www.cubeworks.io',
      subtitle: 'Custom Wordpress Theme',
      title: 'Cubeworks',
    },
    {
      description:
        'Madison Miles is one of a number of site redesigns I did for Soliant Health - a company specializing in temporary work placement in education and health.',
      img: {
        alt: 'Madison Miles',
        src: madisonMiles ,
      } as MT.ImageProps,
      link: 'https://www.madisonmiles.com',
      subtitle: 'Custom Wordpress Theme',
      title: 'Madison Miles',
    }
  ];

  const projects = projectData.map((project, ind) => (
    <Project key={ind} {...project} />
  ));

  return (
    <div id="work" className={`bg-black ${styleDefaults.sectionPadding}`}>
      <SectionHeading
        heading={{
          color: 'text-green',
          level: 'h2',
          text: 'Selected Projects',
        }}
      />
      <Grid>
        <div className="col-start-3 col-span-8">
          <CarouselSlider els={projects} uiColor="green" />
        </div>
      </Grid>
    </div>
  );
};

export default HomeProjects;

interface ProjectProps {
  description: string;
  img: MT.ImageProps;
  link: string;
  subtitle: string;
  title: string;
}

const Project: React.FC<ProjectProps> = ({
  description,
  img,
  link,
  subtitle,
  title,
}): JSX.Element => {
  return (
    <Link href={link}>
      <div className="bg-black border-2 border-green md:min-h-[500px] p-16 rounded-[8px]">
        <div className="mb-8">
          <RoundedImage img={img} style="max-w-full" />
        </div>
        <Heading level="h3" text={title} color="text-green" />
        <Heading
          level="h4"
          text={subtitle}
          fontStyle="font-sans"
          color="text-green"
        />
        <div className="mt-4">
          <Paragraph color="text-green" text={description} />
        </div>
      </div>
    </Link>
  );
};
