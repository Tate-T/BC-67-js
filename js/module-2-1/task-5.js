// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const userName = prompt("Введіть своє ім'я");
console.log(userName);
const surName = prompt("Введіть призвище");
console.log(surName);
const userNameLength = userName.length;
console.log(userNameLength);  
const surNameLength = surName.length;
console.log(surNameLength);
const lettersNumber = userNameLength + surNameLength;
console.log(lettersNumber);
if (lettersNumber < 10) {
    alert("У вас коротке ім'я призвище")
}
else {
    alert("У вас довге ім'я призвище")
}
console.log();
