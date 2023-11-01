import DrawnedNumbers from "../components/DrawnedNumbers";
import MianBackground from "../components/MianBackground";

const Home = () => {
  return (
    <div className="flex w-full h-[100vh] overflow-hidden justify-center items-center">
      <DrawnedNumbers />
      <MianBackground />
    </div>
  );
};

export default Home;
