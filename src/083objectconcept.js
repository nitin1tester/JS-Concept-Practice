
// object --> non primitive data type
// referance type
// key-value pair format

let user = {
    name:'nitin',
    age:35,
    city:'Bangalore',
    isActive:true,
    address:{
        flat: 'B203',
        building: 'ABC corp',
        zip: 123123
    }
};
console.log(user);
//get
console.log(user.name); // nitin
console.log(user['city']);// Bangalore another way to use property
console.log(user.tel); // undefined
console.log(user.address.flat); // B203 nested object

//post
user.email = "nitin@test.com"; // we can add any key in object as well unlike java
console.log(user);

//delete
delete user.age;
console.log(user);

//update
user.city = "pune";
console.log(user);