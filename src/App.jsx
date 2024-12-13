import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import MoreInfo from "./pages/MoreInfo";
import GoogleMap from "./pages/GoogleMap";
import "./assets/styles/Footer.scss";
import "./assets/styles/Header.scss";
import "./assets/styles/Home.scss";
import "./assets/styles/GoogleMap.scss";
import "./assets/styles/MoreInfo.scss";
import "./assets/styles/Sc2Part.scss";
import "./assets/styles/Sc4Part.scss";
import "./assets/styles/Sc6Part.scss";
import "./assets/styles/Sc8Part.scss";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoreInfo" element={<MoreInfo />} />
        <Route path="/GoogleMap" element={<GoogleMap />} />
      </Routes>
    </div>
  );
}

export default App;
