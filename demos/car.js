class Car{ //TEMPLATE/RECIPE FOR AN OBJECT IS CALLED A CLASS - COOKIE CUTTER

    constructor(){
        //PROPERTIES - VARIABLES INSIDE THE OBJECT
        this.speed = 10;
        this.position = 10;
    }

    //METHODS - FUNCTIONS INSIDE THE OBJECTS
    iterate(){
        this.position += this.speed; //DETAILS
    }
}
//TESTS
// let c1 = new Car(); // CREATE AN INSTANCE - GINGERBREAD MAN COOKIE

// console.log(c1.position)

// c1.iterate()
// c1.iterate()
// c1.iterate()
// c1.iterate()

// console.log(c1.position) //50?
