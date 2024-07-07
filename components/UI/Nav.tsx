import Grid from '../Grid/Grid';
import Button from './Button';

import { styleDefaults } from '@/styles/defaults';

const Nav: React.FC<MT.CallbackProps> = ({callback}): JSX.Element => {
  const navLinkStyles = `mr-8 ${styleDefaults.link}`;
  return (
    <nav className="w-full bg-black py-12">
      <Grid>
        <ul className="inline-flex col-start-3 col-end-11 justify-end items-center">
          <li key="nav-0" className={navLinkStyles}>
            <a href="#about" aria-label="Go to about me section">
              About Me
            </a>
          </li>
          <li key="nav-1" className={navLinkStyles}>
            <a href="#work" aria-label="Go to my work section">
              My Work
            </a>
          </li>
          <li key="nav-2" className={navLinkStyles}>
            <a href="#testimonials" aria-label="Go to testimonials section">
              Testimonials
            </a>
          </li>
          <li key="nav-3">
            <Button
              onClick={callback}
              title="Let's work together"
              theme="outline"
            />
          </li>
        </ul>
      </Grid>
    </nav>
  );
};

export default Nav;
