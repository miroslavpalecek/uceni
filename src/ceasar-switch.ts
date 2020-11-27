const caesar = "mala nezletila devka"

function letterChange(caesar:string):string{
    let result = ""

    for(const letter of caesar){

        switch(letter) {
            case "a":
                result +="e"
              break;
            case "e":
                result +="i"
              break;
            case "o":
                result +="u"
              break;
            case "u":
                result +="a"
              break;
            case "i":
                result +="o"
              break;
            default: result += letter   
    }}
    return result
}
console.log(letterChange(caesar))

