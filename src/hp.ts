//tohle spis pro zajimavost, at si pak muzeme zkusit udelat opravdovou vnitrnost, co se pak pouziva ve hre.
//Zkus funkci, ktera nema zadny argument a vrati nahodne cislo od 1 do 100.
//Nepamatuju si presne jak se to dela, googlil bych. 
//Ale melo by to byt neco na par radku. Je to spis takova zajimavost a kdyz se povede, tak na to neco zkusime.
//100 hp, vyvolame udalos, která spustí 3 utoky na HP, tzn. 3* se odecte náhodná hodnota
//zajistit, aby hodnota hp neklesala pod nulu
//hp bude zacínat na 100
//probehnou tri utoky
//pokud je hp 0 je konec hry
//pokud není výsledek 0 zavolá se funkce lékárnička
//po pouzití lékárnicky probehnou dalsi dva utoky
//pokud po techto následujících dvou útocích zbydou nějaké zivoty napsat do konzole ze vyhrava

let hp = 100

function getRandomFloat():number {
    const min = 1
    const max = 100

    let random1 = Math.random() * (max - min) + min
     
    return (Math.round(random1))
}


for(let i = 0; i < 3; i++ ){ 
    hp = hp - getRandomFloat()
    if( hp <= 0){
       hp = 0  
    }
    console.log(hp)
    
}

if (hp == 0){
    console.log("Konec hry")
} else {
    hp = hp + 20
    if ( hp > 100){
        hp = 100
    }
    for( let i = 0; i < 2; i++){
        hp = hp - getRandomFloat()
        if ( hp <= 0){
            hp = 0
        }
    }
    if ( hp > 0){
        console.log(" Vyhráváš ! ")
    }
    console.log(hp)
}






