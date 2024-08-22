import Image from 'next/image';
import Grid from '../Grid/Grid';
import Heading from '../Typography/Heading';
import { styleDefaults } from '@/styles/defaults';
import arrow from '@/public/images/icons/arrow.svg';

const skills = [
  "Communication",
  "Collaboration",
  "Problem Solving",
  "Critical Thinking",
  "Investigation & Bug Squashing",
  "Documentation",
];
const tools = [
  "React/Next.js",
  "Typescript",
  "Wordpress",
  "PHP",
  "GraphQL",
  "TailwindCSS",
  "HTML/CSS",
];

const HomeSkills: React.FC = (): JSX.Element => {
  return (
    <div className={`bg-white ${styleDefaults.sectionPadding}`}>
      <Grid>
        <div className="col-start-3 col-span-8 grid grid-cols-2 gap-32">
          <div>
            <Heading level="h2" text="Skills" color="text-black" />
            <ul className='mt-4'>
              {skills.map((skill, index) => (
                <li className='text-base flex gap-2 [&:not(:last-child)]:mb-2' key={index}><Image alt="" src={arrow} height={16} width={16} />{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <Heading level="h2" text="Tools" color="text-black" />
            <ul className='mt-4'>
              {tools.map((tool, index) => (
                <li className='text-base flex gap-2 [&:not(:last-child)]:mb-2' key={index}><Image alt="" className='mr-2' src={arrow} height={16} width={16} />{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default HomeSkills;

interface ToolkitItemProps {
  image: MT.ImageProps;
}
