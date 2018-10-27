const sumOfOther = (inputArray) => {
  const resultArray = [];
  const sumOfArrayElements = inputArray.reduce((accumulator, element) => accumulator + element, 0);
  for (let i = 0; i < inputArray.length; i += 1) {
    resultArray.push(sumOfArrayElements - inputArray[i]);
  }
  return resultArray;
};

export default sumOfOther;
