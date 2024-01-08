// Створіть функцію-конструкторʼ Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.

function Calculator() {
  this.add = function (x, y) {
    return x + y;
  };

  this.subtract = function (x, y) {
    return x - y;
  };

  this.multiply = function (x, y) {
    return x * y;
  };

  this.divide = function (x, y) {
    if (y === 0) {
      return "На нуль ділити не можна";
    }
    return x / y;
  };
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); // На нуль ділити не можна
