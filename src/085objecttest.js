
let user1 = {
    name: 'Nitin',
    age: 36,
    city: "Bangalore"
};


let user2 = {
    name: 'shraddha',
    age: 30,
    city: "pune",
    country: "india"
};

user1 = user2

console.log(user1.name);
console.log(user1.age);
console.log(user1.country);


console.log(typeof user1); // object

let user3 = {};
console.log(user3);

user3 = user1;
console.log(user3);