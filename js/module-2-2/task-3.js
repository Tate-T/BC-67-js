// Порахуйте суму чисел від 12 до 27

let totalSum = 0;
for (let i = 12; i <= 27; i++){
  // totalSum = totalSum + i
  console.log(totalSum);
  let totalSum1 = totalSum += i;
  console.log(`${totalSum} + ${i} = ${totalSum1}`)
  
}

console.log(totalSum)