const sizeClasses = {
  h1: 'text-xlMobile md:text-xl',
  h2: 'text-lgMobile md:text-lg',
  h3: 'text-md',
  h4: 'text-[2rem]',
};

const Heading: React.FC<MT.HeadingProps> = ({
  color,
  fontStyle = 'font-serif',
  html = false,
  level,
  style = '',
  text,
}): JSX.Element => {
  const Tag = level;
  const styles = `${color} ${sizeClasses[level]} ${fontStyle} ${style}`;
  return (
    <>
      {html ? (
        <Tag
          className={`${styles}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : (
        <Tag className={`${styles}`}>{text}</Tag>
      )}
    </>
  );
};

export default Heading;
