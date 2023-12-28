// // Завдання 1 Отримати масив імен всіх користувачів (поле name).
// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4.8 },
//   { name: "Ірина", surname: "Федорова", grade: 4.2 },
// ];

// const studentNames = students.map((student) => ({ newName: student.name }));

// console.log(studentNames);

// // function map(students) {
// //   let updateStudents = [];
// // }

// // const testFunction = () => {
// //   return;
// // };

// // map(testFunction);

// const msgs = students.map(
//   (student) =>
//     `Welcome your son ${student.name} has average grade ${student.grade}`
// );

// const updateStudents = students.map((student) => {
//   return { ...student, grade: student.grade + 0.5 };
//   // return {
//   //   name: "Андрій",
//   //   surname: "Іванов",
//   //   grade: 4.5,
//   //   grade: student.grade + 0.5,
//   // };
// });

// // console.log(studentNames);
// // console.log(msgs);
// // console.log(updateStudents);
