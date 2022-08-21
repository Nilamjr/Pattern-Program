// let n = 5;
// let string = "";

// for(let aboveRow = 0; aboveRow < n; aboveRow++){
//     for(let space = 0; space < n - (aboveRow + 1); space++){
//         string += " ";
//     }
//     for(let star = 0; star < aboveRow + 1; star++){
//         string += "*";
//     }
//     string += "\n";
// }

// for(let belowRow = 1; belowRow < n; belowRow++){
//     for(let space = 1; space <  belowRow + 1; space++){
//         string += " ";
//     }
//     for(let star = 1; star <= n - belowRow; star++){
//         string += "*";
//     }
//     string += "\n";
// }

// console.log(string);


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
