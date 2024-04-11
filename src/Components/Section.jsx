const Section = ({ children, className }) => {
  return (
    <div
      className={` m-auto  max-w-[75rem]  px-[1.25rem]  flex flex-col justify-center  ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
