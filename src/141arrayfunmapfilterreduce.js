
// 1 map : transfer every element of the given array
// return >> array
// don't make any change in orignal given array.

let number = [1,2,3,4,5];
let mulTwo = number.map(e => e*2);
console.log(mulTwo);
console.log(number);

let sq = number.map(e =>e*e)
console.log(sq);

let empName = ['nitin', 'shraddha', 'shivansh', 'ram'];
let upper =  empName.map(n=> n.toUpperCase());
console.log(upper);

// 2 filter : 

let num = [1,2,3,4,5];
let newArr = num.filter(e => e>2);
console.log(newArr);

let even = num.filter(e => e%2===0);
console.log(even);

let name = ['naveen', 'nitin', 'shraddha', 'shivansh']
let longName = name.filter(e => e.length > 6);
console.log(longName);


let productName = ['apple iphone', 'apple macbook', 'mac', 'canon', 'apple air'];
let applePro = productName
                        .filter(e => e.startsWith('apple'))
                            .filter(e => e.includes('air'))
                                .map(e => e.replace("air",'macbook air'));
console.log(applePro);

// 3 Reduce : combine everything into one value.

let numArr = [10,20,30,40,50,60];
let su = numArr.reduce((sum,n)=> sum+n, 0)
console.log(su);

// sum = 0 
// sum = sum + n
// su >> final total


let address = ['500', "silver building", 'pune', 'india'];
let completeAddress = address.reduce((fullAddress,w)=> fullAddress + w + " " , 'B block'+" " );
console.log(completeAddress);

// chain all number 
// number array >> even  > square > sum.
let myNum = [1,2,3,4,54,6,6,7,87,8,56,4,3,2];
let myEvenSqSum = myNum.filter(e => e%2===0)
                            .map(m => m*m)
                                .reduce((sum,n)=>sum+n,0) ;
console.log(myEvenSqSum);


