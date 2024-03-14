import "./App.css";
import DenseAppBar from "./DenseAppBar";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Home from "./comp/Home";
import Contact from "./comp/Contact";
import Menu from "./comp/Menu";
import About from "./comp/About";
function App() {
  return (
    <>
      <DenseAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
