import Button from './Button';
import Link from 'next/link';

const Nav: React.FC = (): JSX.Element => {
    const liStyles = 'text-base lowercase mr-8 font-serif text-green hover:text-white active:text-white focus:text-white';
  return (
    <nav className="w-full bg-black px-8 py-12">
      <div className="max-w-theme mx-auto text-right">
        <ul className="inline-flex">
          <li className={liStyles}>About Me</li>
          <li className={liStyles}>My Work</li>
          <li className={liStyles}>Testimonials</li>
          <li>
            <Button title="Contact Me" url="/contact-me" theme="outline" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
