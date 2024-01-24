// Отримати список країн з REST Countries API Опис:
// Використайте публічне API REST Countries для отримання списку країн.Зробіть GET - запит за адресою
// https://restcountries.com/v3.1/all та перегляньте отримані дані про країни.

const ulElem = document.querySelector(".box");

function getCountrys() {
  const url = "https://restcountries.com/v3.1/all";
  const data = fetch(url).then((respons) => respons.json());
  data.then((data) => createMarkUp(data));
}

function createMarkUp(data) {
  console.log(data);
  data.forEach((country) => {
    console.log(country.flags.png);
  });

  const markUp = data
    .map((country) => {
      return `<li>
        <p>${country.name.common}</p>
        <img src="${country.flags.png}" alt="${country.flags.alt}">
        </li>`;
    })
    .join("");
  ulElem.innerHTML = markUp;
}
getCountrys();
