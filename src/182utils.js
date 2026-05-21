


let name = 'Tom';

function add(a,b){
    return a+b;
}
// console.log(name);
// console.log(add(12,23));


export function test() {
    console.log("I am test");
}


let addTwoNum = (a,b)=> a+b;

// Two default function are not allowed error: Duplicate export of 'default'
// default don't participate in destructuring.
// we can have default variable as well
// but we can export only one at time either function or variable
export default function print(){
    console.log("default print me here");
}

// export default function print1(){                 // error: Duplicate export of 'default'
//     console.log("default print me here");

// }


// default variable 
// export default let url = "test.com";


// last statement of file
export { name, add, addTwoNum};