console.log("Hello");

// let a = 10;
// let b = 60;

// if(a === 100 || b === 100 || (a + b) === 100) {
//     console.log(a, b);
// }
const isEqualto100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualto100(100, 0));
console.log(isEqualto100(0 , 100));

console.log(isEqualto100(4, 10));
console.table(isEqualto100(01, 54));

console.log(isEqualto100(50, 50));
console.log(isEqualto100(30, 10));