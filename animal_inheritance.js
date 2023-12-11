class Animal{
    constructor(sound, motion){
        this.sound = sound;
        this.motion = motion;
    }
    speak(){
        console.log(`I go ${this.sound}.`)
    }
    move(){
        console.log(`I ${this.motion} forward.`)
    }
}

class Pet extends Animal{
    constructor(name, sound, motion){
        super(sound,motion)
        this.name = name;
    }
    speak(){ //OVERRIDE the speak method
        console.log(`${this.name} goes ${this.sound}.`)
    }
    move(){
        console.log(`${this.name} ${this.motion} forward.`)
    }
}

class Cat extends Pet{
    constructor(name){
        super(name, "meow!!!", "saunters")
    } 
}

// fish = new Animal("bubble bubble", "swim swishly")

// fish.speak()
// fish.move()

// //REDUNDANT - REPEATING CODE AND VARIABLES
// fish2 = new Animal("bubble bubble", "swim swishly")

pet1 = new Cat("Bianca")
// pet1 = new Pet("Bianca", "Meow!!!", "Saunters")
pet1.speak()
pet1.move()

pet2 = new Cat("Fineley")
pet2.speak()
pet2.move()


class Fish extends Animal{
    constructor(){
        super("bubble bubble", "swim swishily") //CALL PARENT CONSTRUCTOR - like supervisor above
    }
}
f1 = new Fish()
f2 = new Fish()

f1.speak()
f1.move()

f2.speak()
f2.move()
