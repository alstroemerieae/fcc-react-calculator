import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="calculator-display">
          0
        </div>
        <div className="calculator-buttons">
          <button id="zero" className="calculator-button">0</button>
          <button id="one" className="calculator-button">1</button>
          <button id="two" className="calculator-button">2</button>
          <button id="three" className="calculator-button">3</button>
          <button id="four" className="calculator-button">4</button>
          <button id="five" className="calculator-button">5</button>
          <button id="six" className="calculator-button">6</button>
          <button id="seven" className="calculator-button">7</button>
          <button id="eight" className="calculator-button">8</button>
          <button id="nine" className="calculator-button">9</button>
          <button id="equals" className="calculator-button">=</button>
          <button id="add" className="calculator-button">+</button>
          <button id="subtract" className="calculator-button">-</button>
          <button id="multiply" className="calculator-button">*</button>
          <button id="divide" className="calculator-button">/</button>
          <button id="decimal" className="calculator-button">.</button>
          <button id="clear" className="calculator-button">Clear</button>
          <button id="delete" className="calculator-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
