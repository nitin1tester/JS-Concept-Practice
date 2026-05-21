
let user1 = {
    name: 'Nitin',
    age: 36,
    city: "Bangalore"
};


let user2 = {
    name: 'shraddha',
    age: 30,
    city: "pune"
};


let user3= {
    name: 'shivansh',
    age: 1,
    city: "delhi"
};

console.log(user1);
console.log(user2);
console.log(user3);

console.log("======= user1==user2; =======");

user1=user2;

console.log(user1); // sharddha
console.log(user2); // shraddha
console.log(user3); // shivansh


console.log("======= user2==user3; =======");

user2=user3;

console.log(user1); // sharddha
console.log(user2); // shivansh
console.log(user3); // shivansh


console.log("======= user3==user1; =======");

user3=user1;

console.log(user1); // sharddha
console.log(user2); // shivansh
console.log(user3); // sharddha



