
import { INegr } from './types'

const primula:INegr = {jmeno: 'Roman', prijmeni: 'Primula', age: 97 , adressa: {Mesto: 'Praha', Ulice: 'Vysehrad', PSC: 625000 }, body:[1,2,3,4,5] }
const Babis: INegr = {jmeno: 'Andrej', prijmeni: 'Babis', age: 96 , adressa: {Mesto: 'Praha', Ulice: 'Hrad', PSC: 111000 }}

console.log(primula);
console.log(Babis);

primula.adressa.Mesto = 'Brno'
primula.jmeno = 'Kamil'

console.log(primula);




// z objektů udělá text
//console.log(JSON.stringify(primula, undefined, 4));