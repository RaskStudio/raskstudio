import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import RibeBryghus from "./components/pages/RibeBryhus.jsx";
import Empty from "./components/pages/Empty.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ribebryghus" element={<RibeBryghus />} />
        <Route path="/empty" element={<Empty />} />
      </Routes>
    </div>
  );
}

export default App;
