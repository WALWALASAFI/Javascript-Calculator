import { useDispatch } from 'react-redux'; // Import useDispatch if you're using Redux in a React app
import { performOperation, clearDisplay, updateDisplay } from './actions'; // Import actions if they are in a separate file

const handleButtonClick = (value) => {
  const dispatch = useDispatch(); // Ensure you have dispatch from Redux

  if (value === '=') {
    dispatch(performOperation());
  } else if (value === 'C') {
    dispatch(clearDisplay());
  } else if (['+', '-', '*', '/'].includes(value)) {
    dispatch(updateDisplay(value));
    // Update previous input and operator if needed
  } else {
    dispatch(updateDisplay(value));
  }
};

// Example usage (if you're using React):
// <button onClick={() => handleButtonClick('1')}>1</button>
