const { loadCartItems, viewCart, addToCart } = require("../src/products")

const fs = require("fs");


// const { addToCart } = require("../src/products");

describe("addToCart()", () => {
    test("should throw an error if cart is not an array", () => {
        const cart = "not an array";
        const item = { id: 1, name: "Item 1", priceInCents: 10 };
        expect(() => { addToCart(cart, item) }).toThrow("Cart must be an array.");
    });

    test("should throw an error if item is not an object", () => {
        const cart = [];
        const item = "not an object";
        expect(() => { addToCart(cart, item) }).toThrow("Item must be an object.");
    });

    test("should add item to the cart", () => {
        const cart = [];
        const item = { id: 1, name: "Item 1", price: 10 };
        const updatedCart = addToCart(cart, item);
        expect(updatedCart).toEqual([item]);
    });

    test("should not modify the original cart", () => {
        const cart = [];
        const item = { id: 1, name: "Item 1", price: 10 };
        addToCart(cart, item);
        expect(cart).toEqual([]);
    });
});