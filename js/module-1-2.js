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

// Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвоїти змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 10000.

// Використовуючи стандартний рядок, виведи в консоль інформацію про товар. Результат у консолі має виглядати так: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвоїти товару нову ціну - 20000. Використовуючи стандартний рядок, виведи в консоль інформацію про товар. Результат у консолі має виглядати так: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'.

function showMessage(productName, productPrice, productQuantity) {
  const totalPrice = productPrice * productQuantity;
  const message = `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${totalPrice}`;
  return message;
}

console.log(showMessage("MacBook Pro 13″", 10000, 5));
console.log(showMessage("MacBook R″", 20000, 90));

// function showMessage(productName, productPrice, productQuantity) {
//   return `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${
//     productPrice * productQuantity
//   }`;
// }

// const showMessage = (productName, productPrice, productQuantity) =>
//   `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${
//     productPrice * productQuantity
//   }`;
