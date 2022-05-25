import React, {useEffect,useState} from 'react'
import './App.css';

function App() {
 const [count, seTcount] = useState(0)

  console.log(1)

  useEffect(()=>{
    console.log("Inside 1")
  });

  console.log("3")
  return (
    <div className="App">
       <h1>Hello : {count}</h1>
    </div>
  );
}

export default App;
