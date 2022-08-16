console.log("Its custom js file and I am Learning compile js without html and css")


// let n = 3;
// let string = "";

// for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= n; col++){
//         string += "*";
//     }
//     string += "\n";
// };

// console.log(string);


// custom_3.js 
let n = 5;
let string = "";

for(let row = 0; row < n; row++){
    for(let col = 1; col <= n-row; col++){
        string += "*";
    }
    string += "\n";
}
console.log(string);

// custom_4.js 
// let n = 5;
// let string = "";

// for(let row = 0; row < n; row++){
//     for(let col = 1; col <= row+1; col++){
//         string += col;
//     }
//     string += "\n";
// }
// console.log(string);

// custom_5.js 
// let n = 5;
// let string = "";

// for(let row = 1; row <= 2 * n - 1 ; row++){
//     let colForRow = row > n ? 2 * n - row : row;
//     for(let col = 1; col <= colForRow; col++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// custom_6.js 
// let n = 5;
// let string = "";

// for(let row = 1; row <= 2 * n - 1 ; row++){
//     let colForRow = row > n ? 2 * n - row : row;

//     let noOfSpaces = n - colForRow;

//     for(let s = 1; s <= noOfSpaces; s++){
//         string += " ";
//     }

//     for(let col = 1; col <= colForRow; col++){
//         string += "* ";
//     }
//     string += "\n";
// }
// console.log(string);

