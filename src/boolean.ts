// Udelej funkci, ktera vrati true nebo false (datovy typ se jmenuje boolean) podle toho, 
// jestli je soucet dvou cisel vetsi nebo rovno 100. Takze jdou dva argumenty, oba cisla. Priklad pouziti:
// volani s parametry 69 a 33 vrati true;
// volani s parametry 98 a 1 vrati false;


let odpoved = pravdaNepravda(51,50)
console.log(odpoved)
odpoved = true
console.log(odpoved)

function pravdaNepravda(cislo1:number, cislo2:number):boolean{
   

        if ( cislo1 + cislo2 <= 100){
             return true;
        } else {
            return false;
        }

}
    console.log(odpoved)   
