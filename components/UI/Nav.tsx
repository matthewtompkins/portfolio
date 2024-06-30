import Link from 'next/link';

import Grid from '../Grid/Grid';
import Button from './Button';

const Nav: React.FC = (): JSX.Element => {
  const liStyles =
    'text-sm lowercase mr-12 font-serif text-green tracking-wide hover:text-white active:text-white focus:text-white';
  return (
    <nav className="w-full bg-black px-8 py-12">
      <Grid>
        <ul className="inline-flex col-start-3 col-end-11 justify-end">
          <li key="nav-0" className={liStyles}>
            <a href="#about" aria-label="Go to about me section">
              About Me
            </a>
          </li>
          <li key="nav-1" className={liStyles}>
            <a href="#work" aria-label="Go to my work section">
              My Work
            </a>
          </li>
          <li key="nav-2" className={liStyles}>
            <a href="#testimonials" aria-label="Go to testimonials section">
              Testimonials
            </a>
          </li>
          <li key="nav-3">
            <Button
              title="Let's work together"
              url="/contact-me"
              theme="outline"
            />
          </li>
        </ul>
      </Grid>
    </nav>
  );
};

export default Nav;
