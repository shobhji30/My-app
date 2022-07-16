import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const colorChange = () => {
    let colour = document.getElementById("colorpicker").value;
    document.body.style.backgroundColor = colour ;

  };

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
    
  }

  const[mode,setMode]=useState('light')

  return (
    <>
    <Router>
    <Navbar title="TextUtils" colorChange={colorChange} mode={mode} togglemode={toggleMode} />
    <div className="container my-3">
      {/* <TextForm mode={mode}/> */}
      <Routes>
      <Route path='/' element={<TextForm mode={mode} />} />
      <Route path="about/*" element={<About />} />
      </Routes>
      {/* <About/> */}
    </div>
    </Router>
    </>
    
  );
}

export default App;
