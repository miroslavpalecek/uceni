

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



/*var str = "your long string with many words.";
var wordCount = str.match(/(\w+)/g).length;
alert(wordCount); */

//-------------------------------------------------//

//vytvorit si string
//vypsat si slova console.log
//spocitat vsechna pismena dohromady
//vydelit je poctem slov ve stringu

const vali = "mala nezletila devka mmmmm"

function avaWorldLengh (vali:string){
  //console.log(vali)
  //console.log(vali.length)
  let word = vali.split("")
  let count = 0;
  //console.log(vali.length)

 for(const belem of word){
if (belem !== " " ) count++
console.log(belem)

}

return(count)


}
console.log(avaWorldLengh(vali))