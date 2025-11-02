import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllTechnologies from "./components/AllTechnologies";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-technologies" element={<AllTechnologies/>} />
    </Routes>
  );
};

export default App;
