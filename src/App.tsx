// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header02 from './components/Header02';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact02 from './Pages/Contact02';
import SQL01 from './Pages/CourseDetails/SQL01';
import SQL02 from './Pages/CourseDetails/SQL02';  
// ✅ เพิ่ม SQL02

import './App.css';
import DE01 from './Pages/CourseDetails/DE01';
import DE02 from './Pages/CourseDetails/DE02';
import DA02 from './Pages/CourseDetails/DA02';
import DA01 from './Pages/CourseDetails/DA01';
import DS01 from './Pages/CourseDetails/DS01';
import FED01 from './Pages/CourseDetails/FED01';
import BED01 from './Pages/CourseDetails/BED01';
import FSD01 from './Pages/CourseDetails/FSD01';
import SD01 from './Pages/CourseDetails/SD01';
import SE01 from './Pages/CourseDetails/SE01';
import SYE01 from './Pages/CourseDetails/SYE01';
import CE01 from './Pages/CourseDetails/CE01';
import PY01 from './Pages/CourseDetails/PY01';

function App() {
  return (
    <Router>
      <Header02 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact02" element={<Contact02 />} />
        {/* Detail each Course */}
        {/* SQL */}
        <Route path="/course/sql-01" element={<SQL01 />} /> 
        <Route path="/course/sql-02" element={<SQL02 />} />
        {/* DE */} 
        <Route path="/course/de-01" element={<DE01 />} /> 
        <Route path="/course/de-02" element={<DE02 />} />
        {/* DA */} 
        <Route path="/course/da-01" element={<DA01 />} /> 
        <Route path="/course/da-02" element={<DA02 />} />  
        {/* DS */} 
        <Route path="/course/ds-01" element={<DS01 />} />
        {/* FED */} 
        <Route path="/course/fed-01" element={<FED01 />} /> 
        {/* BED */} 
        <Route path="/course/bed-01" element={<BED01 />} />
        {/* FSD */} 
        <Route path="/course/fsd-01" element={<FSD01 />} /> 
        {/* SD */} 
        <Route path="/course/sd-01" element={<SD01 />} /> 
        {/* SE */} 
        <Route path="/course/se-01" element={<SE01 />} />
        {/* SYE */} 
        <Route path="/course/sye-01" element={<SYE01 />} />
        {/* CE */} 
        <Route path="/course/ce-01" element={<CE01 />} />
        {/* PY */} 
        <Route path="/course/py-01" element={<PY01 />} />
        {/* ✅ เพิ่ม */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
