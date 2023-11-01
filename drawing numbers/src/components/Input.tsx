import useAppContext from "../hooks/useAppContext";

const Input = () => {
  const { setRange } = useAppContext();
  return (
    <input
      className=" text-center text-2xl w-[364px] px-3 py-1 rounded-md shadow-lg my-5"
      onChange={(e) => {
        setRange(parseInt(e.target.value));
      }}
      required
    />
  );
};

export default Input;
