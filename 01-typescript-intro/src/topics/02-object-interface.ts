const skills : string[] = ["bash", "counter", "healing"];

// usamos la interface para tipar de manera estricta cada dato del objeto.
// no se traduce en codigo en javascript
interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string //simoblo ? se utiliza para decirle que es opcional
}

// le digo que tiene que ser de tipo Character. 
const strider: Character = {
    name: "strider",
    hp: 100,
    skills: ["bash", "counter"]
}

strider.hometown = "rivendell"

console.table(strider);





export {}