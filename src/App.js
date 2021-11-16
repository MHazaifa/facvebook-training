
import "./App.css";
import Home from "./components/Home.js"

function App() {

  
  // const handleNameChange=(any)=>{
  //   setName(any);
  // }
    const dynamicstyles={
      color: 'red',
      backgroundColor: 'yellow'
    }

    const dynamicstyles1={
      color: 'black',
      backgroundColor: 'red'
    }

    const stylecondition = true;

    // const str = 'Hello World'
    const num = 2 + 4
    const obj = { name : "hazaifa", age : 50,}
    const arr = ['hamid' , 'waqas' , 'hassan ' , 33 , 20 ]
    
  
 
  if(stylecondition) {
    return (
    <>

      
    <div className="App">
     
      <h1>obj</h1>
      <p>{obj.age}</p>
      {/* <p style ={{color : 'red', backgroundColor : 'yellow'}}>{obj.name} {obj.age}</p> */}
      <p style ={stylecondition ? dynamicstyles1 : dynamicstyles}> This is my conditional rendring</p>
      <h1>hello</h1>
      <Home num1={num} arr1={arr}/>
    </div>
    </>
  );
}
else{
  return(
    <>
    <h1> 2nd statment</h1>
    </>
  )
}
}
export default App;
