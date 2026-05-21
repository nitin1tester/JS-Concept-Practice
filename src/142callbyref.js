
let user = {
    name: 'Nitin',
    age: 35,
    city: 'bangalore'
}
/**
 * 
 * @param {object} userObj 
 */
function printObj(userObj){
    console.log(userObj);
    userObj.age = 40;
    console.log(userObj);
}
printObj(user);
console.log(user.age);


console.log("==============================");


let arr = [1,2,3,4,5,6];

function arrObjPrint(obj){
    console.log(obj);
}

arrObjPrint(arr);