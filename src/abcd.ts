// funkce vypocita cislo na druhou
//for cyclu, násobení
function naDruhou(xxx:number, qqq:number):string{
    console.log("qqq")
    let druhou = 1;
    let treti:string = `Výsledek je ${xxx} * ${qqq}`
    for ( let i = 0; i < qqq; i++){
        druhou = druhou * xxx
    }
    treti = `${treti} je ${druhou}`
    return treti
   
}
console.log(naDruhou(2,3))







function zkouskaNasobeni(zzz:number, lll:number):string {
    let pici = 1;
    let veti = `Násobek ${zzz} * ${lll}`
    for ( let i = 0; i < lll; i++) {
        pici = pici * zzz
    }
    return `${veti} je ${pici} kurvy.`
}
console.log(zkouskaNasobeni(2,2,))





























