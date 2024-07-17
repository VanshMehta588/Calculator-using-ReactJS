import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import './App.css';

// class App extends React.Component {
//   render(){
//   return <h1>Hello, World!</h1>
// }
// }

// class App extends React.Component {
//   render(){
//     const name = 'Vansh Mehta';
//     return <h1>{`Good Evening, ${name}`}</h1>
// }
// }

// class App extends React.Component {
//   handleClick = () => {
//     console.log('Hello, World!');
//   }  
//     render(){
//       return <button onClick={this.handleClick}>Click Me</button>
//     }
// }

  function App() {
    const [input, setInput] = useState("");
    const handleClick = (value) =>{
      setInput(input + value);
    };
    const handleClear = () =>{
      setInput("");
      };
    const handleDelete = () =>{
      setInput(input.slice(0, -1));
      };
    const handleEqual = () =>{
      try{
        setInput(eval(input));
        }catch(err){
          setInput("Invalid Input");
          }
    }    

    return (
    <div className="calculator">
    <div className="display">
      {input}
    </div>
    <div className="buttons">
      <button onClick={handleClear}>
        AC
      </button>
     
      <button onClick={handleDelete}>
        DEL
      </button>
      <button onClick={() => handleClick("/")}>
        /
      </button>
      <button onClick={() => handleClick("*")}>
        *
      </button>
      <button onClick={() => handleClick("-")}>
        -
      </button>
      <button onClick={() => handleClick("7")}>
        7
      </button>
      <button onClick={() => handleClick("8")}>
        8
      </button>
      <button  onClick={() => handleClick("9")}>
        9
      </button>
      <button onClick={() => handleClick("+")}>
        +
      </button>
      <button onClick={() => handleClick("4")}>
        4
      </button>
      <button  onClick={() => handleClick("5")}>
        5
      </button>
      <button onClick={() => handleClick("6")}>
        6
      </button>
      <button onClick={handleEqual}>
        =
      </button>
      <button onClick={() => handleClick("1")}>
        1
      </button>
      <button onClick={() => handleClick("2")}>
        2
      </button>
      <button  onClick={() => handleClick("3")}>
        3
      </button>
      <button  onClick={() => handleClick("0")}>
        0
      </button>
      <button onClick={() => handleClick("00")}>
        00
      </button>
      <button onClick={() => handleClick(".")}>
        .
      </button>
      <button onClick={handleClear}>
        C
      </button>
    </div>
  </div>
    )
  }

  





export default App;
