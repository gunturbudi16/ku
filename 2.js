function matrixTranspose(matrix) {
  let column = matrix.length;
  let row = matrix[0].length;
  console.log(row);

  let newArr = [];
  for (let i = 0; i < row; i++) {
    let oneRow = [];
    for (let j = 0; j < column; j++) {
      oneRow.push(matrix[j][i]);
    }
    newArr.push(oneRow);
  }
  return newArr;
}

console.log(
  matrixTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
