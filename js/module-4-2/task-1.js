// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт
const user = {
  name: "Andrii",
  email: "rod@gmail",
  password: 12345,
  login(input) {
    if (input === this.email) {
      alert("Ви автортзовані");
    } else {
      alert("Error");
    }
  },
};
const input = prompt("Введіть пошту!");
user.login(input);
