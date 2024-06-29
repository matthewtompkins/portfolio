import { getSectionThemeColors } from '@/utilities/getSectionThemeColors';
import TextAndImage from '../Layout/TextAndImage';
import placeholder from '@/public/images/placeholder.jpg';

const AboutMe: React.FC = (): JSX.Element => {
  const colors = getSectionThemeColors('black');
  const textAndImageData = [
    {
      img: {
        src: placeholder as unknown as string,
        alt: 'Placeholder Image',
        position: 'right',
      } as MT.ImageProps,
      paragraph: {
        color: colors.textColor,
        text: "I'm a frontend web developer specializing in Custom Wordpress Themes, Headless Wordpress Applications and React/NextJS development. I have over 8 years experience as a freelancer and employee on small teams and medium-size tech start-ups.",
      } as MT.ParagraphProps,
    },
    {
      img: {
        src: placeholder as unknown as string,
        alt: 'Placeholder Image',
        position: 'left',
      } as MT.ImageProps,
      paragraph: {
        color: colors.textColor,
        text: "I'm a frontend web developer specializing in Custom Wordpress Themes, Headless Wordpress Applications and React/NextJS development. I have over 8 years experience as a freelancer and employee on small teams and medium-size tech start-ups.",
      } as MT.ParagraphProps,
    },
  ];
  return (
    <div className={`${colors.bgColor} py-32`}>
      {textAndImageData.map((cur) => {
        return (
          <div key={cur.img.src} className="[&:not(:last-child)]:mb-24">
            <TextAndImage img={cur.img} paragraph={cur.paragraph} />
          </div>
        );
      })}
    </div>
  );
};

export default AboutMe;
