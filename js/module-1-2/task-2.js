// Оголоси дві змінні, які зберігають назву та ціну товару: name і price. Присвоїти змінним наступні характеристики товару (відразу при оголошенні) назва: MacBook Pro 13″, ціна: 10000.

// Використовуючи стандартний рядок, виведи в консоль інформацію про товар. Результат у консолі має виглядати так: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'. Присвоїти товару нову ціну - 20000. Використовуючи стандартний рядок, виведи в консоль інформацію про товар. Результат у консолі має виглядати так: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'.

function showMessage(productName, productPrice, productQuantity) {
  const totalPrice = productPrice * productQuantity
  const message = `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${totalPrice}`
  return message
}

console.log(showMessage('MacBook Pro 13″', 10000, 5))
console.log(showMessage('MacBook R″', 20000, 90))

// function showMessage(productName, productPrice, productQuantity) {
//   return `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${
//     productPrice * productQuantity
//   }`;
// }

// const showMessage = (productName, productPrice, productQuantity) =>
//   `Обрано «${productName}», ціна за штуку ${productPrice} кредитів, загальна вартість складає ${
//     productPrice * productQuantity
//   }`;
