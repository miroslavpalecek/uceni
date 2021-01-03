import { Ityres } from './types-1'

const prioritaPole: Ityres  [] =  [ { jmenostockCode: "TEST-STOCK-1", priority: 1, active: true},
                                    { jmenostockCode: "TEST-STOCK-1", priority: 3, active: true},
                                    { jmenostockCode: "TEST-STOCK-1", priority: 4, active: true},
                                    { jmenostockCode: "TEST-STOCK-1", priority: 2, active: true} ]
let sortedPoleNepolee = []

prioritaPole.sort(function (a, b) {
    return a.priority - b.priority;
  });
sortedPoleNepolee = prioritaPole
console.log(sortedPoleNepolee)


/*const poleNepole: number [] = [8, 4, 3, 1, 58, 15];
let sortedPoleNepole = []

poleNepole.sort(function (a, b ) {   
    return a - b;
});
sortedPoleNepole = poleNepole
console.log(sortedPoleNepole)*/



