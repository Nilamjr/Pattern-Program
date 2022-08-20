let n = 5;
let string = "";


for(let aboveRow = 0; aboveRow < n; aboveRow++){
    for(let space = 0; space < aboveRow; space++){
        string += " ";
    }
    for(let star = 0; star < (n - aboveRow) * 2 - 1; star++){
        string += "*";
    }
    string += "\n";
}

for(let belowRow = 2; belowRow <= n; belowRow++){
    for(let space = 1; space <= n - belowRow; space++){
        string += " ";
    }
    for(let star = 0; star < belowRow * 2 - 1; star++){
        string += "*";
    }
    string += "\n";
}

console.log(string);
// for(){

// }
