import useAppContext from "../hooks/useAppContext";
import Button from "./Button";

const DrawnedNumbers = () => {
  const { drawnNumbers, clear } = useAppContext();
  return (
    <div className="flex flex-col items-center m-8">
      <h1 className="my-2 text-xl">Wylosowane Numerki</h1>
      <div className="w-[128px] h-[256px] bg-white my-2 rounded-md shadow-md p-2 flex items-center flex-col overflow-auto">
        {drawnNumbers.map((e) => e > 0 && <p className="text-lg my-1">{e}</p>)}
      </div>
      <Button name="Wyczyść" onClick={() => clear()} />
    </div>
  );
};

export default DrawnedNumbers;
