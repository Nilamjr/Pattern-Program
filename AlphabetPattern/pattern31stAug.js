let n = 5;
let string = "";

for(let i = 1; i <= n; i++){
    for(let s = 1; s <= n - i; s++){
        string += " ";
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        string += String.fromCharCode(j + 64);
    }   
    string += "\n";
}

console.log(string);