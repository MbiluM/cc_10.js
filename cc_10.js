// Task 1 - Created Product Class
class product {
    constructor(name, id, price, stock){
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails(){ //return products as formatted
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`; 
    }
    updateStock(quantity) { 
        if (quantity >= this.stock){
        console.log("No stock");
        } else { //method to modify the stock level when an order is placed
        this.stock -= quantity;
        }
    }
}


// Task 2 - Created Order Class
class Order { 
    constructor(orderId, product, quantity){
    this.orderId = orderId;
    this.product = product;
    this.quantity = quantity;
    this.products = [];
    }
    getOrderDetails (){
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity},Total Price: $${this.quantity * this.product.price}`;
    }
}


// Task 3 - Created Inventory Class & Task 4 - Implemented Order Management
class Inventory {
    constructor() {
        this.products = [];
        this.Orders = [];
    }
        getOrderDetails() {
            return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }

    addProduct(product) {
        if (product) {
            this.products.push(product);
        } else {
            console.log("Invalid product.");
        }
    }

    listProducts() {
        if (this.products.length === 0) {
            console.log("No products in inventory.");
            return;
        }
        this.products.forEach(product => console.log(product.getDetails()));
    }

    placeOrder(orderId, product, quantity) {
        this.Orders.push(Order);
        console.log(`Order ${orderId} placed successfully.`);
    }

    listOrders() {
        if (this.Orders.length === 0) {
        console.log("No orders placed.");
        return this.Orders.forEach(order => console.log(order.getOrderDetails()));
        }
    }

    restockProduct(productId, quantity) {
        if (product === 0) {
            product.stock += quantity; // Increase stock of the product
            console.log(`Product ${product.name} restocked. New stock: ${product.stock}`);
        } else {
            console.log(`Product with ID ${productId} not found.`);
    
        }
    }
}


             // Test Cases //
// 1
const prod1 = new product ("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400" (I couldn't get this so i improvised)
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// 5
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"