import React from "react";
import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";
import Reels from "./pages/Reels";
import Home from "./pages/Home";
import Project from "./pages/Project";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;