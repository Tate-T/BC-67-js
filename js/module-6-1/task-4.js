// Створіть функцію-конструктор Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // John Doe
