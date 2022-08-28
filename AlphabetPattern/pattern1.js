console.log("Pattern 1");


let n = 5;
let string = "";

// for(let i = 1; i<= n; i++){
//     // string += String.fromCharCode(i + 64);
//     for(let j = 1; j <= i; j++){
//         string += String.fromCharCode(j + 64);
//     }
//     string += "\n"
// }


// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i; j++){
//         string += " ";
//     }
//     for(let k = 1; k <= i; k++){
//         string += String.fromCharCode(k + 64);
//     }
//     string += "\n";
// }



// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         string += String.fromCharCode(i+64);
//     }
    
//     string += "\n";
// }


let count = 0;

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        string += String.fromCharCode(count+65);
        count++;   
    }
    
    string += "\n";
}

console.log(string);

