declare namespace MT {
  export type ThemeColors = 'green' | 'black' | 'white';

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
