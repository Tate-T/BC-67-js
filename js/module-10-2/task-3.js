// Напишіть функцію, яка отримує масив чисел і повертає проміс,
//     який виконується, якщо всі числа в масиві є парними.Якщо ж принаймні одне число непарне,
//     проміс повинен бути відхилено з повідомленням "Є непарні числа".

// function onPromise(arr) {
//   const promise = new Promise((resolve, reject) => {
//     if (arr.every((el) => el % 2 === 0)) {
//       resolve("vsi chisla parni");
//     } else {
//       reject("ne vsi chisla parni");
//     }
//   });
//   return promise;
// }
// onPromise([4, 12, 6, 88])
//   .then((message) => {
//     alert(message);
//   })
//   .catch((message) => {
//     alert(message);
//   });
