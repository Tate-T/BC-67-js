// Callback

const numbers = [5, 7, 35, 85];

function multiNums(numbers, callback) {
  let total = 1;
  numbers.forEach((number) => {
    total *= number;
  });
  const message = callback(total);
  return message;
}

// console.log(multiNums(numbers));

// function makeMessage(result) {
//   return `Загальна сума добутку складає ${result}`;
// }

const makeMessage = (result) => `Загальна сума добутку складає ${result}`;

console.log(multiNums(numbers, makeMessage));

const multiNumbers = (...numbers) => {
  // Це не працює у стрілкових функціях:
  // console.log(arguments)
  // const numbers = Array.from(arguments)
  // Проте можна використати rest
  let total = 1;
  numbers.forEach((number) => {
    total *= number;
  });

  return total;
};

console.log(multiNumbers(3, 8, 56));
console.log(multiNumbers(5, 7, 8, 34, 17));
console.log(multiNumbers(5, 7, 8, 34, 17, 456, 865, 356));

const multiNumbers2 = (a, b, c, ...numbers) => {
  let total = 1;
  numbers.forEach((number) => {
    total *= number;
  });

  return `Перше число - ${a}, другу -  ${b}, третє -  ${c}, інші числа перемножені результат - ${total}`;
};

console.log(multiNumbers2(3, 8, 56));
console.log(multiNumbers2(5, 7, 8, 34, 17));
console.log(multiNumbers2(5, 7, 8, 34, 17, 456, 865, 356));
