// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./component.jsx/Navigation";
// import Endpoint from "./component.jsx/Endpoint";
import HeroSection from "./MainPage/HeroSection";
import WhoweAre from "./AboutUs/WhoweAre";
// import Contact from "./component.jsx/Contact";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/about/WhoweAre" element={<WhoweAre />} />
        {/* <Route path="/dropdown/option1" element={<Option1 />} />
        <Route path="/dropdown/option2" element={<Option2 />} /> */}
        <Route path="/contact"  />
      </Routes>
    </Router>
  );
};

export default App;
