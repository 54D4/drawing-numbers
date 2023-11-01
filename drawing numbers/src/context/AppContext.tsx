import { ReactNode, createContext, useState } from "react";

type appContextType = {
  setRange: React.Dispatch<React.SetStateAction<number>>;
  darwNumber: () => void;
  newNumber: number;
  drawnNumbers: Array<number>;
  clear: () => void;
};

export const AppContext = createContext({} as appContextType);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [range, setRange] = useState(0);
  const [newNumber, setNewNumber] = useState(0);
  const [drawnNumbers, setDrawnNumbers] = useState([0]);

  const darwNumber = () => {
    let number = 0;
    number = Math.floor(Math.random() * range + 1);
    if (drawnNumbers.includes(number) === false) {
      setNewNumber(number);
      setDrawnNumbers([...drawnNumbers, number]);
    } else {
      drawnNumbers.length < range + 1 && darwNumber();
    }
  };
  const clear = () => {
    setDrawnNumbers([0]);
    setNewNumber(0);
  };
  return (
    <AppContext.Provider
      value={{ setRange, darwNumber, newNumber, drawnNumbers, clear }}
    >
      {children}
    </AppContext.Provider>
  );
};
