// фігурні дужки створюють нову область видимості;
// якщо змінна створена в фігурних дужках, то поза фігурними дужками вона не буде видима

let numbers = [];

function sumNumbers() {
numbers = Array.from(arguments);
    let totalSum = 0;
    let number = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        number = numbers[i];
        totalSum += number;
        // console.log(number);
        
    }
    return totalSum;
    
}
console.log(sumNumbers(2, 5, 7, 9));
console.log(sumNumbers(2, 5, 7, 9, 6, 3));

console.log(numbers);