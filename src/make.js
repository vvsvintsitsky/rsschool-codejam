const make = (inputValue) => {
  const operandArray = [];
  const closuredFunction = function innerMake(...args) {
    if (!(args[0] instanceof Function)) {
      operandArray.push(...args);
      return innerMake;
    }
    return operandArray.reduce(...args);
  };
  return closuredFunction(inputValue);
};

module.exports = make;
