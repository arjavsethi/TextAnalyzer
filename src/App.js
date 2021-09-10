// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


function App() {

  const [mode,setMode]= useState("light");


const  toggleMode = ()=>{
          if(mode==="light"){
            setMode("dark")
            document.body.style.backgroundColor ="#042743";
          }else{
            setMode("light")
            document.body.style.backgroundColor ="white";
  }

}

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Textform heading='Enter text to analyze below' mode={mode}/>
  
    </>
  );
}

export default App;
