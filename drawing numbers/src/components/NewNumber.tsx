import useAppContext from "../hooks/useAppContext";

const NewNumber = () => {
  const { newNumber } = useAppContext();
  return (
    <div className="flex justify-center items-center w-[148px] h-[148px] rounded-md my-5 text-4xl bg-white shadow-md">
      {newNumber}
    </div>
  );
};

export default NewNumber;
