// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

const number = Number(prompt('Введіть число'))
let message = ''
function sqrtNum(a) {
  if (a > 50) {
    return Math.sqrt(a)
  } else {
    message = 'sorry '
    return message
  }
}
console.log(message)
console.log(sqrtNum(number))
console.log(number)
