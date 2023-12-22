// // // Написати функцію, яка приймає масив чисел та повертає новий масив, який містить всі числа,
// // // які є дублікатами в початковому масиві.Якщо немає дублікатів, функція повертає порожній масив.
// const arr = [1, 2, 3, 5, 8, 9, 5, 64, 64, 9, 2];
// function beackArray(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let elem = arr[i];
//     if (newArr.includes(elem)) {
//       continue;
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(beackArray(arr));

// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.
// const vowels = ["a", "e", "i", "o", "u"];
// const str = "This is a new line";
// function returnStr(str) {
//   let total = 0;
//   for (let i = 0; i < vowels.length; i++)
//     if (str.includes(vowels[i])) {
//       total += i;
//       console.log(total);
//     }
//   return total;
// }
// // console.log(returnStr(str));
// const vowels = ["a", "e", "i", "o", "u"];
// const str = "This is a new line";
// const strArr = str.split("");
// function returnStr() {
//   const total = [];
//   //   console.log(total);
//   for (let i = 0; i < strArr.length; i++) {
//     if (vowels.includes(strArr[i])) {
//       total.push(strArr[i]);
//     }
//   }
//   const newTotal = total.length;
//   return newTotal;
// }
// console.log(returnStr(str));
