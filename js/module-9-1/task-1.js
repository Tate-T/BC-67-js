// // Створіть функцію, яка буде додавати об'єкт в localStorage. Назва об'єкту має бути ключем, а сам об'єкт - значенням.
// function addToLocalStorage(user1, user2) {
//   const user1data = JSON.stringify(user1);
//   const user2data = JSON.stringify(user2);

//   localStorage.setItem("obj1", user1data);
//   localStorage.setItem("obj2", user2data);

//   console.log(user1data);
//   console.log(user2data);
// }

// const user1 = {
//   firstName: "Vasya",
//   age: 20,
// };

// const user2 = {
//   firstName: "Alex",
//   age: 30,
// };

// addToLocalStorage(user1, user2);

// // Створіть функцію, яка буде отримувати об'єкт з localStorage. Назва об'єкту має бути ключем, а сам об'єкт - значенням.
// function getDataFromLocalStorage(obj1) {
//   const data = localStorage.getItem(obj1);
//   const newData = JSON.parse(data);

//   return newData;
// }

// console.log(getDataFromLocalStorage("obj1"));

// // Створіть функцію, яка буде видаляти значення з localStorage за ключем.
// function removeDataFromLocalStorage(obj1) {
//   localStorage.removeItem(obj1);
// }

// removeDataFromLocalStorage("obj1");

// // Створіть функцію, яка буде видаляти всі значення з localStorage.
// function removeAllData() {
//   localStorage.clear();
// }

// removeAllData();
