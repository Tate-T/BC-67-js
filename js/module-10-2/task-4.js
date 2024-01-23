// // Напишіть функцію, яка отримує масив об'єктів  і повертає проміс,
// //  який виконується з масивом імен, відсортованих за алфавітом.
// const people = [
//   { name: "John", age: 25 },
//   { name: "Anna", age: 30 },
//   { name: "Peter", age: 40 },
//   { name: "Mary", age: 35 },
// ];

// function makePromise(arr) {
//   const promise = new Promise((resolve, reject) => {
//     const peopleNames = arr.map((user) => user.name).sort();
//     if (
//       peopleNames !== undefined ||
//       peopleNames !== null ||
//       peopleNames.length !== 0
//     ) {
//       resolve(peopleNames);
//     } else {
//       reject("infomaciya vidsutnja");
//     }
//   });
//   return promise;
// }

// const resalt = makePromise(people)
//   .then((arrey) => {
//     console.log(arrey);
//   })
//   .catch((message) => message);
// // console.log(resalt);
