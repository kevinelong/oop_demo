
//CLASSES - NOUNS(People, Places or Things)
//PROPERTIES - AJECTIVES(attributes like color size etc)
//METHODS - VERBS(Action words for doing things like Run, Drive, Go)

//ANything with buttons could be a class

//Coffee Maker, Toaster, Child, Dog, input actions, output actions, attributes.

//What Classes of objects do you see in the world?
//PRODUCT/ITEM
//SHOP/SELLER/VENDOR/WEBSITE/RETAILER/SHOPPING-CENTER
//SEARCH-ENGINER
//CUSTOMER
//PHOTO/IMAGE
//INFO/SPECS/FEATURES/PRICES/MODEL/BRAND
//BRAND
//PAYMENT
//TRANSACTION

//RELATIONSHIPS BETWEEN CLASSES
// IS A - e.g. Cat is an Animal (uncommon kind of relationship)
// HAS A - e.g. Person has a Pet. (common kind)

/*
Online shopping is a form of electronic commerce which allows consumers to 
directly buy goods or services from a seller over the Internet using a web 
browser or a mobile app. Consumers find a product of interest by visiting the 
website of the retailer directly or by searching among alternative vendors 
using a shopping search engine, which displays the same product's availability 
and pricing at different e-retailers. As of 2020, customers can shop online 
using a range of different computers and devices, including desktop computers, 
laptops, tablet computers and smartphones.

An online shop evokes the physical analogy of buying products or services at a 
regular "brick-and-mortar" retailer or shopping center; the process is called 
business-to-consumer (B2C) online shopping. When an online store is set up to 
enable businesses to buy from another businesses, the process is called 
business-to-business (B2B) online shopping. A typical online store enables the 
customer to browse the firm's range of products and services, view photos or 
images of the products, along with information about the product 
specifications, features and prices.

Online stores usually enable shoppers to use "search" features to find specific
 models, brands or items. Online customers must have access to the Internet and
  a valid method of payment in order to complete a transaction, such as a 
  credit card, an Interac-enabled debit card, or a service such as PayPal. For 
  physical products (e.g., paperback books or clothes), the e-tailer ships the 
  products to the customer; for digital products, such as digital audio files 
  of songs or software, the e-tailer usually sends the file to the customer 
  over the Internet. The largest of these online retailing corporations are 
  Alibaba, Amazon.com, and eBay.[1] 
*/




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