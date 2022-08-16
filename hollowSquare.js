var n = 5;
var string = "";

//   * * * * *
//   *       *
//   *       *
//   *       *
//   * * * * *
 
// for(let i = 0; i < n; i++){

//     if(i === 0 || i === (n-1)){
//         for(let j = 0; j < n; j++){
//             string += "*";
//         }
//     }else{
//         for(let j = 0; j < n; j++){
//             if(j === 0 || j === (n-1)){
//                 string += "*";
//             }else{
//                 string += " "; 
//             }
//         }
//     }
//     string += '\n';
// }
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(i === 0 || i === (n-1)){
            string += "*";
        }else{
            if(j === 0 || j === (n-1)){
                string += "*";
            }else{
                string += " ";
            }
        }
    }
    string += "\n";
}


console.log(string);