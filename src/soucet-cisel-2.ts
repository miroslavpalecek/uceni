/*let y = 1
let n1 = 2
let a: number = y + n1
let w: string = "ano"

function greet(we:number, w:string){
    return we + w
}

let b = greet(a, w)
console.log(b)*/

//funkce vstup cislo a to cislo vrati 5x (5+5+5+5+5)
//pouzít for cyclus, uvnitr funkce nejakou promenná s mezivýsledkem
//na konci výsledek


function vstupCislo(oo:number, kk:number):number{
    let sou = 1;
    for (let i = 0; i < kk; i++){
        sou = sou + oo
    }
    return sou
}
console.log(vstupCislo(5, 3))

// funkce vypocita cislo na druhou
//for cyclu, násobení




//funkce vstup cislo a to cislo vrati 5x (5+5+5+5+5)
//pouzít for cyclus, uvnitr funkce nejakou promenná s mezivýsledkem
//na konci výsledek


function milion(qqq:number, eee:number):number {
    let nasobenii = 1;
    for ( let i = 0; i < eee; i++ ) {
        nasobenii = nasobenii * qqq
    }
    return nasobenii
}
console.log(milion(2,3))