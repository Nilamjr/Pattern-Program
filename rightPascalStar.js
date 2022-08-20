let n = 5;
let string = "";

for(let aboveRow = 1; aboveRow <= n; aboveRow++){
    for(let star = 1; star <= aboveRow; star++){
        string += "*";
    }
    string += "\n";
}
for(let belowRow = 1; belowRow < n; belowRow++){
    for(let star = 1; star <= n - belowRow; star++){
        string += "*";
    }
    string += "\n";
}

console.log(string);