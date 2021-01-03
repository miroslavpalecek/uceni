import { INegr } from './types'

let soucetVekuNegru = 0 
let prumerVekuNegru = 0
const primula:INegr = {jmeno: 'Roman', prijmeni: 'Primula', age: 97 , adressa: {Mesto: 'Praha', Ulice: 'Vysehrad', PSC: 625000 }, body:[1,2,3,4,5] }
const Babis: INegr = {jmeno: 'Andrej', prijmeni: 'Babis', age: 96 , adressa: {Mesto: 'Praha', Ulice: 'Hrad', PSC: 111000 }}
const Grznar: INegr ={jmeno:'Filip', prijmeni:'Grznar', age:35 , adressa:{Mesto:'Testo', Ulice:'Steron', PSC: 252252}}
const polesnegru: INegr [] = [{jmeno:'Mirek', prijmeni:'Palecek',age:45 , adressa: {Mesto:'Brno', Ulice: 'Rolnicka', PSC:56200 }},
                              {jmeno:'Mirek', prijmeni:'Palecek',age:45 , adressa: {Mesto:'Brno', Ulice: 'Rolnicka', PSC:56200 }}]


//console.log(primula, Babis, Grznar, polesnegru);

//for (const delem of polesnegru)

    //console.log(delem)

polesnegru.push(primula, Babis, Grznar);


for (const delem of polesnegru ) {

     //console.log(delem)
     console.log(`${delem.prijmeni} má věk ${delem.age}`)
     soucetVekuNegru = soucetVekuNegru + delem.age;
     
 }
 prumerVekuNegru = soucetVekuNegru / polesnegru.length
 //console.log(polesnegru.length)
 console.log(`Soucet věku negrů je ${soucetVekuNegru}`)
 console.log(`Průměr věku negrů je ${prumerVekuNegru}`)


