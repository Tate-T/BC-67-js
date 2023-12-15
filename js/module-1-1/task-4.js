// Вихідний код: const productName = "Droid"; const pricePerItem = 3500;
// Оголоси змінну message і запиши в неї повідомлення про покупку,
// рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits".Де < назва товару > і < ціна товару > — це значення змінних productName і pricePerItem.
// Використовуй синтаксис шаблонних рядків.

const productName = 'Droid'
const pricePerItem = 60000
const message = `You picked ${productName},
price per item is ${pricePerItem} credits".`

console.log(message)
