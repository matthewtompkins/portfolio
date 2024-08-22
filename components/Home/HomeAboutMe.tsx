import { getSectionThemeColors } from '@/utilities/getSectionThemeColors';
import SectionHeading from '../Layout/SectionHeading';
import TextAndImage from '../Layout/TextAndImage';
import mancho from '@/public/images/mancho.jpg';
import llama from '@/public/images/llama.jpg';
import music from '@/public/images/music.jpg';
import { styleDefaults } from '@/styles/defaults';

const HomeAboutMe: React.FC = (): JSX.Element => {
  const colors = getSectionThemeColors('black');
  const textAndImageData = [
    {
      img: {
        src: llama as unknown as string,
        alt: 'Me with a llama.',
        caption: {
          text: 'Me with a llama.',
          color: colors.textColor,
        },
        position: 'right',
      } as MT.ImageProps,
      paragraph: {
        color: colors.textColor,
        html: true,
        text: "As opposed to providing a technical overview of the work I've done that's gotten me here (there is more on that below), I'd rather give a more holistic view of my life and how it has informed the work I do now.</br></br>I spent the first 10 years of my professional life working in restaurants as a wine specialist, a bartender and a server. This work was invaluable to me in that it shaped the way I presented myself in the workplace, and helped me to understand how crucial soft skills are to any job. I had to understand how to manage the expectations of my guests while also approaching my job with competence and knowledge. It's just dinner, but it's kind of not. It's about providing a sense of comfort to new acquaintances in an environment that can at times be quite chaotic.",
      } as MT.ParagraphProps,
    },
    {
      img: {
        src: music as unknown as string,
        alt: 'Me being a rocker.',
        caption: {
          text: 'Me being a rocker.',
          color: colors.textColor,
        },
        position: 'left',
      } as MT.ImageProps,
      paragraph: {
        color: colors.textColor,
        html: true,
        text: "I eventually left the restaurant industry and toured the world professionally as a musician for 7 years. This was an incredible, formative experience for me, but I also had to build upon those soft skills I had developed - this time understanding how to fit into a team in close quarters over long stretches of time. Life on the road is difficult, and in order to succeed, you really need to be able to communicate with your bandmates and understand that you fit into a part of something bigger than yourself.</br></br>While I was on the road I started to teach myself to code. I was eventually taking on small development gigs here and there until COVID hit. The band could no longer tour, and so I pivoted to coding full time. I was freelancing for multiple clients and small teams at once, and I carried with me all the experience I had gained managing restaurant guests and working as a part of a group. Eventually I began doing contract work for Skillshare - an online learning platform specializing in creative learning. It was such a good fit with the team that they offered me a full-time position. I've been working with the company for over 2 and a half years.",
      } as MT.ParagraphProps,
    },
    {
      img: {
        src: mancho as unknown as string,
        alt: 'Mancho and I on a hike (with Julia).',
        caption:{
          text: 'Mancho and I on a hike (with Julia).',
          color: colors.textColor
        },
        position: 'right',
      } as MT.ImageProps,
      paragraph: {
        color: colors.textColor,
        html: true,
        text: "Some additional information about me - I was born in Indiana but have lived in Boston, New York, Detroit and Barcelona, where I met my partner, Julia. After 5 years in Spain, we decided for a change and have been traveling the world since.</br></br>We have a dog named Mancho, who we recently adopted in Peru. I enjoy hiking, cycling, meditating, wine, cooking and I still love playing music. I speak Spanish and am learning German.",
      } as MT.ParagraphProps,
    },
  ];
  return (
    <div
      id="about"
      className={`${colors.bgColor} ${styleDefaults.sectionPadding}`}
    >
      <SectionHeading
        heading={{ color: 'text-green', level: 'h2', text: 'About Me' }}
      />
      {textAndImageData.map((cur, ind) => {
        return (
          <div key={ind} className="[&:not(:last-child)]:mb-24">
            <TextAndImage img={cur.img} paragraph={cur.paragraph} />
          </div>
        );
      })}
    </div>
  );
};

export default HomeAboutMe;
