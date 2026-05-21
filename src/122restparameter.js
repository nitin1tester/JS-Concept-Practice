
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
