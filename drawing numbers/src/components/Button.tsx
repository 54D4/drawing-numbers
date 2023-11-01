const Button = ({ name, onClick }: { name: string; onClick: () => void }) => {
  return (
    <button
      className="text-2xl my-5 px-8 py-1 bg-[#7D73F3] rounded-md shadow-md"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};

export default Button;
