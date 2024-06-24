import Link from 'next/link';

interface ButtonProps {
  onClick?: () => void;
  theme: 'outline' | 'solid';
  title: string;
  url?: string;
}

const themes = {
  outline: 'border-2 border-green text-green hover:bg-green hover:text-black active:bg-green active:text-black focus:bg-green focus:text-black',
  solid: 'bg-green text-black',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  theme,
  title,
  url,
}): JSX.Element => {
  const btnClass = `py-3 px-12 rounded-lg font-serif text-base lowercase ${themes[theme]}`;
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
