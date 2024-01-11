// 1. Створити заголовок з текстом 'Привіт, це перший мій створений елемент!'
// та додати до нього клас “title”, заздалегідь створений в style.css.
// Додати заголовок на сторінку
// 2. Створити  зображення та кнопку зі всіма обов’язковими атрибутими
//     (можна використати абсолютний або відностий шлях до зображення) та додати
// їх на сторінку
// 3. Створити список в html файлі.За допомогою js додати до нього пункт списку.
// Спочатку посилання додаємо до елементу списку, а потім цей елемент додати в DOM
// <li class="site-nav__item">
//   <a href="" class="site-nav__link">Про нас</a>
// </li>
// 4. Використовуючи наступну розмітку
//  <h1 class="title">Це <span>заголовок</span></h1>
// та код

// const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);
// пояснити різницю між двома властивостями

const titleEl = document.createElement("h1");
titleEl.classList.add("title");
titleEl.textContent = "Привіт, це перший мій створений елемент!";
console.log(titleEl.textContent);
const boxEl = document.querySelector(".box");
// console.log(boxEl);
// boxEl.append(titleEl);
// boxEl.insertAdjacentElement("beforebegin", titleEl);

const textEl = document.createElement("p");
textEl.classList.add(".text");
textEl.textContent = "zsexdrcftvgy";
// boxEl.append(textEl);
// console.log(boxEl);

const imgEl = document.createElement("img");
const url =
  "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
imgEl.src = url;
imgEl.alt = "ponchik";
imgEl.width = "200";
imgEl.height = "180";
// boxEl.after(imgEl);
// boxEl.insertAdjacentElement("afterbegin", imgEl);

const listEl = document.createElement("ul");
const itemEl = document.createElement("li");
itemEl.textContent = "1";
const itemEl2 = document.createElement("li");
itemEl2.textContent = "2";
// listEl.append(itemEl, itemEl2);
// boxEl.before(listEl);

const btnEl = document.createElement("button");
btnEl.classList.add("btn");
btnEl.type = "button";
btnEl.textContent = "click";
// btnEl.style.display = "block";
// btnEl.style.background = "green";
// btnEl.style.width = 100;
// btnEl.style.height = 50;

boxEl.append(titleEl, textEl, imgEl, listEl, btnEl);
// console.log(boxEl.innerHTML);
boxEl.innerHTML = ` <h1>wdrfergetghe</h1>
      <ul>
        <li>fgh</li>
        <li>jfjv</li>
        <li>kcl</li>
      </ul>
      <img src="" alt="">`;
// const liEl1 = document.querySelector("li");
// console.log(listEl);
const ulNew = document.querySelector("ul");
console.log(ulNew);
const liEl1 = ulNew.lastElementChild;
console.log(liEl1);
// console.log(liEl1);
const secondItem = document.createElement("li");
secondItem.innerHTML = `<p>jkehwgfieogrvb</p>`;
liEl1.insertAdjacentElement("afterend", secondItem);
console.log(document.body);
// // const btnEl = document.querySelector("[data-btn = 'submit']");
// console.log(btnEl);
// console.log(btnEl.dataset.btn);
