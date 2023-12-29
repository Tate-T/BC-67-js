// const users = [
//     { name: "Андрій", isActive: true, balance: 500 },
//     { name: "Олександр", isActive: false, balance: 100 },
//     { name: "Марія", isActive: false, balance: 120 },
//     { name: "Ірина", isActive: true, balance: 160 },
// ];

// const activeUsers = users.filter((user)=> user.isActive);
// console.log(activeUsers);

// Напишіть функцію, яка отримує масив об'єктів і повертає масив імен з тих об'єктів, які мають вік більше 18 років.

const people = [

  { name: 'John', age: 32, occupation: 'programmer' },

  { name: 'Jane', age: 26, occupation: 'teacher' },

  { name: 'Mike', age: 42, occupation: 'engineer' },

  { name: 'Emily', age: 17, occupation: 'designer' }

];

const adulte = people.filter((el)=> el.age >=18);
console.log(adulte);