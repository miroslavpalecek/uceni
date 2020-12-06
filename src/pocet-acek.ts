const kkk = "mala nezletila devka"

function pocetPismen(str:string) {
    let count=0;

    for(const acka of str){
        if (acka == "a")
        count ++
    }
    return count
    
}
console.log(pocetPismen(kkk))