const fs = require("fs");
const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const path = require("path");
const dataFilePath = path.join(__dirname, "../data/products.json");
const cartFilePath = path.join(__dirname, "../data/shoppingCart.json");
let storeItems = [];
let shoppingCart = [];

function loadCartItems() {
    try {
        const data = fs.readFileSync(cartFilePath);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveCartItemsToFile(cartItems) {
    const dataToWrite = JSON.stringify(cartItems, null, 2);
    fs.writeFileSync(cartFilePath, dataToWrite);
}

loadCart()

function addToCart() {
    const cartItems = loadCartItems();
    for (let item of storeItems) {
        if (item.inStock) {
            cartItems.push(item)
        }
    }

    saveCartItemsToFile(cartItems);
}

function viewCart() {
    const cartItems = loadCartItems();
    for (let item of cartItems) {
        console.log(`Product: ${item.product}, Quantity: ${item.quantity}, Price: ${item.price}`);
    }
}


function loadStoreItems() {
    try {
        const data = fs.readFileSync(dataFilePath);
        storeItems = JSON.parse(data);
        console.log(storeItems);
    } catch (err) {
        storeItems = [];
    }
}

function loadCart() {
    try {
        const data = fs.readFileSync(cartFilePath);
        shoppingCart = JSON.parse(data);
        console.log(shoppingCart);
    } catch (err) {
        shoppingCart = [];
    }
}

function saveStoreItemsToFile() {
    const dataToWrite = JSON.stringify(storeItems, null, 2);
    fs.writeFileSync(dataFilePath, dataToWrite);
}

loadStoreItems();

function createStoreItem(name, inStock) {
    const id = nanoid(4);
    const priceInCents = Number(faker.commerce.price(100, 300, 0))
    const newStoreItem = { id, name, priceInCents, inStock };
    storeItems.push(newStoreItem);
    saveStoreItemsToFile();
    return storeItems;
}

function listStoreItems() {
    return storeItems;
}

function getStoreItemDetails(i) {
    if (i >= 0 && i < storeItems.length) {
        return storeItems[i];
    }
    return "Item not found.";
}

function deleteStoreItem(i) {
    if (i >= 0 && i < storeItems.length) {
        storeItems.splice(i, 1);
        saveStoreItemsToFile();
        return "Item deleted.";
    }
    return "Item not found.";
}

function updateStoreItem(i, name, priceInCents, inStock) {
    if (i >= 0 && i < storeItems.length) {
        storeItems[i] = { name, priceInCents, inStock };
        saveStoreItemsToFile();
        return "Item updated.";
    }
    return "Item not found.";
}



function viewCart() {
    for (let item of shoppingCart) {
        console.log(`Product: ${item.product}, Quantity: ${item.quantity}, Price: ${item.price}`);
    }
}
function calculateTotalPrice() {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += Number(item.priceInCents) / 100;
    }
    return totalPrice
}

function clearCart() {
    shoppingCart.length = 0
    saveCartItemsToFile(shoppingCart)
}



module.exports = {
    createStoreItem,
    listStoreItems,
    getStoreItemDetails,
    deleteStoreItem,
    updateStoreItem,
    viewCart,
    calculateTotalPrice,
    clearCart,
    addToCart
};