import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path="/drawing-numbers" element={<Home />} />
          <Route path="/drawing-numbers/admin" element={<Admin />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
