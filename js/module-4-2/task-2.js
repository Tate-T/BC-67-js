// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку.

const movie = {
  title: "titanic",
  director: "Cameron",
  year: 2001,
  rating: 9.8,
  showRating() {
    //     if (this.rating > 8) {
    //       return true;
    //     } else {
    //       return false;
    //     }
   return this.rating > 8 ? true : false;
  },
};

console.log(movie.showRating())