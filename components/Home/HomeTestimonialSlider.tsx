import CarouselSlider from '../Slider/CarouselSlider';
import Testimonial from '../Testimonials/Testimonial';
import Grid from '../Grid/Grid';
import { styleDefaults } from '@/styles/defaults';

const HomeTestimonialSlider: React.FC = (): JSX.Element => {
  const testimonialData: MT.TestimonialProps[] = [
    {
      author: 'Rebecca Dobbin',
      relationship: 'Manager',
      role: 'Lead Product Manager',
      text: 'I highly recommend Matt for any engineering role! He is a strong engineer, produces beautiful work, and most importantly is warm, thoughtful, and always striving to improve. The level of self awareness Matt has is rare, and I deeply appreciate his ability to proactively check in as projects progress to see how things are going and what could improve. He is a strong communicator, and his clear and frequent updates on complex technical concepts are greatly appreciated amongst cross functional stakeholders, ranging from Marketing to Data. Matt brings a level of connection, heart, and wit that will make any team greater and I look forward to seeing what he does next!',
    },
    {
      author: 'Samer Hobeika',
      relationship: 'Manager',
      role: 'Software Engineering Manager',
      text: 'It was a pleasure to work with and mentor Matt during my time as Engineering Manager. He consistently tackled complex engineering challenges head-on and showed significant growth in his problem-solving approach. His versatility across different parts of our codebase, from WordPress to React and Next.js, was impressive, and his dedication to improving our documentation made a lasting impact on the team. We used to call him SuperMatt!<br/><br/>On a personal level, I really valued my 1:1s with Matt. Our conversations were always engaging, and we both came away from each meeting having learned something new about each other. Matt\'s technical skills, combined with his openness to feedback and strong interpersonal connection, make him a fantastic asset to any team.',
    },
    {
      author: 'Aaron Taylor',
      relationship: 'Manager',
      role: 'Software Engineering Manager',
      text: "Matt is a wonderful coworker and skilled software engineer. I had the honor to be his manager, during which time he led a multidisciplinary team to launch a headless blog. Matt is just one of the people who makes the job of everyone he works with easier and more fun. He always stood out for his communication, curiosity, and conscientiousness (accidental alliteration). He's not your typical software engineer; he's one of those people who would do great in any role."},
    {
      author: 'Miguel Useche',
      relationship: 'Coworker',
      role: 'Senior Staff Engineer',
      text: "I enjoyed working with Matt on a large headless WordPress project, for which he was the primary leader. His expertise in frontend development, particularly with React, Next.js, and backend and frontend WordPress, is outstanding. Matt led the team confidently and generously shared his knowledge, elevating the skill set of everyone around him. His research skills are top-notch, and he's always well-prepared and informed. Beyond his technical abilities, Matt is incredibly polite, educated, and an absolute pleasure to work with. He's a true asset to any company.",
    },
    {
      author: 'Ryan Stanley',
      relationship: 'Coworker',
      role: 'SEO & Content Marketing Strategist',
      text: "Matt is undoubtedly one of the best engineers I've ever had the pleasure of working with... Matt is an exceptional collaborator, regardless of discipline or function on a team. I was particularly impressed by Matt's ability to experiment and adapt on the fly during design jams. His documentation skills are second to none, enabling our content team to quickly learn and apply new features efficiently. He excels at prioritizing effectively, expertly managing multiple company priorities simultaneously... Lastly, he's unafraid to ask the critical \"why\" questions that challenge the status quo, and he consistently offers well-thought-out, insightful recommendations.",
    },
    {
      author: 'Mandana Rafat',
      relationship: 'Manager',
      role: 'Director of Organic Growth & Retention',
      text: "I've had the pleasure of working closely with Matt at Skillshare, where he has consistently demonstrated not only his technical prowess but also his exceptional ability to bridge the gap between technical and non-technical stakeholders. Matt has a unique talent for breaking down complex technical concepts into digestible insights, making collaboration with cross-functional teams seamless. What truly sets Matt apart is his proactive approach and dedication. He goes above and beyond, consistently delivering work of the highest quality. His problem-solving skills are top-notch, and he has a knack for identifying the most effective solutions that align with our objectives. Matt really excels at any role that requires technical expertise, collaboration, and a commitment to excellence.",
    },
    {
      author: 'Zach Bridges',
      relationship: 'Coworker',
      role: 'Senior Software Engineer',
      text: "Matt Tompkins was one of my favorite peers while we worked together at Skillshare. My favorite feature of Matt is that he is a full-time student, always learning new things and digging deeper where he feels there's room for improvement. In practice, Matt works with the high bar of a professional, always seeking feedback and refusing to ship anything doesn't meet his high expectations. Matt\'s reputation with me is that \"good enough\" will not cut it with him.",
    },
    {
      author: 'Mark C.',
      relationship: 'Manager',
      role: 'Vice President Digital & Web at Soliant',
      text: "It's great working with Matt. He's a fast and organized developer. He's built me many WordPress sites from the ground up now and I plan on sending him as much as I can!  He's an excellent person to work with. Look no further, this is your guy if you need a WP/PHP developer.",
    },
    {
      author: 'Mindy P.',
      relationship: 'Client',
      text: "Matt is a rare talent. He is professional, accessible, prompt, and absolutely gifted at his craft. But he's also so much more. His every interaction and fulfillment went beyond money and beyond pride in his workmanship, he was fully committed to the success of the project and it came through in every aspect, including the final product. Many freelancers may submit proposals for a job, but you'll be fortunate if you choose to have him on your team.",
    },
    {
      author: 'Farah A.',
      relationship: 'Client',
      role: 'Graphic Designer, Blind Renaissance',
      text: 'Matt was incredible. His communication with us, his work and explanations of what he is doing, everything he completed for us was absolutely fantastic. I would 100% recommend Matt. Really pleasant to work with, work was always completed on time or even before, and he exceeded my expectations! 🙂 Absolutely fantastic work and great guy. We will definitely use Matt again for any of our web developer needs and again, I highly recommend him!',
    },
    {
      author: 'David D.',
      relationship: 'Client',
      role: 'Project Manager, Cubeworks',
      text: "Matt was great to work with and did an exceptional job building our website, which wasn't a simple design. I would recommend Matt highly based on his skills as a WordPress developer and how well he worked with us to pull all the elements together. Matt will be at the top of my list for my next web project!",
    },
    {
      author: 'Nate M.',
      relationship: 'Client',
      text: 'Matt was FANTASTIC! Very fast to complete the work, respond to emails, and the quality was amazing. I would look no further and hire him again in a heartbeat. Great customer service and I could tell he truly cared about my project and the end result. Thanks again Matt!',
    },
    {
      author: 'Marianna R.',
      relationship: 'Client',
      text: "Matt was great. He set out a great plan from the beginning and executed it perfectly. He was extremely responsive and finished the site before I could provide him copy. He also sent me a tutorial on how to edit the site myself. I'd give him 10 stars if I could. Consider this my highest recommendation.",
    },
  ];

  const testimonials = testimonialData.map((cur, ind) => (
    <Testimonial color="text-green" key={ind} testimonial={cur} />
  ));

  return (
    <div
      id="testimonials"
      className={`bg-black ${styleDefaults.sectionPadding}`}
    >
      <Grid>
        <div className="col-start-3 col-span-8">
          <CarouselSlider els={testimonials} uiColor="green" />
        </div>
      </Grid>
    </div>
  );
};

export default HomeTestimonialSlider;
