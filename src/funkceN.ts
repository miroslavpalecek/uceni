

/*for (let i = 1; i <= n; i++) {
    
   // console.log(n+i);
   // console.log(n);
    console.log(i);
    console.log('---');
    sum = sum + i;

}
let prumer = sum / n
console.log(`Součet čísel n je ${sum}`)
console.log(`Průměr čísel n je ${prumer}`)*/



function mojef(x:number):void{
    let sum =0
    for (let i = 1; i <= x; i++){
        sum = sum + i
    }
    console.log(`Součet čísel ${x} je ${sum} `)

}
mojef(4)
mojef(0)