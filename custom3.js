console.log("Its Pattern program3");



var n = 5;
var string = "";

// for(var row=1; row<=n; row++){
//     for(var col=1; col<=row; col++){
//         string += col;    
//     }
//     console.log(string,"Its string\n");
// }

var j = 0;
// while(j<10){
//     console.log(j);
//     j+=1;
// }


// do{
    
//     if(j === 4){
//         j++;
//         continue;

//     }
//     console.log(j);
//     j++;
// }while(j<10);
// console.log("done");

// Loop with array

var arr = ["mon", "Tue", "Wed","Thur","Fri","Sat"];
// for(let i=0;i<arr.length;i=i+1){
//     console.log(arr[i]);
// }


for(let i = arr.length; i >= 0; i = i-1){
    console.log(arr[i]);
}