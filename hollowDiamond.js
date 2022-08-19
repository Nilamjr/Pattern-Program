let n = 5;
let string = "";

// for upper diamond 
for(let row = 1; row <= n; row++){
    for(let space = 1; space <= n - row; space++){
        string += " "; 
    }
    for(let star = 1; star <= 2 * row - 1; star++){
        if(star === 1 || star === 2 * row - 1){
            string += "*"; 
        }
        else{
            string += " "; 
        }
    }
    string += "\n";
}
for(let belowRow = 1; belowRow <= n - 1; belowRow++){
    for(let space = 1; space <= belowRow; space++){
        string += " "; 
    }
    for(let star = 1; star <= 2 * (n - belowRow) - 1; star++){
        if(star === 1 || star === 2 * (n - belowRow) - 1){
            string += "*"; 
        }else{
            string += " "; 
        }
    }
    string += "\n"; 

}

console.log(string);