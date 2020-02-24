function check(angka) {
  // your code here
  let sum = 0;
  for (let i = 0; i < angka.length; i++) sum += angka[i];
  if (sum == 0) return 0;
  else if (sum % 9 == 0) return 9;
  else return sum % 9;
}
console.log(check([123, 9, 27])); // 159 = 1+5+9 = 15 = 1+5 = 6
