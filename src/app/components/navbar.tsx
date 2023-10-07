const Title = ({ text, className }: { text: String; className?: String }) => (
  <p className={`font-semibold text-lg text-secondary ${className} px-4`}>
    {text}
  </p>
);

function Navbar() {
  return (
    <div
      className="
          sticky bottom-0
          z-10 h-16 w-full flex justify-evenly bg-primary items-center border-t-2 border-secondary
          
        "
    >
      <Title text="Nel Sokchhunly" />
      <div className="border-l-2 border-secondary h-full hidden md:block" />
      <Title text="Photography Blog" className="hidden md:block" />
    </div>
  );
}

export default Navbar;
