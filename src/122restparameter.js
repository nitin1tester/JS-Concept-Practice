/**
 * REST PARAMETERS (...): Variable Arguments
 * 
 * Syntax: function func(...paramName) { }
 * - ... (spread operator) collects arguments into array
 * - paramName is array of all remaining arguments
 * - WHY: Accept unlimited number of arguments
 * - WHERE: Flexible function signatures, util functions
 * 
 * Key Points:
 * - Must be LAST parameter
 * - Only ONE rest parameter allowed
 * - Converts arguments to actual array (not array-like)
 * - Can use array methods: map, filter, forEach
 * 
 * Use-Cases:
 * - Accept multiple values: selectCountry('india', 'uk', 'usa')
 * - Build flexible utility functions
 * - Handle variable inputs without overloading
 * 
 * Use-Cases in Testing:
 * - Select multiple options from dropdown
 * - Upload multiple files
 * - Fill multiple form fields
 * - Create test data with variable items
 * - Test API with flexible parameters
 * 
 * With Other Parameters:
 * - function func(first, second, ...rest) { }
 * - first = first argument
 * - second = second argument
 * - rest = array of remaining arguments
 * - WHY: Capture specific params + collect rest
 * - WHERE: Required params + optional extras
 * 
 * Example: selectCountry('name', country1, country2, country3)
 * - name: required identifier
 * - country1, country2, country3: rest array
 */

// var args : rest parameter : ....
// character sequance in selenium.

function selectCountryfromDropdown(...countryName){
    console.log('Select country ' , countryName) 
    console.log(countryName.length); 
    
    // its an array so using ireration
    for(let e of countryName ){
        console.log(e);
    }

}

selectCountryfromDropdown('india', 'uk', 'usa' , 'uae' );
selectCountryfromDropdown('rassia');

function employee(name, ...details){
    console.log(name , details);
}

employee('Nitin', "b203", 'whitefield', 123123,'bangalore')
