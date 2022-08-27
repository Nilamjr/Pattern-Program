let string = "";

for(var i = 0; i <= 5; i++){
    for(var j = 0; j <= 6; j++){
    
        if((i===0 && j%3 !== 0) || (i===1 && j%3===0) || (i-j===2) || (i+j===8)){
            string += "*";
        }
        else{
            string += " ";
        }
    
    }
    string += "\n";
}

console.log(string);


