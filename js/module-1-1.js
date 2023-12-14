// Знайти суму перших N натуральних чисел. N запитати у юзера через prompt(while)

// function countSumOfNNumbers() {
//   const nNumber = Number(prompt("Give an N number"));
//   let count = 0;
//   for (let i = 0; count < nNumber; i++) {
//     count += i;
//   }

//   return count;
// }


// Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень.
// Бонус дорівнює 20 % від зарплати за додаткові години.(використати тернарний оператор)

// const normalLoad = 40;
// const factLoad = Number(prompt("Enter your load"));
// const bonus = 0.2 * (factLoad - normalLoad);

// console.log(typeof factLoad)
// console.log(bonus)

// Вихідний код:
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням:
// Значення змінної a дорівнюватиме 7 - використовуй оператор +=
// Значення змінної b дорівнюватиме 6 - використовуй  оператор -=
// Значення змінної c дорівнюватиме 45 - використовуй оператор *=
// Значення змінної d дорівнюватиме 2 - використовуй оператор /=

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Вихідний код: const productName = "Droid"; const pricePerItem = 3500;
// Оголоси змінну message і запиши в неї повідомлення про покупку,
// рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits".Де < назва товару > і < ціна товару > — це значення змінних productName і pricePerItem.
// Використовуй синтаксис шаблонних рядків.

// const productName = "Droid";
// const pricePerItem = 60000;
// const message = `You picked ${productName},
// price per item is ${pricePerItem} credits".`

// console.log(message)

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800; orderedQuantity - кількість дроїдів у замовленні, значення 6; delivеryFee - вартість доставки, значення 50; totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки;
//  - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
//const pricePerDroid = 800;
// const orderedQuantity = 6;
// const delivеryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + delivеryFee;
// console.log(totalPrice);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${delivеryFee} credits) is included in total price.`;
// console.log(message);

// const test = 5 + 5 + "5";
// console.log(test);

// Створіть змінну email з вашою електронною адресою.Напишіть скрипт, який перевіряє чи містить змінна email символ @і рахує загальну кількість символів.Результат виведіть в консоль.

const email = 'androleks@gmail.com';
const checkmail = email.includes('@');
console.log(checkmail);
const strlength = email.length;
console.log(strlength);

