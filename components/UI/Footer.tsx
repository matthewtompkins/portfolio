import Grid from '../Grid/Grid';
import Paragraph from '../Typography/Paragraph';

import { styleDefaults } from '@/styles/defaults';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="bg-black py-24">
      <Grid>
        <div className="col-start-3 col-span-8 text-center">
          <ul className='text-green inline-flex mx-auto mb-4'>
            <li key="footer-0" className={`${styleDefaults.link} mx-4`}>
              <a href="#about">About Me</a>
            </li>
            <li key="footer-1" className={`${styleDefaults.link} mx-4`}>
              <a href="#work">My Work</a>
            </li>
            <li key="footer-2" className={`${styleDefaults.link} mx-4`}>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li key="footer-3" className={`${styleDefaults.link} mx-4`}>
              <a href="">Contact</a>
            </li>
          </ul>
          <Paragraph color="text-green" text={`© ${new Date().getFullYear()}, Matt Tompkins`} />
        </div>
      </Grid>
    </div>
  );
};
export default Footer;