// let n = 6;
// let string = "";
// // first for lower part 
// for(let belowRow = n; belowRow > 0 ; belowRow--){
    
//     for(let space = 0; space < n - belowRow; space++){
//         string += " ";
//     }

//     for(let star = 1; star < 2 * belowRow ; star++){
//         string += "*";
//     }

// }
// console.log(string);



// var n = 6;
// var str = "";
// for (let i = n / 2; i < n; i += 2) {
//   // print first spaces
//   for (let j = 1; j < n - i; j += 2) {
//     str += " ";
//     // console.log(str);
//   }
//   // print first stars
//   for (let j = 1; j < i + 1; j++) {
//     str += "*";
//     // console.log(str);
//   }
//   // print second spaces
//   for (let j = 1; j < n - i + 1; j++) {
//     str += " ";
//     // console.log(str);
//   }
//   // print second stars
//   for (let j = 1; j < i + 1; j++) {
//     str += "*";
//     // console.log(str);
//   }
//   str += "\n";
// }


// lower part
// inverted pyramid
// for (let i = n; i > 0; i--) {
//   for (let j = 0; j < n - i; j++) {
//     str += " ";
//   }
//   for (let j = 1; j < i * 2; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);




let n = 6;
let str = "";

for(let i = n/2; i < n; i += 2){
  for(let s = 1; s < n - i; s++){
    str += "@";
  }
  for(let star = 1; star < i + 1; star++){
    str += star;
  }
  for(let s = 1; s < i + 1; s++){
    str += "@";
  }
  str += "\n";
}
console.log(str);