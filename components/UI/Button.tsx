import Link from 'next/link';

interface ButtonProps {
  color?: 'green' | 'black';
  onClick?: () => void;
  theme: 'outline' | 'solid';
  title: string;
  url?: string;
}

const themes = {
  outline: {
    green: 'border-2 border-green text-green hover:bg-green hover:text-black active:bg-green active:text-black focus:bg-green focus:text-black',
    black: 'border-2 border-black text-black hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white',
  },
  solid: {
    green: 'border-2 border-green bg-green text-black hover:bg-transparent hover:text-green active:bg-transparent active:text-green focus:bg-transparent focus:text-green',
    black: 'border-2 border-black bg-black text-white hover:bg-transparent hover:text-black active:bg-transparent active:text-black focus:bg-transparent focus:text'
  } 
};

const Button: React.FC<ButtonProps> = ({
  color = 'green',
  onClick,
  theme,
  title,
  url,
}): JSX.Element => {
  const btnClass = `py-3 px-12 rounded-lg font-serif text-sm tracking-wide lowercase ${themes[theme][color]}`;
  if (url) {
    return (
      <Link href={url}>
        <span className={btnClass}>{title}</span>
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={btnClass}>
        {title}
      </button>
    );
  }
};

export default Button;
