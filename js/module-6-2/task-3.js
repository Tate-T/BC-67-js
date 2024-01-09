/*
Створіть клас Book, який буде мати властивості title (назва книги), author (автор книги) та price (вартість книги). Створіть клас Bookstore, який буде мати властивість books (масив з об'єктів типу Book). Створіть методи для додавання книги у книжковий магазин (addBook(book)), видалення книги з книжкового магазину (removeBook(book)) та виведення всіх книг з книжкового магазину (listBooks()).
// Приклад використання:
const myBookstore = new Bookstore();

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 10);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 12);
const book3 = new Book('1984', 'George Orwell', 8);

myBookstore.addBook(book1);
myBookstore.addBook(book2);
myBookstore.addBook(book3);

myBookstore.listBooks(); // виведе всі книги у книжковому магазині

myBookstore.removeBook(book2);

myBookstore.listBooks(); // виведе всі книги у книжковому магазині (без book2)
*/

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

class Bookstore extends Book {
  constructor() {
    super();
    this.books = [];
  }

  addBook(book) {
    return this.books.push(book);
  }

  removeBook(book) {
    const bookInd = this.books.indexOf(book);
    this.books.splice(bookInd, 1);
    return this.books;
  }

  listBooks() {
    this.books = [];
    return this.books;
  }
}

const myBookstore = new Bookstore();

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 10);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12);
const book3 = new Book("1984", "George Orwell", 8);

myBookstore.addBook(book1);
console.log(myBookstore.books);

myBookstore.addBook(book2);
// console.log(myBookstore.addBook(book2));
console.log(myBookstore.books);

myBookstore.addBook(book3);
console.log(myBookstore.books);

// console.log(myBookstore.listBooks());
// myBookstore.listBooks(); 
// виведе всі книги у книжковому магазині

myBookstore.removeBook(book2);
console.log(myBookstore.books);

myBookstore.listBooks(); 
console.log(myBookstore.books);
// виведе всі книги у книжковому магазині (без book2)
