
console.log("Hollow Pyramid pattern");
//      *
//     * *
//    *   * 
//   *     *
//  * * * * * 


// let n = 5;
// let string = "";

// for(let i = 1; i <= n; i++){
//     for(let k = 0; k < n - i; k++){
//         string += " ";
//     }
//     for(let j = 0; j < i; j++){
//         if(i === n){
//             string += "*";
//         }
//         else{
//             if(j == 0 || j == i){
//                 string += "*";
//             }else{
//                 string += " ";
//             }
//         }
        
//     }
//     string += "\n";
// }
// console.log(string);


let n = 5;
let string = "";

// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string += k;
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += k;
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);