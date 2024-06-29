const sizeClasses = {
    h1: 'text-xl',
    h2: 'text-lg',
    h3: 'text-md',
    h4: 'text-sm',
};

const Heading: React.FC<MT.HeadingProps> = ({color, level, text}): JSX.Element => {
    const Tag = level;
    return <Tag className={`${color} ${sizeClasses[level]} font-serif`}>{text}</Tag>;
};

export default Heading;