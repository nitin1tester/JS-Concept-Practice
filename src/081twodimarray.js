let num = [
    [1,2,3,100],
    [4,5,6,200],
    [7,8,9,300]
];
// 4x3 balanced 2D array: row-column

// console.log(num[0][0]);
// console.log(num[1][1]);
// console.log(num[2][2]);

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
        console.log(num[i][j]);
    }
    console.log();
}

// process.stdout.write  is not working on my system with console.log 

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
        console.log(num[i][j]+" ");
    }
    
}

console.log(num); // directly print array

// jagged array where non-uniform martix
let = marks = [
    [1,2,3],
    [10],
    [23,52,64,24,7,4],
    [3,76,3,636,36,2,63,3],
    [4,2,6]
];

for (let i = 0; i < marks.length; i++) {
    for (let j = 0; j < marks[i].length; j++) {
        console.log(marks[i][j]);       
    }
    console.log();
}

// Note in testing we used balanced 2D array for 
// data parameterization. we don't use jagged array in testing.
