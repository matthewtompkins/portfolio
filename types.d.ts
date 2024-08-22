declare namespace MT {
  export type ThemeColors = 'green' | 'black' | 'white';

  export type BackgroundColorClasses = 'bg-green' | 'bg-black' | 'bg-white';

  export type TextColorClasses = 'text-green' | 'text-black' | 'text-white';

  export interface HeadingProps {
    color: TextColorClasses;
    fontStyle?: 'font-serif' | 'font-sans';
    html?: boolean;
    level: 'h1' | 'h2' | 'h3' | 'h4';
    style?: string;
    text: string;
  }

  export interface ParagraphProps {
    color: TextColorClasses;
    html?: boolean;
    text: string;
  }

  export interface ImageProps {
    src: string;
    alt: string;
    position?: 'left' | 'right';
    caption?: {
      text: string;
      color: TextColorClasses;
    };
  }

  export interface TestimonialProps {
    author: string;
    relationship: string;
    role?: string;
    text: string;
  }

  export interface CallbackProps {
    callback: () => void;
  }
}
