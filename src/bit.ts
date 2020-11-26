let l = 4
let p = 8

console.log(p, l)

/*let t = p
let k = l
l = t
p = k*/

/*let t = l
l = p
p = t*/ 

l = p + l;
//l = 12 ( p = 8 )
p = l - p;
// p = 12 - 8 ( l = 12)
l = l - p;
// l = 12 - 4 

console.log(p, l)


