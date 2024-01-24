//* Напишіть функцію, яка приймає два числа і повертає проміс,
//* який виконується з результатом їхнього додавання.
//* Якщо хоча б одне з чисел не є числом, проміс повинен бути відхилено
//* з повідомленням "Неправильні аргументи".

function fooPlus(numA, numB) {
const promise = new Promise((resolve, reject) => {
    if(numA ==='undefined' || typeof numA !== "number" || numB ==='undefined' || typeof numB !== "number"){
        return reject("Неправильні аргументи");
    } else {
        resolve(numA + numB);
    }
    
    
});

return promise;
}

// const firstNum ='js';
// const secondNub = 404;
// fooPlus(firstNum, secondNub).then(sum => alert(`The total sum is consited of : ${sum}`)).catch((error) => {alert(error)});

// ===========================================================================================

function delay(ms) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const saxesfull = true;
        if (saxesfull) {
          resolve("dani obrobleno uspishno");
        } else {
          reject("Error");
        }
      }, ms);
    });
    return promise;
  }

function makePromise(arr) {
    const promise = new Promise((resolve, reject) => {
      const peopleNames = arr.map((user) => user.name).sort();
      if (
        peopleNames !== undefined ||
        peopleNames !== null ||
        peopleNames.length !== 0
      ) {
        resolve(peopleNames);
      } else {
        reject("infomaciya vidsutnja");
      }
    });
    return promise;
  }

//* Використовуючи Promise.all, створіть Promise, який об'єднує результати з трьох інших Promise.
//* Використовуючи Promise.race, setTimeout створіть Promise, який поверне результат найшвидшого з двох інших Promise.
//* Використовуючи Promise.reject, створіть Promise, який завершується з помилкою.
//* Використовуючи Promise.resolve, створіть Promise, який завершується успішно з визначеним результатом.

const promise1 = fooPlus(111, 555);
const promise2 = makePromise([1, 13, 6, 7]);
const promise3 = delay(4000);



Promise.all([promise1, promise2, promise3]).then((result) => {console.log(result)}).catch((error)=> alert(`Error: ${error}`));

Promise.race([promise1, promise2, promise3]).then((result) => {console.log(result)}).catch((error)=> alert(`Error: ${error}`));

Promise.reject("Real madrid").then((result) => {console.log(result)}).catch((error)=> alert(`Error: ${error}`));