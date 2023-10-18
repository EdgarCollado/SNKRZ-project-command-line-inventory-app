const productsAPI = require('./src/products');
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const dataFolder = "data";
const dataFilePath = `${dataFolder}/shoppingCartData.json`;