// // forma tipica de definir una funcion
// function addNumbers (a: number, b: number) {
//     return a+b;
// }

// const result = addNumbers(1, 2)

// console.log({result});

// // funciones flecha
// const addNumbersArrow = (a: number, b: number): string => {
//     return `resultado= ${a+b}`;
// }

// const resultArrow = addNumbersArrow(2, 2)

// console.log({resultArrow});

// function multiply (firstNumber: number, secondNumber?:number, base:number = 2) {
//     return firstNumber*base;
// }

// const multiplyNumber  = multiply(1)

// console.log({multiplyNumber});

interface Character {
    name: string,
    hp: number,
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {
    
    character.hp += amount;
}

const strider: Character = {
    name: "strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
        
    },
}

strider.showHp()
healCharacter(strider, 10)
strider.showHp()

export {}