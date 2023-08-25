export function whatsMytype<T>(argument: T) : T {
    return argument;

}

const amIString = whatsMytype("Hola mundo");
const amINumber = whatsMytype<number>(100);

console.log(amIString.split(' '));
console.log(amINumber.toString()); 
