// Write a Js Program to replace every character in a given string 
// with the character following it in th alphabet

// String.fromCharCode
// charcodeAt

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

// console.log(moveCharsForward('I am Nilam Rakholiya'));
console.log(moveCharsForward('abcde'));