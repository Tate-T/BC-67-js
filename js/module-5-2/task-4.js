// Напишіть функцію, яка отримує масив чисел (створити самостійно) і  повертає новий масив, що містить лише парні числа * 2 .

const numbers = [1,5,8,6,7,10,24,36,44,20]

const newNumbers = numbers.filter((number)=> number % 2 === 0).map((number)=> number * 2);

console.log(newNumbers);

