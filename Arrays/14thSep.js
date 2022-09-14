console.log("Array Methods");

// Array Map method 

// let arr = new Array(2);

// let newArray = arr.map(elm => {
//     return 0;
// });

let arr = new Array(4);

let newArray = [...arr].map(element => {
    return element;
});

console.log(newArray);