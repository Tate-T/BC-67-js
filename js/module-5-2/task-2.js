// Отримати загальну суму балансу (поле balance) всіх користувачів.

const users = [
    { name: "Андрій", isActive: true, balance: 500 },
    { name: "Олександр", isActive: false, balance: 100 },
    { name: "Марія", isActive: false, balance: 120 },
    { name: "Ірина", isActive: true, balance: 160 },
];
//   const totalBalance = users.reduce((acc, user) => {
//     acc += user.balance;
//     return acc;
//   }, 0);
//   console.log(totalBalance);

// Отримати масив тільки неактивних користувачів (поле isActive).

// const activeUsers = users.reduce((totalUserIsActive, user) => {

//     if (user.isActive === true) {
//         totalUserIsActive.push(user);
        
//     }
//     return totalUserIsActive;

// }, []);
// console.log(activeUsers);
