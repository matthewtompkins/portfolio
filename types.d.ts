declare namespace MT {
  export type ThemeColors = 'green' | 'black' | 'white';

  export type BackgroundColorClasses = 'bg-green' | 'bg-black' | 'bg-white';

  export type TextColorClasses = 'text-green' | 'text-black' | 'text-white';

  export interface HeadingProps {
    color: TextColorClasses;
    level: 'h1' | 'h2' | 'h3' | 'h4';
    text: string;
  }

  export interface ParagraphProps {
    color: TextColorClasses;
    text: string;
  }

  export interface ImageProps {
    src: string;
    alt: string;
    position?: 'left' | 'right';
  }

  export interface TestimonialProps {
    author: string;
    role: string;
    text: string;
  }
}
