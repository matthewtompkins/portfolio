const Grid: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <div className={`mx-12 md:grid gap-8 grid-cols-12 max-w-theme md:mx-auto`}>
      {children}
    </div>
  );
};

export default Grid;
