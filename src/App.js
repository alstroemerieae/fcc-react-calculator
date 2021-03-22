import './App.css';
import { useState } from 'react';

function App() {
  // States
  const [currentInput, setCurrentInput] = useState([]);
  const [decimalCounter, setDecimalCounter] = useState(0);

  // This function should save the values from the inputs
  const numberInput = (e) => {
    const buttonValue = e.target.innerText;
    const firstItem = currentInput[0];
    const lastItem = currentInput[currentInput.length - 1];

    // Check for multiple zeroes input
    // Should disable an input like "0000"
    if (buttonValue === '0' && firstItem === '0') {
      console.log("More than one 0");
    } 
    // Check for multiple decimals input
    // Should disable an input like "5..5"
    else if (buttonValue === '.' && lastItem === '.') {
      console.log("More than one consecutive decimal");
    }
    // Check for a decimal input
    // An input like "5.5" should add 1 to the decimalCounter
    else if (buttonValue === '.' && decimalCounter === 0) {
      setDecimalCounter(decimalCounter + 1);
      setCurrentInput([...currentInput, buttonValue]);
      console.log("A decimal was inputted");
    }
    // Check for more than one decimal in the same number
    // An input like "5.5.5" shouldn't be able to be passed, instead "5.55" would be passed
    else if (buttonValue === '.' && decimalCounter === 1) {
      console.log("More than one decimal in the same number");
    }
    // Check for operators input
    // Reset decimal counter to 0 after clicking a operator button
    else if (buttonValue === '+' || buttonValue ===  '-' || buttonValue === '*' || buttonValue ===  '/') {
      console.log("Operator clicked");
      console.log("Reset decimal counter");
      setDecimalCounter(0);
      setCurrentInput([...currentInput, buttonValue]);
    }
    // This should execute if only numbers are passed
    else {
      setCurrentInput([...currentInput, buttonValue]);
      console.log("Passing a number");
    }
    
  }

  // This function returns the calculation of a filtered string without the consecutive characters,
  // ignoring the subtract character if it is last,
  // which is then passed to setCurrentInput as an argument.
  // 
  // For example, if the value of currentInput array is ['5','*','-','+','5',]
  // It would be converted to a string like => "5 * - + 5"
  // After that it would be filtered by the regex as an array like => ["5","+5"]
  // Then it would be converted with the join() method into an string like => "5+5"
  // After that it would be evaluated by the eval() function, which should return the value of the calculation => "5+5" = 10
  // Finally, this value would be passed to setCurrentInput as an argument.
  const calculateInput = () => {
    let currentInputToString = currentInput.join('').toString();
    const regex = /(\*|\+|\/|-)?(\.|\-)?\d+/g;
    const filteredInput = eval(currentInputToString.match(regex).join(''));
    setCurrentInput([filteredInput]);
  }

  // This function should clear the current input and the decimal counter
  const clearInput = () => {
    setCurrentInput([]);
    setDecimalCounter(0);
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
