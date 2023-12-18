// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// function checkNumber() {
//   const number = Number(prompt("enter number"));
//   if (number >= 55 && number <= 99) {
//     return "Число потрапляє в діапазон";
//   } else {
//     return "Число не потрапляє в діапазон";
//   }
// }
// const result = checkNumber();
// console.log(result);
function checkNumber() {
  const number = Number(prompt("enter number"));
  return number >= 55 && number <= 99
    ? "Число потрапляє в діапазон"
    : "Число не потрапляє в діапазон";
}
const result = checkNumber();
console.log(result);
