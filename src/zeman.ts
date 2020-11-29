const zeman = "Kubik je hodny chlapecek"

function zemanSays(zeman:string):string{
    let kun = ""

    for(const says of zeman){
        if(says === " " )
            kun +=" kunda"
    
            kun += says
        }
        console.log(zeman)
        return kun
    }
    

console.log(zemanSays(zeman))