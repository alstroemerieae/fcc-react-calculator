import './App.css';
import { useState } from 'react';

function App() {
  const [currentInput, setCurrentInput] = useState([])
  const [operationResult, setOperationResult] = useState([])

  // Save the values from the inputs
  const numberInput = (e) => {
    const buttonValue = e.target.innerText;
    const firstItem = currentInput[0];
    console.log(typeof buttonValue)
    console.log(buttonValue)
    console.log(typeof firstItem)
    console.log(firstItem)
    if (buttonValue === '0' && firstItem === '0') {
      console.log("More than one 0")
    } else {
      setCurrentInput([...currentInput, buttonValue]);
    }
    
  }
  console.log("Current input")
  console.log(currentInput);
  console.log("Current result")
  console.log(operationResult)

  // Display the current input(?)
  // const displayInput = () => {
  //   const display = 
  // }

  // Calculate the operation on the input(?)
  const calculateInput = () => {
    let inputArrayToString = currentInput.join('').toString();
    setOperationResult([eval(inputArrayToString)]);
    setCurrentInput([eval(inputArrayToString)]);
  }

  // Clear the inputs(?) and the display
  const clearInput = () => {
    setCurrentInput([]);
    setOperationResult([]);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="calculator-display">
          {
            currentInput.length === 0 ? 0 : currentInput
          }
        </div>
        <div className="calculator-buttons">
          {/* Numbers */}
          <button id="zero"     className="calculator-button" onClick={(e) => numberInput(e)}>0</button>
          <button id="one"      className="calculator-button" onClick={(e) => numberInput(e)}>1</button>
          <button id="two"      className="calculator-button" onClick={(e) => numberInput(e)}>2</button>
          <button id="three"    className="calculator-button" onClick={(e) => numberInput(e)}>3</button>
          <button id="four"     className="calculator-button" onClick={(e) => numberInput(e)}>4</button>
          <button id="five"     className="calculator-button" onClick={(e) => numberInput(e)}>5</button>
          <button id="six"      className="calculator-button" onClick={(e) => numberInput(e)}>6</button>
          <button id="seven"    className="calculator-button" onClick={(e) => numberInput(e)}>7</button>
          <button id="eight"    className="calculator-button" onClick={(e) => numberInput(e)}>8</button>
          <button id="nine"     className="calculator-button" onClick={(e) => numberInput(e)}>9</button>
          {/* Operations */}
          <button id="equals"   className="calculator-button" onClick={calculateInput}>=</button>
          <button id="add"      className="calculator-button" onClick={(e) => numberInput(e)}>+</button>
          <button id="subtract" className="calculator-button" onClick={(e) => numberInput(e)}>-</button>
          <button id="multiply" className="calculator-button" onClick={(e) => numberInput(e)}>*</button>
          <button id="divide"   className="calculator-button" onClick={(e) => numberInput(e)}>/</button>
          <button id="decimal"  className="calculator-button" onClick={(e) => numberInput(e)}>.</button>
          <button id="clear"    className="calculator-button" onClick={clearInput}>Clear</button>
          <button id="delete"   className="calculator-button" onClick={(e) => numberInput(e)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
