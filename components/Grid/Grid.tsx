const Grid: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <div className={`grid gap-8 grid-cols-12 max-w-theme mx-auto`}>
      {children}
    </div>
  );
};

export default Grid;
