

/*const h:string = 'mala nezletila  devka'
  function countWords(h:string){
  let words = h.split(" "); 
  let count = 0 
  
  for (const word of words){
    console.log(word)
    if (word !== "" ) count++
  }
  return count;
  }


  console.log(countWords(h))*/

//import e = require("express");



/*var str = "your long string with many words.";
var wordCount = str.match(/(\w+)/g).length;
alert(wordCount); */

//-------------------------------------------------//

//vytvorit si string
//vypsat si slova console.log
//spocitat vsechna pismena dohromady
//vydelit je poctem slov ve stringu

const hhh = "mala nezletila devka"

function avaWorldLengh(vali:string):number{
  //console.log(vali)
  //console.log(vali.length)
  //let word = vali.split("")
  let count = 0;
  let wordCount=0;
  //console.log(vali.length)

 for(const belem of vali){
    if (belem !== " " ) {
      count++
    } else{
      wordCount++

    }

//console.log(belem)
//console.log(word)
  }
//console.log(count)
//console.log(wordCount)
return(count/(wordCount+1))

}
console.log(avaWorldLengh(hhh))


/*if (podminka) {
  console.log('podminka je pravda');
  } else {
  console.log('podminka je false");
  }*/

// dva zápisy toho stejného  
//count++
//count = count + 1;


const vetaa:string = "Mala zkurvena nezletila cubka chodila kazdy den pro rohliky"

function rohliky(vetaa:string):number {
  let housky = 0;
  let mezeryMeziSlovy = 0;
  for ( const pecivo of vetaa ) {
    if ( pecivo !== " " ) {
      housky++
    } else {
      mezeryMeziSlovy++
    }
  }
  return housky/(mezeryMeziSlovy+1)
}
console.log(rohliky(vetaa))