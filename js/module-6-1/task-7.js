// Створіть функцію - конструктор Animal,
//     який має властивість name.Створіть клас Dog,
//     який наслідується від Animal і має властивість breed.
//         Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.

// function Animal(name, breed) {
//     this.name = name;
//     this.breed = breed;
// }
// // const dog = Object.create(Animal)
// // dog.breed = "Labrador Retriever";

// //     const myDog = new Dog('Buddy', 'Labrador Retriever');
// // console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }

// class Animal {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   showInfo() {
//     return `Sobachka z imenem ${this.name} poroda ${this.breed}`;
//   }
// }

// class Dog extends Animal {
//   constructor(owner, name, breed) {
//     super(name, breed);
//     this.ownerDog = owner;
//   }
// }

// const myDog = new Dog("Alex", "Bars", "Labrador");
// console.log(myDog);
// console.log(myDog.showInfo());
