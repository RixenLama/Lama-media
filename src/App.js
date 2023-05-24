import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";

import { Routes, Route } from "react-router-dom";
import Case from "./page/Case";
import Ps from "./page/ps";
import Offerclone from "./components/Offersclone";

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case" element={<Case />} />
        <Route path="/ps" element={<Ps />} />
        <Route path="/offer" element={<Offerclone />} />

      </Routes>

     
    </>
  );
}

export default App;
