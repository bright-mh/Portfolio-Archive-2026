import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
