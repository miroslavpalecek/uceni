//tohle spis pro zajimavost, at si pak muzeme zkusit udelat opravdovou vnitrnost, co se pak pouziva ve hre.
//Zkus funkci, ktera nema zadny argument a vrati nahodne cislo od 1 do 100.
//Nepamatuju si presne jak se to dela, googlil bych. 
//Ale melo by to byt neco na par radku. Je to spis takova zajimavost a kdyz se povede, tak na to neco zkusime.


/*let y = 2
let x = 3

function hp(x:number,y:number):number{
    if ( y === undefined){
        y = 10;
        console.log(y)
    }
    return (x * y);
}*/


/*let my_counter = 0;

function count() {
  return ++my_counter;
}

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());*/



/*var index = 1;
var results = [ "x", "y", "z" ];

function test() {
    var value = results[index];
    index = (index++) % results.length;
    return value;
}
console.log(test())*/



function getRandomFloat():number {
    const min = 1
    const max = 100

    let random1 = Math.random() * (max - min) + min


    return (Math.round(random1))
}

//100 hp, vyvolame udalos, která spustí 3 utoky na HP, tzn. 3* se odecte náhodná hodnota

let hp = 100


for(let i = 0; i < 3; i++ ){
    hp = hp - getRandomFloat()
    console.log(hp)

}
console.log(hp)



   
   
    /*function getRandomBool() {
        return Math.random() >= 0.5;
      }
      console.log(getRandomBool())*/
   
