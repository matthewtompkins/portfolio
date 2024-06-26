declare namespace MT {
  export type ThemeColors = 'green' | 'black' | 'white';

  export enum TextColorClasses {
    green = 'text-green',
    black = 'text-black',
    white = 'text-white',
  }

  export enum BackgroundColorClasses {
    green = 'bg-green',
    black = 'bg-black',
    white = 'bg-white',
  }

  export interface HeadingProps {
    color: ThemeColors;
    level: 'h1' | 'h2' | 'h3' | 'h4';
    text: string;
  }

  export interface ParagraphProps {
    color: ThemeColors;
    text: string;
  }
}
