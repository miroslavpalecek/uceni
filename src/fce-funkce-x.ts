/*const ll:string = 'mala nezletila  devka'
  function countWords(o:string):number {
  
  let count:number = 0 
  for (const letter of o){
    console.log(letter)

  }
 //for (let i = 0; i < o.length; i++){
    //console.log(o[i])
  //návratová honota "count"
  return count;
  }

  console.log(countWords(ll))*/



  const hulahp:string = "nechut k jidlu je nemoc"

  function jidlo(hulahp:string) {

    let poco:number = 0;
    let wordCountt:number = 0;

    for ( const mm of hulahp) {
      //console.log(mm)
      //console.log(hulahp)
      //console.log(malaholka)
      if ( mm !== " ") {
          poco++
      } else {
        wordCountt++
      }
    return (poco/(wordCountt +1))
  }
}
  console.log(jidlo(hulahp))