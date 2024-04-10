const Section = ({ children, className }) => {
  return (
    <div
      className={` m-auto border border-red-500 max-w-[68rem] px-3 flex flex-col justify-center  ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
