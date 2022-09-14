// let arr = Array.from({length: 5}, () => {
//     return 0;
// });


let arr = Array.from({length: 5}, (elm, index) => {
    return elm;
});

console.log(arr);


