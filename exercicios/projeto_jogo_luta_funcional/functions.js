let defaultCharacter = {
    name: '',
    life: 100,
    maxLife: 100,
    attack: 0,
    defense: 0
}

let createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

let createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

let createlittleMonster = () => {
    return {
        ...defaultCharacter,
        name: "Litle Monster",
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

let createbigMonster = () => {
    return {
        ...defaultCharacter,
        name: "Big Monster",
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

let stage = {
    fighter1: null,
    fighter2: null,
    fighter1Element: null,
    fighter2Element: null,

    start(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Element = fighter1Element;
        this.fighter2Element = fighter2Element;

        this.fighter1Element.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2Element.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();

    },

    update() {
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1Element.querySelector('.bar').style.width = `${f1pct}%`;

        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2Element.querySelector('.bar').style.width = `${f2pct}%`;

    },

    doAttack(attacked, attacking) {
        if(attacking.life < 0 || attacked.life < 0) {
            log.addMessage('O jogo acabou')
            return;
        }

        let attackFactor = (Math.random() * 1.5).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} conseguiu atacar!`)

        } else {
            log.addMessage(`${attacked.name} conseguiu defender!`)
        }     

        this.update();
    }
}

let log = {
    list: [],
    addMessage(message) {
        this.list.push(message);
        this.render();
    },
    render() {
        let logElement = document.querySelector('.log');
        logElement.innerHTML = '';

        for(let i in this.list) {
            logElement.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}
