// Створіть функцію, яка буде повертати кількість елементів в localStorage

const friend1 = {
    name: "Alex",
    age: 35,
    country: "Ukraine",
    city: "Dnipro"
}
const friend2 = {
    name: "Alex",
    age: 35,
    country: "Ukraine",
    city: "Dnipro"
}
function addToLocalStorage(user1, user2) {
  const user1data = JSON.stringify(user1);
  const user2data = JSON.stringify(user2);

  localStorage.setItem("obj1", user1data);
  localStorage.setItem("obj2", user2data);

  console.log(user1data);
  console.log(user2data);
}
 
addToLocalStorage(friend1, friend2);

// function countLocalStorageEl() {
//     return localStorage.length;
   
// }
// console.log(countLocalStorageEl());


// Створіть функцію, яка буде повертати масив ключів з localStorage

function makeArrKeysLS() {
    const keysLS = Object.keys(localStorage);
    return keysLS;

}
console.log(makeArrKeysLS());
