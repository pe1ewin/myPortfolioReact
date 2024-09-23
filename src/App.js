import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BreadCatProject from "./BreadCat";
import NinjaProject from "./Ninja";
function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="breadcat" element={<BreadCatProject/>}/>
              <Route path="ninja_python" element={<NinjaProject/>}/>
            </Routes>
          </Router>
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
