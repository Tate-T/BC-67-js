// Вбудована функція setTimeout використовує колбек - функції.
// Створіть альтернативу яка базується на промісах.Функція delay(ms)
//  повинна повертати проміс, який перейде в стан resolved через ms мілісекунд,
//     так щоб ми могли додати до нього.then:
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

// const resalt = delay(3000).then(() => alert("виконалось через 3 секунди"));
// console.log(resalt);
