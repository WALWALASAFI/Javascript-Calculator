const handleButtonClick = (value) => {
  if (value === "=") {
    dispatch(performOperation());
  } else if (value === "C") {
    dispatch(clearDisplay());
  } else if (['+', '-', '*', '/'].includes(value)) {
    dispatch(updateDisplay(value));
    // Update previous input and operator
  } else {
    dispatch(updateDisplay(value));
  }
};
