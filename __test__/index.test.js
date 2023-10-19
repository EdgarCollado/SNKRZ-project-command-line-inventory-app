const { loadCartItems, viewCart, addToCart } = require("../src/products")

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

    test("should add multiple items to the cart", () => {
        const cart = [{ id: 1, name: "Item 1", price: 10 }];
        const item2 = { id: 2, name: "Item 2", price: 20 };
        const item3 = { id: 3, name: "Item 3", price: 30 };
        const updatedCart = addToCart(cart, item2);
        addToCart(updatedCart, item3);
        expect(updatedCart).toEqual([item2, item3]);
    });

    test("should not modify the original cart", () => {
        const cart = [];
        const item = { id: 1, name: "Item 1", price: 10 };
        addToCart(cart, item);
        expect(cart).toEqual([]);
    });
});