import Grid from '../Grid/Grid';
import Button from './Button';

import { styleDefaults } from '@/styles/defaults';

const Nav: React.FC<MT.CallbackProps> = ({ callback }): JSX.Element => {
  const navLinkStyles = `mr-8 ${styleDefaults.link}`;
  return (
    <>
      <div className="md:hidden bg-green py-4 text-center">
        <Grid>
          <button onClick={callback} className="text-black text-base font-serif">
            let&apos;s work together
          </button>
        </Grid>
      </div>
      <nav className="w-full bg-black pt-6 md:py-12">
        <Grid>
          <ul className="flex md:inline-flex col-start-3 col-end-12 justify-center md:justify-end items-center">
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
            <li key="nav-3" className="hidden md:block">
              <Button
                onClick={callback}
                title="Let's work together"
                theme="outline"
              />
            </li>
          </ul>
        </Grid>
      </nav>
    </>
  );
};

export default Nav;
