// Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.
// const cart = {
// 	goods: ['apple', 'orange', 'kiwi'],
// 	prices: [2, 4, 6],
// 	calculateTotal(){
// 		let totalCount = 0;
// 		for(let price of this.prices){
// 			totalCount += price;
// 		}
// 		return totalCount;
// 	}
// };

// const totalPrice = cart.calculateTotal();

// console.log(totalPrice);

// OPTION 2
const cart = {
  apple: 2,
  orange: 4,
  kiwi: 6,
};

const goodsPrice = Object.values(cart);

let totalCount = 0;

for (let price of goodsPrice) {
  totalCount += price;
}

console.log(totalCount);
