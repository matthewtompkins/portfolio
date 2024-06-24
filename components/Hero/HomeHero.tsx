import Grid from '../Grid/Grid';
import Image from 'next/image';
import Button from '../UI/Button';
import profile from '@/public/images/placeholder.jpg';

const HomeHero: React.FC = (): JSX.Element => {
  return (
    <div className="bg-black py-36">
      <Grid>
        <div className="col-start-2 col-span-6 text-green">
          <h1 className="font-serif text-xl leading-none mb-8">
            Matt Tompkins
          </h1>
          <h2 className="font-serif text-md leading-none mb-6">
            A people-first web developer specializing in:
          </h2>
          <ul className='text-base [&>li:not(:last-child)]:mb-2 mb-10'>
            <li key="0">Custom Wordpress Themes & Plugins</li>
            <li key="1">Headless Wordpress Development</li>
            <li key="2">React & NextJS Development</li>
          </ul>
          <Button theme="outline" title="Contact Me" url="/contact" />
        </div>
        <div className="col-span-3 col-start-9 rounded-lg overflow-hidden">
          <Image className='rounded-theme' src={profile} alt="Matt Tompkins profile picture" />
        </div>
      </Grid>
    </div>
  );
};
export default HomeHero;
