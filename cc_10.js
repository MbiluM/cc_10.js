//Task 1 - Created Product Class
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
        if (quantity > this.stock){
        console.log("No stock");
        } else { //method to modify the stock level when an order is placed
        this.stock -= quantity;
        }
    }
}
// Test Cases
const prod1 = new product ("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"