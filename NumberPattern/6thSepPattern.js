// pattern 6

let n = 5;
let string = "";

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i + 1 ; j++){
//         string += n - i - j + 2;
//     }
//     string += "\n";
// }


// pattern 7 pyramid 

// for(let i = 1; i <= n; i++){
//     for(let s = 1; s <= n - i; s++){
//         string += " ";
//     }
//     for(let j = 1; j <= 2 * i - 1; j++){
//         string += j;
//     }
//     string += "\n";
// }


// pattern 8
let count = 1;
let k = 3;
for(let i = 1; i <= k; i++){
    
    for(let s = 1; s <= k - i; s++){
        string += " ";
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        string += count;
        count++;
    }    
    string += "\n";
}




console.log(string);
