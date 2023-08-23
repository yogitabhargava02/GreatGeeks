import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Home/Main";
import PressAndNews from "./Components/PressAndNews/PressAndNews";
import ProgrammingAndTech from "./Components/Services/ProgrammingAndTech/ProgrammingAndTech";
import BusinessConsultation from "./Components/Services/BusinessConsultation/BusinessConsultation";
import Marketing from "./Components/Services/Marketing/Marketing";
import GraphicDesign from "./Components/Services/GraphicDesign/GraphicDesign";
import ContentWriting from "./Components/Services/ContentWriting/ContentWriting";
import LogoAndVisual from "./Components/LogoAndVisual.js/LogoAndVisual";
import Eblogs from "./Components/eblogs/Eblogs";
import Ebooks from "./Components/ebooks/Ebooks";
import Partnership from "./Components/Partnership/Partnership";
import EbookDescription from "./Components/ebooks/EbookDescription";
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
          <Route path="/LogoAndVisual" element={<LogoAndVisual />} />
          <Route path="/eblogs" element={<Eblogs />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/ebook/:id" element={<EbookDescription/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
