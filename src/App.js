
import "./App.css";
import  { useState } from 'react';
import Home from "./components/Home.js"

const App=() =>{
  const[Name, setName]= useState("");
  const [Age, setAge]= useState();
  const[userData ,setUserData] = useState();
  
 const Age1 =(newName)=>{
  //  console.log(newName);
  setName(newName);
 }
    return (
      <>
        <div className="App">
          <input type="text" placeholder="Name" value={Name} onChange={(e) =>Age(e.target.value)}></input>
          <Home Age={Age}  Name={Name}  Age={Age} />
        </div>

      </>



    )}




     
export default App;
