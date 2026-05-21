
// class 

class Employee{

    
    // class variable
    name;
    age;
    salary;
    isActive;


    // Constructor : Only one const.... is alloweed (no overloading)
    constructor(name,age,salary,isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    // called method not function because (when we create in class then called method) 
    getEmpInfo(){
        console.log(`get info of user ${this.name}`);
    }

    walking(){
        console.log(`
            Name : ${this.name},
            age : ${this.age},
            salary : ${this.salary},
            status : ${this.isActive}
            `);
    }

    

};
// obj of the employee class: Using new keyword.
let emp = new Employee("Nitin", 35, 45.0, true);
console.log(emp);
console.log(emp.name);
console.log(emp.age);
//calling method
emp.getEmpInfo();