import Image from 'next/image';

import SectionHeading from '../Layout/SectionHeading';
import Grid from '../Grid/Grid';

import acf from '@/public/images/toolkit/acf.png';
import blueshift from '@/public/images/toolkit/blueshift.png';
import css3 from '@/public/images/toolkit/css3.png';
import datadog from '@/public/images/toolkit/datadog.png';
import faustjs from '@/public/images/toolkit/faustjs.webp';
import firebase from '@/public/images/toolkit/firebase.png';
import github from '@/public/images/toolkit/github.png';
import html5 from '@/public/images/toolkit/html5.png';
import jira from '@/public/images/toolkit/jira.png';
import js from '@/public/images/toolkit/js.png';
import miro from '@/public/images/toolkit/miro.svg';
import mixpanel from '@/public/images/toolkit/mixpanel.png';
import mysql from '@/public/images/toolkit/mysql.svg';
import nextjs from '@/public/images/toolkit/nextjs.png';
import php from '@/public/images/toolkit/php.png';
import react from '@/public/images/toolkit/react.png';
import sass from '@/public/images/toolkit/sass.png';
import tailwind from '@/public/images/toolkit/tailwind.svg';
import typescript from '@/public/images/toolkit/typescript.png';
import wordpress from '@/public/images/toolkit/wordpress.png';

const HomeToolkit: React.FC = (): JSX.Element => {
  const icons = [
    { src: react, alt: 'React' },
    { src: nextjs, alt: 'Next.js' },
    { src: typescript, alt: 'TypeScript' },
    { src: tailwind, alt: 'Tailwind CSS' },
    { src: wordpress, alt: 'WordPress' },
    { src: faustjs, alt: 'FaustJS' },
    { src: acf, alt: 'Advanced Custom Fields' },
    { src: php, alt: 'PHP' },
    { src: js, alt: 'JavaScript' },
    { src: css3, alt: 'CSS3' },
    { src: sass, alt: 'Sass' },
    { src: html5, alt: 'HTML5' },
    { src: mysql, alt: 'MySQL' },
    { src: github, alt: 'GitHub' },
    { src: firebase, alt: 'Firebase' },
    { src: jira, alt: 'Jira' },
    { src: blueshift, alt: 'Blueshift' },
    { src: datadog, alt: 'Datadog' },
    { src: miro, alt: 'Miro' },
    { src: mixpanel, alt: 'Mixpanel' },
  ];
  return (
    <div className="bg-white pb-48">
      <SectionHeading
        heading={{ color: 'text-black', level: 'h2', text: 'My Toolkit' }}
      />
      <Grid>
        <div className="col-start-3 col-span-8 grid grid-cols-6 gap-32">
          {icons.map((cur, ind) => (
            <ToolkitItem key={ind} image={cur as unknown as MT.ImageProps} />
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default HomeToolkit;

interface ToolkitItemProps {
  image: MT.ImageProps;
}

const ToolkitItem: React.FC<ToolkitItemProps> = ({ image }) => {
  return (
    <div className="flex items-center justify-center">
      <Image height={128} width={128} src={image.src} alt={image.alt} />
    </div>
  );
};
