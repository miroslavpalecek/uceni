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