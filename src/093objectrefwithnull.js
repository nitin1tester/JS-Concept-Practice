let customer = {
    name:'Shivansh',
    age: 1,
    city: 'Bangalore',
    isBaby: true
};

console.log(customer.name);// Shivansh
customer = null;    
console.log(customer.name); 
//error  Cannot read properties of null (reading 'name') at Object.<anonymous>

