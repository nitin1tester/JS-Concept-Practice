let user = {
    // properties : key value pair
    name:'Nitin',
    dept : 'QA',
    salary: 45.00,
    city: 'pune',

    //function : behaviour 
    // no function keyword allowed while creating function.
    // no function expression allowed.
    coding(){
        console.log('user is coding....');
    },

    doLogin(name,dept){
        console.log(name,dept);
    }

}

console.log(user.name);
user.coding(); // 
user.doLogin('ram','hr');

console.log('====================');

let loginPage = {
    username: "nitin@test.in",
    password: "passkey",
    role:'admin',

    login(){
        console.log("login function" , this.username);
        this.resetPassword(); // using this keyword we can call function 
    },

    resetPassword(){
        console.log("reset password");
        loginPage.logout(); // using object referance as well we can call function
    },

    logout(){
        console.log("logout now");
    }
}

loginPage.login();