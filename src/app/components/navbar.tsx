const Title = ({ text, className }: { text: String; className?: String }) => (
  <p className={`font-semibold text-lg text-secondary ${className} px-4`}>
    {text}
  </p>
);

function Navbar() {
  return (
    <div
      className="
          z-10 h-16 w-full flex justify-evenly bg-primary items-center border-t-2 border-secondary   
        "
    >
      <Title text="Photography Blog by Chhunnnnlyyyy" className="text-center" />
    </div>
  );
}

export default Navbar;
