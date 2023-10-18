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

function processInput() {
    const expectedCommand = process.argv[2];
    let result = "Error: Command not found";

    if (expectedCommand === "create") {
        const [name, price, stock] = process.argv.slice(3);
        const parsedPrice = parseFloat(price);
        const parsedStock = parseInt(stock);
        result = productsAPI.createStoreItem(name, parsedPrice, parsedStock);
    } else if (expectedCommand === "list") {
        result = productsAPI.listStoreItems();
    } else if (expectedCommand === "view") {
        const index = parseInt(process.argv[3]);
        result = productsAPI.getStoreItemDetails(index);
    } else if (expectedCommand === "delete") {
        const index = parseInt(process.argv[3]);
        result = productsAPI.deleteStoreItem(index);
    } else if (expectedCommand === "update") {
        const index = parseInt(process.argv[3]);
        const [name, price, stock] = process.argv.slice(4);
        const parsedPrice = parseFloat(price);
        const parsedStock = parseInt(stock);
        result = productsAPI.updateStoreItem(index, name, parsedPrice, parsedStock);
    } else if (expectedCommand === "generate") {
        const storeItems = generateProducts();
        fs.writeFileSync(dataFilePath, JSON.stringify(storeItems, null, 2));
        result = "Random items generated and saved to products.json";
    } else if (expectedCommand === "addToCart") {
        productsAPI.addToCart();
        result = "Item added to the cart.";
    } else if (expectedCommand === "view-cart") {
        productsAPI.viewCart();
        result = "Shopping Cart:";
    } else if (expectedCommand === "calculate-total") {
        const totalPrice = productsAPI.calculateTotalPrice();
        result = `Total Price: $${totalPrice.toFixed(2)}`;
    } else if (expectedCommand === "clear-cart") {
        productsAPI.clearCart();
        result = "Cart cleared.";
    }

    console.log(result);
}

processInput();

generateProducts();