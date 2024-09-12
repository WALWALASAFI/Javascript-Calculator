import { useDispatch } from 'react-redux'; // Import useDispatch from 'react-redux'
import { performOperation, clearDisplay, updateDisplay } from './actions'; // Import actions from your actions file

const Calculator = () => {
  const dispatch = useDispatch(); // Use dispatch from Redux

  const handleButtonClick = (value) => {
    if (value === '=') {
      dispatch(performOperation());
    } else if (value === 'C') {
      dispatch(clearDisplay());
    } else if (['+', '-', '*', '/'].includes(value)) {
      dispatch(updateDisplay(value));
    } else {
      dispatch(updateDisplay(value));
    }
  };

  return (
    <div>
      {/* Example buttons */}
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <button onClick={() => handleButtonClick('=')}>=</button>
      <button onClick={() => handleButtonClick('C')}>C</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default Calculator;
