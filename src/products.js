const fs = require("fs");
const { nanoid } = require("nanoid");
const path = require("path");
const dataFilePath = path.join(__dirname, "../data/products.json");
const cartFilePath = path.join(__dirname, "../data/shoppingCart.json");
let bakeryItems = [];
let shoppingCart = [];

