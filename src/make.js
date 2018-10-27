const make = (inputValue) => {
  const operandArray = [];
  const closuredFunction = function innerMake(inputVal) {
    if(!(inputVal instanceof Function)) {
      operandArray.push(...arguments);
      return innerMake;
    } else {
      return operandArray.reduce(inputVal);
    }
  };
  return closuredFunction(inputValue);
}

export default make;
