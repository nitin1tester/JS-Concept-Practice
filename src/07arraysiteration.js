// Iterate arrays 

let num1 = [10,20,30,40,50,60];

console.log("-----------for-----------");

for (let i = 0; i < num1.length; i++) {
    const element = num1[i];
    console.log(element);
}

console.log("-----------for-of-----------");
// for of iterate only value of array.
for (let n of num1) {
    console.log(n);
}

console.log("----------foreach------------");

num1.forEach(element => {
    console.log(element);
});

console.log("-----------for-in-----------");
// for in iterate only index of array.
for (let n in num1){
    console.log(n);
}

for(let n in num1){
    console.log(n+ " ->> " + num1[n]);
}

console.log("-----------------------");
