// Отримати користувача (не масив) по occupation (поле email, він унікальний).

const people = [
  { name: "John", age: 32, occupation: "programmer" },

  { name: "Jane", age: 26, occupation: "teacher" },

  { name: "Mike", age: 42, occupation: "engineer" },

  { name: "Emily", age: 17, occupation: "designer" },
];

// const user = people.find((el) => {
//   let profession = prompt("Введіть професію"); 
//  return el.occupation === profession});

// console.log(user);

const profession = prompt("Введіть професію");
const user = people.find((el) => el.occupation === profession);
  
  console.log(user);
  