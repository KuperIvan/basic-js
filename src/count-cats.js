const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count;
	let newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') {
				newArray.push(matrix[i][j]);
			}
    }
  }
	return count = newArray.length;
  }
