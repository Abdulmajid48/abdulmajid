import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";

function App() {
  return (
    <div className="w-dvw min-h-dvh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
