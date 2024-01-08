const person1 = {
  city: "Kyiv",
  country: "Ukraine",
};

const person2 = Object.create(person1);
person2.name = "Alex";
person2.age = 22;

for (const key in person2) {
  if (person2.hasOwnProperty(key)) {
    console.log(key);
  }
}

console.log(person2);
