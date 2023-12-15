// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля.

// Вихідні дані:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

function createSubstring(string, length) {
  return string.slice(0, length)
}

const string =
  'Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.'
const length = 25

console.log(createSubstring('hello', 3))
console.log(createSubstring(string, length))
