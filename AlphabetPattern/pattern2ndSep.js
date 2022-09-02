// pattern 9

let n = 5;
let string = "";

// for(let i = 1; i <= n; i++){
//     for(let sp = 0; sp < i - 1 ; sp++){
//         string += " ";
//     }   
//     for(let j = 1; j <= 2 * (n - i + 1) - 1; j++){
//         string += String.fromCharCode(j + 64) ;
//     }

//     string += "\n";

// }

// pattern 10 diamond pattern


for(let abovepattern = 1; abovepattern <= n; abovepattern++){
    for(let space = 1; space <= n - abovepattern; space++){
        string += " ";
    }
    for(let star = 1; star <= 2 * abovepattern - 1; star++){
        string += String.fromCharCode(star + 64);
    }
    string += "\n";
}

for(let belowPattern = 1; belowPattern < n; belowPattern++){
    for(let space = 1; space <= belowPattern ; space++){
        string += " ";
    }
    for(let star = 1; star <= 2 * (n - belowPattern) - 1; star++){
        string += String.fromCharCode(star + 64);
    }
    string += "\n";
}

console.log(string);


