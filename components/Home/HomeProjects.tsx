import SectionHeading from '../Layout/SectionHeading';
import CarouselSlider from '../Slider/CarouselSlider';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import passenger from '@/public/images/passenger.png';
import Link from 'next/link';
import RoundedImage from '../Images/RoundedImage';

const HomeProjects = (): JSX.Element => {
  const projectData: ProjectProps[] = [
    {
      description:
        'A Detroit-based support organization aimed at artists in recovery from substance abuse. The Compass application features over 10,000 meeting entries across the US and Europe, and uses AI web crawlers to keep its database up-to-date.',
      img: {
        alt: 'Passenger',
        src: passenger as unknown as string,
      } as MT.ImageProps,
      link: 'https://www.passengerrecovery.com',
      subtitle: 'Headless Wordpress & NextJS Web Application',
      title: 'Passenger Recovery',
    },
    {
      description:
        'A Detroit-based support organization aimed at artists in recovery from substance abuse. The Compass application features over 10,000 meeting entries across the US and Europe, and uses AI web crawlers to keep its database up-to-date.',
      img: {
        alt: 'Passenger',
        src: passenger as unknown as string,
      } as MT.ImageProps,
      link: 'https://www.passengerrecovery.com',
      subtitle: 'Headless Wordpress & NextJS Web Application',
      title: 'Passenger Recovery',
    },
    {
      description:
        'A Detroit-based support organization aimed at artists in recovery from substance abuse. The Compass application features over 10,000 meeting entries across the US and Europe, and uses AI web crawlers to keep its database up-to-date.',
      img: {
        alt: 'Passenger',
        src: passenger as unknown as string,
      } as MT.ImageProps,
      link: 'https://www.passengerrecovery.com',
      subtitle: 'Headless Wordpress & NextJS Web Application',
      title: 'Passenger Recovery',
    },
  ];

  const projects = projectData.map((project, ind) => (
    <Project key={ind} {...project} />
  ));

  return (
    <div className="bg-white py-32">
      <SectionHeading
        heading={{
          color: 'text-black',
          level: 'h2',
          text: 'Selected Projects',
        }}
      />
      <Grid>
        <div className="col-start-3 col-span-8">
          <CarouselSlider els={projects} uiColor="black" />
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

const Project: React.FC<ProjectProps> = ({ description, img, link, subtitle, title }): JSX.Element => {
  return (
    <Link href={link}>
      <div className="bg-black min-h-[500px] p-16 rounded-lg">
        <div className="mb-8">
          <RoundedImage img={img} />
        </div>
        <Heading level="h3" text={title} color="text-green" />
        <Heading
          level="h4"
          text={subtitle}
          style={'font-sans'}
          color="text-green"
        />
        <div className="mt-4">
          <Paragraph color="text-green" text={description} />
        </div>
      </div>
    </Link>
  );
};
