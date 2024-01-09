class Hero {
    constructor(heroInfo) {
        this.name = heroInfo.heroName;
        this.points = heroInfo.heroPoints;
        this.pointsLife = heroInfo.heroLife;
    };
    showInfo() {
        console.log(`${this.name} has ${this.points} points and ${this.pointsLife} lifes`)
        return `${this.name} has ${this.points} points and ${this.pointsLife} lifes`
    };

    addLife() {
        if (this.points >= 100) {
            this.pointsLife += 1
        }
        console.log(this.pointsLife)
        return this.pointsLife
    }
}

// {heroName = 'noName', heroPoints = 0, heroLife = 1}

class Elf extends Hero {
    constructor(elfAge = 20, elfWeapon, heroInfo) {
        super(heroInfo) 
        this.age = elfAge;
        this.weapon = elfWeapon;
        this.quantityWeapon = 0;
        // this.heroInfo = heroInfo.heroName;
    };

    makeMagic() {
        console.log(`${this.name} use magic`)
        return `${this.name} use magic`
    };

    magnificationWeapon(elfQuantityWeapon) {
        this.quantityWeapon = elfQuantityWeapon;
        console.log(this.quantityWeapon )
        return this.quantityWeapon 
    }

}

const elfRoland = new Elf(25, 'arrow', {heroName: 'Roland', heroPoints: 200, heroLife: 5});
const elfRoxana = new Elf(300, 'spear',{heroName: 'Roxana', heroPoints: 300, heroLife: 3});
const elfJohn = new Elf(250, 'bow', {heroName: 'John', heroPoints: 550, heroLife: 6});

// console.log(elfRoland);
// console.log(elfRoxana);
// console.log(elfJohn);

class Orc extends Hero {
    constructor(orcColor = 'green', orcClever = false, heroInfo) {
        super( heroInfo) 
        this.skinColor = orcColor;
        this.isClever = orcClever;
    }

    orcAttacks() {
        console.log(`${this.name} attacks`)
        return `${this.name} attacks`
    };

    attacksMantra() {
        console.log( `${this.name} shows that his range mind is ${this.isClever}`)
        return `${this.name} shows that his range mind is ${this.isClever}`
    }
};

const orcShojgu = new Orc('black', false,  {heroName: 'Shojgu', heroPoints: 5, heroLife: 1});
const orcOzog = new Orc('green', false, {heroName: 'Ozog', heroPoints: 40, heroLife: 1});

// console.log(orcShojgu);
// console.log(orcOzog);


function startWar() {
    orcOzog.orcAttacks();
    orcOzog.showInfo();
    elfRoland.makeMagic();
    elfRoxana.makeMagic();
    elfJohn.magnificationWeapon(50);
    return
}

console.log(startWar())