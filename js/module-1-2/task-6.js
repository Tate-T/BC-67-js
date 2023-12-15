// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».

function showUserMessage(userName, price, quantity = 1) {
  const totalPrice = price * quantity
  const message = `Дякуємо, ${userName}! До сплати ${totalPrice} гривень`
  return message
}

showUserMessage('Stanislav', 5000, 2)
console.log(showUserMessage('Stanislav', 5000, 2))
console.log(showUserMessage('Andriy', 5000, 20))
