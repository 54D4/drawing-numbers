import useAppContext from "../hooks/useAppContext";
import Button from "./Button";
import Input from "./Input";
import NewNumber from "./NewNumber";

const MianBackground = () => {
  const { darwNumber } = useAppContext();
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="my-5 font-bold text-5xl">Wybierz ilość numerków </h1>
      <Input />
      <Button
        onClick={() => {
          darwNumber();
        }}
        name="Losuj"
      />
      <h2 className="my-5  text-3xl">Wylosowany Numerek</h2>
      <NewNumber />
    </div>
  );
};

export default MianBackground;
