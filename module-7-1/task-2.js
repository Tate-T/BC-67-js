// const arr = [
//   {
//     name: "kj",
//     price: 50,
//   },
//   {
//     name: "xa",
//     price: 40,
//   },
//   { name: "kd", price: 55 },
//   {
//     name: "gh",
//     price: 58,
//   },
// ];
// const ulNew = document.createElement("ul");

// // function createCart(cart) {
// //   //   const card = document.createElement("li");

// //   //   card.innerHTML = `<h2>${cart.name}</h2>
// //   // <p>${cart.price}</p>`;
// //   //   console.log(card);
// //   return `<li>
// //       <h2>${cart.name}</h2>
// //     <p>${cart.price}</p>
// //     </li>`;
// // }
// function createCart(cart) {
//   //   console.log(cart);
//   const card = document.createElement("li");

//   const title = document.createElement("h2");
//   title.textContent = `${cart.name}`;
//   //   console.log(title);
//   const par = document.createElement("p");
//   par.textContent = `${cart.price}`;
//   card.append(title, par);
//   return card;
// }
// const listCart = arr.map(createCart);
// // console.log(listCart);
// console.log(document.body);
// // ulNew.insertAdjacentElement("beforeend", listCart);
// ulNew.append(...listCart);
// document.body.append(ulNew);
// console.log(document.body);
