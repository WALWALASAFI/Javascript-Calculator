import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Evaluate the expression
        setDisplay(eval(input).toString());
        setInput(eval(input).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      // Clear the display and input
      setDisplay('0');
      setInput('');
    } else {
      // Update the display and input
      setInput(input + value);
      setDisplay(input + value);
    }
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <div id="buttons">
        <button id="clear" onClick={() => handleClick('C')}>C</button>
        <button id="decimal" onClick={() => handleClick('.')}>.</button>
        <button id="zero" onClick={() => handleClick('0')}>0</button>
        <button id="one" onClick={() => handleClick('1')}>1</button>
        <button id="two" onClick={() => handleClick('2')}>2</button>
        <button id="three" onClick={() => handleClick('3')}>3</button>
        <button id="four" onClick={() => handleClick('4')}>4</button>
        <button id="five" onClick={() => handleClick('5')}>5</button>
        <button id="six" onClick={() => handleClick('6')}>6</button>
        <button id="seven" onClick={() => handleClick('7')}>7</button>
        <button id="eight" onClick={() => handleClick('8')}>8</button>
        <button id="nine" onClick={() => handleClick('9')}>9</button>
        <button id="add" onClick={() => handleClick('+')}>+</button>
        <button id="subtract" onClick={() => handleClick('-')}>-</button>
        <button id="multiply" onClick={() => handleClick('*')}>*</button>
        <button id="divide" onClick={() => handleClick('/')}>/</button>
        <button id="equals" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
