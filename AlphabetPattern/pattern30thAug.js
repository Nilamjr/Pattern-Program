let n = 5;
let string = "";

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i + 1; j++){
//         string += String.fromCharCode(n-j + 65);
//     }
//      string += "\n";  
// }

// pattern 6

for(let i = 1; i <= n; i++){
    for(let j = 0; j < n - i + 1; j++){
        string += String.fromCharCode((n - i - j) + 65);
    }
    string += "\n";
}
console.log(string);