import {useState} from "react";
import './App.css';

function App() {
  const[value,setValue]=useState("");
  
  function changeValue(){
    const value=document.getElementById("input").value;
    localStorage.setItem("input", value);
    setValue(value);
  }
  
  return (
    <div className="App">
    <input id="input" placeholder="Enter your Input" onChange={changeValue}/>
    <h1>{value}</h1>      
    </div>
  );
}

export default App;
