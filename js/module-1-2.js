// За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18);

const max = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
const min = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
console.log(max);
console.log(min);
const maxNumber = getMaxNumber();
console.log(maxNumber);
// console.log(getMinNumber); не працює, якщо функція створена через змінну
// Оголошення функції function declaration
function getMaxNumber() {
  return Math.max(2, 34, 99, 3, 22, 36, 733, 18);
}
// Function expression
const getMinNumber = function () {
  return Math.min(2, 34, 99, 3, 22, 36, 733, 18);
};

// const getMinNumber = () => Math.min(2, 34, 99, 3, 22, 36, 733, 18);

function sumNumbers(num1, num2 = 10) {
  console.log(num1, num2);
  const totalSum = num1 + num2;

  return totalSum;
}

const a = 12;

console.log(sumNumbers(a));
