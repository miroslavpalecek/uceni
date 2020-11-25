function axe(z:number):void {
    let sou = 1
    for (let i = 1; i <=z; i++){
        sou = sou * i
    }
    console.log(`Součin čísel ${z} je ${sou}`)
}
axe(3)