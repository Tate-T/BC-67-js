/*
Створіть масив фруктів, для якого:
1) за допомогою методів масиву видаліть по фрукту з початку та кінця,  на їх місце додати нові фрукти;
2) видалити 3-й елемент, та на його місце вставити декілька інших фруктів використовуючи метод (splice);
3) із зміненого масиву створіть повідомлення.
*/

const fruits = ["apple", "banana", "orange"];
//console.log(`Start array: ${fruits}`);
console.log(fruits);

// First solution

// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("cherry");
// console.log(fruits);
// fruits.unshift("avocado");
// console.log(fruits);

// Second solution

// fruits.splice(0, 1, "cherry");
// console.log(fruits);
// fruits.splice(fruits.length - 1, 1, "avocado");
// console.log(fruits);