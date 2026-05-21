
let num = [1,2,3,4,5,6,7,8,9,0];
num.reverse();
console.log(num); //reverse order of num

for (let i = num.length-1; i >=0; i--) {
    console.log(num[i]); // back to orignal value of num
}

// do it using forin and forof 