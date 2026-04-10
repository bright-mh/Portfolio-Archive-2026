import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutMusinsaWork from "./pages/AboutMusinsaWork.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-musinsa-work" element={<AboutMusinsaWork />} />
      </Routes>
    </>
  );
}

export default App;
