// Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень.
// Бонус дорівнює 20 % від зарплати за додаткові години.(використати тернарний оператор)

const normalLoad = 40
const factLoad = Number(prompt('Enter your load'))
const bonus = 0.2 * (factLoad - normalLoad)

console.log(typeof factLoad)
console.log(bonus)
