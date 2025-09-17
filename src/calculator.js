import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./calculator.css"; 
export default function Calculator() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
  try {
    setInput(evaluate(input).toString());
  } catch (error) {
    setInput("Error");
  }
};
  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      <input type="text" value={input} className="calculator-input" readOnly />

      <div className="button-grid">
        {/* Row 1 */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>÷</button>
        {/* Row 2 */}
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>x</button>
        {/* Row 3 */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>−</button>
        {/* Row 4 */}
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        {/* Row 5 */}
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
