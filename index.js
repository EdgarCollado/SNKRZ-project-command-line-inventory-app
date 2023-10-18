const productsAPI = require('./src/products');
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const dataFolder = "data";
const dataFilePath = `${dataFolder}/shoppingCart.json`;

function generateProducts() {
    const brandsCarried = [
        "nike",
        "salomon",
        "new balance",
        "asics",
        "converse",
        "jordan",
        "hoka",
        "vans",
        "uggs",
        "dr martens"
    ];

    const brandsInventory = [];

    for (let i = 0; i < 10; i++) {
        brandsInventory.push({
            id: faker.random.alphaNumeric(8),
            brandName: brandsCarried[i], sneakerName: faker.random.word(),
            size: faker.random.numeric(1),
            priceInCents: faker.commerce.price(100, 300, 0),
            inStock: faker.datatype.boolean(),
        });
    }

    return brandsInventory;
}