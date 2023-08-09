import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Components/Home/Main";
import PressAndNews from "./Components/PressAndNews/PressAndNews";
import ProgrammingAndTech from "./Components/Services/ProgrammingAndTech/ProgrammingAndTech";
import BusinessConsultation from "./Components/Services/BusinessConsultation/BusinessConsultation";
import Marketing from "./Components/Services/Marketing/Marketing";
import GraphicDesign from "./Components/Services/GraphicDesign/GraphicDesign";
import ContentWriting from "./Components/Services/ContentWriting/ContentWriting";
function App() {
  return (
    <>
        
    
    <Router>
      <div className="App">
    
     
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/news" element={<PressAndNews />} />
          <Route path="/programmingAndTech" element={<ProgrammingAndTech />} />
          <Route path="/services/businessConsultation" element={<BusinessConsultation />} />
          <Route path="/services/contentWriting" element={<ContentWriting />} />
          <Route path="/services/graphicDesign" element={<GraphicDesign />} />
          <Route path="/services/marketing" element={<Marketing />} />
          
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
