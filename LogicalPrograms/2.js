// write a program to get the extention of a filename 

const getFileExtention = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtention('index.html'));
// console.log(getFileExtention('webpack.config.js'));

const getFileExtention2 = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtention2('index.html'));
