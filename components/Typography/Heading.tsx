const sizeClasses = {
    h1: 'text-xl',
    h2: 'text-lg',
    h3: 'text-md',
    h4: 'text-[2rem]',
};

const Heading: React.FC<MT.HeadingProps> = ({color, level, style = 'font-serif', text}): JSX.Element => {
    const Tag = level;
    return <Tag className={`${color} ${sizeClasses[level]} ${style}`}>{text}</Tag>;
};

export default Heading;