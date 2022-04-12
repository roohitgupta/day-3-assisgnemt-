import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Component/button'

function App() {

  const Value = 10

  const [counter, setCounter] = useState(Value)
  

  const HandleChange = (Value)=>{
    //condition
    setCounter(counter + Value)
  };

  const DoubleValue = ()=>{
   setCounter(counter * 2)
  }
  
  const Reset = ()=>{
    setCounter(Value)
  }

 


  return (
    <div className="App">
   
    <h3 className={counter%2===0?"red":"blue"}>counter : {counter}</h3>
    <Button onClick={()=>{HandleChange(-1)}} value="Subtract" />
    <Button onClick={()=>{HandleChange(1)}} value="Adding" />
    {/* <button onClick={()=>{HandleChange(-1)}}>Sub</button>
    <button onClick={()=>{HandleChange(1)}}>Add</button> */}
    <button onClick={()=>{DoubleValue()}}>Double</button>
    <button onClick={()=>{Reset()}}>Reset</button>



    </div>
  );
}

export default App;
