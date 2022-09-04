let n = 5;
let string = "";

// Triangle pattern 1
// for(let i = 0; i < n; i++){
//     for(j = 0; j < i + 1 ; j++){
//         string += j + 1;
//     }
//     string += "\n";
// }


// Triangle pattern 2

// for(let i = 1; i <= n; i++){
//     for(j = 1; j <= i ; j++){
//         string += i;
//     }
//     string += "\n";
// }


// Triangle pattern 3

let count = 1;

// for(let i = 1; i < n; i++){
//     for(let j = 1; j <= i; j++){
//         string += count;
//         count++;
//     }
//     string += "\n"; 
// }

// Triangle pattern 4

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= (n - i) + 1; j++){
//         string += j;
//     }
//     string += "\n";
// }

// Triangle pattern 5

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= (n - i) + 1; j++){
        string += n - j + 1;
    }
    string += "\n";
}




console.log(string);
