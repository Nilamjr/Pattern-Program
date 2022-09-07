// pattern 9 

let n = 5;
let string = "";


// for(let i = 1; i <= n; i++){
//     for(let s = 1; s < i; s++){
//         string += " ";
//     }
//     for(let j = 1; j <= 2 * (n - i) + 1; j++){
//         string += j;
//     }
//     string += "\n";
// }

// pattern 10 Number Diamond pattern 


for(let i = 1; i <= n; i++){
    for(let s = 1; s <= n - i; s++){
        string += " ";
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        string += j;
    }
    string += "\n";
}
for(let i = 1; i < n; i++){
    for(let s = 1; s <= i; s++){
        string += " ";
    }
    for(let j = 1; j <= 2 * (n - i) - 1; j++){
        string += j;
    }
    string += "\n";
}




// pattern 11 Hour Glass 
// for(let i = 1; i <= n; i++){
//     for(let s = 1; s < i; s++){
//         string += " ";
//     }
//     for(let j = 1; j <= 2 * (n - i) + 1; j++){
//         string += j;
//     }
//     string += "\n";
// }
// for(let i = 2; i <= n; i++){
//     for(let s = 1; s <= n - i; s++){
//         string += " ";
//     }
//     for(let j = 1; j <= 2 * i - 1; j++){
//         string += j;
//     }
//     string += "\n";
// }


// pattern 12 pascal pattern 

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         string += j;
//     }
//     string += "\n";
// }
// for(let i = 1; i < n; i++){
//     for(let j = 1; j <= n - i; j++){
//         string += j;
//     }
//     string += "\n";
// }


console.log(string);