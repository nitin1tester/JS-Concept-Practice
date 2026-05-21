
let user = {
    name: 'Nitin',
    age: 35,
    city: 'pune',
    isActive: true,
    address:{
        flat:'B203',
        building:'Silver gate',
        zip:123123
    },
    devices: ['phone', 'laptop', 'headphone', 'mouse'],
    company: 'ACB corp'
}

// for in loop

for(let key in user){
    console.log(key," : " , user[key]);
}
console.log(user.devices.length);
