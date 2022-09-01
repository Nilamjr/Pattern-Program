let n = 6;
let string = "";
let count = 0;

for(let i = 1; i <= n; i++){
    for(let sp = 1; sp <= n - i; sp++){
        string += " ";
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        string += String.fromCharCode(count + 65);
        count++;
    }
    string += "\n";
}

console.log(string);