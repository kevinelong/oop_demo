
//CLASSES - NOUNS(People, Places or Things)
//PROPERTIES - AJECTIVES(attributes like color size etc)
//METHODS - VERBS(Action words for doing things like Run, Drive, Go)

//ANything with buttons could be a class

//Coffee Maker, Toaster, Child, Dog, input actions, output actions, attributes.

//What Classes of objects do you see in the world?


class Cat {
    constructor(name) {
        this.name = name;
    }
    purr() {
        console.log(this.name + " goes purrrrr....")
    }
    pet() {
        console.log("We pet pet " + this.name + ".")
        this.purr()
    }
}

let bianca = new Cat("Bianca")

bianca.pet();

//AIR FRYER

class AirFryer {
    constructor(defaultTemp, step) {
        this.temperature = defaultTemp;
        this.step = step;
        this.duration = 0;
        this.maxTemp = 390;
        this.running = false;
        this.isOpen = false;
        this.currentTemp = 0;
    }
    up() {
        this.temperature += this.step;
    }
    down() {
        this.temperature -= this.step;
    }
    addTime() {
        this.duration += 5;
    }
    removeTime() {
        this.duration -= 5;
    }
    start() {
        this.running = true;
    }

    stop() {
        this.running = false;
    }
    open() {
        if (!this.running) {
            this.isOpen = true;
        } else {
            console.log("Can't open while running!!!");
        }
    }
    displayStatus(){
        console.log(`
        TEMPERATURE: ${this.temperature}
        `);
    }
}

//tests
air_fryer = new AirFryer(350, 10);
air_fryer.up();
air_fryer.up();
air_fryer.up();
air_fryer.displayStatus()