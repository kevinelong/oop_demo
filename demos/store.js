class Store {
    //current order is a cart
    constructor(productList) {
        this.productList = productList;
        this.cart = new Order();
    }
    show() {
        this.productList.forEach((p, i) => {
            console.log(i, p.show())
        });
    }
    add(i, quantity = 1) {
        this.cart.itemList.push(new LineItem(this.productList[i], quantity));
        return this.cart.itemList.length - 1;
    }
    getTotal(){
        return this.cart.getTotal()
    }
}

class Product {
    constructor(name, price = 0, image = "", attributes = {}) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.atrributes = attributes;
    }
    show() {
        return `NAME: ${this.name} PRICE: ${this.price}`
    }
}

class Customer {
    //...
}

class LineItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getExtendedPrice(){
        return this.quantity * this.product.price;
    }
}

function sum(numberList){
    return numberList.reduce((acc, cv) => acc + cv, 0); //SUM TOTAL
}

class Order { //CART IS AN INCOMPLETE ORDER
    constructor() {
        this.customer = new Customer();
        this.itemList = [];
    }
    show() {
        this.itemList.forEach(item => {
            let ext = item.getExtendedPrice();
            console.log(item.quantity, item.product.show(), ext)
        });
        console.log(`TOTAL: ${this.getTotal()}`)
    }
    getTotal(){
        const extenedPrices = this.itemList.map(item=>item.getExtendedPrice());
        return sum(extenedPrices)    
    }
}

//TEST
const store = new Store([
    new Product("paper", 5.00, "paper.webp"),
    new Product("pencil", 1.00, "pencil.webp"),
    new Product("paperclip", 0.50, "paperclip.webp"),
]);

// store.show()

// // store.add(0, 2)
// // store.add(1, 12)

// store.cart.show();