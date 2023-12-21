// function sumNumbers(num1, num2, num3, num4) {
//     const totalSum = num1 + num2 + num3 + num4;
//     return totalSum
    
// }
// console.log(sumNumbers(2, 5, 7, 9));

// через псевдомасив arguments//

// function sumNumbers() {
//     console.log(arguments);
//     // [2, 5, 7, 9] это превдомасив arguments
//     let totalSum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const number = arguments[i];
//         totalSum += number;
        
//     }
//     return totalSum;
    
// }
// console.log(sumNumbers(2, 5, 7, 9));
// console.log(sumNumbers(2, 5, 7, 9, 6, 3));

// на псевдомасиве arguments не работают все методы работы с масивом, по этому мы с псевдомасива сделаем масив
// для этого используем  метод Array.from

// function sumNumbers() {
//    const numbers = Array.from(arguments);
//     let totalSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         totalSum += number;
        
//     }
//     return totalSum;
    
// }
// console.log(sumNumbers(2, 5, 7, 9));
// console.log(sumNumbers(2, 5, 7, 9, 6, 3));

// еще мы можем собрать аргументы у масив с помощью rest

// function showMessage(...freindsNames) {
//     // const freindsNames = Array.from(arguments);
//      let message = `список гостей на день рождения:`;
//      for (let i = 0; i < freindsNames.length; i++) {
//          const friend = freindsNames[i];
//          message = message + ` ${friend},`;
     
//      }
//      return message;
     
//  }
//  console.log(showMessage('Nikita', 'Vova', 'Maksym'));
//  console.log(showMessage('Nikita', 'Vova', 'Maksym', 'Sasha', 'Kolya'));