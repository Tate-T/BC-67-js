//Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.
// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4.8 },
//   { name: "Ірина", surname: "Федорова", grade: 4.2 },
// ];

const students = [
  { name: "Андрій", surname: "Іванов", grade: 4.5 },
  { name: "Олександр", surname: "Петров", grade: 3.9 },
  { name: "Марія", surname: "Сидорова", grade: 4.8 },
  { name: "Ірина", surname: "Федорова", grade: 4.2 },
];

function findTopStudent(students)
{
    /*Let the first student be the student with max grade */
    let studentWithMaxGrade = students[0];
    /*Then we compare him with other students */
    for (const student of students) {
        /* And if current student has grade greater than our student then we say that this student is a new student with max grade */
        if (student.grade > studentWithMaxGrade.grade)
        {
            studentWithMaxGrade = student;
        }

        /* And we go till the end of the array */
    }

    /*and then we return our student with max grade */
    return studentWithMaxGrade;
}

console.log(findTopStudent(students));