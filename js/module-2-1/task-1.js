// Використовуючи конструкцію if..else, напишіть код,
// що запитує: ‘Яка “офіційна” назва JavaScript ?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”,
//  в іншому випадку — виведіть: “Ви не знаєте ? ECMAScript!”

// function checkName() {
//   const answer = prompt('Яка "офіційна" назва JavaScript ?').toLowerCase();
//   if (answer === "ECMAScript".toLowerCase()) {
//     return "Правильно!";
//   } else {
//     return "Ви не знаєте ? ECMAScript!";
//   }
// }

// const result = checkName();
// console.log(result);

function checkName() {
  const answer = prompt('Яка "офіційна" назва JavaScript ?').toLowerCase();
  return answer === "ECMAScript".toLowerCase()
    ? "Правильно!"
    : "Ви не знаєте ? ECMAScript!";
}

const result = checkName();
console.log(result);
