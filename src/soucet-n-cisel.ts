let sum =0
let n = 20

for (let i = 1; i <= n; i++) {
    
   // console.log(n+i);
   // console.log(n);
    console.log(i);
    console.log('---');
    sum = sum + i;

}
let prumer = sum / n
console.log(`Součet čísel n je ${sum}`)
console.log(`Průměr čísel n je ${prumer}`)