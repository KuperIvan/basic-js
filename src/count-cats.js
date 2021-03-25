const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError("Not implemented");
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[j] == "^^") {
        count += i;
      }
    }
  }
  return count;
};
