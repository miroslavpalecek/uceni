// funkce vypocita cislo na druhou
//for cyclu, násobení



// Udelej funkci, ktera vrati true nebo false (datovy typ se jmenuje boolean) podle toho, 
// jestli je soucet dvou cisel vetsi nebo rovno 100. Takze jdou dva argumenty, oba cisla. Priklad pouziti:
// volani s parametry 69 a 33 vrati true;
// volani s parametry 98 a 1 vrati false;


//vytvor constantu string, které bude pole
//vypis co obsahuje string
//za pomoci foru vypis delku stringu


//vytvor si konstantu co bude string "mala nezletila devka"
// vytvor funkci jejiz pomoci for  v teto vete spocitas pocet acek

const kurvicka:string = "Mala nezletila devka"

function pocetAcek( kurvicka:string ) {
    let poci = 0;
    for ( const acka of kurvicka ) {
        if ( acka==="a" ) {
            poci++
        }
    }
    return poci
}
console.log(pocetAcek(kurvicka))

//vytvor funkci, která bude pracovat se stringem Máme rádi babišovi dobroty
    // v této věte spočítej mezery



    //spočítej celkovou délku stringu



    //spočítej průměrnou délku slova



//mas string o nejaké délkce
//pomoci if a else uric jestli tento string obsahuje nejakou sekvenci písmen

const ululu:string = "cururukuku"

if (ululu.includes("curu")){
    console.log("Veta to obsahuje")
}


//ve stringu Babisovi neuveritelne prihody 
// zmen a za e, v za p, a t za o


//string zeman je stary prase
//vypis kazdy charakter



//string Kubik je zemanova devka
// mezi kazde slovo vloz cumbucket


//vytvor funkci která bude random generovat cislo
// probehnou tri random utoky, pokud bude hp na konci tretiho utoku nula vynuluje se hp na nulu



//vytvor konstantu poleZlutych [cisla od jedne do...]
// vypis ktera z nich jsou mensi nez 5 a která jsou vetsi nez 5
// do konzole Toto je vesti nez 5 a pak Toto je mensi nez pet



//funkce ktera na vstup doste vetu a vrati text (vstup: tohle je veta)
//vysledek: Vstupni veta obsahuje slova o delce 5, 2, 4 znaku

/*const veta:string = "Tohle je veta"

function veticka(veta:string):string {
    let piss = veta.split(" ")
    //console.log(veta)
    let poco = `Vstupni veta obsahuje slova o delce `
    for ( const bukake of piss) {
        poco+=bukake.length
         
        poco+= ", " 
    } 
    poco += "znaků."
    return poco
}
console.log(veticka(veta))*/










//funkce ktera na vstup doste vetu a vrati text (vstup: tohle je veta)
//vysledek: Vstupni veta obsahuje slova o delce 5, 2, 4 znaku


//vytvor dvou promennych. Jedna s hodnotou nula a jedna s hodnotou 20
//pomocí foru vypis výsledek "Součet čísel n je a "výsledek""
//a Průměr čísel n je "výsledek"

