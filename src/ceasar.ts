const caesarr = "mala nezletila devka"

function letterChange1(caesar:string):string{
    let result = ""

    for(const letter of caesar){

        if (letter==="a") {
            result +="e"
        } else if (letter==="e"){
            result += "i"
        } else if (letter==="i"){
            result +="o"   
        } else {
            result += letter
        }

        
        console.log(letter)
        console.log(result)
        console.log("---")
    }
    return result
}
console.log(letterChange1(caesar))



/*switch(caesar.indexOf('a')){
    case 1:
        console.log('e')
        break;
}

console.log(caesar);*/

