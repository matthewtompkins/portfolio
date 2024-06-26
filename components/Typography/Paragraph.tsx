const Paragraph: React.FC<MT.ParagraphProps> = ({ color, text }): JSX.Element => {
  return (
    <p className={`${MT.TextColorClasses[color]} text-base font-sans`}>
      {text}
    </p>
  );
};

export default Paragraph;
