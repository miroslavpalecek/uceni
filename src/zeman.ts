const zeman = "Kubik je hodny chlapecek"

function zemanSays(input:string):string{
    let kun = ""

    for(const says of input){
        if(says === " " )
            kun +=" kunda"
    
            kun += says
        }
        return kun
    }
    