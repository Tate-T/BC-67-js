// За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18);

const max = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
const min = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
//console.log(max);
//console.log(min);
const maxNumber = getMaxNumber();
//console.log(maxNumber);
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

//console.log(sumNumbers(a));

// Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвоїти змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 10000.

// Використовуючи стандартний рядок, виведи в консоль інформацію про товар. Результат у консолі має виглядати так: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвоїти товару нову ціну - 20000. Використовуючи стандартний рядок, виведи в консоль інформацію про товар. Результат у консолі має виглядати так: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'.

function showMessage(productName, productPrice, productQuantity) {
  const totalPrice = productPrice * productQuantity;
  const message = `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${totalPrice}`;
  return message;
}

// console.log(showMessage("MacBook Pro 13″", 10000, 5));
// console.log(showMessage("MacBook R″", 20000, 90));

// function showMessage(productName, productPrice, productQuantity) {
//   return `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${
//     productPrice * productQuantity
//   }`;
// }

// const showMessage = (productName, productPrice, productQuantity) =>
//   `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${
//     productPrice * productQuantity
//   }`;


// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

// const number = Number(prompt('Введіть число'));
// let message ='';
// function sqrtNum(a) {
//   if (a > 50) {
    
//     return Math.sqrt(a)
//   } else {
//     message = 'sorry '
//     return message
//   }
  
 
// }
// console.log(message)
// console.log(sqrtNum(number));
// console.log(number)

// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Перевірте чи співпадає введений пароль password із збереженим паролем.
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true,
// якщо значення збігаються, і false - якщо ні.

function isMatchPassword(password) {
  
  const SAVED_PASSWORD = '34546jjhjk';
  const isMatch = SAVED_PASSWORD === password;

  if (isMatch) {
    return 'is ok=)'
  } else {
    return 'all is bad'
  }
  
}

//const password = prompt('Введіть password');



//console.log(isMatchPassword(password))

// Вихідні дані:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

function createSubstring(string, length)
{
  return string.slice(0, length); //
}

const string = "Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.";
const length = 25;

// console.log(createSubstring("hello", 3));
// console.log(createSubstring(string, length));


// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».

function showUserMessage(userName, price, quantity = 1) {
  const totalPrice = price * quantity;
  const message = `Дякуємо, ${userName}! До сплати ${totalPrice} гривень`;
  return message;
}

showUserMessage('Stanislav', 5000, 2);
console.log(showUserMessage('Stanislav', 5000, 2));
console.log(showUserMessage('Andriy', 5000, 20));