let n = 4;
let string = "";


for(let row = 1; row <= n; row++){
    for(let space = 1; space <= n-row; space++){
        string += " ";
    }
    for(let upStar = 1; upStar <= 2 * row -1; upStar++){
        string += "*";
    }
    string += "\n";
}
for(let downrow = 1; downrow <= n - 1; downrow++){
    for(let space = 1; space <= downrow; space++){
        string += " ";
    }
    // for(let downStar = 1; downStar <= 2*(n-downrow)-1; downStar++){
    //     string += "*";
    // }
    for(let downStar = 2 * (n-downrow) - 1; downStar > 0; downStar--){
        string += "*";
    }
    string += "\n";
}



console.log(string);