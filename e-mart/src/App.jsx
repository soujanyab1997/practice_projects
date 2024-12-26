import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./stores/pages/LandingPage";
import MobilePage from "./stores/pages/MobilePage";
import ComputersPage from "./stores/pages/ComputersPage";
import MobileSingle from "./singles/MobileSingle";
import UserCart from "./UserCart";
import ComputerSingle from "./singles/ComputerSingle";
import SignUp from "./stores/components/SignUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/computers" element={<ComputersPage />} />

        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
