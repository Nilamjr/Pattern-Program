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


let n = 14;
let string = "";

for(let i = n / 2; i < n; i += 2){
  for(let space1 = 1; space1 < n - i; space1 += 2){
    string += " ";
  }
  for(let star1 = 1; star1 <= i; star1++){
    string += "*";
  }
  for(let space2 = 1; space2 < n - i + 1; space2++){
    string += " ";
  }
  for(let star1 = 1; star1 < i + 1; star1++){
    string += "*";
  }


  string += "\n";
}

for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    string += "*";
  }
  string += "\n";
}


console.log(string);

