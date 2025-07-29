
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import { abouts } from "./assets/mockdata";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About data={abouts}/>}/>
  </Routes>
  
  );
}

export default App;
