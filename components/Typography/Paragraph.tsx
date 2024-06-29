const Paragraph: React.FC<MT.ParagraphProps> = ({ color, text }): JSX.Element => {
  return (
    <p className={`${color} text-base font-sans`}>
      {text}
    </p>
  );
};

export default Paragraph;
