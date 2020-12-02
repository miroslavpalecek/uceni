//Trosku tezsi - funkce, ktera jako vstup dostane string a spocita pocet jednopismennych slov.
//Priklad pouziti:
//vstup "Kevin a Frank jsou ze zeme zlutych a blbych" vrati 2 (tohle se mi vymyslelo docela tezko).


let slovo = "Kevin a Frank jsou ze zeme zlutych a blbych"

/*function zemeZlutych(slovo:string){
    let pocet = 0 ;

    for (const kevin of slovo){
        if(kevin <"jj"){
        pocet += 1;
        }
        
    }


}
console.log(zemeZlutych(slovo))*/

function delkaSlova(slovo:string) {
    let count = 0;
  
    for (const char of slovo) {
      
      if (char.match(/[a]/)) {
        count += 1;
      }
    }
  
    return count;
  }
  console.log(delkaSlova(slovo))