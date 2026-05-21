// import * as test from "./192cardesign";
// Car class is improted as default.
import Car, { BMW,Audi } from "./192cardesign.js";

let car = new Car();
car.start();// Car --- Start >> individual method
car.stop(); //Car --- Stop >> individual method


let bmw = new BMW();

bmw.start(); // BMW --- Start >> overriden method
bmw.autoParking(); // BMW --- Autoparking >> bmw individual method
bmw.stop(); // Car --- Stop >> inherited method
console.log(bmw.speed);

let audi = new Audi();
audi.theftSafty();
audi.start();
audi.stop();
audi.refuel();
console.log(audi.speed);


//Static
console.log(Car.wheels); // static variable 4



// OOP concepts: 

//Allowed
// 1. inheritance Yes
// 2. method overiding(Partial Polymorphism) Yes 
// 3. Object/Class Yes
// 4. encapsulation Yes 
// 5. public / private Yes
// 6. import.export Yes 

//Not Allowed
// 6. abstraction/interface >> NO
// 7. method/var... overloading (Partial Polymorphism) >> NO  