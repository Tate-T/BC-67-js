// Знайдіть добуток непарних числен від 3 до 9
const min = 3;
const max = 9;
let total = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    total += i;
  }
  console.log(total);
}
