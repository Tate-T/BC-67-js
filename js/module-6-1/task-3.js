// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

function Account({ login, email }) {
  this.login = login;
  this.email = email;

  this.getInfo = function () {
    return `Login: ${this.login}, Email: ${this.email}`;
  };
}

// console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
