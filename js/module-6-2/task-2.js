/*
Нехай є базовий клас Person з властивостями name та age. Створіть підклас Employee, який буде мати всі властивості базового класу, а також властивість position.
const john = new Employee("John", 32, "programmer");
console.log(john.getInfo()); // "John is a programmer and is 32 years old"
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get infoName() {
    return this.name;
  }

  set infoName(newName) {
    this.name = newName;
  }

  get infoAge() {
    return this.age;
  }

  set infoAge(newAge) {
    this.age = newAge;
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  getInfo() {
    return `${this.name} is a ${this.position} and is ${this.age}`;
  }
}

const john = new Employee("John", 32, "programmer");
console.log(john.getInfo());

console.log(john.infoName);
console.log(john.infoAge);

john.infoName = "Bob";
console.log(john.infoName);

john.infoAge = 40;
console.log(john.infoAge);
