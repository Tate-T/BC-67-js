// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:
// pricePerDroid - ціна одного дроїда, значення 800; orderedQuantity - кількість дроїдів у замовленні, значення 6; delivеryFee - вартість доставки, значення 50; totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки;
//  - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
const pricePerDroid = 800
const orderedQuantity = 6
const delivеryFee = 50
const totalPrice = pricePerDroid * orderedQuantity + delivеryFee
console.log(totalPrice)
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${delivеryFee} credits) is included in total price.`
console.log(message)

const test = 5 + 5 + '5'
console.log(test)
