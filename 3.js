function operasiMatrix(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      if (arr1[i].length != arr2[j].length) {
        return "Kedua matrix tidak dapat dioperasikan";
      } else {
        for (let k = 0; k < arr1[0].length; k++) {
          sum += arr1[i][k] * arr2[k][j];
        }
      }
      newArr[i][j] = sum;
    }
  }
  return newArr;
}

console.log(
  operasiMatrix(
    [
      [3, 4],
      [1, 2]
    ],
    [
      [7, 5],
      [6, 4]
    ]
  )
);

// 45 31
// 19 13
