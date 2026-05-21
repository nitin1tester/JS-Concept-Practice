
export default class Car {
    static wheels = 4;
    speed = 100;
    // private var/method (if its start with # then its private in JS)
    #carKey = 'Car Key: Car123'
    #unLockCar(){
        console.log("Unlock Car : ",this.#carKey);
    }

    // private var.method can be use within class
    start(){
        console.log(this.#carKey);
        this.#unLockCar();
        console.log("Car --- Start");
    }
    stop(){
        console.log("Car --- Stop");
    }
    refuel(){
        console.log("Car --- Refuel");
    }
}


class BMW extends Car {

    speed = 300;
    autoParking(){
        console.log("BMW --- Autoparking");
    }


    start(){
        console.log("BMW --- Start");
    }

}


class Audi extends Car {

    speed = 220;
    theftSafty(){
        console.log("Audi --- TheftSafty");
    }
}


export{BMW,Audi};

