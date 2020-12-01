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

let min = 1
let max = 100


function getRandomFloat(min:number, max:number) {
    return Math.random() * (max - min) + min
    }
    console.log(getRandomFloat( min, max))
   
