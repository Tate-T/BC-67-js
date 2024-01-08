function Hero({ heroName, heroPoints }) {
  // console.log(heroInfo);
  // const { heroName, heroPoints } = heroInfo;

  this.name = heroName;
  this.points = heroPoints;
}

Hero.prototype.showName = function () {
  return `Hero ${this.name} has ${this.points} points`;
};

const infoElf = {
  heroName: "Vasya",
  heroPoints: 50,
};

const elf = new Hero(infoElf);

const ork = new Hero({
  heroName: "Bob",
  heroPoints: 45,
});

console.log(ork.showName());
console.log(ork);
