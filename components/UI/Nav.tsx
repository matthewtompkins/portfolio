import Link from 'next/link';

import Grid from '../Grid/Grid';
import Button from './Button';

const Nav: React.FC = (): JSX.Element => {
  const liStyles =
    'text-sm lowercase mr-12 font-serif text-green hover:text-white active:text-white focus:text-white';
  return (
    <nav className="w-full bg-black px-8 py-12">
      <Grid>
        <ul className="inline-flex col-start-3 col-end-11 justify-end">
          <li className={liStyles}>About Me</li>
          <li className={liStyles}>My Work</li>
          <li className={liStyles}>Testimonials</li>
          <li>
            <Button title="Contact Me" url="/contact-me" theme="outline" />
          </li>
        </ul>
      </Grid>
    </nav>
  );
};

export default Nav;
