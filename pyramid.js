console.log("pyramid pattern program");

    //          *
    //       *  *  *
    //    *  *  *  *  * 
    // *  *  *  *  *  *  *


//     let n1 = 4;
//     let string = "";

//     for(let i = 1; i <= n1; i++){
//         for(let j = 0; j < (n1-i); j++){
//             string += " ";
//         }
//         for(let k = 0; k < i; k++){
//             string += "*";
//         }
//         for(let m = 0; m < i; m++){
//             if(m == 0){
//                 continue;
//             }else{
//                 string += "*";
//             }
//         }
//         string += "\n";
//     }

// console.log(string);

// let n = 4;
// string = "";

// for(let i = 1; i <= n; i++){
//     // printing spaces
//     for(let j = 1; j <= (n - i); j++){
//         string += " ";
//     }
//     for(let k = 0; k < (2 * i - 1); k++){
//         string += "*";
//     }
//     string += "\n";
// }
//     console.log(string);


let n = 5;
let string = "";

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n-i; j++){
        string += " "; 
    }
    for(let k = 1; k <= 2 * i - 1 ; k++){
        string += "*";
    }
    string += "\n";
}

console.log(string);





// Reversed pyramid 
//  *******
//   *****
//    ***
//     *

// let n = 4;
// let string = "";

// for(let i = 0; i < n; i++){
//     for(let k = 0; k < i ; k++){
//         string += " ";
//     }
//     for(let k = 0; k < 2 * (n - i) - 1; k++){
//         string += "*";
//     }
//     string += "\n";
// }

// console.log(string);


// Reversed pyramid try again

// let n = 5;
// let string = "";

// for(let i = 0; i < n; i++){
//     for(let k = 0; k < i; k++){
//         string += " ";
//     }
//     for(let j = 0; j < 2 * (n - i) - 1; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);