
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  };
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(matrix[i].reverse());
    }
    else {
      newArr.push(matrix[i]);
    }
  }
  return newArr.flat();
};
