// Array.prototype.sort(callback(currentEl, nextEl){}) cортує та ЗМІНЮЄ оригінальний масив/ По замовчуванню: сортує по зростанню

// const numbers = [1, 8, 4, 6, 12, 22];

// const sortedArr = [...numbers].sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });;

// sortedArr.sort((curEl, nextEl)=>{
// 	return curEl - nextEl;
// });

// console.log(numbers);
// console.log(sortedArr);

const people = [
  { name: "John", age: 32, occupation: "programmer" },

  { name: "Jane", age: 26, occupation: "teacher" },

  { name: "Mike", age: 42, occupation: "engineer" },

  { name: "Emily", age: 17, occupation: "designer" },
];

const copyPeople = [...people].sort((curPerson, nextPerson) => {
  // return nextPerson.age - curPerson.age;
  return curPerson.age - nextPerson.age;
});

console.log(copyPeople);
