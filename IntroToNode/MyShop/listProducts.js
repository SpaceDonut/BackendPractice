let faker = require('faker');

let prdtName = faker.commerce.productName();
let prdPrice = faker.commerce.price();

for (let i = 0; i < 10; i++) {
    // console.log(`Product: ${faker.commerce.productName()} - $${faker.commerce.price()}`);
    console.log(faker.fake("Product: {{commerce.productName}} - ${{commerce.price}}"));
    console.log(faker.company.bs())
}