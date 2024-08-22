const Paragraph: React.FC<MT.ParagraphProps> = ({
  color,
  html = false,
  style = '',
  text,
}): JSX.Element => {
  const styles = `${color} text-base font-sans ${style ? style : ''}`;
  return (
    <>
      {html ? (
        <p className={`${styles}`} dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p className={`${styles}`}>{text}</p>
      )}
    </>
  );
};

export default Paragraph;
