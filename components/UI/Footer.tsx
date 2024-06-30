import Grid from '../Grid/Grid';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="bg-black pt-24 pb-48">
      <Grid>
        <div className="col-start-3 col-span-8 text-center">
          <ul>
            <li key="footer-0">
              <a href="#about">About Me</a>
            </li>
            <li key="footer-1">
              <a href="#work">My Work</a>
            </li>
            <li key="footer-2">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li key="footer-3">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};
