const items = [
    {
        iName: 'Bike',
        price:100 
    },
    {
        iName: 'Tv',
        price:200 
    },
    {
        iName: 'Album',
        price:10 
    },
    {
        iName: 'Book',
        price:20 
    },
    {
        iName: 'Computer',
        price:1000 
    }
]


// let filteredArray = items.filter((item) => {
//     return item.price <= 100;
// });

// let itemNames = items.map((item) => {
//     return item.iName;
// });


let fonundItem = items.find((item) => {
    return item.iName === 'Bike';
});


console.log(fonundItem);
// console.log(itemNames);
// console.log(filteredArray);