const students = [
  { name: "Андрій", surname: "Іванов", grade: 4.5 },
  { name: "Олександр", surname: "Петров", grade: 3.9 },
  { name: "Марія", surname: "Сидорова", grade: 4.8 },
  { name: "Ірина", surname: "Федорова", grade: 4.2 },
];

// const totalGrades = students.reduce((total, student) => {
//     total += student.grade;
//     console.log(student.grade);
//     return total;
// }, 0);

// console.log(totalGrades);

const surnamesArray = students.reduce((surnames, student) => {
    surnames.push(student.surname);
    
    return surnames;

}, [])

console.log(surnamesArray);



