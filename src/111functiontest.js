
// duplication function can be written but latest will be called.
// make sure never create deplicate function (overloading is not allowed in JS)


function search(){
    console.log("hello search");
}

function search(productName){
    console.log("search hello " , productName);// this will called search hello  undefined
}

function search(productName, price){ // 2 param
    console.log("search hello " , productName, price);// this will called search hello  undefined
}

search("mac" , 100, 300); 

