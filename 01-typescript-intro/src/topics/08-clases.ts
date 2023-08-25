export class Person {
    // name: string;
    // address: string;

    constructor( public name: string, private address?: string) {
        // this.name = name;
        // this.address = address;
    }
}

// export class Hero extends Person{
//     constructor (
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, "New york")
//     }
// }

export class Hero {

   constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        
    }
}

const tony = new Person("tony stark", "New york")
const ironman = new Hero("Ironman", 45, "Tony stark",tony);

console.log(ironman);
