import {useState} from "react";
import './App.css';

function App() {
  const[value,setValue]=useState("");
  
  function changeValue(){
    const value=document.getElementById("input").value;
    setValue(value);
    localStorage.setItem("input", value);
  }
  
  return (
    <div className="App">
    <input id="input" placeholder="Enter your Input" onChange={changeValue} value={localStorage.getItem("input")}/>
    <h1>{localStorage.getItem("input")}</h1>      
    </div>
  );
}

export default App;
