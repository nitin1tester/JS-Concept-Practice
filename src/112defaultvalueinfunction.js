
/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @param {*} role 
 * @param {*} status 
 */
function login(username, password, role='admin', status = 'active'){
    console.log(username,password, role, status);
}
login("nitin@test.com", "test") // if user don't pass role then it will take detault value of admin.
login("test@test.ion" , "testpassword", 'sales User'); // if passing vlaue then it will use passed value.
login("nitin@test.com", "test", null ,'inactive');

// we can't skip any param in middle
// note:- it look like overloading but its not method overloading.


