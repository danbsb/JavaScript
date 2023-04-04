class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    constructor(name) {
        this.name = name;
    }
    get life() {
        return this._life;
    }
    set life(newLife) {
        if (newLife < 0) {
            this._life = 0;
        } else if (newLife > 0) {
            this._life = newLife;
        }
    }
}   

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character { 
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character { 
    constructor() {
        super("LittleMonster");
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character { 
    constructor() {
        super("BigMonster");
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor (fighter1, fighter2, fighter1Element, fighter2Element, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Element = fighter1Element;
        this.fighter2Element = fighter2Element;
        this.log = logObject;
    }
    start () {
        this.update();
        this.fighter1Element.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2Element.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.fighter2, this.fighter1));
    }
    update() {
        //lutador 1
        this.fighter1Element.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;

        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1Element.querySelector(".bar").style.width = `${f1Pct}%`;

        //lutador 2
        this.fighter2Element.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2Element.querySelector(".bar").style.width = `${f2Pct}%`;
        
    }
    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage("O jogo acabou!");
            return;
        }
        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualdefense = attacked.defense * defenseFactor;   

        if (actualAttack > actualdefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} atacou ${attacked.name} com ${actualAttack.toFixed(1)} de dano!`);
        } else {
            attacked.life -= 1;
            this.log.addMessage(`${attacked.name} conseguiu defender`);
        }
        this.update();
    }
}

class Log {
    list = []
    constructor(listElement1){
        this.listElement1 = listElement1;
    }
    addMessage(message){
        this.list.push(message);
        this.render();
    }
    render(){
        this.listElement1.innerHTML = "";
        for(let i  in this.list) {
            this.listElement1.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}