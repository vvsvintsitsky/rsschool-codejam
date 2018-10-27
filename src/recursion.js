function transformTreeToArray(resultArray, nodesArray) {
  const nextNodesArray = [];
  const currentNodesValues = [];
  nodesArray.forEach((node) => {
    currentNodesValues.push(node.value);
    if (node.left) {
      nextNodesArray.push(node.left);
    }
    if (node.right) {
      nextNodesArray.push(node.right);
    }
  });
  resultArray.push(currentNodesValues);

  if (nextNodesArray.length) {
    return transformTreeToArray(resultArray, nextNodesArray);
  }
  return resultArray;
}

const recursion = inputValue => transformTreeToArray([], [inputValue]);

module.exports = recursion;
