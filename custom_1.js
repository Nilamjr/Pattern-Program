console.log("First Pattern program");

// let n = 4; 
// let string = "";

// for(let row = 1; row <= n; row++){
//     console.log("row",row);
    
//     for(let col = 1; col <= row; col++){
//         debugger;
//         string += "*";
        
//         debugger;
//     }
//     string += "\n";
// }
// console.log(string);  



// custom_7.js 
let n = 5;
let string = "";  

for(let row = 1; row <= n ; row++){

    for(let space = 0; space < n-row; space++){
        string += "  ";
    }

    for(let col = row; col >= 1; col--){
        string += col + " ";
    }
    for(let col = 2; col <= row; col++){
        string += col + " ";
    }

    string += "\n";
}
console.log(string);