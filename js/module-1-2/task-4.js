// Перевірте чи співпадає введений пароль password із збереженим паролем.
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true,
// якщо значення збігаються, і false - якщо ні.

function isMatchPassword(password) {
  const SAVED_PASSWORD = '34546jjhjk'
  const isMatch = SAVED_PASSWORD === password

  if (isMatch) {
    return 'is ok=)'
  } else {
    return 'all is bad'
  }
}

//const password = prompt('Введіть password');

//console.log(isMatchPassword(password))
