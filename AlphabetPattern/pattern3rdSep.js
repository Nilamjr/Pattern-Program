// HourGlass Pattern 

let n = 5;
let string = "";

// for(let abovepyramid = 1; abovepyramid <= n; abovepyramid++){
//     for(let sp = 0; sp < abovepyramid; sp++){
//         string += " ";
//     }
//     for(let star = 1; star <= 2 * (n - abovepyramid + 1) - 1; star++){
//         string += String.fromCharCode(star + 64);
//     }
//     string += "\n";
// }

// for(let belowpyramid = 2; belowpyramid <= n; belowpyramid++){
//     for(let sp = 0; sp <= n - belowpyramid; sp++){
//         string += " ";
//     }
//     for(let star = 1; star <= 2 * belowpyramid - 1; star++){
//         string += String.fromCharCode(star + 64);
//     }
//     string += "\n"; 
// }


// pattern 12  pascal pattern

for(let abovePattern = 1; abovePattern <= n; abovePattern++){
    for(let star = 1; star <= abovePattern ; star++){
        string += String.fromCharCode(star + 64);
    }
    string += "\n";
}
for(let belowPattern = 1; belowPattern < n; belowPattern++){
    for(let star = 1; star <= n - belowPattern ; star++){
        string += String.fromCharCode(star + 64);
    }
    string += "\n";
}
console.log(string);
